// 스택 - 문제9. 10진수를 2진수로 변환하기
const solution = (num) => {
	const stack = [];
	let quotient = num;
	
	while (quotient > 0) {
		stack.push(quotient % 2);
    quotient = Math.floor(quotient / 2);
	}
	
	return stack.reverse().join('');
}
