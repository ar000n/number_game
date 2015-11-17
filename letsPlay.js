var readLine=require("readline");

var randomGenerator=function(){
	var randomNumbers=[];
	for(var i=0;i<9;i++){
		var number=Math.round(Math.random() * (8 - 0 + 0));
		(randomNumbers.indexOf(number)==-1) ? randomNumbers.push(number) :
		i--;
	}
	arr1=randomNumbers.slice(0,3);
 	arr2=randomNumbers.slice(3,6);
 	arr3=randomNumbers.slice(6,9);
};

var display=function(arr1,arr2,arr3){
	arr1=arr1.join(" ");
	arr2=arr2.join(" ");
	arr3=arr3.join(" ");
	return("\r"+arr1+"\n"+arr2+"\n"+arr3);
};

var moveAllow=function(number){
	var elements=arr1.concat(arr2).concat(arr3);
	var numberIndex=elements.indexOf(+number);
	var zeroIndex=elements.indexOf(0);

	return((numberIndex==zeroIndex+3) || (numberIndex==zeroIndex-3) ||
		(numberIndex==zeroIndex+1) || (numberIndex==zeroIndex-1));
};

var swap=function(number){
	var elements=arr1.concat(arr2).concat(arr3);

	var numberIndex=elements.indexOf(+number);
	var zeroIndex=elements.indexOf(0);
	var temp=elements[zeroIndex];
	elements[zeroIndex]=elements[numberIndex];
	elements[numberIndex]=temp;

	arr1=elements.slice(0,3);
	arr2=elements.slice(3,6);
	arr3=elements.slice(6,9);

};

var checkWin=function(){
	var elements=arr1.concat(arr2).concat(arr3);
	var i=1;
	elements.length=8;
	return elements.every(function(element){
		return(element==i++);
	})
};

var rl=readLine.createInterface({
	input:process.stdin,
	output:process.stdout
});
console.log("Arrange the numbers in order(1-8).",
	"\nThe 0 is the 'empty' place.",
	"\nClick on any number next to 0 and they will switch places.");
randomGenerator();
console.log(display(arr1,arr2,arr3));


rl.on('line',function(number){
	moveAllow(number) && swap(number);

	if(checkWin()){
		console.log("Congratulations...!! you Won!!\n 'control+c' to exit.");
	}
	console.log(display(arr1,arr2,arr3));
});


