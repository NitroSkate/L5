function conver(n){
    m=n;
    a=[];
    while(m!=1){
        a.push(m%2);
        m=Math.floor(m/2);
    }
    a.push(m);
    a=a.reverse();
    a=a.join("");
    return a;
}

alert('El valor binario del numero es: ' + conver(n=prompt('Ingrese un numero: ')));