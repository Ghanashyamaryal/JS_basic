// const details1  = {
//     name:"anjan",
//     roll:1,
//     collage:"AMRIT CAMPUS",
//     detail:function(){
//         console.log(`He is ${this.name} having rollno ${this.roll} who study in ${this.collage}`) //here this define the a object
//     }
// }
// const detail2 = {
//     name:"anjana",
//     roll:13,
//     collage:"AMRIT science CAMPUS",
// }
// details1.detail()
// details1.detail.call(detail2);//call method 


// //bind methid :  synatax-- const a = function_name.bind(obj)

// function greeting(){
//     console.log(`hello ${this.name} welcome to ${this.city} city`)
// }
const names  = {
    name:"anjan",
   city:"butwal"
}
// const greet  = greeting.bind(names);
// greet();

//for in loop is used in objects 

for(let key in names){
    // console.log(key)
    console.log(names.key)  //or
    // console.log(names["name"])
}