// 1-1 solution

var x = 0

for (i=x; i<=nums.length; i++) {
	// nums refers to the array name i gave to the data in this problem
	for (j=i+1; j<=nums.length; j++) {
		if (nums[i] + nums[j] == 2020) {
			console.log(nums[i], nums[j])
			console.log(nums[i] * nums[j]);
			// i chose to log the values before finding the solution just as a means to double check they were correct
		}
	}
}
