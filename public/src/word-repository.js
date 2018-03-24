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