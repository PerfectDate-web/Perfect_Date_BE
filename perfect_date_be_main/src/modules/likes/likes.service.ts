import { Injectable } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { LikesRepository } from './likes.repo';

@Injectable()
export class LikesService {
  constructor(
    private readonly likesRepository: LikesRepository
  ) { }

  async likePlan(dto: CreateLikeDto) {
    return await this.likesRepository.createLike(dto);
  }

  async unlikePlan(dto: CreateLikeDto) {
    return await this.likesRepository.deleteLike(dto.planId, dto.userId);
  }

  async getNumberOfLikesByPlanId(planId: string) {
    return await this.likesRepository.getNumberOfLikesByPlanId(planId);
  }

  async checkLiked(dto: CreateLikeDto) {
    return await this.likesRepository.checkLiked(dto);
  }

}
