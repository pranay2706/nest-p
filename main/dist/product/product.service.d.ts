import { Product, ProductDocument } from './product.model';
import { Model } from 'mongoose';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: Model<ProductDocument>);
    all(): Promise<Product[]>;
    create(data: any): Promise<Product>;
    update(id: any, product: any): Promise<import("mongoose").Document<unknown, {}, ProductDocument> & Product & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }>>;
    delete(id: number): Promise<import("mongoose").Document<unknown, {}, ProductDocument> & Product & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }>>;
}
