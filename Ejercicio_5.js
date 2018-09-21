function area(r){
    area=Math.PI*Math.pow(r,2);
    return area;
}

r=prompt('Ingrese el radio: ');
alert('El area del circulo es: ' + area(r));

