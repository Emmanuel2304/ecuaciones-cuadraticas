function formula(){
  var A = document.getElementById('A').value;
  var B = document.getElementById('B').value;
  var C = document.getElementById('C').value;

  if(A=="" || B=="" || C==""){
    alert("Favor de llenar todos los campos");
  }
  else if (A==0) {
    alert("La ecuacion ya no seria cuadratica, favor de ingresar un numero diferente de 0 en A");
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
          var x2="-"+numerador+"/"+denominador1;
        }
        else {
          var x2=numerador+"/"+denominador1;
        }
      }

      if (x2%1==0) {
        console.log("Es un numero entero");
      }else {
        console.log("Es un numero decimal");
        if(denominador2<0){
          denominador2=(-1)*denominador2;
          var x2="-"+numerador+"/"+denominador2;
        }
        else {
          var x2=numerador+"/"+denominador2;
        }

      }
      console.log("denominador1 "+denominador1+" denominador2 "+denominador2);
      console.log(x1+" "+x2);
      console.log("Discriminant "+desc);
      console.log("Raiz "+raizdesc);
      alert("Existen dos raices X1= "+x1+" y X2= "+x2);
    }
    else if(desc==0){
      alert("Existe al menos una raiz ");
    }
    else if (desc<0) {
      alert("Raices imaginarias ");
    }
  }
}

function reset(){
  location.href="index.html";
}
