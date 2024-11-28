// 스택 - 문제12. 주식 가격
// https://school.programmers.co.kr/learn/courses/30/lessons/42584
// 아이디어 문제 - 인덱스를 관리하는 아이디어가 필요하다!

const solution = (prices) => {
	const stack = [0];  // 초기화 주의
	const result = new Array(prices.length).fill(0);
	
	for (let i = 1; i < prices.length; i++) { // 이미 0번 인덱스로 초기화 되었기 때문에 1에서 시작
		// 가격이 떨어지면 이전 값들과 비교
		while (stack.length > 0 && prices[stack[stack.length-1]] > prices[i]) {
			const idx = stack.pop();
			result[idx] = i - idx; // 인덱스 차이가 시간초
		}
		stack.push(i);
	}
	
	// 한 바퀴 돌고나서 스택에 남아있으면 가격이 떨어지지 않은 주식들
	while (stack.length > 0) {
		const idx = stack.pop();
		result[idx] = prices.length - 1 - idx;
	}
	return result;
}

// test case
console.log(solution([1, 2, 3, 2, 3]));
