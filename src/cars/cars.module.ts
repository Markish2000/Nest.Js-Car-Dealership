import { Module } from '@nestjs/common';

import { CarsService } from './cars.service';

import { CarsController } from './cars.controller';

@Module({
  controllers: [CarsController],
  exports: [CarsService],
  providers: [CarsService],
})
export class CarsModule {}
