let repository = require("./db/repository");
let audioDownloader = require('./audio-downloader');

let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.get('/all', async function (req, res) {
    res.status(200).send(await repository.getAllWords());
});

router.post('/', async (req, res) => {
    let word = {
        english: req.body.english,
        vietnamese: req.body.vietnamese
    };
    try {
        word = await repository.addWord(word);
        await audioDownloader.downloadVietnameseMP3(word);
    }
    catch(error) {
        console.error(error);
        res.status(500).send();
        return;
    }

    res.status(200).send(word);
});

module.exports = router;