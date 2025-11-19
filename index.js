function countTotalVowelsAndConsonants() {
    const fileInput = document.getElementById('textFileInput');
    const file = fileInput.files[0];

    if (!file) {
        window.alert("Please select a text file to continue");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(files) {
        const textFile = files.target.result;
        
        fetch('/text-assignment', {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify({ text: textFile })

        })

        .then(response => response.json())
        .then(data => {
            document.getElementByID("totalVowels").textContent = data.totalVowels;
            document.getElementByID("totalConsonants").textContent = data.totalConsonants;
        })

        .catch(error => {
            console.error('Error: ', error);
        });
    };

    reader.readAsText(file);

    }