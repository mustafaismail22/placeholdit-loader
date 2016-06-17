var fileUrl = require("./file-2.png");
document.write('<img src="' + fileUrl + '" />');


var fileAsBase64Src = require("-!base64-image!placeholdit-loader!./file-3.gif");
document.write('<img src="' + fileAsBase64Src + '" />');
