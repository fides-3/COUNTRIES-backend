const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const countryRoutes=require('./routes/countries') 

const app=express();
app.use(cors);
app.use(bodyParser.json);
app.use('/api/countries',countryRoutes)

const PORT=process.env.PORT||5000;
app.listen(PORT , ()=>{
    console.log('server is running on port  ${PORT}')
});