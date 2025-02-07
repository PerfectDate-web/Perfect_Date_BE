import { Body, Controller, Post } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { ResponseMessage } from 'src/decorators/response-message.decorator';
import { Public } from 'src/decorators/public.decorator';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) { }

  @Post()
  @ResponseMessage('Notification scheduled successfully')
  @Public()
  scheduleNotification(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationsService.scheduleNotification(createNotificationDto);
  }
}
