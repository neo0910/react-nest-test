import { Controller, Get, Param } from '@nestjs/common';

import { InfluencersService } from './influencers.service';
import { Influencer } from './schemas/influencer.schema';

@Controller('influencers')
export class InfluencersController {
  constructor(private readonly influencersService: InfluencersService) {}

  @Get('campaign/:campaignId')
  async findByCampaign(
    @Param('campaignId') campaignId: string,
  ): Promise<Influencer[]> {
    return this.influencersService.findByCampaign(campaignId);
  }
}
