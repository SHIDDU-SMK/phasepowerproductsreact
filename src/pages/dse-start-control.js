import ProductDseTemplete from "./product-templete-dse";
import { SCModules } from '../data/products'
function StartControl() {
    return (
        <>
            <ProductDseTemplete data = {SCModules}/>
        </>
    )
}

export default StartControl;