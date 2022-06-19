import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat as CatInterface } from './interfaces/cat.interface';
import { Cat, CatDocument } from './schemas/cat.schema';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  private readonly cats: CatInterface[] = [];

  create(cat: CatInterface) {
    this.cats.push(cat);
  }

  findAll(): CatInterface[] {
    return this.cats;
  }

}
