const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5001; 

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

const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute');
const categoryRoute = require('./routes/categoryRoute');

app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/categories', categoryRoute);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});