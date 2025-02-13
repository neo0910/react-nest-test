import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Country, CountrySchema } from './schemas/country.schema';
import { CountriesService } from './countries.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Country.name, schema: CountrySchema }]),
  ],
  controllers: [],
  providers: [CountriesService],
})
export class CountriesModule {}
