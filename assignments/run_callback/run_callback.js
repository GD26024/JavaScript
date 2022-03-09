function RunCallback(a, b, cb) {
    // Write you code here, you need to add a and b, pass the result into callback function cb as argument return the result
let c;
c=a+b;
return cb(c)

}


module.exports = RunCallback;

const obj={
    name:"ganesh",
    surename:"Deshmukh"
}