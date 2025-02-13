import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountriesModule } from './countries/countries.module';
import { InfluencersModule } from './influencers/influencers.module';
import { CampaignsModule } from './campaigns/campaigns.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:root@localhost:27017'),
    CountriesModule,
    InfluencersModule,
    CampaignsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
