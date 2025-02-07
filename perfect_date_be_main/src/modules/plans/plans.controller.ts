import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlansService } from './plans.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { JoinPlanDto } from './dto/join-plan.dto';
import { User } from 'src/decorators/user-infor.decorator';
import { UserInterface } from '../user/dto/response/user.interface';

@Controller('plans')
export class PlansController {
  constructor(private readonly plansService: PlansService) { }

  @Post()
  create(@Body() createPlanDto: CreatePlanDto,@User() user: UserInterface) {
    createPlanDto.createdBy = user._id;
    return this.plansService.create(createPlanDto);
  }

  @Patch('join')
  joinPlan(@Body() joinPlanDto: JoinPlanDto,@User() user: UserInterface) {
    joinPlanDto.userId = user._id;
    return this.plansService.joinPlan(joinPlanDto);
  }

  @Get(':planId')
  getPlan(@Param('planId') planId: string, @User() user: UserInterface) {
    return this.plansService.getPlans(planId, user._id);
  }
}
