function bisiesto(a){
    if(a%4==0 && a%100!=0 || a%400==0){
        alert('El anhio es bisiesto');
    }
    else{
        alert('El anhio no es bisiesto');
    }
}

bisiesto(a=prompt('Ingrese un anhio'));

