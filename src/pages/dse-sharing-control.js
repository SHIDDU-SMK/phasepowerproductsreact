import ProductDseTemplete from "./product-templete-dse";
import { SharingModules } from '../data/products'
function SharingControl() {
    return (
        <>
            <ProductDseTemplete data = {SharingModules}/>
        </>
    )
}

export default SharingControl;