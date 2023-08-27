var nums = [-1,8,9,4,6,5];
var k = 10;

function FindPair(nums, k)
{
	var map = new Map();
	for(var i = 0; i < nums.length; i++)
	{
		if(map.has(k - nums[i]))
		{
			console.log(`Pairs => ${nums[i]}, ${nums[map.get((k - nums[i]))]}`);
			return;
		}
		map.set(nums[i], i);
	}

	console.log("Cannot find pairs");
}

FindPair(nums, k);
// find pair which sum up to K