var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var roydadSchema = new Schema({

    id: [{
        type: Schema.Types.ObjectId,
         ref: 'Course'
    }],
    description: {
        type: String,
    },
    zamanepayan: {
        type: Date,
        required: true
    },

});

module.exports = mongoose.model('roydad', roydadSchema);