// 3-1 Solution

let hill_width =  (Math.ceil((hill.length * 3) / 31));
//setting witdth to an arbitrary value greater than what is needed to solve the problem, 
//could change 31 to a variable to adjust for dynamic width instead of manually counting
//hill refers to the array of strings given in the problem
var count = 0;
var trees = 0;

for (i = 1; i < hill.length; i++) {
	count+=3;
	if (hill[i].repeat(hill_width).charAt(count) === "#") {
		trees++;
	}
	if (i == hill.length -1) {
		console.log(trees);
	}
}
