// Find the minimum number of any array
function FindLowestNum(arr){
	var SecNum = arr[0];
	var MinVal = arr[0];
	for (var i=1; i<arr.length;i++){
		if (arr[i] < MinVal){
			MinVal = arr[i];
//		if(SecNum<MinVal)
//			SecNum = MinVal;

		}
	}	
console.log(MinVal);
}
var Todd = [4,-3,3,5,-7,9,0];
FindLowestNum(Todd);
