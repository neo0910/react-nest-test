import { Controller, Get, Param } from '@nestjs/common';

import { CampaignsService } from './campaigns.service';
import { Campaign } from './schemas/campaign.schema';

@Controller('campaigns')
export class CampaignsController {
  constructor(private readonly campaignsService: CampaignsService) {}

  @Get('')
  async findAll(): Promise<Campaign[]> {
    return this.campaignsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Campaign> {
    return this.campaignsService.findById(id);
  }
}
