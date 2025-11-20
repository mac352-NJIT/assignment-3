const express = require('express');
const app = express();

app.use(express.static(__dirname));
app.use(express.json());

app.post('/text-assignment', (req, res) => {
    const text = req.body.text || "";
    let vowelsCount = 0;
    let consonantsCount = 0;
    let len = text.length;
    const vowels = /[aeiou]/i;
    const consonants = /[bcdfghjklmnpqrstvwxyz]/i;

    for (let i = 0; i < len; i++) {

        const char = text[i];
        


        if (vowels.test(char)) {
            vowelsCount++;
        }
        else if (consonants.test(char)) {
            consonantsCount++;
        }
    }

    res.json({ totalVowels: vowelsCount, totalConsonants: consonantsCount });
});

app.post('/bmi-calculator', (req, res) => {
    const { weight, heightFeet, heightInches } = req.body;
    let w = parseFloat(weight);
    let hft = parseInt(heightFeet);
    let hin = parseInt(heightInches);

    if (!w || !hft || !hin) {
        res.status(400).json({ error: "Missing required parameters" });
        return;
    }

    const heightInInches = (hft * 12) + parseInt(hin);
    const heightInMeters = heightInInches * 0.0254;
    const weightInKilograms = w * 0.453592;
    const bmi = weightInKilograms / (heightInMeters * heightInMeters);

    res.json({ bmi: bmi.toFixed(2)});
    
});

const port = 3000;

app.get('/text-assignment', (req, res) => {
    res.send('This is the text assignment endpoint.');
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000'`);
});

