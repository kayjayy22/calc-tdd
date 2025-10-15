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
	return nums.reduce((sum, num) => sum + parseInt(num, 10), 0);
}