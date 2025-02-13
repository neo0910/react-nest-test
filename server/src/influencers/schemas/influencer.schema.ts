import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { Country } from '../../countries/schemas/country.schema';
import { Campaign } from '../../campaigns/schemas/campaign.schema';

export enum InfluencerStatus {
  Unassigned = 'unassigned',
  Pending = 'pending',
  Assigned = 'assigned',
}

export enum Currency {
  EUR = '€',
  USD = '$',
}

export type InfluencerDocument = HydratedDocument<Influencer>;

@Schema()
export class Influencer {
  @Prop({ required: true })
  name: string;

  @Prop({})
  avatar?: string;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country',
  })
  country: Country;

  @Prop({ default: 0 })
  followers?: number;

  @Prop({ default: 0 })
  revenue?: number;

  @Prop({
    type: String,
    enum: Currency,
    default: Currency.EUR,
  })
  currency?: Currency;

  @Prop({
    type: String,
    enum: InfluencerStatus,
    default: InfluencerStatus.Unassigned,
  })
  status?: InfluencerStatus;

  @Prop({ type: [{ type: String, ref: 'Campaign' }], default: [] })
  campaigns?: Campaign[];
}

export const InfluencerSchema = SchemaFactory.createForClass(Influencer);
