const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000; 

mongoose.connect('mongodb+srv://jimsonkavil:Justin501@atlascluster.mf8hmti.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.use(express.json());

const userRoutes = require('./routes/userRoute');
const productRoutes = require('./routes/productRoute');
const categoryRoutes = require('./routes/categoryRoute');

app.use('/users', userRoute);
app.use('/products', productRoute);
app.use('/categories', categoryRoute);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});