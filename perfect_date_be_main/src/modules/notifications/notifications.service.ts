import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { PlansRepository } from '../plans/plans.repo';
import { CustomException } from 'src/exception-handle/custom-exception';
import { ErrorCode } from 'src/enums/error-code.enum';
import { AddUserNotificationDto } from './dto/add-user-notification.dto';

@Injectable()
export class NotificationsService {
    constructor(
        @Inject('NOTIFICATION_SERVICE') private readonly client: ClientProxy,
        // private planRepository: PlansRepository
    ) { }

    async scheduleNotification(data: CreateNotificationDto) {
        return this.client.emit('schedule_notification', data);
    }

    async addUserIdToNotification(data: AddUserNotificationDto) {
        return this.client.emit('add_user_to_notification', data);
    }
}
