import { ProductService } from './product.service';
import { Product } from './product.entity';
import { ClientProxy } from '@nestjs/microservices';
export declare class ProductController {
    private productService;
    private readonly client;
    constructor(productService: ProductService, client: ClientProxy);
    all(): Promise<Product[]>;
    create(body: any): Promise<Product>;
    get(id: number): Promise<Product>;
    update(id: number, data: Partial<Product>): Promise<Product>;
    delete(id: number): Promise<void>;
}
