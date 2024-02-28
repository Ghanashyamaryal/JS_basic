//higher order function 

const lowercase  = function(str){
    return str.toLowerCase();
}
const uppercase  =(str)=>{
    return str.toUpperCase();
}

const transform = (str,func)=> func(str);
//no need to write return keyword if single line is in the function //note:if we use {} then we need to use return keyword

const result = transform("hello world",uppercase)
console.log(result);

console.log(transform(result,lowercase))