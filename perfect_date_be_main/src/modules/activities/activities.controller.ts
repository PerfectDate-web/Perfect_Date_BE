import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { ResponseMessage } from 'src/decorators/response-message.decorator';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) { }

  @Post()
  @ResponseMessage("Activity created successfully")
  create(@Body() createActivityDto: CreateActivityDto) {
    return this.activitiesService.create(createActivityDto);
  }

  @Get(':planId')
  getActivitiesByPlan(@Param('planId') planId: string) {
    return this.activitiesService.getActivitiesByPlan(planId);
  }
}
