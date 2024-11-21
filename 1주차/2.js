// 문제2. 배열 제어하기 
const solution = (numbers) => [...new Set(numbers)].sort((a, b) => b - a);
