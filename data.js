var fs = require("fs");
const readline = require("readline-sync");
var axios = require("axios");
var url1 = ("https://api.merakilearn.org/courses")
axios.get(url1)
    .then(resp => {
        let DATA = (resp.data)
        let m = JSON.stringify(DATA, null, 4)
        fs.writeFileSync("courses.json", m)
})

