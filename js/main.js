// 面倒だけどsoundフォルダ内のフォルダ名をいちいち配列に入れるしかない
var voice1 = ["笑い声.mp3", "応！.mp3", "ざわめき.mp3", "ドンドンパフパフ.mp3", "歓声.mp3", 
              "歓声(失敗時).mp3", "不気味.mp3", "悲鳴.mp3", "歓声と拍手.mp3", "黄色い悲鳴.mp3"];

var voice2 = ["犬.mp3", "牛.mp3", "ウグイス.mp3", "ウミネコ.mp3", "オオカミ.mp3", "カラス.mp3", "ゾウ.mp3", "ニワトリ.mp3",
              "ブタの鳴き声1.mp3", "ライオン.mp3", "猫.mp3",  "馬.mp3"];

var voice3 = ["ツクツクボウシ.mp3", "ヒグラシ.mp3", "ミンミンゼミ.mp3"];

var se1 = ["カーッ.mp3", "ジャジャーン.mp3", "ビシッ(高).mp3", "ピンポン1.mp3", "ピンポン2.mp3", "ピンポン3.mp3", "不正解.mp3", "突撃ラッパ.mp3", 
          "開始のゴング.mp3", "終了のゴング.mp3", "サウナで整う.mp3", "ニュータイプ.mp3", "ビシッ.mp3",  "ピー音.mp3", "問題です.mp3"];

var se2 = ["エアーホーン.mp3", "カキーン.mp3", "チリン.mp3", "デン！.mp3", "ドラ.mp3", "ドーン.mp3", "拍手.mp3", "爆発1.mp3", "爆発2.mp3", "鳩時計.mp3",
          "カウントダウン.mp3", "シャキーン.mp3", "テロン♪.mp3", "ドキドキ.mp3", "ドラムロール.mp3", "バーン.mp3", "ファンファーレ.mp3",  "衝撃.mp3",  "パフ.mp3",];

var se3 = ["ガブッ.mp3", "ボヨン.mp3", "ポカン.mp3", "伸びる.mp3", "切り替え1.mp3", "学校のチャイム.mp3", "恐怖.mp3", "狂気.mp3", "縮む.mp3"];

// ボタン表示スペース
var soundEBSpace = document.getElementById("sound-effect-button-space");

// もしaudioタグのcontrolボタンでしか再生することができ無さそうなら
// audioタグをdisplay: none;にして再生ボタンだけ押せるか試す

// 表示する音声ボタン
var buttons = "";

// ジャンル
var genre = document.getElementById("sound-select");

// 再生ボタンテスト

// var btn = document.getElementById("play");

// var sound = new Audio("./sound/se1/カーッ.mp3");


// function playTone() {
//   sound.play();
//   console.log("play")
// }


// btn.addEventListener("click", playTone);


// 再生ボタンテスト end


// audioタグ無しでやるから、各音声ファイルのパスを配列に入れる
// クリックされたボタンの数をに対応させて再生する


// ここから↓を関数にまとめる
// selectタグのchangeイベントで発動するようにする
function indicateSoundButton() {
  console.log(genre.innerText);
  var soundDir;
  switch(genre.value) {
    case "0":
      soundDir = "voice1";
      soundArr = voice1;
      break;
    case "1":
      soundDir = "voice2";
      soundArr = voice2;
      break;
    case "2":
      soundDir = "voice3";
      soundArr = voice3
      break;
    case "3":
      soundDir = "se1";
      soundArr = se1;
      break;
    case "4":
      soundDir = "se2";
      soundArr = se2;
      break;
    case "5":
      soundDir = "se3";
      soundArr = se3;
      break;
    default:
      alert("error!");
  };
  for (var i = 0; i < soundArr.length; i++) {
    buttons += `
    <div>
      <button>${soundArr[i]}</button>
    </div>
    `
  }
  soundEBSpace.innerHTML = buttons;
}



genre.addEventListener("change", indicateSoundButton);