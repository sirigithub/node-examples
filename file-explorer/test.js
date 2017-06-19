var fs=require('fs'), stdin = process.stdin
  , stdout = process.stdout
fs.readdir(__dirname, function (err, files) {
  console.log(files);
});
