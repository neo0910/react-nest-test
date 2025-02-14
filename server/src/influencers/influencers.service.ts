import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Influencer, InfluencerDocument } from './schemas/influencer.schema';

@Injectable()
export class InfluencersService {
  constructor(
    @InjectModel(Influencer.name) private influencerModel: Model<Influencer>,
  ) {}

  async findByCampaignAndName(
    campaignId: string,
    name?: string,
  ): Promise<InfluencerDocument[]> {
    const influencers = await this.influencerModel
      .find({ campaigns: campaignId, name: { $regex: new RegExp(name, 'i') } })
      .populate('country')
      .exec();

    return influencers;
  }

  async bulkCreate(data: Influencer[]): Promise<InfluencerDocument[]> {
    return this.influencerModel.insertMany(data);
  }

  async removeAll(): Promise<void> {
    await this.influencerModel.deleteMany({}).exec();
  }
}
