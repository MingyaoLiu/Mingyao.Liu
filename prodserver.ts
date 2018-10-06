import * as express from 'express';
import * as fs from 'fs'


let router : express.Router = express.Router()
let app: express.Application = express();

app.use(express.static(__dirname + '/dist/MingyaoLiu'));

let port: string = process.env.PORT || '80'

router.get('/', (res: express.Response, req: express.Request) => {
    res.sendFile('index.html');
})


app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});