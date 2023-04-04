document.getElementById("inp1").value = "Ainda não há histórico";
document.getElementById("input2").value = "0";
historico.style.top =  "55px";
inp1d.style.display = "block";

var y = 0;
var p = 0;
var p2 = 0;

var c = document.querySelector("#btnes");

c.addEventListener("click",()=>{
    calculadora.style.display = "block";
    btnes.style.display = "none";
})

var enter = document.querySelector("#calc");



enter.addEventListener("keypress", function(e){
    if (e.key === "Enter"){
        console.log("Entra");
        new calcular();
    }
});


function calcular(){
    if(p == p2){
        if(document.getElementById("input2").value .includes("Não é possível dividir por zero" ) || document.getElementById("input2").value == "Resultado indefinido"){
            document.getElementById("input2").value = "0";
        }
        var valor1 = new String(document.getElementById("input1").value);
        var carp = "=";
        if(carp.includes(valor1[(valor1.length)-1])){
            document.getElementById("input1").value = "";
        }
        document.getElementById("input1").value = document.getElementById("input1").value + document.getElementById("input2").value;
        var valor = new String(document.getElementById("input1").value);
        document.getElementById("input1").value = document.getElementById("input1").value + " =";
        
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
    
        document.getElementById("input2").value = "";
    
        for( x = 0; x<valor.length; x++){
            document.getElementById("input2").value = document.getElementById("input2").value + valor[x];
        }
    
        var expression = new String(document.getElementById("input2").value);
        document.getElementById("input2").value = eval(expression.toString());
    
        
        if(document.getElementById("input2").value == "NaN"){
            input2.style.fontSize = "28px";
            document.getElementById("input2").value="Resultado indefinido ";
            document.getElementById("input1").value="";
        }
        else if(document.getElementById("input2").value == "Infinity"){
            input2.style.fontSize = "18px";
            document.getElementById("input2").value="Não é possível dividir por zero   ";
            document.getElementById("input1").value="";
        }
        else{
            if(document.getElementById("inp2").value == ""){
                document.getElementById("inp2").value = document.getElementById("input1").value;
                document.getElementById("inp3").value = document.getElementById("input2").value;
                inp1d.style.display = "none";
                fb.style.display = "block";
                limpar1.style.display = "block";
            }
        
            else if(document.getElementById("inp4").value == ""){
                document.getElementById("inp4").value = document.getElementById("inp2").value;
                document.getElementById("inp5").value = document.getElementById("inp3").value;
                document.getElementById("inp2").value = document.getElementById("input1").value;
                document.getElementById("inp3").value = document.getElementById("input2").value;
                sb.style.display = "block";
            }
            else{
                document.getElementById("inp6").value = document.getElementById("inp4").value;
                document.getElementById("inp7").value = document.getElementById("inp5").value;
                document.getElementById("inp4").value = document.getElementById("inp2").value;
                document.getElementById("inp5").value = document.getElementById("inp3").value;
                document.getElementById("inp2").value = document.getElementById("input1").value;
                document.getElementById("inp3").value = document.getElementById("input2").value;
                tb.style.display = "block";
            }
        }
    }
}

function lh(){
    document.getElementById("inp6").value = "";
    document.getElementById("inp7").value = "";
    document.getElementById("inp4").value = "";
    document.getElementById("inp5").value = "";
    document.getElementById("inp2").value = "";
    document.getElementById("inp3").value = "";
    limpar.style.display = "none";
    inp1d.style.display = "block";
    fb.style.display = "none";
    tb.style.display = "none";
    sb.style.display = "none";
}
function bnt(q){
    var valor0 = new String(document.getElementById("input2").value);
    if((document.getElementById("input1").value).includes(" =") && !valor0[valor0.length-1].includes(".") && !document.getElementById("input2").value == "" ){
        document.getElementById("input1").value = "";
        document.getElementById("input2").value = "";
    }
    if(document.getElementById("input2").value .includes("Não é possível dividir por zero" ) || document.getElementById("input2").value == "Resultado indefinido "){
        document.getElementById("input2").value = "";
    }
    input2.style.fontSize = "45px";
    if(document.getElementById("input2").value == "0"){
        document.getElementById("input2").value = "";
    }
    var valor = new String(document.getElementById("input1").value);
    var carp = "+-*/×÷";
    if(carp.includes(valor[(valor.length)-2])  && !valor0[(valor0.length)-1].includes("(") && !valor0[(valor0.length)-1].includes("-") && y == 1){
        document.getElementById("input2").value = "";
    }
    document.getElementById("input2").value = document.getElementById("input2").value  + q;
    y = 0;
}

