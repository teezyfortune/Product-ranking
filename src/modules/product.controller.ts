import { fetchAllProducts, fetchSingleProduct } from "./product.service";
import { Request, Response } from 'express'

export const findProduct = async (req: Request, res: Response) => {
    try {
        const currency = req.query.currency as string
        const data = await fetchSingleProduct(req.params.id, currency)
        return res.status(200).json({ status: 'success', message: 'Product retrived successfully', data });
    } catch (e) {
        return res.status(500).json({ status: 'fail', message: 'Oops somethiing went wrong' })
    }
}

export const findAllProduct = async (req: Request, res: Response) => {
    try {
        const currency = req.query.currency as string
        const data = await fetchAllProducts(req.query.page, req.query.limit, currency)
        return res.status(200).json({ status: 'success', message: 'Products retrived successfully', data });
    } catch (e) {
        return res.status(500).json({ status: 'fail', message: 'Oops somethiing went wrong' })
    }
}
