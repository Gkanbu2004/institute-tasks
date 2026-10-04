let tamil=Number(prompt("Enter the Tamil Mark: "));
let english=Number(prompt("Enter the english Mark: "));
let maths=Number(prompt("Enter the maths Mark: "));
let science=Number(prompt("Enter the science Mark: "));
let social=Number(prompt("Enter the social Mark: "));
let total_mark=tamil+english+maths+science+social;
console.log("Total Mark:"+total_mark);
let Avg=total_mark/5;
console.log("Average Mark:"+Avg);
if(tamil>=35 && english>=35 && maths>=35 && science>=35 && social>=35){
    if(Avg>=90){
        console.log("O Grade");
    }
    else if(Avg>=80){
          console.log("A Grade");
    }
    else if(Avg>=70){
          console.log("B+ Grade");
    }
    else if(Avg>=60){
          console.log("B Grade");
    }
    else if(Avg>=50){
          console.log("c Grade");
    }
    else if(Avg>=36){
          console.log("d Grade");
    }
    else{
    console.log("no grade");
    }
   
}
else{
      console.log("Fail"); 
}