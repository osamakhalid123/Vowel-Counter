const input= document.getElementById("text_input");
const num_cunt= document.getElementById("cunt");
const bt= document.getElementById("btn");
const Final_result= document.getElementById("result");

result

let vowels= ["a","o","u","i","e"];

let counter=0;


bt.addEventListener("click", function cuntVowels(){



    for(let w of input.value){
        
           for(let v of vowels){
        if( v==w ){
            
            counter++;
           
        }
    }
    }

    num_cunt.innerHTML=counter;
    Final_result.innerHTML=`"${input.value}" has ${counter} Vowels`
    input.value="";
   
})


