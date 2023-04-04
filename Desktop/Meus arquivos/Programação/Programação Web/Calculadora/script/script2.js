/*document.getElementById("secondinp1").value = "Ainda não há histórico";
document.getElementById("secondinput2").value = "0";

var y = 0;
var p = 0;
var p2 = 0;

var c = document.querySelector("#btnes");

c.addEventListener("click",()=>{
    secondcalculadora.style.display = "block";
    secondbtnes.style.display = "none";
})

var enter = document.querySelector("#calc");



enter.addEventListener("keypress", function (e){
    if (e.key === "Enter"){
        console.log("Entra");
        new calcular();
    }
});


function calcular(){
    console.log(p + "" + p2);
    if(p == p2){
        if(document.getElementById("secondinput2").value .includes("Não é possível dividir por zero" ) || document.getElementById("secondinput2").value == "Resultado indefinido"){
            document.getElementById("secondinput2").value = "0";
        }
        var valor1 = new String(document.getElementById("secondinput1").value);
        var carp = "=";
        if(carp.includes(valor1[(valor1.length)-1])){
            document.getElementById("secondinput1").value = "";
        }
        document.getElementById("secondinput1").value = document.getElementById("secondinput1").value + document.getElementById("secondinput2").value;
        var valor = new String(document.getElementById("secondinput1").value);
        document.getElementById("secondinput1").value = document.getElementById("secondinput1").value + " =";
        
        x = 0;
        
        if(valor.includes("÷")){
            do{
                valor = valor.replace("÷","/");
            }while(valor.includes("÷"))
        }
        if(valor.includes("×")){
            do{
                valor = valor.replace("×","*");
            }while(valor.includes("×"))
            
        }
    
        document.getElementById("secondinput2").value = "";
    
        for( x = 0; x<valor.length; x++){
            document.getElementById("secondinput2").value = document.getElementById("secondinput2").value + valor[x];
        }
    
        var expression = new String(document.getElementById("secondinput2").value);
        document.getElementById("secondinput2").value = eval(expression.toString());
    
        
        if(document.getElementById("secondinput2").value == "NaN"){
            secondinput2.style.fontSize = "28px";
            document.getElementById("secondinput2").value="Resultado indefinido ";
            document.getElementById("secondinput1").value="";
        }
        else if(document.getElementById("secondinput2").value == "Infinity"){
            secondinput2.style.fontSize = "18px";
            document.getElementById("secondinput2").value="Não é possível dividir por zero   ";
            document.getElementById("secondinput1").value="";
        }
        else{
            if(document.getElementById("secondinp2").value == ""){
                document.getElementById("secondinp2").value = document.getElementById("secondinput1").value;
                document.getElementById("secondinp3").value = document.getElementById("secondinput2").value;
                secondinp1.style.display = "none";
                secondfb.style.display = "block";
                secondlimpar.style.display = "block";
            }
        
            else if(document.getElementById("secondinp4").value == ""){
                document.getElementById("secondinp4").value = document.getElementById("secondinp2").value;
                document.getElementById("secondinp5").value = document.getElementById("secondinp3").value;
                document.getElementById("secondinp2").value = document.getElementById("secondinput1").value;
                document.getElementById("secondinp3").value = document.getElementById("secondinput2").value;
                secondsb.style.display = "block";
            }
            else{
                document.getElementById("secondinp6").value = document.getElementById("secondinp4").value;
                document.getElementById("secondinp7").value = document.getElementById("secondinp5").value;
                document.getElementById("secondinp4").value = document.getElementById("secondinp2").value;
                document.getElementById("secondinp5").value = document.getElementById("secondinp3").value;
                document.getElementById("secondinp2").value = document.getElementById("secondinput1").value;
                document.getElementById("secondinp3").value = document.getElementById("secondinput2").value;
                secondtb.style.display = "block";
            }
        }
    }
}

function lh(){
    document.getElementById("secondinp6").value = "";
    document.getElementById("secondinp7").value = "";
    document.getElementById("secondinp4").value = "";
    document.getElementById("secondinp5").value = "";
    document.getElementById("secondinp2").value = "";
    document.getElementById("secondinp3").value = "";
    secondlimpar.style.display = "none";
    secondinp1.style.display = "block";
    secondfb.style.display = "none";
    secondtb.style.display = "none";
    secondsb.style.display = "none";
    document.getElementById("secondinp1").value = "Ainda não há histórico";
}
function bnt(q){
    var valor0 = new String(document.getElementById("secondinput2").value);
    if((document.getElementById("secondinput1").value).includes(" =") && !valor0[valor0.length-1].includes(".") && !document.getElementById("secondinput2").value == "" ){
        document.getElementById("secondinput1").value = "";
        document.getElementById("secondinput2").value = "";
    }
    if(document.getElementById("secondinput2").value .includes("Não é possível dividir por zero" ) || document.getElementById("secondinput2").value == "Resultado indefinido "){
        document.getElementById("secondinput2").value = "";
    }
    secondinput2.style.fontSize = "45px";
    if(document.getElementById("secondinput2").value == "0"){
        document.getElementById("secondinput2").value = "";
    }
    var valor = new String(document.getElementById("secondinput1").value);
    var carp = "+-*×÷/";
    if(carp.includes(valor[(valor.length)-2])  && !valor0[(valor0.length)-1].includes("(") && !valor0[(valor0.length)-1].includes("-") && y == 1){
        document.getElementById("secondinput2").value = "";
    }
    document.getElementById("secondinput2").value = document.getElementById("secondinput2").value  + q;
    y = 0;
}

function bnta(){
    if(document.getElementById("secondinput2").value .includes("Não é possível dividir por zero" ) || document.getElementById("secondinput2").value == "Resultado indefinido "){
        document.getElementById("secondinput2").value = "";
    }
    secondinput2.style.fontSize = "45px";
    var valor = new String(document.getElementById("secondinput1").value);
    var carp = "=";
    if(carp.includes(valor[(valor.length)-1])){
        document.getElementById("secondinput1").value = "";
    }
    document.getElementById("secondinput1").value = document.getElementById("secondinput1").value + document.getElementById("secondinput2").value  +  " + ";
    y = 1;
}

function bnts(){

    if(document.getElementById("secondinput2").value .includes("Não é possível dividir por zero" ) || document.getElementById("secondinput2").value == "Resultado indefinido "){
        document.getElementById("secondinput2").value = "-";
        secondinput2.style.fontSize = "45px";
        y = 0;
    }

    else{
        var valor0 = new String(document.getElementById("secondinput1").value);
        var valor = new String(document.getElementById("secondinput1").value);
        var carp = "=";
        if(carp.includes(valor[(valor.length)-1])){
            document.getElementById("secondinput1").value = "";
        }

        var carp1 = "+-*×/÷";

        if(carp1.includes(valor0[valor0.length-2]) ){
            document.getElementById("secondinput2").value = "-";
        }
        else{
            document.getElementById("secondinput1").value = document.getElementById("secondinput1").value + document.getElementById("secondinput2").value  + " - ";
        }

        y = 1;
    }
}

function bntm(){
    if(document.getElementById("secondinput2").value .includes("Não é possível dividir por zero" ) || document.getElementById("secondinput2").value == "Resultado indefinido "){
        document.getElementById("secondinput2").value = "";
    }
    secondinput2.style.fontSize = "45px";
    var valor = new String(document.getElementById("secondinput1").value);
    var carp = "=";

    if(carp.includes(valor[(valor.length)-1])){
        document.getElementById("secondinput1").value = "";
    }

    document.getElementById("secondinput1").value = document.getElementById("secondinput1").value + document.getElementById("secondinput2").value  +  " × ";
    y = 1;
}

function bntd(){
    if(document.getElementById("secondinput2").value .includes("Não é possível dividir por zero" ) || document.getElementById("secondinput2").value == "Resultado indefinido "){
        document.getElementById("secondinput2").value = "";
    }
    secondinput2.style.fontSize = "45px";
    var valor = new String(document.getElementById("secondinput1").value);
    var carp = "=";

    if(carp.includes(valor[(valor.length)-1])){
        document.getElementById("secondinput1").value = "";
    }

    document.getElementById("secondinput1").value = document.getElementById("secondinput1").value + document.getElementById("secondinput2").value  +  " ÷ ";
    y = 1;
}

function bntpo(){
    if(document.getElementById("secondinput2").value .includes("Não é possível dividir por zero" ) || document.getElementById("secondinput2").value == "Resultado indefinido "){
        document.getElementById("secondinput2").value = "";
    }
    secondinput2.style.fontSize = "45px";
    if(!document.getElementById("secondinput2").value.includes(".") ){
        document.getElementById("secondinput2").value = document.getElementById("secondinput2").value  + ".";
    }
}

function bntp(){
    var valor0 = new String(document.getElementById("secondinput2").value);
    if((document.getElementById("secondinput1").value).includes(" =") && !valor0[valor0.length-1].includes(".") && !document.getElementById("secondinput2").value == "" ){
        document.getElementById("secondinput1").value = "";
        document.getElementById("secondinput2").value = "";
    }
    if(document.getElementById("secondinput2").value .includes("Não é possível dividir por zero" ) || document.getElementById("secondinput2").value == "Resultado indefinido "){
        document.getElementById("secondinput2").value = "";
    }
    secondinput2.style.fontSize = "45px";
    if(document.getElementById("secondinput2").value == "0" && document.getElementById("secondinput1").value == ""){
        document.getElementById("secondinput2").value = "";
    }
    var valor = new String(document.getElementById("secondinput1").value);
    var carp = "+-/*×÷";

    var carp1 = "0123456789";
    if(carp1.includes(valor0[valor0.length-1]) && !carp.includes(valor[(valor.length)-2]) && !document.getElementById("secondinput2").value == "0"){
        document.getElementById("secondinput1").value = document.getElementById("secondinput1").value + document.getElementById("secondinput2").value +  " × ";
        document.getElementById("secondinput2").value = "";
    }

    if(carp.includes(valor[(valor.length)-2]) ){
        document.getElementById("secondinput2").value = "";
    }


    document.getElementById("secondinput2").value = document.getElementById("secondinput2").value  + "(";
    p = p + 1;
    
    
   
}
function bntp2(){
    var valor0 = new String(document.getElementById("secondinput2").value);

    if(p>p2 && !valor0[valor0.length-1].includes("(")){
        document.getElementById("secondinput2").value = document.getElementById("secondinput2").value  + ")";
        p2 = p2 + 1;
    }
    
}
function bnte(){
    if(document.getElementById("secondinput2").value .includes("Não é possível dividir por zero" ) || document.getElementById("secondinput2").value == "Resultado indefinido "){
        document.getElementById("secondinput2").value = "";
    }
    secondinput2.style.fontSize = "45px";
    var vali = String(document.getElementById("secondinput2").value);
    var valor =  vali;
    var tamv = (vali).length;
    var x = 0;

    document.getElementById("secondinput2").value = "";

    for(x=0; x<tamv-1; x++){
        document.getElementById("secondinput2").value = document.getElementById("secondinput2").value + valor[x];
    }

    if(document.getElementById("secondinput2").value == ""){
        document.getElementById("secondinput1").value = "";
        document.getElementById("secondinput2").value = "0";
    }
}
function bntce(){
    if(document.getElementById("secondinput2").value .includes("Não é possível dividir por zero" ) || document.getElementById("secondinput2").value == "Resultado indefinido "){
        document.getElementById("secondinput2").value = "";
    }
    secondinput2.style.fontSize = "45px";
    document.getElementById("secondinput2").value = "0";
    document.getElementById("secondinput1").value = "";
}



function secondminimizar (){
    calculadora.style.display = "block";
    calculadora.style.height = "34px";
    calculadora.style.width = "217px";
    btnm2.style.display = "none";
    btm3.style.left = "123px";
    btf1.style.left = "120px";
    calculadora2.style.display = "none";
}

function secondfechar(){
    calculadora2.style.display = "none";
    secondbtnes.style.display = "flex";
    document.getElementById("secondinp2").value = "";
    document.getElementById("secondinp3").value = "";
    document.getElementById("secondinp4").value = "";
    document.getElementById("secondinp5").value = "";
    document.getElementById("secondinp6").value = "";
    document.getElementById("secondinp7").value = "";
    document.getElementById("secondinput1").value = "";
    document.getElementById("secondinput2").value = "0";
    secondinp1.style.display = "block";
    secondfb.style.display = "none";
    secondsb.style.display = "none";
    secondtb.style.display = "none";
    secondlimpar.style.display = "none";
    secondhistorico.style.top =  "55px";
    secondcalculadora.style.height = "540px";
    secondhistorico.style.top =  "55px"
    secondcalculadora.style.width = "320px";
    secondbtnm2.style.display = "inline-block";
    secondbtm3.style.left = "177px";
    secondbtf1.style.left = "173px";
    
}*/
