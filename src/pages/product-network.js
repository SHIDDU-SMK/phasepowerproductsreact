import ProductTemplate from "../templates/product-template";
import { SmartNetwork } from '../data/products'
function ProductNetwork() {
    return  (
        <>
            <ProductTemplate data = { SmartNetwork }/>
        </>
    )
}

export default ProductNetwork;