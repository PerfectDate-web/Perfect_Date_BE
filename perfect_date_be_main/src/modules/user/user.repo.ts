import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schemas/user.schema";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/request/create-user.dto";


@Injectable()
export class UserRepository{
    constructor(
        @InjectModel(User.name) private userModel: Model<User>
    ){}

    async findByEmail(email: string){
        return this.userModel.findOne({user_email: email}).lean();
    }

    async createUser(dto:CreateUserDto){
        return this.userModel.create({
            user_email: dto.email,
            user_name: dto.name,
            user_verified: dto.verified,
            user_avatar: dto.avatar,
            user_password: ''
        });
    }

    async findById(id: string){
        return this.userModel.findById(id).lean();
    }

    async findManyUserByIds(ids: string[]){
        return this.userModel.find({_id: {$in: ids}}).lean();
    }
}