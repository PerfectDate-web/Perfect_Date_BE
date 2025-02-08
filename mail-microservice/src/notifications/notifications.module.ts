import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Notification, NotificationSchema } from './schemas/notification.schema';
import { NotificationRepository } from './notifications.repo';
import { BullModule } from '@nestjs/bull';
import { NotificationProcessor } from './notification.processor';
import { MailModule } from 'src/mail/mail.module';
import { User, UserSchema } from 'src/users/schemas/users.schema';
import { Plan, PlanSchema } from 'src/plans/schemas/plans.schema';

@Module({
  imports: [
    MailModule,
    MongooseModule.forFeature([
      {
        name: Notification.name,
        schema: NotificationSchema,
      },
      {
        name: User.name,
        schema: UserSchema,
        collection: 'users' 
      },
      {
        name: Plan.name,
        schema: PlanSchema,
        collection: 'plans' 
      },

    ]),
    BullModule.registerQueue({
      name: 'notification-queue',
    }),
  ],
  controllers: [NotificationsController],
  providers: [NotificationsService, NotificationRepository, NotificationProcessor],
})
export class NotificationsModule { }
