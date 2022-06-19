import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCatDto {
  @IsString({message: "Name should be string.", each: false})
  @IsNotEmpty({message: "Name can not be empty.", each: false})
  name: string;

  @IsNumber({}, {message: "Age should be grater than zero.", each: false})
  @IsNotEmpty({message: "Age can not be empty.", each: false})
  age: number;

  @IsString({message: "Breed should be string.", each: false})
  @IsNotEmpty({message: "Breed can not be empty.", each: false})
  breed: string;
}
