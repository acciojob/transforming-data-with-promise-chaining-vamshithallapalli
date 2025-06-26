//your JS code here. If required.
document.getElementById("btn").addEventListener('click', function(){
	let input = document.getElementById("ip").value.trim();

	let number = Number(input);

	let output = document.getElementById("output");

	//initial promise
	return new Promise((resolve) => {
		setTimeout(()=> {
			output.innerText = `Result: ${number}`;
			resolve(number);
			
		}, 2000)
	}).then((result)=>{
		//second promise
		return new Promise((resolve)=>{
			setTimeout(()=>{
			result = result*2;
			output.innerText = `Result: ${result}`;
			resolve(result);
			}, 2000)
			
		})
	}).then((result)=>{
		//third promise
		return new Promise((resolve)=>{
			setTimeout(()=>{
				result = result - 3;
			output.innerText = `Result: ${result}`;
			resolve(result);
			}, 1000)
			
		})
	}).then((result)=>{
		//forth promise
		return new Promise((resolve)=>{
			setTimeout(()=>{
				result = result/2;
			output.innerText = `Result: ${result}`;
			resolve(result);
			}, 1000)
			
		})
	}).
		then((result)=>{
		//fifth promise
		return new Promise((resolve)=>{
			setTimeout(()=>{
				result = result + 10;
			output.innerText = `Result: ${result}`;
			resolve(result);
			}, 1000)
			
		})
		})
})