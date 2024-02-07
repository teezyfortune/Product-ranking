import { Router } from 'express';
import { findProduct, findAllProduct } from './product.controller';

const router = Router();

router.get('/product/:id', findProduct)
router.get('/products/all', findAllProduct)

export default router;
