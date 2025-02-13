import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { InfluencersService } from './influencers.service';
import { InfluencersController } from './influencers.controller';
import { Influencer, InfluencerSchema } from './schemas/influencer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Influencer.name, schema: InfluencerSchema },
    ]),
  ],
  providers: [InfluencersService],
  controllers: [InfluencersController],
})
export class InfluencersModule {}
