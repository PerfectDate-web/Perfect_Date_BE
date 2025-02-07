import { Model } from "mongoose"
import { Like } from "./schemas/like.schemas"
import { InjectModel } from "@nestjs/mongoose"
import { CreateLikeDto } from "./dto/create-like.dto"

export class LikesRepository {

    constructor(
        @InjectModel(Like.name) private likeModel: Model<Like>
    ) {}
    async createLike(dto:CreateLikeDto) {
        // Create a like
        return  await this.likeModel.create({
            planId: dto.planId,
            userId: dto.userId
        })
    }

    async deleteLike(planId: string, userId: string) {
        // Delete a like
        return await this.likeModel.deleteOne({planId, userId})
    }

    async getNumberOfLikesByPlanId(planId: string) {
        return await this.likeModel.countDocuments({planId})
    }

    async checkLiked(dto: CreateLikeDto) {
        const like = await this.likeModel.findOne({planId: dto.planId, userId: dto.userId})
        return like ? true : false
    }
}  