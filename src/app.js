import express from 'express'
import userRouter from './routers/user.router.js'
import productRouter from './routers/product.router.js'

const app = express()
app.use('/api/users', userRouter)
app.use('/api/products', productRouter)

app.listen(8080, () => console.log('Server Up'))