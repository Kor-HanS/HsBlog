const submitBtn = document.getElementById("baseball-btn");
const restartBtn = document.getElementById("restart");
let answer; // 정답
let writeNumber; // 입력한 수
let tryNum = 0;

function startGame() {
  answer = generateRandNum();
  console.log(answer);
}

function generateRandNum() {
  let visitArray = [];
  let finalNum = 0;

  for (let i = 0; i < 4; i++) {
    let tempNum = Math.floor(Math.random() * 9);

    // 천의 자리 수 0 배제
    while (i === 0 && tempNum === 0) {
      do {
        tempNum = Math.floor(Math.random() * 9);
      } while (tempNum === 0);
    }

    // 중복도 검사 i === 0 일때 검사 x
    for (let j = 0; j < i; j++) {
      if (tempNum === visitArray[j]) {
        do {
          tempNum = Math.floor(Math.random() * 9);
        } while (tempNum === visitArray);
      }
    }

    visitArray.push(tempNum);

    console.log(visitArray[i]);
    finalNum = finalNum + tempNum * Math.pow(10, 3 - i);
  }
  return finalNum;
}

function getAnswer() {
  writeNumber = document.getElementById("baseballnumber-input").value;
  if (writeNumber < 1000 || writeNumber > 9999) {
    alert("수를 다시 입력하세요!");
  } else {
    tryNumIncrease();
    showAnswer();
    compareNum();
  }
}

function tryNumIncrease() {
  // 시도 횟수
  tryNum = tryNum + 1;
  submitBtn.innerText = tryNum + "번 시도";
}

function showAnswer() {
  // 입력한 수 출력
  document.getElementById("baseball-answer").innerText =
    writeNumber + "를 입력하셨습니다.";
}

function showAnswer2(ball, strike, out) {
  // 숫자야구 Ball, Strike, Out 알려주는 함수
  let showBSO = "";
  if (ball >= 1) {
    showBSO += '<div id="ball-box" class="col-12 row">';
    for (let i = 0; i < ball; i++) {
      showBSO += '<div class="col-2"></div>';
    }
    showBSO += "</div>";
  }

  if (strike >= 1) {
    showBSO += '<div id="strike-box" class="col-12 row">';
    for (let j = 0; j < strike; j++) {
      showBSO += '<div class="col-3"></div>';
    }
    showBSO += "</div>";
  }
  if (out >= 1) {
    showBSO +=
      '<div id="outclear-box" class="row">' +
      '<div class="col-6"></div>' +
      "</div>";
  }
  document.getElementById("baseball-answer2").innerHTML = "";

  if (strike === 4) {
    document.getElementById("baseball-answer2").innerHTML = "정답입니다!";
  } else {
    document.getElementById("baseball-answer2").innerHTML = showBSO;
  }
}

function restart() {
  tryNum = -1;
  tryNumIncrease();
  document.getElementById("baseball-answer").innerText = "숫자 야구 다시 시작~";
  answer = generateRandNum();
  showAnswer2(0, 0, 0);
}

function compareNum() {
  let answerArray = [];
  let writeArray = [];
  let ballNum = 0;
  let strikeNum = 0;

  for (let i = 0; i < 4; i++) {
    answerArray.push(
      Math.floor((answer % Math.pow(10, 4 - i)) / Math.pow(10, 3 - i))
    );
    console.log(answerArray[i]);
    writeArray.push(
      Math.floor((writeNumber % Math.pow(10, 4 - i)) / Math.pow(10, 3 - i))
    );
    console.log(writeArray[i]);
  }

  for (let j = 0; j < 4; j++) {
    for (let k = 0; k < 4; k++) {
      if (answerArray[j] === writeArray[k] && j !== k) {
        ballNum++;
        break;
      } else if (answerArray[j] === writeArray[k] && j === k) {
        strikeNum++;
        break;
      }
    }
  }

  if (ballNum === 0 && strikeNum === 0) {
    showAnswer2(0, 0, 1);
  } else {
    showAnswer2(ballNum, strikeNum, 0);
  }
}

// 이벤트 추가
startGame();
submitBtn.addEventListener("click", getAnswer);
restartBtn.addEventListener("click", restart);
