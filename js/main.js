// 面倒だけどsoundフォルダ内のフォルダ名をいちいち配列に入れるしかない


var voice1 = ["笑い声", "応！", "黄色い悲鳴"];
var voice2 = [];
var voice3 = [];
var se1 = [];
var se2 = [];
var se3 = [];

effectBtnSpace = document.getElementById("sound-effect-button-space");

// もしaudioタグのcontrolボタンでしか再生することができ無さそうなら
// audioタグをdisplay: none;にして再生ボタンだけ押せるか試す

// 表示する音声ボタン
var buttons = "";

// ジャンル
var genre = document.getElementById("sound-select");

// 再生ボタンテスト

var btn = document.getElementById("play");

var sound = new Audio("./sound/se/カーッ.mp3");


function playTone() {
  sound.play();
  console.log("play")
}


btn.addEventListener("click", playTone);


// 再生ボタンテスト end


// audioタグ無しでやるから、各音声ファイルのパスを配列に入れる
// クリックされたボタンの数をに対応させて再生する


// ここから↓を関数にまとめる
// selectタグのchangeイベントで発動するようにする
function indicateSoundButton() {
  console.log(genre.value);
}
// for (var i = 0; i < voice.length; i ++) {
//   console.log(voice[i]);
//   buttons += `
//   <div class="sound-effect-button">
//     <p>${voice[i]}</p>
//     <audio controls>
//       <source src="sound/${genre}/${voice[i]}.mp3">
//     </audio>
//   </div>
//   `;
// }

// effectBtnSpace.innerHTML = buttons;

genre.addEventListener("change", indicateSoundButton);