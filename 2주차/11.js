// 스택 - 문제11. 짝지어 제거하기
const solution = (str) => {
	const stack = [];
	
	for (const c of str) {
		if (stack.length === 0) {  // 여기 조건문 주의
			stack.push(c);
		} else {
      const top = stack[stack.length-1];
		  if (top === c) {
			  stack.pop();
		  } else {
        stack.push(c);
      }
    }
	}
	return stack.length === 0 ? 1 : 0;
}
