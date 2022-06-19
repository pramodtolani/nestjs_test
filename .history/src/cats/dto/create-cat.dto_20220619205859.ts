import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCatDto {
  @IsString({message: "Name should be string."})
  @IsNotEmpty({message: "Name can not be empty."})
  name: string;

  @IsNumber({}, {message: "Age should be grater than zero."})
  @IsNotEmpty({message: "Age can not be empty."})
  age: number;

  @IsString({message: "Breed should be string."})
  @IsNotEmpty({message: "Breed can not be empty."})
  breed: string;
}
