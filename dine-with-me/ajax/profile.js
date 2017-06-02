var fs = require('fs');

module.exports = {
    post: function (req, res) {
        var d = require("./userProfiles.json");
        d.push(req.body);
        fs.writeFile("ajax/userProfiles.json", JSON.stringify(d));
        res.success();
    }
}


