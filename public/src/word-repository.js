function getAllWords() {
    return new Promise((resolve) => {
        fetch(`http://localhost:3000/word/all`)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                resolve(json);
            });
    });
}

function addWord(english, vietnamese) {
    return new Promise((resolve) => {
        fetch(`http://localhost:3000/word/`, {
            body: JSON.stringify({
                english: english,
                vietnamese: vietnamese
            }),
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                resolve(json);
            });
    });
}