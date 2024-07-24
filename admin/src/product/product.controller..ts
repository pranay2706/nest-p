import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { ClientProxy } from '@nestjs/microservices';

@Controller('/product')
export class ProductController {
  constructor(
    private productService: ProductService,
    @Inject('PRODUCT_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Get()
  all(): Promise<Product[]> {
    return this.productService.all();
  }

  @Post()
  async create(@Body() body) {
    const product = await this.productService.create(body);
    this.client.emit('product_created', product);
    return product;
  }

  @Get(':id')
  get(@Param('id') id: number) {
    return this.productService.get(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() data: Partial<Product>) {
    await this.productService.update(id, data);
    const product = await this.productService.get(id);
    this.client.emit('product_updated', product);
    return product;
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.productService.delete(id);
    this.client.emit('product_deleted', id);
  }
}
