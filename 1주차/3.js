// 문제3. 두 개 뽑아서 더하기
const solution = (numbers) => {
  const addedSet = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      addedSet.add(numbers[i] + numbers[j]);
    }
  }
  return [...addedSet].sort((a, b) => a - b);
};