function bnta(){
    if(document.getElementById("input2").value .includes("Não é possível dividir por zero" ) || document.getElementById("input2").value == "Resultado indefinido "){
        document.getElementById("input2").value = "";
    }
    input2.style.fontSize = "45px";
    var valor = new String(document.getElementById("input1").value);
    var carp = "=";
    if(carp.includes(valor[(valor.length)-1])){
        document.getElementById("input1").value = "";
    }
    document.getElementById("input1").value = document.getElementById("input1").value + document.getElementById("input2").value  +  " + ";
    y = 1;
}

function bnts(){

    if(document.getElementById("input2").value .includes("Não é possível dividir por zero" ) || document.getElementById("input2").value == "Resultado indefinido "){
        document.getElementById("input2").value = "-";
        input2.style.fontSize = "45px";
        y = 0;
    }

    else{
        var valor0 = new String(document.getElementById("input1").value);
        var valor = new String(document.getElementById("input1").value);
        var carp = "=";
        if(carp.includes(valor[(valor.length)-1])){
            document.getElementById("input1").value = "";
        }

        var carp1 = "+-*/×÷";

        if(carp1.includes(valor0[valor0.length-2]) ){
            document.getElementById("input2").value = "-";
        }
        else{
            document.getElementById("input1").value = document.getElementById("input1").value + document.getElementById("input2").value  + " - ";
        }

        y = 1;
    }
}

function bntm(){
    if(document.getElementById("input2").value .includes("Não é possível dividir por zero" ) || document.getElementById("input2").value == "Resultado indefinido "){
        document.getElementById("input2").value = "";
    }
    input2.style.fontSize = "45px";
    var valor = new String(document.getElementById("input1").value);
    var carp = "=";

    if(carp.includes(valor[(valor.length)-1])){
        document.getElementById("input1").value = "";
    }

    document.getElementById("input1").value = document.getElementById("input1").value + document.getElementById("input2").value  +  " × ";
    y = 1;
}

function bntd(){
    if(document.getElementById("input2").value .includes("Não é possível dividir por zero" ) || document.getElementById("input2").value == "Resultado indefinido "){
        document.getElementById("input2").value = "";
    }
    input2.style.fontSize = "45px";
    var valor = new String(document.getElementById("input1").value);
    var carp = "=";

    if(carp.includes(valor[(valor.length)-1])){
        document.getElementById("input1").value = "";
    }

    document.getElementById("input1").value = document.getElementById("input1").value + document.getElementById("input2").value  +  " ÷ ";
    y = 1;
}

function bntpo(){
    if(document.getElementById("input2").value .includes("Não é possível dividir por zero" ) || document.getElementById("input2").value == "Resultado indefinido "){
        document.getElementById("input2").value = "";
    }
    input2.style.fontSize = "45px";
    if(!document.getElementById("input2").value.includes(".") ){
        document.getElementById("input2").value = document.getElementById("input2").value  + ".";
    }
}

