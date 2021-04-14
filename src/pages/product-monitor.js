import ProductTemplate from "../templates/product-template";
import { SmartMonitor } from '../data/products'
function ProductMonitor() {
    return (
        <div className='marketing'>
            <ProductTemplate data = { SmartMonitor }/>
        </div>
    )
}

export default ProductMonitor;