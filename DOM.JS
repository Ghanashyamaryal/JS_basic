
// const heading = document.querySelector('h1');
// console.log(heading.innerText);
// console.log(heading.innerHTML)

// const link = document.querySelector(".info a")
// // console.log(link)
// console.log(link.getAttribute("href"))
// link.textContent  += "This will help you"


// link.setAttribute("href","https://www.youtube.com/watch?v=NS0GrJvxkaM")

// //we cannot use array methods in html methods
// //to convert html collection to array we use ARRAY.from(...)
// const fname = document.querySelector("#name")
// const submit = document.querySelector("#submit")
// const form = document.querySelector(".form1")
 
// submit.addEventListener("click",(e)=>{
//     e.preventDefault();
//     console.log(e);
//     console.log(fname.value)
//     console.log("you clicked me")

// })

// const data = async function(){
//     const datavalue=await fetch("https://jsonplaceholder.typicode.com/users")
//     const data1 = datavalue.json()
//     console.log(data1   )
//   }
//   data()

// using promises

const data = async function(){
    const datavalue = await fetch("https://jsonplaceholder.typicode.com/users")
   const data1= await datavalue.json()
    console.log(data1)
}