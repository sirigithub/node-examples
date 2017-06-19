console.log(1);
process.nextTick(function () {
    console.log(2);
});
console.log(3);
console.log(process.title);
console.log(global.name);