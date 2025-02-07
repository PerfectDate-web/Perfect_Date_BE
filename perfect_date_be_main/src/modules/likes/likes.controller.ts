import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LikesService } from './likes.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { ResponseMessage } from 'src/decorators/response-message.decorator';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) { }

  @Post()
  @ResponseMessage("Liked successfully")
  async likePlan(@Body() dto: CreateLikeDto) {
    return await this.likesService.likePlan(dto);
  }

  @Post('unlike')
  @ResponseMessage("Unliked successfully")
  async unlikePlan(@Body() dto: CreateLikeDto) {
    return await this.likesService.unlikePlan(dto);
  }

  @Get(':planId')
  @ResponseMessage("Number of likes retrieved successfully")
  async getNumberOfLikesByPlanId(@Param('planId') planId: string) {
    return await this.likesService.getNumberOfLikesByPlanId(planId);
  }

  @Post('check')
  @ResponseMessage("Check liked successfully")
  async checkLiked(@Body() dto: CreateLikeDto) {
    return await this.likesService.checkLiked(dto);
  }
}