function bntp(){
    var valor0 = new String(document.getElementById("input2").value);
    if((document.getElementById("input1").value).includes(" =") && !valor0[valor0.length-1].includes(".") && !document.getElementById("input2").value == "" ){
        document.getElementById("input1").value = "";
        document.getElementById("input2").value = "";
    }
    if(document.getElementById("input2").value .includes("Não é possível dividir por zero" ) || document.getElementById("input2").value == "Resultado indefinido "){
        document.getElementById("input2").value = "";
    }
    input2.style.fontSize = "45px";
    if(document.getElementById("input2").value == "0" && document.getElementById("input1").value == ""){
        document.getElementById("input2").value = "";
    }
    var valor = new String(document.getElementById("input1").value);
    var carp = "+-*/×÷";

    var carp1 = "0123456789";
    if(carp1.includes(valor0[valor0.length-1]) && !carp.includes(valor[(valor.length)-2]) && !document.getElementById("input2").value == "0"){
        document.getElementById("input1").value = document.getElementById("input1").value + document.getElementById("input2").value +  " × ";
        document.getElementById("input2").value = "";
    }

    if(carp.includes(valor[(valor.length)-2]) ){
        document.getElementById("input2").value = "";
    }


    document.getElementById("input2").value = document.getElementById("input2").value  + "(";
    p = p + 1;
    
    
   
}
function bntp2(){
    var valor0 = new String(document.getElementById("input2").value);

    if(p>p2 && !valor0[valor0.length-1].includes("(")){
        document.getElementById("input2").value = document.getElementById("input2").value  + ")";
        p2 = p2 + 1;
    }
    
}
function bnte(){
    if(document.getElementById("input2").value .includes("Não é possível dividir por zero" ) || document.getElementById("input2").value == "Resultado indefinido "){
        document.getElementById("input2").value = "";
    }
    input2.style.fontSize = "45px";
    var vali = String(document.getElementById("input2").value);
    var valor =  vali;
    var tamv = (vali).length;
    var x = 0;

    document.getElementById("input2").value = "";

    for(x=0; x<tamv-1; x++){
        document.getElementById("input2").value = document.getElementById("input2").value + valor[x];
    }

    if(document.getElementById("input2").value == ""){
        document.getElementById("input1").value = "";
        document.getElementById("input2").value = "0";
    }
}
function bntce(){
    if(document.getElementById("input2").value .includes("Não é possível dividir por zero" ) || document.getElementById("input2").value == "Resultado indefinido "){
        document.getElementById("input2").value = "";
    }
    input2.style.fontSize = "45px";
    document.getElementById("input2").value = "0";
    document.getElementById("input1").value = "";
}

function geth() {
    if(historico.style.top == "55px"){
        historico.style.top =  "-329px";
    }
    else{
        historico.style.top =  "55px";
    }
}

function minimizar (){
    calculadora.style.height = "34px";
    calculadora.style.width = "217px";
    btnm2.style.display = "none";
    btm3.style.left = "123px";
    btf1.style.left = "120px";

}

function maximizar (){

    if(calculadora.style.height === "34px"){
        historico.style.top =  "55px"
        calculadora.style.height = "540px";
        calculadora.style.width = "320px";
        btnm2.style.display = "inline-block";
        btm3.style.left = "177px";
        btf1.style.left = "173px";
    }

    else{
        calculadora.style.display = "none";
        //calculadora2.style.display = "block"; 
    }
}

function fechar(){
    calculadora.style.display = "none";
    btnes.style.display = "flex";
    document.getElementById("inp2").value = "";
    document.getElementById("inp3").value = "";
    document.getElementById("inp4").value = "";
    document.getElementById("inp5").value = "";
    document.getElementById("inp6").value = "";
    document.getElementById("inp7").value = "";
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "0";
    inp1.style.display = "block";
    fb.style.display = "none";
    sb.style.display = "none";
    tb.style.display = "none";
    limpar.style.display = "none";
    historico.style.top =  "55px";
    calculadora.style.height = "540px";
    historico.style.top =  "55px"
    calculadora.style.width = "320px";
    btnm2.style.display = "inline-block";
    btm3.style.left = "177px";
    btf1.style.left = "173px";
    
}





