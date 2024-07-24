import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './product.model';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async all(): Promise<Product[]> {
    return await this.productModel.find();
  }

  async create(data: any): Promise<Product> {
    return await new this.productModel(data).save();
  }

  async update(id: any, product: any) {
    return await this.productModel.findByIdAndUpdate(id, product);
  }

  async delete(id: number) {
    return await this.productModel.findByIdAndDelete(id);
  }
}
