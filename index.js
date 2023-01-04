const express = require('express');
const app = express();

const employeesRoute = require('./routes/employee');


app.use(require('body-parser').urlencoded({ extended: false }));
app.use('/employees',employeesRoute)

app.get('/', (req, res) => {
  res.send('Welcome to the Server!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});