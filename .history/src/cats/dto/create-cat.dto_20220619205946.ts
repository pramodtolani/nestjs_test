import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCatDto {
  @IsString({message: "Name should be string.", each: true})
  @IsNotEmpty({message: "Name can not be empty.", each: true})
  name: string;

  @IsNumber({}, {message: "Age should be grater than zero.", each: true})
  @IsNotEmpty({message: "Age can not be empty.", each: true})
  age: number;

  @IsString({message: "Breed should be string.", each: true})
  @IsNotEmpty({message: "Breed can not be empty.", each: true})
  breed: string;
}
