// 1-2 solution

var x = 0
	
for (i=x; i<=nums.length; i++) {
	// nums refers to the array name i gave to the data in this problem
	for (j=i+1; j<=nums.length; j++) {
		if (nums[i] + nums[j] >= 2020) {
			j++
			//skips some unnecessary calculations
		}
		for (k=j+1; k<nums.length; k++) {
			if (nums[i] + nums[j] + nums[k] == 2020) {
				console.log(nums[i], nums[j], nums[k])
				console.log(nums[i] * nums[j] * nums[k]);
				// i chose to log the values before finding the solution just as a means to double check they were correct
			}
		}
	}
	x += 1;
}
