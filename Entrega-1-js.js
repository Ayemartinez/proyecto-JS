let nombre = prompt("Ingrese su nombre");
let apellido= prompt("Ingrese su apellido");

alert("Bienvenido " + nombre + " " + apellido + " al simulador de financiaciones Yamaha motos Argentina");

let seleccioneMoto = Number(prompt("Seleccione una opción: \n 1 - Yamaha YBR125ed \n 2 - Yamaha fz-s disco 150 \n 3 - Yamaha XTZ150 \n 4 - Yamaha Ray ZR 125 fi"))

const YamahaYbr = 687550
const YamahaFz = 1040600
const YamahaXtz = 1302700
const YamahaRay = 878600

let dineroEfectivo = parseInt(prompt("Ingrese la cantidad de dinero en efectivo que dispone"));
let cantidadCuotas = parseInt(prompt("Ingrese la cantidad de cuotas que desea financiar (3,6,9,12 o 18)"));
let cuotas3 = 1.10
let cuotas6 = 1.20
let cuotas9 = 1.25
let cuotas12 = 1.30
let cuotas18 = 1.45

while ((seleccioneMoto > 0 && seleccioneMoto < 4) && (dineroEfectivo > 0) && (cantidadCuotas > 3 && cantidadCuotas <18 )){
    switch (seleccioneMoto) { 
        case 1:
            if (seleccioneMoto = 1 && cantidadCuotas == 3) {
                ValorCuota = (YamahaYbr - dineroEfectivo) *  cuotas3 / cantidadCuotas
                alert ("El valor de la moto Yamaha YBR125 sera de :" + dineroEfectivo + " y 3 cuotas fijas de " + ValorCuota + " pesos argentinos" )
                }
            else if (seleccioneMoto == 1 && cantidadCuotas == 6) {
                function financiacionYbr6Cuotas () {
                    ValorCuota = (YamahaYbr - dineroEfectivo) *  cuotas6 / cantidadCuotas
                    alert ("El valor de la moto Yamaha YBR125 sera de :" + dineroEfectivo + " y 6 cuotas fijas de " + ValorCuota + " pesos argentinos" )
                }
            }
            else if (seleccioneMoto == 1 && cantidadCuotas == 9) {
                function financiacionYbr9Cuotas () {
                    ValorCuota = (YamahaYbr - dineroEfectivo) *  cuotas9 / cantidadCuotas
                    alert ("El valor de la moto Yamaha YBR125 sera de :" + dineroEfectivo + " y 9 cuotas fijas de " + ValorCuota + " pesos argentinos" )
                }
            }
            else if (seleccioneMoto == 1 && cantidadCuotas == 12) {
                function financiacionYbr12Cuotas () {
                    ValorCuota = (YamahaYbr - dineroEfectivo) *  cuotas12 / cantidadCuotas
                    alert ("El valor de la moto Yamaha YBR125 sera de :" + dineroEfectivo + " y 12 cuotas fijas de " + ValorCuota + " pesos argentinos" )
                }
            }
            else if (seleccioneMoto == 1 && cantidadCuotas == 18) {
                function financiacionYbr18Cuotas () {
                    ValorCuota = (YamahaYbr - dineroEfectivo) *  cuotas18 / cantidadCuotas
                    alert ("El valor de la moto Yamaha YBR125 sera de :" + dineroEfectivo + " y 18 cuotas fijas de " + ValorCuota + " pesos argentinos" )
                }
            }
            break;
        case 2:
            if (seleccioneMoto = 2 && cantidadCuotas == 3) {
            function financiacionYbr3Cuotas () {
                ValorCuota = (YamahaFz - dineroEfectivo) *  cuotas3 / cantidadCuotas
                alert ("El valor de la moto Yamaha Fz sera de :" + dineroEfectivo + " y 3 cuotas fijas de " + ValorCuota + " pesos argentinos" )
            }
            else if (seleccioneMoto == 2 && cantidadCuotas == 6) {
                function financiacionYbr6Cuotas () {
                    ValorCuota = (YamahaFz - dineroEfectivo) *  cuotas6 / cantidadCuotas
                    alert ("El valor de la moto Yamaha Fz sera de :" + dineroEfectivo + " y 6 cuotas fijas de " + ValorCuota + " pesos argentinos" )
                }
            }
            else if (seleccioneMoto == 2 && cantidadCuotas == 9) {
                function financiacionYbr9Cuotas () {
                    ValorCuota = (YamahaFz - dineroEfectivo) *  cuotas9 / cantidadCuotas
                    alert ("El valor de la moto Yamaha Fz sera de :" + dineroEfectivo + " y 9 cuotas fijas de " + ValorCuota + " pesos argentinos" )
                }
            }
            else if (seleccioneMoto == 2 && cantidadCuotas == 12) {
                function financiacionYbr12Cuotas () {
                    ValorCuota = (YamahaFz - dineroEfectivo) *  cuotas12 / cantidadCuotas
                    alert ("El valor de la moto Yamaha Fz sera de :" + dineroEfectivo + " y 12 cuotas fijas de " + ValorCuota + " pesos argentinos" )
                }
            }
            else if (seleccioneMoto == 2 && cantidadCuotas == 18) {
                function financiacionYbr18Cuotas () {
                    ValorCuota = (YamahaFz - dineroEfectivo) *  cuotas18 / cantidadCuotas
                    alert ("El valor de la moto Yamaha Fz sera de :" + dineroEfectivo + " y 18 cuotas fijas de " + ValorCuota + " pesos argentinos" )
                }
            }
            break;
        case 3:
            if (seleccioneMoto = 3 && cantidadCuotas == 3) {
            function financiacionXtzCuotas () {
                ValorCuota = (YamahaXtz - dineroEfectivo) *  cuotas3 / cantidadCuotas
                alert ("El valor de la moto Yamaha Xtz sera de :" + dineroEfectivo + " y 3 cuotas fijas de " + ValorCuota + " pesos argentinos" )
            }
            else if (seleccioneMoto == 3 && cantidadCuotas == 6) {
                function financiacionXtz6Cuotas () {
                    ValorCuota = (YamahaXtz - dineroEfectivo) *  cuotas6 / cantidadCuotas
                    alert ("El valor de la moto Yamaha Xtz sera de :" + dineroEfectivo + " y 6 cuotas fijas de " + ValorCuota + " pesos argentinos" )
                }
            }
            else if (seleccioneMoto == 3 && cantidadCuotas == 9) {
                function financiacionXTZ9Cuotas () {
                    ValorCuota = (YamahaXtz - dineroEfectivo) *  cuotas9 / cantidadCuotas
                    alert ("El valor de la moto Yamaha Xtz sera de :" + dineroEfectivo + " y 9 cuotas fijas de " + ValorCuota + " pesos argentinos" )
                }
            }
            else if (seleccioneMoto == 3 && cantidadCuotas == 12) {
                function financiacionYbr12Cuotas () {
                    ValorCuota = (YamahaXtz - dineroEfectivo) *  cuotas12 / cantidadCuotas
                    alert ("El valor de la moto Yamaha Xtz sera de :" + dineroEfectivo + " y 12 cuotas fijas de " + ValorCuota + " pesos argentinos" )
                }
            }
            else if (seleccioneMoto == 3 && cantidadCuotas == 18) {
                function financiacionYbr18Cuotas () {
                    ValorCuota = (YamahaXtz - dineroEfectivo) *  cuotas18 / cantidadCuotas
                    alert ("El valor de la moto Yamaha Xtz sera de :" + dineroEfectivo + " y 18 cuotas fijas de " + ValorCuota + " pesos argentinos" )
                }
            }
            break;
        case 4:
            if (seleccioneMoto = 4 && cantidadCuotas == 3) {
            function financiacionYbr3Cuotas () {
                ValorCuota = (YamahaRay - dineroEfectivo) *  cuotas3 / cantidadCuotas
                alert ("El valor de la moto Yamaha Ray sera de :" + dineroEfectivo + " y 3 cuotas fijas de " + ValorCuota + " pesos argentinos" )
            }
            else if (seleccioneMoto == 4 && cantidadCuotas == 6) {
                function financiacionYbr6Cuotas () {
                    ValorCuota = (YamahaRay - dineroEfectivo) *  cuotas6 / cantidadCuotas
                    alert ("El valor de la moto Yamaha Ray sera de :" + dineroEfectivo + " y 6 cuotas fijas de " + ValorCuota + " pesos argentinos" )
                }
            }
            else if (seleccioneMoto == 4 && cantidadCuotas == 9) {
                function financiacionYbr9Cuotas () {
                    ValorCuota = (YamahaRay - dineroEfectivo) *  cuotas9 / cantidadCuotas
                    alert ("El valor de la moto Yamaha Ray sera de :" + dineroEfectivo + " y 9 cuotas fijas de " + ValorCuota + " pesos argentinos" )
                }
            }
            else if (seleccioneMoto == 4 && cantidadCuotas == 12) {
                function financiacionYbr12Cuotas () {
                    ValorCuota = (YamahaRay - dineroEfectivo) *  cuotas12 / cantidadCuotas
                    alert ("El valor de la moto Yamaha Ray sera de :" + dineroEfectivo + " y 12 cuotas fijas de " + ValorCuota + " pesos argentinos" )
                }
            }
            else if (seleccioneMoto == 4 && cantidadCuotas == 18) {
                function financiacionYbr18Cuotas () {
                    ValorCuota = (YamahaRay - dineroEfectivo) *  cuotas18 / cantidadCuotas
                    alert ("El valor de la moto Yamaha Ray sera de :" + dineroEfectivo + " y 18 cuotas fijas de " + ValorCuota + " pesos argentinos" )
                }
            }
            break;
        }
    }
}
