var mybuffer = new Buffer('==ii1j2i3h1i23hghg', 'base64');
console.log(mybuffer);
require('fs').writeFile('logo.png', mybuffer);