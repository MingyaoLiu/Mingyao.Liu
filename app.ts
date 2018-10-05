import * as express from 'express';

let router : express.Router = express.Router()
let app: express.Application = express();


let port: string = process.env.PORT || '80'

router.get('/', (res: express.Response, req: express.Request) => {
    res.sendFile('dist/MingyaoLiu/index.html')
})


app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});