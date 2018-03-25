let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/all', function (req, res) {
    res.status(200).send([
        {
            fileName: '1.mp3',
            english:  'hello',
            vietnamese: 'xin chào'
        },
        {
            fileName: '2.mp3',
            english:  'goodbye',
            vietnamese: 'tạm biệt'
        },
    ]);
});

module.exports = router;