const Names = require('../controllers/names.controller');
const prefix = '/names';

module.exports = function(router)
{
    router.get(`${prefix}/`, Names.getName);
    router.get(`${prefix}/:firstName`, firstName.getName)
    router.post(`${prefix}/`, Names.createName);
    router.delete(`${prefix}/:id`, Names.deleteName);
    router.put(`${prefix}/:id`, Names.updateName);
}