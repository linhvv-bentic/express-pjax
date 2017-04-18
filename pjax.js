var platform_module = require("../../models/platform_module");

module.exports = function() {
    return function(req, res, next) {

        if (req.header('X-PJAX')) {
            req.pjax = true;
        }

        res.renderPjax = function(view, options, fn) {
            if (req.pjax) {
                view = 'modules/' + view;
            }
            platform_module.renderNavigation(req, function(err, result) {
                options["nav"] = result;
                res.render(view, options, fn);
            });
        };

        next();
    };
};
