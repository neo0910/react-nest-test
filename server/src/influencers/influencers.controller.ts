import { Controller, Get, Param, Query } from '@nestjs/common';

import { InfluencersService } from './influencers.service';
import { Influencer } from './schemas/influencer.schema';

@Controller('influencers')
export class InfluencersController {
  constructor(private readonly influencersService: InfluencersService) {}

  @Get('campaign/:campaignId')
  async searchCampaignInfluencerByName(
    @Param('campaignId') campaignId: string,
    @Query('name') name?: string,
  ): Promise<Influencer[]> {
    return this.influencersService.findByCampaignAndName(campaignId, name);
  }
}
