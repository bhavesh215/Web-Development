function fibon(n){
    var t1=0,t2=1,tn;
    for(var i=1;i<n;i++){
        tn=t1+t2;
        t1=t2;
        t2=tn;
    }
    console.log(t1);
}
var n=prompt('Enter number');
fibon(n);