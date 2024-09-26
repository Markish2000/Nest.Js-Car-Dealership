export interface CarBase {
  brand: string;
  model: string;
}

export interface Car extends CarBase {
  id?: string;
}
