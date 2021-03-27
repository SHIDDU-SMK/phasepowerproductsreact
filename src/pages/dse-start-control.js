import ProductDseTemplateMedium from "../templates/product-templete-dse";
import { SCModules } from '../data/products'
function StartControl() {
    return (
        <>
            <ProductDseTemplateMedium data = {SCModules}/>
        </>
    )
}

export default StartControl;