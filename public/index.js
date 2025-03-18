import express from 'express';
import indexRouter from './routers/index.js';

const app = express();

app.use( indexRouter );

app.listen( 3001, () =>{
    console.log('serve 3001');
    
})