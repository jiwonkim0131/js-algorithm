// 책 정답 코드: https://github.com/kciter/coding-interview-js/blob/main/solution/15.js
// 요세푸스 문제
const solution = (N, K) => {
	// 배열에 1부터 N까지 추가
	const queue = new Array(N).fill(0).map((_, idx) => idx + 1);
	
	while (queue.length > 1) {
		for (let i = 0; i < K - 1; i++) {
			queue.push(queue.shift());
		}
		queue.shift();
	}
	return queue.shift();
}
