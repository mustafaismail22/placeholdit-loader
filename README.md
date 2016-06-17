# [Placehold.it](http://placehold.it) loader for webpack

## Installation

``` javascript
npm install --save-dev placeholdit-loader
```

## Basic usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

``` javascript

loaders: [
    {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
            'file-loader?name=[name]-[hash:6].[ext]',
            'placeholdit-loader?bypassOnDebug=false'
        ]
    }
]

```

Or

``` javascript

var fileAsBase64Src = require("base64-image!placeholdit!./file.png");
document.write('<img src="' + fileAsBase64Src + '" />');

var fileUrl = require("file!placeholdit!./file-2.gif");
document.write('<img src="' + fileUrl + '" />');

```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
