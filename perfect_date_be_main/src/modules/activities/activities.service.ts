import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { ActivitiesRepository } from './activities.repo';

@Injectable()
export class ActivitiesService {
  constructor(
    private readonly activitiesRepository: ActivitiesRepository
  ) { }

  async create(createActivityDto: CreateActivityDto) {
    return await this.activitiesRepository.createActivity(createActivityDto);
  }

  async getActivitiesByPlan(planId: string) {
    return await this.activitiesRepository.getActivitiesByPlan(planId);
  }
}
