// [1,3,5,7,9]
function FindLargerNum(arr){
	SecNum = arr[1];
	for (var i=0; i<arr.length;i++){
		if (arr[i] > SecNum){
			console.log(arr[i]);
		}
	}	

}
var Todd = [1,3,5,7,9];
FindLargerNum(Todd);


