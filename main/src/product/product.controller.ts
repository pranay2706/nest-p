import { Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { EventPattern } from '@nestjs/microservices';

@Controller('product')
export class ProductController {
  constructor(private productServie: ProductService) {}

  @Get()
  async all() {
    await this.productServie.all();
  }

  @EventPattern('product_created')
  async productCreated(product: any) {
    await this.productServie.create(product);
  }

  @EventPattern('product_updated')
  async productUpdated(product: any) {
    await this.productServie.update(product.id, product);
  }

  @EventPattern('product_deleted')
  async productDeleted(id: number) {
    await this.productServie.delete(id);
  }
}
