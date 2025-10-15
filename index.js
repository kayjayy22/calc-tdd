export const Add = (numbers) =>{
	if (numbers === '') {
		return 0;
	}
	
	let delimiter = /[,\n]/;
	let numString = numbers;
	
	if (numbers.startsWith('//')) {
		const parts = numbers.split('\n');
		const customDelimiter = parts[0].substring(2);
		delimiter = new RegExp(`[,\n${customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}]`);
		numString = parts[1];
	}
	
	const nums = numString.split(delimiter);
	const negatives = [];
	
	const sum = nums.reduce((sum, num) => {
		const n = parseInt(num, 10);
		if (n < 0) {
			negatives.push(n);
		}
		if (n <= 1000) {
			return sum + n;
		}
		return sum;
	}, 0);
	
	if (negatives.length > 0) {
		throw new Error(`negatives not allowed: ${negatives.join(',')}`);
	}
	
	return sum;
}