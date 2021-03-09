import ProductTemplate from "../templates/product-template";
import {SmartControl} from '../data/products'
function ProductControl() {
    return (
        <>
            <ProductTemplate data = { SmartControl }/>
        </>
    )
}

export default ProductControl;