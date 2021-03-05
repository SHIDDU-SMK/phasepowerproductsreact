import ProductDseTempleteMedium from "./product-templete-dse";
import { SCModules } from '../data/products'
function StartControl() {
    return (
        <>
            <ProductDseTempleteMedium data = {SCModules}/>
        </>
    )
}

export default StartControl;