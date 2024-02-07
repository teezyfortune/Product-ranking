import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import dbConfig from './src/config/dbcon'
import router from './src/modules/product.routes';


const app = express();
const  sever = http.createServer(app);
const Port: Number = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
app.use('/api/v1', router)

app.get('/api/v1', (req, res)=> {
    console.log('Welcome to interview test')
})

dbConfig.authenticate().then(()=>{
    console.log('connected to DB successfully')
    sever.listen(Port, () =>{
    console.log(`Starting product management server`)
     })
}).catch((e)=>{
    console.log(e)
});

export default app;