var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;


var CommentSchema = new Schema({
    comment: {
        type: String,
        require: true
    },
    CreatedAt: {
        type: Date,
        default: Date.now()
    },
});

// This creates our model from the above schema, using mongoose's model method
var UserComment = mongoose.model("Comment", CommentSchema);

// Export the Article model
module.exports = UserComment;