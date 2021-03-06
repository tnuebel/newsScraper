var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var cheerio = require("cheerio");

// Require all models
var db = require("./models");

var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

mongoose.connection.once("open", function(){
}).on("error", function(error){
  console.log("connection error:",error);
});

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGOD_URI);
} else {
  mongoose.connect("mongodb://localhost/webcrawler");
};

// routes:
var routes = require("./controller/html-routes.js");
app.use(routes);

// app.get("/", function(req, res){
//     res.sendfile("./public/index.html");
// });

// // Routes

// // A GET route for scraping the echoJS website
// app.get("/scrape", function(req, res) {
//     // First, we grab the body of the html with request
//     axios.get("http://www.echojs.com/").then(function(response) {
//       // Then, we load that into cheerio and save it to $ for a shorthand selector
//       var $ = cheerio.load(response.data);
  
//       // Now, we grab every h2 within an article tag, and do the following:
//       $("article h2").each(function(i, element) {
//         // Save an empty result object
//         var result = {};
  
//         // Add the text and href of every link, and save them as properties of the result object
//         result.title = $(this)
//           .children("a")
//           .text();
//         result.link = $(this)
//           .children("a")
//           .attr("href");
  
//         // Create a new Article using the `result` object built from scraping
//         db.Article.create(result)
//           .then(function(dbArticle) {
//             // View the added result in the console
//             console.log(dbArticle);
//           })
//           .catch(function(err) {
//             // If an error occurred, send it to the client
//             return res.json(err);
//           });
//       });
  
//       // If we were able to successfully scrape and save an Article, send a message to the client
//       res.send("Scrape Complete");
//     });
//   });
  
//   // Route for getting all Articles from the db
//   app.get("/articles", function(req, res) {
//     // TODO: Finish the route so it grabs all of the articles
//     db.Article.find({}).then(function(dbArticle){
//       res.json(dbArticle);
//     });
//   });
  
//   // Route for grabbing a specific Article by id, populate it with it's note
//   app.get("/articles/:id", function(req, res) {
//     // TODO
//     // ====
//     // Finish the route so it finds one article using the req.params.id,
//     // and run the populate method with "note",
//     // then responds with the article with the note included
//     db.Article.findOne({_id: req.params.id})
//     .populate("note")
//     .then(function(dbArticle){
//       res.json(dbArticle);
//     });
//   });
  
//   // Route for saving/updating an Article's associated Note
//   app.post("/articles/:id", function(req, res) {
//     // TODO
//     // ====
//     // save the new note that gets posted to the Notes collection
//     // then find an article from the req.params.id
//     // and update it's "note" property with the _id of the new note
//     db.Notes.create(req.body).then(function(dbNotes){
//   return db.Article.findOneAndUpdate({_id: req.params.id}, {$push: {note: dbNote._id}}, {new: true})
//   }).then(function(newNote){
//     res.json(newNote);
//   })
//   });
  
  // Start the server
  app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
  
