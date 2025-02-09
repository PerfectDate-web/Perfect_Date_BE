import { Model } from "mongoose"
import { Like } from "./schemas/like.schemas"
import { InjectModel } from "@nestjs/mongoose"
import { CreateLikeDto } from "./dto/create-like.dto"
import { CustomException } from "src/exception-handle/custom-exception"
import { ErrorCode } from "src/enums/error-code.enum"
import { HttpStatus } from "@nestjs/common"
import { PlansRepository } from "../plans/plans.repo"

export class LikesRepository {

    constructor(
        @InjectModel(Like.name) private likeModel: Model<Like>,
        private plansRepository: PlansRepository
    ) { }
    async createLike(dto: CreateLikeDto) {
        // Create a like
        try {
            const havePermission= await this.plansRepository.checkIsCreatorOrPartnerOrPublic(dto.planId, dto.userId)

            if (!havePermission) {
                throw new CustomException(ErrorCode.YOU_ARE_NOT_PARTICIPANT)  ;
            }
            return await this.likeModel.create({
                planId: dto.planId,
                userId: dto.userId
            })
        } catch (error) {
            if (error.code === 11000) {
                throw new CustomException(new ErrorCode(11000, 'You have already liked this plan', HttpStatus.BAD_REQUEST));
            }
            throw new CustomException(new ErrorCode(500, 'Internal server error', HttpStatus.INTERNAL_SERVER_ERROR));
        }

    }

    async deleteLike(planId: string, userId: string) {
        // Delete a like
        return await this.likeModel.deleteOne({ planId, userId })
    }

    async getNumberOfLikesByPlanId(planId: string) {
        return await this.likeModel.countDocuments({ planId })
    }

    async checkLiked(dto: CreateLikeDto) {
        const like = await this.likeModel.findOne({ planId: dto.planId, userId: dto.userId })
        return like ? true : false
    }
}  