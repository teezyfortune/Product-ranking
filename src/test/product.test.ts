import { expect } from 'chai';

import { fetchAllProducts, fetchSingleProduct } from '../modules/product.service';

const responseObject = {
    "id": 1,
    "name": "Kawasaki Ninja 650",
    "price": 10.5,
    "description": null,
    "productViewed": 37,
    "isDeleted": 0,
    "createdAt": "2022-07-07T00:00:00.000Z",
    "updatedAt": "2024-02-07T21:58:18.000Z"
}
describe('Prduct Rankin API', () => {

    test('Should return Original product as USD when no currency is supplied', () =>{
    const result1 = fetchSingleProduct(1,);
    expect(result1).to.be.equal(responseObject)
    })
    test('Should convert price to CAD', () =>{
    const result2 = fetchSingleProduct(1, 'CAD');
    expect(result2).to.be.equal(responseObject)
    })
})