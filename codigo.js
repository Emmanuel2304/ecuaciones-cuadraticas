function formula(){
  var A = document.getElementById('A').value;
  var B = document.getElementById('B').value;
  var C = document.getElementById('C').value;

  if(B=="" || C==""){
    //alert("Favor de llenar todos los campos");
    document.getElementById("texto").innerHTML="Favor de llenar todos los campos";
  }
  else if (A==0) {
    //alert("La ecuacion ya no seria cuadratica, favor de ingresar un numero diferente de 0 en A");
    document.getElementById("texto").innerHTML="La ecuación ya no seria cuadrática, favor de ingresar un numero diferente de 0 en A";
  }
  else if (A!=0) {
    var poten=Math.pow(B,2);
    var desc=poten-(4*A*C);
    if (desc>0) {
      var numerador=(-4)*A*C;//-4AC
      var raizdesc=Math.sqrt(desc);
      var raizdescneg=(-1)*raizdesc;
      var denominador1=2*A*(B-raizdescneg);//2AB(B+RAIZ(B2-4AC))
      var denominador2=2*A*(B-raizdesc);//2AB(B-RAIZ(B2-4AC))

      var x1=numerador/denominador1; var redon1=x1.toFixed(3);
      var x2=numerador/denominador2; var redon2=x2.toFixed(3);

      if(x1%1==0){
        console.log("Es un numero entero");
      }else {
        console.log("Es un decimal");
        if(denominador2<0){
          denominador2=(-1)*denominador1; 
          numerador=(-1)*numerador;         
          //var x2="-"+numerador+"<br>___<br>"+denominador1;
          var x1 = '<div style="width:8%;margin:0px;display:inline-block;font-size:10px;">'+
                    '<div>'+
                      numerador+
                    '</div>'+
                    '<div style="border-top:solid 1px black;">'+
                      denominador1+
                    '</div>'+
                    '</div>';
        }
        else {
          //var x2=numerador+"<br>___<br>"+denominador1;
          var x1 = '<div style="width:8%;margin:0px;display:inline-block;font-size:10px;">'+
                    '<div>'+
                      numerador+
                    '</div>'+
                    '<div style="border-top:solid 1px black;">'+
                      denominador1+
                    '</div>'+
                    '</div>';
        }
      }

      if (x2%1==0) {
        console.log("Es un numero entero");
      }else {
        console.log("Es un numero decimal");
        if(denominador2<0){
          denominador2=(-1)*denominador2;
          numerador=(-1)*numerador;
          //var x2="-"+numerador+"<br>___"+denominador2;
          var x2 = '<div style="width:8%;margin:0px;display:inline-block;font-size:10px;">'+
                    '<div style="float:left;width:100%;">'+
                      numerador+
                    '</div>'+
                    '<div style="border-top:solid 1px black;float:left;width:100%;">'+
                      denominador2+
                    '</div>'+
                    '</div>';
        }
        else {
          //var x2=numerador+"/"+denominador2;//sustituir variable
          var x2 = '<div style="width:8%;margin:0px;display:inline-block;font-size:10px;">'+
                    '<div>'+
                      numerador+
                    '</div>'+
                    '<div style="border-top:solid 1px black;">'+
                      denominador2+
                    '</div>'+
                    '</div>';
        }

      }
      console.log("denominador1 "+denominador1+" denominador2 "+denominador2);
      console.log(x1+" "+x2);
      console.log("Discriminant "+desc);
      console.log("Raiz "+raizdesc);
      //alert("Existen dos raices X1= "+x1+" y X2= "+x2);
      
      document.getElementById("texto").innerHTML="Existen dos raices"+"<br> X1= "+x1+" y X2= "+x2;
      
    }
    else if(desc==0){
      //alert("Existe al menos una raiz ");
      var resultado = ((-2)*C)/B;
      if(resultado>0){
        resultado=(-1)*resultado;
        document.getElementById("texto").innerHTML="Existe al menos una raiz (X"+resultado+")<sup>2</sup>=0";
      }
      else{
        resultado=(-1)*resultado;
        document.getElementById("texto").innerHTML="Existe al menos una raiz (X+"+resultado+")<sup>2</sup>=0";
      }
      
    }
    else if (desc<0) {
      //alert("Raices imaginarias ");
      document.getElementById("texto").innerHTML="Raices imaginarias";
    }
  }
}

function reset(){
  location.href="index.html";
}
