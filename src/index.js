const express = require('express');
const cors = require('cors');
require('./db/mongoose');

const productRouter = require('./routers/product');
const subCategoryRouter = require('./routers/subCategory');
const categoryRouter = require('./routers/category');
const userRouter = require('./routers/user');
const cartRouter = require('./routers/cart');
const purchaseRouter = require('./routers/purchase');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.use(productRouter);
app.use(categoryRouter)
app.use(subCategoryRouter);
app.use(userRouter);
app.use(cartRouter);
app.use(purchaseRouter);

app.listen(port, () => {
    console.log(`Express is live and running on port ${port}`);
});
