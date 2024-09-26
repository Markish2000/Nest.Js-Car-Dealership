import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCarDto {
  @IsOptional()
  @IsString()
  readonly brand?: string;

  @IsOptional()
  @IsString()
  @IsUUID()
  readonly id?: string;

  @IsOptional()
  @IsString()
  readonly model?: string;
}
