// 문제7. 방문 길이
const solution = (dirs) => {
  // 다음 좌표 계산
  const nextLocation = (x, y, dir) => {
    // const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    switch (dir) {
      case "U":
        return [x, y + 1];
      case "D":
        return [x, y - 1];
      case "L":
        return [x - 1, y];
      case "R":
        return [x + 1, y];
    }
  };

  // 처음에는 (0, 0)에서 시작
  let x = 0;
  let y = 0;
  const visited = new Set();
  for (const dir of dirs) {
    const [nx, ny] = nextLocation(x, y, dir);

    // 좌표 안에 있는지 확인
    if (nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5) {
      // ✅ 스터디 중 받은 피드백: 좌표가 10이상이 될 경우 구분자가 필요할 것 같다!
      visited.add(`${x}${y}${nx}${ny}`);
      visited.add(`${nx}${ny}${x}${y}`); // 반대 경로도 같이 등록해줘야 중복이 제거됨
      x = nx;
      y = ny;
    }
  }

  return visited.size / 2;
};

console.log(solution("ULLURRDLLU"));
