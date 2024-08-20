//Función para convertir grados Farenhel a Celsius
function FtoC(grados){
Celsius = (grados-32)*(5/9);
return Celsius.toFixed(2);
}
//Función para convertir grados Celsius a Farenhel
function Ctof (grados){
    Farenhel = grados*(9/5)+32;
    return Farenhel.toFixed(2);
}
//Función vista de la conversión de grados 1
function mostrarFtoC(){
    grados = document.getElementById("Farenhel").value;
    mostrarCelsius = document.getElementById("grados_C");
    if(grados){
        Celsius = FtoC(grados);
        mostrarCelsius.textContent = `${grados} grados Farenhel son ${Celsius} grados Celsius`;
        console.log(Celsius)
    }
    else{
        mostrarCelsius.textContent = "Ingrese los Grados"
    }

}
//Función vista de la conversión de grados 2
function mostrarCtoF(){
    grados = document.getElementById("Celsius").value;
    mostrarFarenhel = document.getElementById("grados_F");
    if(grados){
        Farenhel = Ctof(grados);
        mostrarFarenhel.textContent = `${grados} grados Celsius son ${Farenhel} grados Farenhel`;
        console.log(Farenhel);
    }
    else{
        mostrarFarenhel.textContent = "Ingrese los Grados"
    }

}

boton1 = document.getElementById("button1").addEventListener("click", mostrarFtoC);
boton2 = document.getElementById("button2").addEventListener("click", mostrarCtoF);