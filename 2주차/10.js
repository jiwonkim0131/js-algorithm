// 스택 - 문제10. 괄호 회전하기
// 조건 비교할 때 너무 헷갈렸다
const solution = (str) => {
	const bracket1 = '[';
	const bracket2 = '(';
	const bracket3 = '{';

	const rBracket1 = ']';
	const rBracket2 = ')';
	const rBracket3 = '}';
	
	let count = 0;
	
	for (let i = 0; i < str.length; i++) {
		const stack = [];
		const rotated = str.slice(i) + str.slice(0, i);
		let isRight = true;
		
		for (const char of rotated) {
			if (char === bracket1 || char === bracket2 || char === bracket3) {
				stack.push(char);
			} else {
				if (stack.length === 0) {
					isRight = false;
					break;
				}
				const top = stack[stack.length - 1];
				if (char === rBracket1 && top === bracket1) {
					stack.pop();
				} else if (char === rBracket2 && top === bracket2) {
					stack.pop();
				} else if (char === rBracket3 && top === bracket3) {
					stack.pop();
				} else {
					isRight = false;
					break;
				}
			}
		}
    
		if (isRight && stack.length === 0) {
			count += 1;
		}
	}
	return count;
};
