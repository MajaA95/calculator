let values = []; //gi stava vrednostite vo sting

let result=document.getElementById("inputext"); //povlekuva od inputot

let last_number="";

let final_result=0;

function isOperator(number){
    if(number === "+" || number === "-" || number === "/" || number === "*" ||number === "%" ){
        return true;
    }
    return false;
}
let calculate=(number)=>{
    result.value+=number; //result =result + number
    if(isOperator(number))// ako br e ednakov po vrednost i tip
    {
        values.push(last_number); //se dodeka nema znak da redi br edna do dr kako string
        last_number="";// resetira
        values.push(number);
    } else {

        last_number+=number;
    }
}
let Result=()=>{ //vlece od values vrednosti 
    values.push(last_number)  // go dodava posledniot broj
    final_result=parseInt(values[0]);
    for(let i=1; i < values.length; i++){     //gi proveruva eden po eden 
        let element=values[i];
        if(isOperator(element) )//proveruva dali e elementot znak so funkcija
        { 
            switch(element){
                case "+":
                    final_result+=parseInt(values[i+1]);
                    break;
                case "-":
                    final_result-=parseInt(values[i+1]);
                    break;
                case "/":
                    final_result/=parseInt(values[i+1]);
                    break;
                case "*":
                    final_result*=parseInt(values[i+1]);
                    break;
                case "%":
                    final_result%=parseInt(values[i+1]);
                    break;
                default: 
                    break;
            }
            i++;
        }
    }
    result.value+='='+final_result;
}
function clr(){                  // brishe se
    result.value= " ";

}
function del(){                                 //brishe posleden broj
    result.value=result.value.slice(0,-1);
    last_number=last_number.slice(0,-1)
}
