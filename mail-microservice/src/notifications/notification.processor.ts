import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { Injectable } from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';
import { NotificationRepository } from './notifications.repo';

@Processor('notification-queue')
@Injectable()
export class NotificationProcessor {
    constructor(
        private readonly mailService: MailService,
        private notificationRepository: NotificationRepository
    ) { }
    @Process()
    async handleNotification(job: Job) {
        const { userId, message, scheduledAt, options } = job.data;
        console.log(`Sending notification to user ${userId}: ${message} at ${scheduledAt}`);
        // Lưu vào database
        const newNotification = await this.notificationRepository.createNotification({
            userId,
            message,
            scheduledAt,
            options
        });

        // Ở đây bạn có thể gửi email hoặc push notification
        try {
            await this.mailService.sendMail(options.userEmails, {
                planName: options.planName,
                startDate: options.startDate,
                userNames: options.userNames,
                planId: options.planId
            }, 'notification-template', 'Notification');
        } catch (error) {
            console.error('Failed to send email:', error);
        }
    }
}
// options: {
//     tripId: trip._id,
//     tripName: dto.name,
//     userName: user?.user_name || '',
//     startDate: dto.start_date,
//     endDate: dto.end_date
// },