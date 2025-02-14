export enum CampaignType {
  Affiliate = "affiliate",
  Regular = "reqular",
}

export enum CampaignStatus {
  Draft = "draft",
  Published = "published",
}

export type Country = {
  code: string;
  flag: string;
  name: string;
};

export enum InfluencerStatus {
  Unassigned = "unassigned",
  Pending = "pending",
  Assigned = "assigned",
}

export enum Currency {
  EUR = "€",
  USD = "$",
}

export type Influencer = {
  avatar?: string;
  campaigns?: Campaign[];
  country: Country;
  currency?: Currency;
  followers?: number;
  name: string;
  revenue?: number;
  status?: InfluencerStatus;
};

export type Campaign = {
  countries: Country[];
  coupons: number;
  endDate: Date;
  followers: number;
  influencers?: Array<Influencer | string>;
  referralReward: number;
  startDate: Date;
  status?: CampaignStatus;
  title: string;
  type: CampaignType;
  website: string;
};
