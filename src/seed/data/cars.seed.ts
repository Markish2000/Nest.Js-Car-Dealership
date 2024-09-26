import { v4 as uuid } from 'uuid';

import { Car } from 'src/cars/interfaces';

export const CARS_SEED: Car[] = [
  { brand: 'Toyota', id: uuid(), model: 'Corolla' },
  { brand: 'Honda', id: uuid(), model: 'Civic' },
  { brand: 'Jeep', id: uuid(), model: 'Cherokee' },
];
