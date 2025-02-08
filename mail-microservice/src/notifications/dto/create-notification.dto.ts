export class CreateNotificationDto {
    planId: string;

    userId: string[];

    message: string

    scheduledAt: Date;

    options: Object
}


