# express-pjax

Express middleware for Pjax.

## Installation

```
npm install --from-git git://github.com/optikfluffel/express-pjax.git
```

## Usage

If you use `res.renderPjax` method, the request of pjax will be handled automatically if you put your views without the `extends layout` stuff in a `pjax` subfolder and include them in your layout enabled views with `include pjax/foo`. See [comment from @kwood1138](https://github.com/visionmedia/express/issues/1123#issuecomment-9715981) or my [express-pjax-demo](https://github.com/optikfluffel/express-pjax-demo) for more details.

```javascript
var express = require('express');
var pjax    = require('express-pjax');
var app     = express.createServer();

app.configure(function() {
  app.use(pjax());
  // -- snip --
});

app.get('/', function(req, res) {
  res.renderPjax('index', { locals: { hello: "Hello World!" } });
});

app.get('/foo', function(req, res) {
  res.renderPjax('foo');
});
```

## Demo

You can find a demo using this thing together with [jquery-pjax](https://github.com/defunkt/jquery-pjax) over at [github.com/optikfluffel/express-pjax-demo](https://github.com/optikfluffel/express-pjax-demo)

## TODO

* Support redirect.

## Kudos

Thanks go to @kwood1138 for this [little solution](https://github.com/visionmedia/express/issues/1123#issuecomment-9715981). I just put it in a github repo to use it with npm.

## License

DO WHATEVER THE FUCK YOU WANT, PUBLIC LICENSE
TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

 0\. You just DO WHATEVER THE FUCK YOU WANT.
