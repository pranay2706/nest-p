import { ProductService } from './product.service';
export declare class ProductController {
    private productServie;
    constructor(productServie: ProductService);
    all(): Promise<void>;
    productCreated(product: any): Promise<void>;
    productUpdated(product: any): Promise<void>;
    productDeleted(id: number): Promise<void>;
}
