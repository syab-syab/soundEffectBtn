// 面倒だけどsoundフォルダ内のフォルダ名をいちいち配列に入れるしかない
// node.jsを使いたいけど

voice = ["笑い声", "応！", "黄色い悲鳴"];

effectBtnSpace = document.getElementById("effect-button-space");

// もしaudioタグのcontrolボタンでしか再生することができ無さそうなら
// audioタグをdisplay: none;にして再生ボタンだけ押せるか試す

// 表示する音声ボタン
var buttons = "";

// ジャンル
var genle = "voice";

// 再生ボタンテスト

// var playBtn = document.getElementById("play-test");

// function playTone() {
//   var audioTest = document.getElementById("test");
//   audioTest.play();
// }

// playBtn.addEventListener("click", playTone());

// 再生ボタンテスト end


for (var i = 0; i < voice.length; i ++) {
  console.log(voice[i]);
  buttons += `
  <p>${voice[i]}</p>
  <audio controls>
    <source src="sound/${genle}/${voice[i]}.mp3">
  </audio>
  `;
}

effectBtnSpace.innerHTML = buttons;