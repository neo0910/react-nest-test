import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Campaign, CampaignDocument } from './schemas/campaign.schema';

@Injectable()
export class CampaignsService {
  constructor(
    @InjectModel(Campaign.name) private campaignModel: Model<Campaign>,
  ) {}

  async findById(id: string): Promise<Campaign> {
    const campaign = await this.campaignModel
      .findById(id)
      .populate('countries')
      .exec();
    if (!campaign) {
      throw new NotFoundException(`Campaign with ID ${id} not found`);
    }
    return campaign;
  }

  async bulkCreate(data: Campaign[]): Promise<CampaignDocument[]> {
    return this.campaignModel.insertMany(data);
  }

  async removeAll(): Promise<void> {
    await this.campaignModel.deleteMany({}).exec();
  }
}
