import { ProductService } from './product.service';
import { Product } from './product.entity';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    all(): Promise<Product[]>;
    create(body: any): Promise<Product>;
    get(id: number): Promise<Product>;
}
