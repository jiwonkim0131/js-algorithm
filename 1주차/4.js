// 문제4. 모의고사
const solution = (answer) => {
  // 처음에는 아래처럼 패턴과 점수를 묶어서 객체로 관리했으나 추후 처리가 더 복잡해져서 분리
  // const rules = {
  //   1: {
  //     pattern: [1, 2, 3, 4, 5],
  //     score: 0,
  //   },
  //   2: {
  //     pattern: [2, 1, 2, 3, 2, 4, 2, 5],
  //     score: 0,
  //   },
  //   3: {
  //     pattern: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  //     score: 0,
  //   },
  // };

  const rules = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = [0, 0, 0];

  for (let i = 0; i < answer.length; i++) {
    for (let j = 0; j < rules.length; j++) {
      const patternSize = rules[j].length;
      if (answer[i] === rules[j][i % patternSize]) {
        scores[j] += 1;
      }
    }
  }

  const maxScore = Math.max(...scores);
  return scores
    .map((score) => {
      if (score === maxScore) {
        return score;
      }
    })
    .filter((el) => !!el);
};
