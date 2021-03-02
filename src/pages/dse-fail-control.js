import ProductDseTemplete from "./product-templete-dse";
import { FCModules } from '../data/products'
function FailureControl() {
    return (
        <>
            <ProductDseTemplete data = {FCModules}/>
        </>
    )
}

export default FailureControl;