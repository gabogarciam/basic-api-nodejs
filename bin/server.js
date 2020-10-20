import express from ('express');

const port = process.env.PORT || 3000;
const app = express();

app.get('*', (req, res) => {
    res.send('Basic Api with Nodejs and Expressjs');
});

app.listen(port, () => console.log(`Server is running on port: https://localhost/${port}`));