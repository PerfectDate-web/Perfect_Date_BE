import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Activity } from "./schemas/activity.schema";
import { Model } from "mongoose";
import { CreateActivityDto } from "./dto/create-activity.dto";
import { time } from "console";

@Injectable()
export class ActivitiesRepository {
    constructor(
        @InjectModel(Activity.name) private readonly activitiesModel: Model<Activity>
    ) { }

    async createActivity(dto: CreateActivityDto) {
        return await this.activitiesModel.create({
            planId: dto.planId,
            title: dto.title,
            location: dto.location,
            time: dto.time,
            notes: dto.notes
        })
    }

    async getActivitiesByPlan(planId:string) {
        return await this.activitiesModel.find({planId})
        .sort({time: 1})
        .lean();
    }

    
}