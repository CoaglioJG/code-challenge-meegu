import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';

export abstract class UserDto {
  @IsString()
  @Length(2, 100)
  name: string;

  @IsString()
  birthdate: Date;

  @IsOptional()
  @IsOptional()
  document: string;

  @IsBoolean()
  acceptedTerms: boolean;

  @IsString()
  @Length(8)
  zipcode: string;

  @IsString()
  @IsOptional()
  street: string;

  @IsString()
  @IsOptional()
  neighborhood: string;

  @IsString()
  @IsOptional()
  city: string;

  @IsString()
  @IsOptional()
  state: string;
}
