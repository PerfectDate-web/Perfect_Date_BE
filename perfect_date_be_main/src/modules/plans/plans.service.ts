import { Injectable } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { PlansRepository } from './plans.repo';
import { JoinPlanDto } from './dto/join-plan.dto';
import { CustomException } from 'src/exception-handle/custom-exception';
import { ErrorCode } from 'src/enums/error-code.enum';

@Injectable()
export class PlansService {
  constructor(
    private plansRepository: PlansRepository
  ) { }

  create(createPlanDto: CreatePlanDto) {
    return this.plansRepository.createPlan(createPlanDto);;
  }

  getPlans(planId: string, userId: string) {
    return this.plansRepository.getPlanById(planId, userId);
  }

  async joinPlan(dto: JoinPlanDto) {
    const isExist = await this.plansRepository.getParticipantInPlans(dto.userId, dto.inviteCode);
    if (isExist) {
      throw new CustomException(ErrorCode.YOU_ARE_NOT_PARTICIPANT);
    }
    return this.plansRepository.joinPlan(dto);
  }
}
