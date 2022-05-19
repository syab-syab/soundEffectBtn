// 面倒だけどsoundフォルダ内のフォルダ名をいちいち配列に入れるしかない
var voice1 = ["笑い声", "応！", "ざわめき", "ドンドンパフパフ", "歓声", 
              "歓声(失敗時)", "不気味", "悲鳴", "歓声と拍手", "黄色い悲鳴"];

var voice2 = ["犬", "牛", "ウグイス", "ウミネコ", "オオカミ", "カラス", "ゾウ", "ニワトリ",
              "ブタ", "ライオン", "猫",  "馬"];

var voice3 = ["ツクツクボウシ", "ヒグラシ", "ミンミンゼミ"];

var se1 = ["カーッ", "ジャジャーン", "ビシッ(高)", "ピンポン1", "ピンポン2", "ピンポン3", "不正解", "突撃ラッパ", 
          "開始のゴング", "終了のゴング", "サウナで整う", "ニュータイプ", "ビシッ",  "ピー音", "問題です"];

var se2 = ["エアーホーン", "カキーン", "チリン", "デン！", "ドラ", "ドーン", "拍手", "爆発1", "爆発2", "鳩時計",
          "カウントダウン", "シャキーン", "テロン♪", "ドキドキ", "ドラムロール", "バーン", "ファンファーレ",  "衝撃",  "パフ",];

var se3 = ["ガブッ", "ボヨン", "ポカン", "伸びる", "切り替え", "学校のチャイム", "恐怖", "狂気", "縮む"];

// ボタン表示スペース
var soundEBSpace = document.getElementById("sound-effect-button-space");

// もしaudioタグのcontrolボタンでしか再生することができ無さそうなら
// audioタグをdisplay: none;にして再生ボタンだけ押せるか試す

// 表示するジャンルのタイトル
var genreTitle = document.getElementById("genre-title");

// 表示する音声ボタン
var buttons = "";

// ジャンル
var genre = document.getElementById("sound-select");

// 再生ボタンテスト

// var btn = document.getElementById("play");

// var sound = new Audio("./sound/se1/カーッ.");


// function playTone() {
//   sound.play();
//   console.log("play")
// }


// btn.addEventListener("click", playTone);

// function playSound() {

// }

// 再生ボタンテスト end


// クリックされたボタンの数をに対応させて再生する

// フォルダ名と再生ファイル名を格納する関数
function soundsDirVariable(value) {
  // 配列を返す[フォルダ名, 再生ファイル名の配列
  switch(value) {
    case "0":
      return ["voice1", voice1];
      break;
    case "1":
      return ["voice2", voice2];
      break;
    case "2":
      return ["voice3", voice3];
      break;
    case "3":
      return ["se1", se1];
      break;
    case "4":
      return ["se2", se2];
      break;
    case "5":
      return ["se3", se3];
      break;
    default:
      // ここでちょっとエラーが起きる
      alert(選択してください);
  };
}


// 再生の関数
function playSound() {
  console.log(`./sound/${this.name}`);
  var sound = new Audio(`./sound/${this.name}`);
  sound.play();  
}

// 再生ボタンを表示させる関数
function buttonsRegister(value) {
  var buttonTotal = document.getElementsByClassName("sound-effect-button");

  for (var i = 0; i < buttonTotal.length; i++) {
    var fileName = `${value}/${buttonTotal[i].innerText}.mp3`
    buttonTotal[i].addEventListener("click", {name: fileName, handleEvent: playSound});
  }
}


// ここから↓を関数にまとめる
// selectタグのchangeイベントで発動するようにする
function indicateSoundButton() {
  // genreTitle.innerText = "test"
  console.log(genre.innerText);
  var tmp = soundsDirVariable(genre.value)
  var soundDir = tmp[0];
  var soundArr = tmp[1];
  
  for (var i = 0; i < soundArr.length; i++) {
    // 表示テキストからを消す
    // buttons += `
    // <div>
    //   <button class="sound-effect-button">${soundArr[i]}</button>
    // </div>
    // `
    buttons += `
    <div class="sound-effect-button">
      ${soundArr[i]}
    </div>
    `
  }
  soundEBSpace.innerHTML = buttons;
  buttons = "";
  buttonsRegister(soundDir);
}

genre.addEventListener("change", indicateSoundButton);

// デフォルトの状態で
// buttonsRegister("/sound/se1/test.");