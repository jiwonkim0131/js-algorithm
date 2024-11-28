// 스택 - 문제13. 크레인 인형 뽑기 게임
// https://school.programmers.co.kr/learn/courses/30/lessons/64061
// 2중 배열을 돌 때 moves를 열로 생각해서 생각보다 간단하게 풀렸다. 그 외에는 이전 괄호 문제들과 로직이 거의 동일.
const solution = (board, moves) => {
  const stack = [];
  let count = 0;

  for (let i = 0; i < moves.length; i++) {
    const lineNum = moves[i] - 1;
    // i번째 board를 세로로 순회하면서 인형이 있는지 확인
    for (let j = 0; j < board.length; j++) {
      if (board[j][lineNum]) {
        const picked = board[j][lineNum]; // 인형 뽑기
        board[j][lineNum] = 0;  // 뽑았으면 0으로 바꿔야함!!
        if (picked === stack[stack.length - 1]) {
          while (
            stack.length > 0 &&
            stack[stack.length - 1] === picked
          ) {
            stack.pop();
            count += 2;
          }
        } else {
          stack.push(picked);
        }
        break;
      }
    }
  }

  return count;
};

// test case
const board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
const moves = [1,5,3,5,1,2,1,4];
console.log(solution(board, moves));
