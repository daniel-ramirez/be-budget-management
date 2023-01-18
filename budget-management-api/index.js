const express = require('express');
const cors = require('cors');

const server = {
    port: 3000,
}

const app = express();

app.use(cors({ origin: true, credentials: true }));

app.listen(server.port, () => {
    console.log(`Server is running on port: ${server.port}`);
});