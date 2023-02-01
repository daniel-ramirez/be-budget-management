const express = require('express');
const cors = require('cors');
const bankAccount = require('./src/bankAccount/bankAccount.routes');

const server = {
    port: 3000,
}

const app = express();
app.use(cors({ origin: true, credentials: true }));

//routes
app.use(bankAccount);

app.listen(server.port, () => {
    console.log(`Server is running on port: ${server.port}`);
});