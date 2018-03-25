let sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./server/db/viet.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the viet database.');
});

db.all('SELECT * FROM word', [], (err, rows) => {
    console.log(`Rows: ${rows.length}`);
});

module.exports = {
     getAllWords: getAllWords,
    addWord: addWord,
};

async function addWord() {
    return new Promise((resolve, reject) => {
        db.run('insert into word(english, vietnamese, fileName) values (?, ?, ?)')
    });
}

async function getAllWords() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM word', [], (err, rows) => {
            if(err) {
                reject(err);
            }
            else {
                resolve(rows);
            }
        });
    });
}