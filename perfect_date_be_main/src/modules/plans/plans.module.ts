import { Module } from '@nestjs/common';
import { PlansService } from './plans.service';
import { PlansController } from './plans.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Plan, PlanSchema } from './schemas/plan.schemas';
import { PlansRepository } from './plans.repo';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Plan.name,
        schema: PlanSchema,
      },
    ])
  ],
  controllers: [PlansController],
  providers: [PlansService,PlansRepository],
})
export class PlansModule {}
