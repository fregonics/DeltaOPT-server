import { Router } from 'express'
import products from '../mock_data/products'
import providers from '../mock_data/providers'

const router = Router()

router.get('/', (req, res) => {
    return res.send('test')
})

router.get('/products', (req, res) => {
    return res.json(products)
})

router.get('/providers', (req, res) => {
    return res.json(providers)
})

export default router