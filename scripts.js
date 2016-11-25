var x = prompt ("Gimme a number!");
	function triple (x){
		return x * 3;
	}
	function pick6 (x){
		return x - 6;
	}
	function half (x){
		return x / 2;
	}
alert ("After I multiply by 3, subtract 6, and take half, your new number is " + (half(pick6(triple(x)))));


