export const Add = (numbers) =>{
	if (numbers === '') {
		return 0;
	}
	return parseInt(numbers, 10);
}