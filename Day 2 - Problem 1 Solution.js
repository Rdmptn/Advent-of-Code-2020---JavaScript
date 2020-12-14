//2-1 Solution

var count = 0;
//used to count passwords that match rules, set to 0 prior to loop so it doesn't reset upon running

for (i = 0; i < passwords.length; i++) {
	var matches = 0;
	var hyph =  passwords[i].indexOf("-");
	var space = passwords[i].indexOf(" ");
	var x = passwords[i].slice(0, hyph);
	var y = passwords[i].slice(hyph+1, space);
	var letter =  passwords[i].slice(space+1, space+2);
	var colon =  passwords[i].indexOf(":");
	var pw = passwords[i].slice(colon+2, passwords[i].length);
	//using indexOf and slicing to break string into the components being tested
	
	for (j=0; j<pw.length; j++) {
		if (letter == pw[j]) {
			matches++;
		}
	}
	if (x <= matches && matches <= y) {
		count++;
	}
	if (i == passwords.length - 1) {
		console.log(count);
	}
}
