import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('/product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  all(): Promise<Product[]> {
    return this.productService.all();
  }

  @Post()
  create(@Body() body) {
    return this.productService.create(body);
  }

  @Get(':id')
  get(@Param('id') id: number) {
    return this.productService.get(id);
  }
}
