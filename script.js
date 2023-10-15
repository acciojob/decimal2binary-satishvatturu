function decimalToBinary(num) {
	return (num>>>0).toString(2); 
}

let num = prompt("Enter the value :-");
let bin = decimalToBinary(num);
console.log(bin)

window.decimalToBinary = decimalToBinary;
