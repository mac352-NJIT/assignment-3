const express = require('express');
const app = express();

app.use(express.json());

app.post('/text-assignment', (req, res) => {
    const text = req.body.text || "";
    let vowelsCount = 0;
    let consonantsCount = 0;
    let len = text.length;

    for (let i = 0; i < len; i++) {
        if (text[i].match(/[aeiou]/i)) {
            vowelsCount++;
        }
        else if (text[i].match(/[bcdfghjklmnpqrstvwxyz]/i)) {
            consonantsCount++;
        }
    }

    res.json({ totalVowels: vowelsCount, totalConsonants: consonantsCount });
})

const port = 3000;

app.get('/text-assignment', (req, res) => {
    res.send('This is the text assignment endpoint.');
})
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

