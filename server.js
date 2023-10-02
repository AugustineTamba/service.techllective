const express = require('express');
const app = express();

app.use(express.static(__dirname));

const port = 3000; // You can change this port if needed
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});