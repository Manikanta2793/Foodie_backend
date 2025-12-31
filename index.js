const express = require('express');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const vendorRoutes = require('./Routes/vendorRoutes')
const bodyparser = require('body-parser');
const firmRoutes = require('./Routes/FirmRoutes');
const productRoutes = require('./Routes/poductRoutes');
const cors =require('cors');

const app = express()


const PORT = 4000;

dotEnv.config();
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('MongoDb connected successfuly'))
.catch((error)=>console.log(error))

app.use(bodyparser.json());
app.use('/vendor',vendorRoutes);
app.use('/firm',firmRoutes)
app.use('/product',productRoutes);


app.listen(PORT, ()=>{
    console.log(`server started and running at ${PORT}`)
})

