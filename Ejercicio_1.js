function Pal(p){
    c= p.split("");
    cont=0;
    cont2=c.length-1;
    v= true;
    while(cont!=c.length-1 && v==true){
        if(c[cont] == c[cont2]){
            cont++;
            cont2--;
        }
        else{
            v=false;
        }
    }
    return v;
}

x=Pal(p=prompt('Ingrese una palabra: '));

if(x==true){
    console.log("Palindromo alv")
}
else if(x==false){
    console.log("No palindromo alv")
}