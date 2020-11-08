import { Router } from 'express'
import products from '../mock_data/products'

const router = Router()

router.get('/', (req, res) => {
    return res.send('test')
})

router.get('/products', (req, res) => {
    return res.json(products)
})

export default router