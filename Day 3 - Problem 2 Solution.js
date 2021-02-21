// 3-2 Solution

let hill_width =  (Math.ceil((hill.length * 7) / 31));
//setting witdth to an arbitrary value greater than what is needed to solve the problem, 
//could change 31 to a variable to adjust for dynamic width instead of manually counting
//hill refers to the array of strings given in the problem
var count = 0;
var trees = 0;
var x = 1;
var y = 1;
let solution = []

for (i = y; i < hill.length; i+=y) {
	count+=x;
	//console.log('x: ' + count + ', y: ' + i);
	//for testing to ensure each slope started and ended at the correct positions
	if (hill[i].repeat(hill_width).charAt(count) === "#") {
		trees++;
	}
	if (i+y >= hill.length) {
		console.log(x + ', ' + y + ': ' + trees);
		solution.push(trees);
		trees = 0;
		count = 0;
		i = 0;
		if (y == 2) {
			console.log(solution.reduce( (a,b) => a * b ));
			break
		}
		else if (x == 7) {
			y = 2;
			x = 1;
		}
		else {
			x+=2;
		}
	}
}
