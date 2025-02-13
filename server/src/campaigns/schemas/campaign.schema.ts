import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { Country } from '../../countries/schemas/country.schema';
import { Influencer } from '../../influencers/schemas/influencer.schema';

export enum CampaignType {
  Affiliate = 'affiliate',
  Regular = 'reqular',
}

export enum CampaignStatus {
  Draft = 'draft',
  Published = 'published',
}

export type CampaignDocument = HydratedDocument<Campaign>;

@Schema()
export class Campaign {
  @Prop({ required: true, type: String, enum: CampaignType })
  type: CampaignType;

  @Prop({
    ref: 'Country',
    required: true,
    type: [mongoose.Schema.Types.ObjectId],
  })
  countries: Country[];

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;

  @Prop({ required: true })
  website: string;

  @Prop({ type: String, enum: CampaignStatus, default: CampaignStatus.Draft })
  status?: CampaignStatus;

  @Prop({ required: true })
  referralReward: number;

  @Prop({ required: true })
  coupons: number;

  @Prop({
    default: [],
    ref: 'Influencer',
    type: [mongoose.Schema.Types.ObjectId],
  })
  influencers?: Influencer[];
}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);
