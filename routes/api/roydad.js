var express = require('express');
var router = express.Router();
let {auth, permit} = require('../../functions/authentication');
let Course = require('../../models/course.model');
let Roydad = require('../../models/roydad.model');
router.post('/', auth, permit('teacher'), (req, res) => {
    let roydad = new Roydad(req.body);
    roydad.save(err => {
        if (err)
            res.send({
                status: "error",
                error: err
            });
        res.send({
            status: "success",
            data: {
                message: "roydad added successfully"
            }
        })
    })
});
router.get('/:id', (req, res) => {
    Roydad.findById(req.params.id, (err, roydad) => {
        if (err)
            return res.send({
                status: "error",
                error: err
            });
        return res.send({
            status: "success",
            data: {
                roydad: roydad
            }
        })
    });
});
router.delete('/:id', auth, permit('teacher'), (req, res) => {
    Roydad.findByIdAndRemove(req.params.id).then((roydad) => {
        res.send({
            status: 'success',
            data: {
                roydad: roydad
            }
        })
    }).catch((error) => {
        res.send({
            status: 'error',
            error: error
        })
    })
});
router.get('/', (req, res) => {
    Roydad.find({}).then((roydad) => {
        res.send({
            status: "success",
            data: {
                roydad: roydad
            }
        })
    }).catch(error => {
        res.send({
            status: "error",
            error: err
        })
    })
});
module.exports = router;