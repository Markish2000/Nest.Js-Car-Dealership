import { Injectable, NotFoundException } from '@nestjs/common';

import { v4 as uuid } from 'uuid';

import { CreateBrandDto, UpdateBrandDto } from './dto';

import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [];

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;

    const brand: Brand = {
      createdAt: new Date().getTime(),
      id: uuid(),
      name: name.toLowerCase(),
    };

    this.brands.push(brand);

    return brand;
  }

  findAll(): Brand[] {
    return this.brands;
  }

  findOne(id: string): Brand {
    const brand = this.brands.find((brand) => brand.id === id);

    if (brand) return brand;

    throw new NotFoundException(`No se encontró la marca con el id ${id}`);
  }

  update(id: string, updateBrandDto: UpdateBrandDto): void {
    let brandDB = this.findOne(id);

    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        brandDB.updatedAt = new Date().getTime();
        brandDB = { ...brandDB, ...updateBrandDto };

        return brandDB;
      }

      return brand;
    });
  }

  remove(id: string): void {
    this.brands = this.brands.filter((brand) => brand.id !== id);
  }

  fillBrandsWithSeedData(brand: Brand[]): void {
    this.brands = brand;
  }
}
