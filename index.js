function countTotalVowelsAndConsonants() {
    const fileInput = document.getElementById('textFileInput');
    const file = fileInput.files[0];

    if (!file) {
        window.alert("Please select a text file to continue");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e) {
        const textFile = e.target.result;
        
        fetch('/text-assignment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ text: textFile })

        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('totalVowels').textContent = data.totalVowels;
            document.getElementById('totalConsonants').textContent = data.totalConsonants;
        })
        .catch(error => {
            console.error('Error: ', error);
        });
    };

    reader.readAsText(file);

}

function calculateBMI() {
    const weight = parseFloat(document.getElementById('inputWeight').value);
    const heightFeet = parseInt(document.getElementById('inputHeightFeet').value);
    const heightInches = parseInt(document.getElementById('inputHeightInches').value);

    if (!weight || !heightFeet || !heightInches) {
        window.alert("Please fill in all fields to continue");
        return;
    }

    fetch('/bmi-calculator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({weight, heightFeet, heightInches}) 
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('bmiResult').textContent = data.bmi;
    })
    .catch(error => {
        console.error('Error: ', error);
    });

}