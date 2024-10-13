import express from 'express';
import mysql from 'mysql';
import bcrypt from 'bcrypt';
import cors from 'cors';


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
});

con.connect((err) => {
  if (err) {
    console.error('error connecting:', err);
    return;
  }
  console.log('connected as id ' + con.threadId);

  con.query('CREATE DATABASE IF NOT EXISTS cars_store', (err, result) => {
    if (err) {
      console.error('error creating database:', err);
    } else {
      console.log('database created');
    }
  });

  con.end();

  // Now, connect to the newly created database
  const dbCon = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cars_store',
  });

  dbCon.connect((err) => {
    if (err) {
      console.error('error connecting to database:', err);
    } else {
      console.log('connected to database');
    }
  });
});




app.get('/', (req, res) => {
  res.send("Hello backend");
});