const express = require('express')
const app = express()
const port = 3000

//EJS engine requirements 
app.set('view engine', 'ejs');
app.use(express.static('public'))

//AUTO-REFRESH requirements 
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));


const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});


//MongoDB - Connect
const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://maroka:s6CdkBexUfQ0INhZ@cluster0.lapskzk.mongodb.net/IMEI-Checker-DB?retryWrites=true&w=majority")
  .then(result => {
    app.listen(port, () => {
      console.log("Listening on port: " + port)
    });
  })
  .catch( err => {
    console.log(err);
  });



//MongoDB - Send data
app.use(express.urlencoded({ extended: true }));

          //Defining models to be used for objects creation
const User = require("./models/usersScheme");
const Imei = require("./models/imeiScheme");

          //Post request for the sign up page
app.post("/projectsignup", (req, res) => {
  const user = new User(req.body);
 
  console.log(req.body);
 
  user
    .save( )
    .then( result => {
      res.redirect("/projectsignin");
    })
    .catch( err => {
      console.log(err);
    });
}); 






////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/', function (req, res) {
  res.redirect("/project")
  //res.send('Home Page')
})

app.get('/html', function (req, res) {
  //res.sendFile("views/index.html",{root: __dirname})
  //res.sendFile(__dirname + '/views/index.html');
  res.render('index')
})

app.get('/project', function (req, res) {
  res.render('IMEI.ejs')
})

app.get('/projectsignin', function (req, res) {
  res.render('signIn.ejs')
})

app.get('/projectsignup', function (req, res) {
  res.render('signUp.ejs')
})

app.get('/about', function (req, res) {
  res.render('about.ejs')
})


app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})



