import ProductDseTempleteMedium from "../templates/product-templete-dse";
import { FCModules } from '../data/products'
function FailureControl() {
    return (
        <>
            <ProductDseTempleteMedium data = {FCModules}/>
        </>
    )
}

export default FailureControl;