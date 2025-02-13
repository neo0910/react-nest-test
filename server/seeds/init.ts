import { NestFactory } from '@nestjs/core';

import { AppModule } from '../src/app.module';
import {
  Campaign,
  CampaignType,
} from '../src/campaigns/schemas/campaign.schema';
import { CampaignsService } from '../src/campaigns/campaigns.service';
import { CountriesService } from '../src/countries/countries.service';
import { Country } from '../src/countries/schemas/country.schema';
import { Influencer } from '../src/influencers/schemas/influencer.schema';
import { InfluencersService } from '../src/influencers/influencers.service';
import { getInfluencers } from './utils/getInfluencers';

const countriesData: Country[] = [
  { code: 'CN', flag: 'https://flagsapi.com/CN/flat/64.png', name: 'China' },
  {
    code: 'DE',
    flag: 'https://flagsapi.com/DE/flat/64.png',
    name: 'Germany',
  },
  { code: 'FR', flag: 'https://flagsapi.com/FR/flat/64.png', name: 'France' },
  {
    code: 'MY',
    flag: 'https://flagsapi.com/MY/flat/64.png',
    name: 'Malaysia',
  },
  { code: 'ES', flag: 'https://flagsapi.com/ES/flat/64.png', name: 'Spain' },
  {
    code: 'GB',
    flag: 'https://flagsapi.com/GB/flat/64.png',
    name: 'United Kindom',
  },
  {
    code: 'US',
    flag: 'https://flagsapi.com/US/flat/64.png',
    name: 'United States',
  },
];

const influencersData: Influencer[] = getInfluencers(100);

const campaignsData: Campaign[] = [
  {
    countries: [],
    coupons: 50,
    endDate: new Date('2025-08-31'),
    referralReward: 100,
    startDate: new Date('2025-06-01'),
    title: 'Summer Ebay affiliates',
    type: CampaignType.Affiliate,
    website: 'https://summerebayaffiliates.com',
  },
];

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(AppModule);

  const campaignsService = appContext.get(CampaignsService);
  const countriesService = appContext.get(CountriesService);
  const influencersService = appContext.get(InfluencersService);

  await campaignsService.removeAll();
  await influencersService.removeAll();
  await countriesService.removeAll();

  const countries = await countriesService.bulkCreate(countriesData);
  console.log('[Countries] Seeding completed!');

  campaignsData[0].countries = countries.map(
    ({ _id }) => _id,
  ) as unknown as Country[];

  const campaigns = await campaignsService.bulkCreate(campaignsData);
  console.log('[Campaigns] Seeding completed!');

  influencersData.forEach((influencer, i) => {
    const countryIndex = i % countries.length;
    influencer.country = countries.at(countryIndex)._id as unknown as Country;
    influencer.campaigns = campaigns.map(
      ({ _id }) => _id,
    ) as unknown as Campaign[];
  });

  const influencers = await influencersService.bulkCreate(influencersData);
  console.log('[Influencers] Seeding completed!');

  campaigns[0].influencers = influencers.map(
    ({ _id }) => _id,
  ) as unknown as Influencer[];

  await Promise.all(campaigns.map((campaign) => campaign.save()));
  console.log('[Campaigns] Update completed!');

  await appContext.close();
}

bootstrap();
