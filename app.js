const express = require('express');
const createTbales = require('./db/setup');
const pool = require('./db/index');

const userRouter = require('./Routes/userRouter');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json()) // для парсинга json в теле запроса

app.use('/api', userRouter)

async function initializeApp() {
    try{
        await createTbales(pool);

        app.listen(PORT, () => {;
            console.log(`Server is running on port ${PORT}`)
        });
    }catch (error) {
        console.error('Error initializing app:', error.message);
    }
}

initializeApp();



//const express = require('express');

//const app = express();
//const PORT = 5001;

//app.use(bodyParser.json());

// Получить все товары
//app.get('/products', async (req, res) => {
    //const products = await Product.find();
    //res.json(products);
//});

// Добавить продукт (только для администраторов)
//app.post('/products', async (req, res) => {
   // const newProduct = new Product(req.body);
   // await newProduct.save();
   // res.status(201).json(newProduct);
//});

// Добавить товар в корзину
//app.post('/cart/items', (req, res) => {
    // Реализация логики корзины (необходимо следить за состоянием корзины для пользователя)
//});

// Оформить заказ
//app.post('/orders', async (req, res) => {
    //const newOrder = new Order(req.body);
    //await newOrder.save();
    //res.status(201).json(newOrder);
//});

// Получить список заказов (только для администраторов)
//app.get('/orders', async (req, res) => {
    //const orders = await Order.find();
   // res.json(orders);
//});

// Получить статус заказа
//app.get('/orders/:id/tracking', async (req, res) => {
   // const order = await Order.findById(req.params.id);
   // res.json(order.status);
//});

// Запустить сервер
//app.listen(PORT, () => {
  //  console.log(`Server running on port ${PORT}`);
//});
