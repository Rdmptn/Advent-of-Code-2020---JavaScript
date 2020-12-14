//2-2 Solution

var count = 0;
//used to count passwords that match rules, set to 0 prior to loop so it doesn't reset upon running

for (i = 0; i < passwords.length; i++) {
	var hyph =  passwords[i].indexOf("-");
	var space = passwords[i].indexOf(" ");
	var x = passwords[i].slice(0, hyph);
	x--;//subtracted 1 to account for 0 index
	var y = passwords[i].slice(hyph+1, space);
	y--;//subtracted 1 to account for 0 index
	var letter =  passwords[i].slice(space+1, space+2);
	var colon =  passwords[i].indexOf(":");
	var pw = passwords[i].slice(colon+2, passwords[i].length);
	//using indexOf and slicing to break string into the components being tested
	
	if ((letter == pw[x] && letter != pw[y]) || (letter != pw[x] && letter == pw[y])) {
		//test that only passes when 1 value matches and the other doesn't
		count++;
	}
	
	if (i == passwords.length - 1) {
		console.log(count);
	}
}
