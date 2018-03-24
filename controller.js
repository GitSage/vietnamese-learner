let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// router.post('/', function (req, res) {
//     User.create({
//             name : req.body.name,
//             email : req.body.email,
//             password : req.body.password
//         },
//         function (err, user) {
//             if (err) return res.status(500).send("There was a problem adding the information to the database.");
//             res.status(200).send(user);
//         });
// });
// RETURNS ALL THE USERS IN THE DATABASE
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