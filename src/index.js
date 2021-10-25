const express = require('express');
const cors = require('cors');
require('./db/mongoose');

const productRouter = require('./routers/product');
const subCategoryRouter = require('./routers/subCategory');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.use(productRouter);
app.use(subCategoryRouter);

app.listen(port, () => {
    console.log(`Express is live and running on port ${port}`);
});
