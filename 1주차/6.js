// 문제6. 실패율

const solution = (N, stages) => {
  // N: 전체 스테이지 개수, stages: 게임 중인 사용자가 현재 멈춰 있는 스테이지의 번호 (N+1은 끝까지 완료한 사용자)
  // 실패율: 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어의 수
  // what: 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담긴 배열을 반환하는 solution 구현

  // 각 스테이지 별로 도전한 사람의 수를 구한다.
  const challengers = new Array(N + 2).fill(0); // stages의 값이 N + 1까지 있음
  for (let i = 0; i < stages.length; i++) {
    challengers[stages[i]] += 1;
  }

  // 이제 각 스테이지 별 실패율을 구한다.
  const failRates = new Map();
  let totalUser = stages.length;
  for (let i = 1; i <= N; i++) {
    if (challengers[i] === 0) {
      failRates.set(i, 0);
    }

    // 도전자 수: 전체 유저에서 현재 단계 이전 단계에 머물러 있는 도전자 수를 전부 뺀다
    const failRate = challengers[i] / totalUser;
    totalUser -= challengers[i];
    failRates.set(i, failRate);
  }

  return [...failRates.entries()]
    .sort((a, b) => {
      if (b[1] === a[1]) {
        // 실패율이 같다면 stage 번호로 오름차순 정렬
        return a[0] - b[0];
      }
      // 실패율 기준으로 내림차순 정렬
      return b[1] - a[1];
    })
    .map((stage) => stage[0]);
};

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
