const express =require('express')
const mongoose = require ('mongoose')
const cors = require ('cors');

const port = process.env.PORT || 3000

require('dotenv/config');
const app = express()


mongoose.connect(
    process.env.DB_CONNECTION , 
 {useNewUrlParser: true,
     useUnifiedTopology: true },
 
 () => console.log('connected db')
 
 );

 app.use(express.json());
app.use(cors());

const registrationRouter = require ('./controller/regis')
app.use('/regs', registrationRouter)

app.listen(port, ()=> {

    console.log('server started')
})