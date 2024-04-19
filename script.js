const express = require("express");
const productsRouter = require('./routes/productsroutes.js')
const app = express();
const test= require('./models/productsModel.js');
app.use(express.json());
app.use('/api/products',productsRouter);
const mongoose=require('mongoose');



app.use('/api/products',productsRouter);
const url='mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.sbix7wd.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0'
const databaseUser='yashodhan';
const databasePassword = 'tyagi';
const databaseName='amazon';
let dbLink= url.replace("$_USERNAME_$",databaseUser);
 dbLink= dbLink.replace("$_PASSWORD_$",databasePassword);
 dbLink= dbLink.replace("$_DB_NAME_$",databaseName);
 mongoose.connect(dbLink)
 .then(()=>console.log('-----------database connected-----------')
);

 app.listen(1400,()=>console.log('---------------app started-------------')
);