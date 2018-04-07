class Repository {
    async getAllWords() {
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

    async addWord(english, vietnamese) {
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

    async deleteWord(id) {
        return new Promise((resolve) => {
            fetch(`http://localhost:3000/word/`, {
                body: JSON.stringify({
                    id: id,
                }),
                method: 'DELETE',
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
}

repository = new Repository();
