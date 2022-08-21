/* eslint-disable */
import express from 'express';
import mysql from 'mysql';

const app: express.Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  }
);

app.listen(8080, () => {
  console.log('Start on port 8080.');
});

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'demo',
});

app.get('/data', (req: express.Request, res: express.Response) => {
  connection.query('select * from demoTable', (err, result) => {
    const data = result.map(
      (r: { id: number; name: string; status: number }) => {
        return {
          id: r.id,
          name: r.name,
          status:
            r.status === 0
              ? 'Completed'
              : r.status === 1
                ? 'Processing'
                : 'Canceled',
        };
      }
    );
    res.send(data);
  });
});
