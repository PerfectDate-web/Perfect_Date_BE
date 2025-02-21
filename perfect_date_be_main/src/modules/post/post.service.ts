import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostRepository } from './post.repo';
import { PlansRepository } from '../plans/plans.repo';
import { ErrorCode } from 'src/enums/error-code.enum';
import { CustomException } from 'src/exception-handle/custom-exception';
import { UploadService } from '../upload/upload.service';

@Injectable()
export class PostService {
  constructor(
    private postRepository: PostRepository,
    private planRepository: PlansRepository,
    private uploadService: UploadService
  ){}

  async createPost(dto: CreatePostDto, file: Express.Multer.File) {
    const plan = await this.planRepository.checkIsCreatorOrPartner(dto.planId, dto.createdBy.toString());
    if(!plan) {
      throw new CustomException(ErrorCode.YOU_ARE_NOT_PARTICIPANT);
    }
    if(file) {
      const uploadResult = await this.uploadService.uploadFile(file, 'posts');
      dto.image = uploadResult.secure_url;
    }
    const post = await this.postRepository.createPost(dto);
    if(post){
      await this.planRepository.changePlanStatus(dto.planId, "public");
    }
    return post;
  }
  
  async getPostsByLocation(city:string, limit:number, page:number) {
    const posts = await this.postRepository.findPostByLocation(city, limit, page);
    return posts;
  }

  async getPopularPosts(limit:number, page:number) {
    const posts = await this.postRepository.getPopularPost(limit, page);
    return posts;
  }

  async getLatestPosts(limit:number, page:number) {
    const posts = await this.postRepository.getLatestPost(limit, page);
    return posts;
  }

  async likePost(postId:string, userId:string) {
    const post = await this.postRepository.likePost(postId, userId);
    return post;
  }

  async unlikePost(postId:string, userId:string) {
    const post = await this.postRepository.unlikePost(postId, userId);
    return post;
  }

  async getMyPostLiked(userId:string) {
    const posts = await this.postRepository.getMyPostLiked(userId);
    return posts;
  }
    
}
