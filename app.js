import express from 'express';

const app = express();

const PORT = 3007; 

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    const person = {name: 'Donald Duck', occupation: 'plumber', favoriteColor: 'green'};
    res.render('home', {person});
});

app.get('/friends', (req, res) => {
    const friends = ["Mike", "Jay", "Dan", "Rei"];
    res.render('friends', {friends});
})

app.get('/movies', (req, res) => {
    const movies = ["Rocky 3", "Terminator 2", "DBZ: The History of Trunks", "Into The Spiderverse"];
    res.render('movies', {movies});
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));