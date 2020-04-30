const Names = require('../dataAccessLayer/names.dataAccessLayer');

function handleError(res, err) {
    console.log('encountered error... ', err);
    res.json({
        error: err
    });
}

exports.createName = function(req, res, next){
    // create a data structure (object)
    // that has all of the information from the request (req.body);
    Name.create(req.body, function (err, name){
        if (err){
            handleError(res, err);
            return;
        }
        res.json({
            message: "Name created successfully.",
            name,
        });
    })
};

exports.getAll = function(rew, res, next) {
    const query = {};
    Characters.get(query, (err, results) => {
        if (err) {
            handleError(res, err);
            return;
        }
        res.json(results);
    });
}

exports.getName = function(req, res, next){
    const query = {};
    Names.get(query, (err, nameResults) => {
        if (err) {
            handleError(res, err);
            return;
        }
        res.json(results);
    })
};

exports.updateName = function(req, res, next){
    const query = {
        _id: req.params.id
    }
};

exports.deleteName = function(req, res, next){
    const query = {
        _id: req.params.id
    };
    Names.delete(query, (err, name) => {
        if (err) {
            handleError(res, err);
            return;
        }
        res.json({
            message: "Name deleted successfully.",
            name,
        });
    });

};