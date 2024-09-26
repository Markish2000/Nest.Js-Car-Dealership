import { Module } from '@nestjs/common';

import { BrandsService } from './brands.service';

import { BrandsController } from './brands.controller';

@Module({
  controllers: [BrandsController],
  exports: [BrandsService],
  providers: [BrandsService],
})
export class BrandsModule {}
