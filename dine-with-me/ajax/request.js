module.exports = {
    post: function (req, res) {
        if (!req.body.name || req.body.name == "") {
            res.error(1, "Please specify your name");
            return;
        }
        if (!req.body.description || req.body.description == "") {
            res.error(2, "Please specify your description");
            return;
        }
        if (!req.body.lat || !req.body.lng) {
            res.error(3, "Please specify your location");
            return;
        }
        req.body.lat = parseFloat(req.body.lat);
        req.body.lng = parseFloat(req.body.lng);
        require("./data.json").push(req.body);
        res.success();
    }
}
