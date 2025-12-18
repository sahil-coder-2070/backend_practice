import express from 'express'

const app = express()

// app.get('/', (req, res) => {
//     res.send('Server is ready')
// })

app.get('/api/jokes', (req, res) => {
    // res.json()
    const jokes = [
        {
            id: 1,
            title: "Joke",
            content: "Why don’t programmers like nature? Too many bugs."
        },
        {
            id: 2,
            title: "Another Joke",
            content: "I told my computer I needed a break, and it said: No problem, I’ll go to sleep."
        },
        {
            id: 3,
            title: "One More Joke",
            content: "Why do Java developers wear glasses? Because they don’t see sharp."
        },
        {
            id: 4,
            title: "Funny Joke",
            content: "Why was the JavaScript developer sad? Because he didn’t know how to ‘null’ his feelings."
        },
        {
            id: 5,
            title: "Last Joke",
            content: "Debugging: Removing the needles from the haystack."
        }
    ];
    res.send(jokes)
})

const port = 5000

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})