

// console.log("hello world");


// const circle={
//     radius:1,
//     location:{
//         x:1,
//         y:1
//     },
//     draw:function(){
//         console.log('draw');
//     }

// }
// circle.draw();

// factory method
// function empSalary(pay){
//     return{
//         pay:pay,
//         print:function(){
//             console.log(pay);
//         }
//     };
// }
// const emp=empSalary("100");
// emp.print();

// Constructor method
// function EmpSalary(des,pay){
//     this.des=des;
//     this.pay=pay;
//     console.log(pay);
//     this.salary=function(){
//         console.log(pay,'inside');
//     }
// }
// const emp=new EmpSalary("software","20000");
// emp.salary()

//primitives
// var a=10;
// b=a;
// a=11;
// console.log(a);
// console.log(b);

// Reference Type
// var obj={value:10};
// var y=obj;
// obj.value=20;
// console.log(obj.value);
// console.log(y);

// var obj={
//     name1:"Dhamu",
//     name2:"power",
//     name3:"thala"
// }
// var array= Object.values(obj);
// console.log(array);

// if("name1" in obj){
//     console.log("yes i am in");
// }


//Review question
// var NewArray=[];
// var arrayOfObjects=[
//     {
//         name:"dhamu",
//         des:"Dev"
//     },
//     {
//         name:"magesh",
//         des:"Dev"
//     },
//     {
//         name:"Yuvraj",
//         des:"mensa"
//     }
// ]
// arrayOfObjects.forEach(function(arrayElement){
//     var x=arrayElement.name;
//     NewArray.push(x);
// })
// console.log(NewArray);
// console.log(arrayOfObjects);

//abstraction---Private and getters & setters
// function EmpSalary(des,pay){
//     this.des=des;
//     this.pay=pay;
//     let pf=1000;
//     Object.defineProperty(this,'pf',{
//         get:function(){
//             return pf;
//         },
//         set:function(value){
//             if(value>500){
//                 pf=value;
//             }
//             else{
//                 throw new Error("Pf cannot be lesser than 500");
//             }
//         }
//     })
//     this.salary=function(){
//         console.log(pay,'inside');
//     }
// }
// const emp=new EmpSalary("software","20000");
// console.log(emp.pf=2000);
// console.log(emp.pf=499); 


// StopWatch Application

// function StopWatch(){
// let startTime, endTime, running, duration=0;

// this.start=function(){
//     if(running){
//         console.log("Stopwatch is already running!");
//     }
//     running=true;
//     startTime=new Date();
//     console.log("started!!!!!!!");
// }
//  this.stop = function(){

//    if(!running){
//        console.log("Stopwatch is not started");
//    }
//    running=false;
//    endTime= new Date();
//    console.log("stopped!!!");
//    const seconds=((endTime.getTime())-(startTime.getTime()))/1000;
//    duration=duration+seconds;

// }
// this.reset=function(){
//     startTime=null;
//     endTime=null;
//     running=false;
//     duration=0;
//     console.log("stopwatch reseted!!");
// }
// Object.defineProperty(this,'duration',{
//     get:function(){
//         return duration;
//     }

// });

// }
// const sw=new StopWatch;

//Prototype_Basic
// function Person(f,l,age,gend)
// {
//     this.name={
//         f,
//         l
//     };
//     this.age=age;
//     this.gend=gend;
// }

// var obj=new Person("Dhamu","sniper",23,"male");

// Person.prototype.greeting=function(){
//     console.log(this.name.f);
// }


//Protyping using CALL

