const Express = require("express");
const BodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");


const app = Express();

app.use(BodyParser.urlencoded({ extended: false }))
app.use(BodyParser.json());
app.use(cors());
app.use(morgan('tiny'));



const password = "F5ipd2lxdgGfok6A";
//const uri="mongodb://127.0.0.1:27017/linkedin";
const uri = "mongodb+srv://amara11:"+password+"@cluster0-09veh.mongodb.net/RibatFm?retryWrites=true&w=majority"

//mongodb://localhost:27017/Ribat
    // @cluster0 - 09 veh.mongodb.net / RibatFm ? retryWrites = true & w = majority ";
    // const uri = "mongodb://localhost:27017";




mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
mongoose.connection.on('err', () => { console.log('connection failed') });
mongoose.connection.on('ok', () => { console.log('connection done') })








//routes 
const adminRoute = require("./routes/admin");
const categoryRoute = require("./routes/category");
const actualiteRoute = require("./routes/actualite");
const podcastRoute = require("./routes/podcast");
const episodeRoute = require("./routes/episode");
const videoRoute = require("./routes/video");
const commentRoute = require("./routes/comment");

app.use("/comment",commentRoute);
app.use("/admin", adminRoute);
app.use("/actualite", actualiteRoute);
app.use("/podcast", podcastRoute);
app.use("/category", categoryRoute);
app.use('/episode', episodeRoute);
app.use('/video', videoRoute);

app.use('/uploads', Express.static('uploads'));



app.listen(3000, () => {
    console.log("app is running on port " + 3000);
})