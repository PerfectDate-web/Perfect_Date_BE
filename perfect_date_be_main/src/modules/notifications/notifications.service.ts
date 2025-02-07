import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { PlansRepository } from '../plans/plans.repo';
import { CustomException } from 'src/exception-handle/custom-exception';
import { ErrorCode } from 'src/enums/error-code.enum';

@Injectable()
export class NotificationsService {
    constructor(
        @Inject('NOTIFICATION_SERVICE') private readonly client: ClientProxy,
        private planRepository: PlansRepository
    ) { }

    async scheduleNotification(data: CreateNotificationDto) {
        const plan = await this.planRepository.getPlanById(data.planId) as any;
        if (!plan) {
            throw new CustomException(ErrorCode.NOT_FOUND);
        }
        data.options = {
            planId: plan._id,
            planName: plan.title,
            startDate: plan.startDate,
            userNames: plan.participants.map(p => p.user_name),
            userEmails: plan.participants.map(p => p.user_email)
        }
        return this.client.emit('schedule_notification', data);
    }
}
