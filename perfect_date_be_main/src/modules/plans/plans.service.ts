import { Injectable } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { PlansRepository } from './plans.repo';
import { JoinPlanDto } from './dto/join-plan.dto';

@Injectable()
export class PlansService {
  constructor(
    private plansRepository: PlansRepository
  ) { }

  create(createPlanDto: CreatePlanDto) {
    return this.plansRepository.createPlan(createPlanDto);;
  }

  joinPlan(dto: JoinPlanDto) {
    return this.plansRepository.joinPlan(dto);
  }
}
