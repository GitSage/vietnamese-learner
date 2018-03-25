const fs = require('fs');
const request = require('request');

class AudioDownloader {
    constructor() {

    }

    async downloadVietnameseMP3(word) {
        const options = {
            url: `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(word.vietnamese)}&tl=vi&client=tw-ob`,
            headers: {
                'Referer': 'http://translate.google.com/',
                'User-Agent': 'stagefright/1.2 (Linux;Android 5.0)'
            }
        };

        request(options)
            .pipe(fs.createWriteStream(`./public/audio/${word.fileName}`));
    }

}

module.exports = new AudioDownloader();