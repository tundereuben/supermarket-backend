const express = require('express');
require('./db/mongoose');

const productRouter = require('./routers/product');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(productRouter);

app.listen(port, () => {
    console.log(`Express is live and running on port ${port}`);
});
