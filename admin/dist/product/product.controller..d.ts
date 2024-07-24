import { ProductService } from './product.service';
import { Product } from './product.entity';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    all(): Promise<Product[]>;
    create(body: any): Promise<Product>;
    get(id: number): Promise<Product>;
    update(id: number, data: Partial<Product>): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
