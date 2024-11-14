const express = require('express');
const app = express();
const port = 3003;

app.get('/', (req, res) => {
    res.send('Hello people');
});

app.get('/another-route', (req, res) => {
    res.send('This is another route');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
