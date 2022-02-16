//Type Conversion

//String Conversion
let c=123;
let d= String(123);  // Explicit Conversion
let e=123+'';   // Implicit Conversion

//Boolean Conversion

Boolean(2) //explicit conversion
if(2){}  //implicit due to logical context
!!2 //implicit due to logical operator
2 || 'hello' //implicit due to logical operator

//Numeric Conversion

Number('123') //explicit conversion
+'123' //implicit
123 != '456' //implicit
4> '5' //implicit
5/null //implicit
true|0 //implicit

