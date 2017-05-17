var fs = require('fs');

module.exports = {
    post: function (req, res) {
    	if (!req.body.username || req.body.username == "") {
            res.error(1, "Please specify a username");
            return;
        }
        if (!req.body.password || req.body.password == "") {
            res.error(2, "Please specify a password");
            return;
        }
        if (!req.body.confirmpassword || !req.body.confirmpassword) {
            res.error(3, "Please confirm your password");
            return;
        }
        if(req.body.confirmpassword != req.body.password){ 
        	res.error(4, "Passwords do not match");
        	return;
        }
        var d = require("./login.json");
        d.push(req.body);
        fs.writeFile("ajax/login.json", JSON.stringify(d));
        res.success();
    }
}




