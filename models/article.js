var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;


var ArticleSchema = new Schema({
    Headline: {
        type: String,
        require: true
    },
    Summary: {
        type: String,
    },
    URL: {
        type: String,
    },
    Comment: {
    type: Schema.Types.ObjectId,
    ref: "Comment"
    },
    isSaved:{
        type: Boolean,
        defualt: false
    }
});
// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;