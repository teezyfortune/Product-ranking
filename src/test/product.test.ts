import { expect } from 'chai';


import { fetchAllProducts, fetchSingleProduct} from '../modules/product.service';

describe('Prduct Rankin API', () => {

    it('Should return Original product as USD when no currency is supplied')
   const result1 = fetchSingleProduct(1);
   expect(result1).to.be.a('obeject')
   
   it('Should convert price to CAD')
   const result2 = fetchSingleProduct(1, 'CAD');
   expect(result2).to.be.a('obeject')



})