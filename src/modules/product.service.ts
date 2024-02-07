
import { Op } from 'sequelize';
import productModel from '../models/product';
import axios from 'axios';
import "dotenv/config";


export const convertCurrency = async (currency: string, price: number) => {
    return axios.get(`http://api.currencylayer.com/convert?access_key=${process.env.CURRENCY_EXCHANGE_KEY}&from=USD&to=${currency}&amount=${price}`);

}

export const fetchSingleProduct = async (id: any, currency?: string): Promise<any> => {
    try {
        let productDetails = await productModel.findOne({ where: { id } })
        let result = await productDetails?.increment({ productViewed: +1 })
        if (currency) {
            const originalPrice = result?.price as number
            let price = await convertCurrency(currency, originalPrice)
            return { ...result?.dataValues, price: price.data.result };
        }
        return result;

    } catch (e: any) {
        throw new Error(e)
    }
}

export const fetchAllProducts = async (page: any, limit: any, currency: string): Promise<any> => {
    try {
        page = page ?? 1
        limit = limit ?? 5

        const offset = (page - 1) * limit;

        const { rows, count } = await productModel.findAndCountAll({
            offset: offset,
            limit: limit,
            where: {
                productViewed: {
                    [Op.gte]: 1
                }
            },
            group: ['id', 'productViewed',],
            order: [['productViewed', 'DESC']]
        });
        let products = rows.map(e => e.dataValues)

        if (currency) {

            products = await Promise.all(rows.map(async e => {

                const response = await convertCurrency(currency, e.price)

                return { ...e.dataValues, price: response.data.result }
            }))
        }
        return {
            products,
            count,
            limit,
            page
        }
    } catch (error: any) {
        throw new Error(error)
    }
}

