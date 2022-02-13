var n1=prompt("Enter your first number");
var op=prompt("Enter the operator");
var n2=prompt("Enter your second number");
switch(op){
    case '+':
        alert(n1+n2);
        break;
    case '-':
        alert(n1-n2);
        break;
    case '*':
        alert(n1*n2);
        break;
    case '/':
        alert(n1/n2);
        break;
    case 'remainder':
        alert(n1%n2);
        break;
    case 'power':
        alert(n1**n2);
        break;
    default:
        alert('I am still learning more');
}