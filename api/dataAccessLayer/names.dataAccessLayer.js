const mongoose = require ('mongoose');
const nameSchema = require('../models/names.model');

nameSchema.statics = {
    create: function(data, callback)
    {
        const name = new this(data);
        name.save(callback);
    },
    get: function(query, callback)
    {
        this.find(query, callback);
    },
    update: function(query, data, callback)
    {
        this.findOneAndUpdate(query, {$set: data}, callback);
    },
    delete: function(query, callback)
    {
        this.findOneAndDelete(query, callback);
    },
}

const infoModel = mongoose.model('names', nameSchema);
module.export = nameSchema;