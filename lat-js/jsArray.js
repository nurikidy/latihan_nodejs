var perangkat = ["komputer","printer","monitor","scanner","mouse","tablet"];
perangkat[2];

perangkat.forEach(function(item, index){
	console.log("Posisi:%s -> %s", index, item);
});

console.log("\nPushing something\n");
perangkat.push("modem");
for(let i=0; i < perangkat.length; i++){
	console.log("Posisi:%s -> %s", i, perangkat[i]);
}


console.log("\nPoping something\n");
perangkat.pop();
for(let i=0; i < perangkat.length; i++){
	console.log("Posisi:%s -> %s", i, perangkat[i]);
}



//pop   -> extract LAST item of an array
//push  -> add new item in THE LAST position of an array
//shift -> extract FIRST item of an array
//unshift  -> add new item in THE FIRST position of an array