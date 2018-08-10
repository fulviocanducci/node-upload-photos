import * as express from 'express';
import * as multer from 'multer';
import * as cors from 'cors';
import uploads from './upload'

const app = express();

const corsMiddleware = cors({
  origin: ['http://localhost:3000/', 'http://localhost:4200']
})

app.use(corsMiddleware)
app.options('*', corsMiddleware);


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post('/receive', uploads.single('avatar'),  (req, res)  => {
    try {
    	const message = `Arquivo enviado com sucesso: ${req.file.filename}`;
        res.send(message);
        console.log(message);
    } catch (error) {
        console.log(error);
    }
   
})

app.listen(3000, function () {
    console.log('listening on port 3000!');
});