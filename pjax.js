module.exports = function() {
  return function(req, res, next) {

    if (req.header('X-PJAX')) {
      req.pjax = true;
    }

    res.renderPjax = function(view, options, fn) {
      if (req.pjax) {
        view = 'pjax/' + view;
      }

      res.render(view, options, fn);
    };

    next();
  };
};
