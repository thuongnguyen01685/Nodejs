function add(value1,value2){
	if(typeof a!== 'string' || typeof b != 'string'){
		throw new Error ('Wrong type');
	}
	return a+b;
}
try{
	var result = add('a',1);
}catch(error){
	console.log(error);
}
console.log('Hello everybody');