var x=4 ==4;
x

var y=4=='4';
y

var z=4==5;
z

var w=4=='5';
w

/* Important Note 

    Jaise ki ham C/C++/Java me dekhte hai ki double equal operator pehle operands ke types ko dekhta hai agr operands ka type hi alg ho to double equal sidhe false return krdega aur agr operands ka type same hai to woh operands ka content check krega aur usi basis pe true ya false return krega

    Jbki Javascript bholi language hai kyunki is language me double equal operator pehle operands ka type nhi check krta hai woh sirf yeh check krega ki double equal operator operands ka content check krega like y wale me dekhiye usne yeh dekha ki ek to integer 4 hai aur dusra string me 4 hai phir bhi operation ka result  true hua mtlb double equal operator yahaan sirf content check kr rha that's it 

    Same thing apply on not equal wahaan bhi normal kaam krwane ke liye !== use krna pdega 

*/

var u=4==='4';
u

var v=4===4;
v

var p=3!='3';
p

var q=3!=='3';
q
