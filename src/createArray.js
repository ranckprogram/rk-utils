function createArray(length){
	return Array.from({length},(v,k)=>k);
}

module.exports = createArray;

