// 스택 - 문제8. 괄호 짝 맞추기
// 전형적인 스택 문제
const solution = (str) => {
	const stack = [];
	
	for (const s of str) {
		if (s === '(') {
			stack.push(s);
		} else {
			if (!stack.length) { // 남은 짝이 없음 
				return false;
			}
			stack.pop();
		}
	}
	return !stack.length;
}
