let sqlite3 = require('sqlite3').verbose();

class Repository {
    constructor() {
        this.db = new sqlite3.Database('./server/db/viet.db', (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('Connected to the viet database.');
        });
    }

    async addWord(word) {
        return new Promise((resolve, reject) => {
            let fileName = `${new Date().getTime()}.mp3`;
            this.db.run('insert into word(english, vietnamese, fileName) values (?, ?, ?)', [word.english, word.vietnamese, fileName], (err) => {
                if(err) {
                    reject(err);
                }
                else {
                    word.fileName = fileName;
                    resolve(word);
                }
            });
        });
    }

    async getAllWords() {
        return new Promise((resolve, reject) => {
            this.db.all('SELECT * FROM word', [], (err, rows) => {
                if(err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            });
        });
    }
}

module.exports = new Repository();