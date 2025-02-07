import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Plan } from "./schemas/plan.schemas";
import mongoose, { Model, Types } from "mongoose";
import { CreatePlanDto } from "./dto/create-plan.dto";
import { randomBytes } from "crypto";
import { JoinPlanDto } from "./dto/join-plan.dto";

@Injectable()
export class PlansRepository {
    constructor(
        @InjectModel(Plan.name) private readonly planModel: Model<Plan>
    ) { }

    async createPlan(dto: CreatePlanDto) {

        return await this.planModel.create({
            title: dto.title,
            description: dto.description,
            createdBy: dto.createdBy,
            participants: [dto.createdBy],
            startDate: dto.startDate,
            inviteCode: this.generateInviteCode(),
        });
    }

    private generateInviteCode(): string {
        return randomBytes(3).toString('hex').toUpperCase(); // VD: "A1B2C3"
    }

    async joinPlan(dto: JoinPlanDto) {
        const plan = await this.planModel.findOne({ inviteCode: dto.inviteCode });

        if (!plan) {
            throw new Error('Mã mời không hợp lệ');
        }

        const userObjectId = new Types.ObjectId(dto.userId);

        if (!plan.participants.includes(userObjectId)) {
            plan.participants.push(userObjectId);
            await plan.save();
        }

        return plan;
    }
}