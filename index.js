const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${port}`);
});
