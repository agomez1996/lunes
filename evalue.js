function pin(){
    var n = parseInt(document.getElementById("n").value);
    s=0
    for (i=0;i<=n;i++){
        s=s+(Math.pow(-1,i)/(Math.pow(2*i+1,3)))

    }
    var Espi = Math.pow((32*s),1/3)
    document.getElementById("respi").innerHTML=+Espi
}