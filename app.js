const express = require("express")
const path = require("path")
const port = process.env.PORT || 8000

const app = express()
app.use("/images", express.static("images"))
app.use(express.static("public"))

app.get("/", (req, res) => {
  var options = {
    root: path.join(__dirname),
  }
  const fileName = "home.html"
  res.sendFile(__dirname + "/home.html", function (err) {
    if (err) {
      console.log("Error in sending file")
    } else {
      console.log("sent file successfully")
    }
  })
})

//listening

app.listen(port, function () {
  console.log("Server started on port")
})
