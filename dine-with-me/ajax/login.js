
module.exports = {
    get: function (req, res) {
        res.success(require("./login.json"));
    }
}
