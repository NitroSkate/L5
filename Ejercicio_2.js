function ordena(c){
    for(let i=1; i<c.length-1; i++){
        k=c[i];
        j=i-1;
        while (j>0 && k<c[j]){
            c[j+1] = c[j];
            j=j-1;
        c[j+1]=k;
        }
    }
    return c;
}


c=prompt('Ingrese numeros: ');
c.split("");
alert(ordena(c));