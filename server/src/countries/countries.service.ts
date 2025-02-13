import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Country, CountryDocument } from './schemas/country.schema';

@Injectable()
export class CountriesService {
  constructor(
    @InjectModel(Country.name) private countryModel: Model<Country>,
  ) {}

  async bulkCreate(data: Country[]): Promise<CountryDocument[]> {
    return this.countryModel.insertMany(data);
  }

  async removeAll(): Promise<void> {
    await this.countryModel.deleteMany({}).exec();
  }
}
