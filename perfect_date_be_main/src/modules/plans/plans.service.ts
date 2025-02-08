import { Injectable } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { PlansRepository } from './plans.repo';
import { JoinPlanDto } from './dto/join-plan.dto';
import { CustomException } from 'src/exception-handle/custom-exception';
import { ErrorCode } from 'src/enums/error-code.enum';
import { NotificationsService } from '../notifications/notifications.service';
import { UserRepository } from '../user/user.repo';

@Injectable()
export class PlansService {
  constructor(
    private plansRepository: PlansRepository,
    private notificationService: NotificationsService,
  ) { }

  async create(createPlanDto: CreatePlanDto) {
    const newPlan = await this.plansRepository.createPlan(createPlanDto);
    if (!newPlan) {
      throw new CustomException(ErrorCode.CREATE_PLAN_FAILED);
    }
    // const scheduledAt = new Date(createPlanDto.startDate);
    // scheduledAt.setDate(scheduledAt.getDate() - 1);
    // await this.notificationService.scheduleNotification({
    //   userId:"2132",
    //   message: `Your plan"${newPlan.title}" starts soon! Get ready!`,
    //   options: {
    //     planId: newPlan._id,
    //     planName: newPlan.title,
    //     startDate:newPlan.startDate,
    //   },
    //   scheduledAt,
    // })
    return newPlan;
  }

  getPlans(planId: string, userId: string) {
    return this.plansRepository.getPlanByIdAndUserId(planId, userId);
  }

  async joinPlan(dto: JoinPlanDto) {
    const isExist = await this.plansRepository.getParticipantInPlans(dto.userId, dto.inviteCode);
    if (isExist) {
      throw new CustomException(ErrorCode.YOU_ARE_NOT_PARTICIPANT);
    }
    const plan = await this.plansRepository.joinPlan(dto);
    if (!plan) {
      throw new CustomException(ErrorCode.JOIN_PLAN_FAILED);
    }

    this.notificationService.addUserIdToNotification({
      planId: plan._id.toString(),
      userId: dto.userId,
    });
    
    return plan;
  }
}
