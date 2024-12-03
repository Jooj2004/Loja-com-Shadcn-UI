import { products } from "@/data/products"
import { Product } from "@/types/products"


export const getAllProducts = async (): Promise<Product[]> => {
    return new Promise((resolve, reject) => {
        return setTimeout(()=>{
            resolve(products)
        }, 2000)
    })
}