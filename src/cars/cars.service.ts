import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { v4 as uuid } from 'uuid';

import { Car } from './interfaces';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [];

  findAll(): Car[] {
    return this.cars;
  }

  findOneById(id: string): Car {
    const car = this.cars.find((car) => car.id === id);

    if (car) return car;

    throw new NotFoundException(`El vehículo con el id ${id} no existe.`);
  }

  create(createCarDto: CreateCarDto): Car {
    const car: Car = { ...createCarDto, id: uuid() };

    this.cars.push(car);

    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto): Car {
    let carDB = this.findOneById(id);

    if (updateCarDto.id && updateCarDto.id === id) {
      this.cars = this.cars.map((car: Car) => {
        if (car.id === id) {
          carDB = { ...carDB, ...updateCarDto, id };

          return carDB;
        }

        return car;
      });

      return carDB;
    }

    throw new BadRequestException(`El id ${id} del vehículo no es válido.`);
  }

  delete(id: string): Car[] {
    this.findOneById(id);

    this.cars = this.cars.filter((car) => car.id !== id);

    return this.cars.filter((car) => car.id !== id);
  }

  fillCarsWithSeedData(cars: Car[]): void {
    this.cars = cars;
  }
}
