// 各フォルダの音声ファイル名
var voice1 = ["笑い声", "応！", "ドンドンパフパフ", "歓声", 
              "歓声(失敗時)", "おばけ", "悲鳴", "歓声と拍手", "黄色い悲鳴"];

var voice2 = ["犬", "牛", "ウグイス", "オオカミ", "ゾウ", "ニワトリ",
              "ブタ", "ライオン", "猫",  "馬"];

var se1 = ["カーッ", "ジャジャーン", "ビシッ(高)", "ピンポン1", "ピンポン2", "ピンポン3", "不正解", "突撃ラッパ", 
          "ゴング(開始)", "ゴング(終了)", "整い(サウナ)", "ニュータイプ", "ビシッ",  "ピー音", "問題です"];

var se2 = ["エアーホーン", "カキーン", "チリン", "デン！", "ドラ", "ドーン", "拍手", "爆発1", "爆発2", "鳩時計",
          "カウントダウン", "シャキーン", "テロン♪", "ドキドキ", "ドラムロール", "バーン", "ファンファーレ",  "衝撃",  "パフ",];

var se3 = ["ガブッ", "ボヨン", "ポカン", "縮む", "伸びる", "切り替え",];

var danger = ["おなら1", "おなら2", "脱糞1", "脱糞2"];

// ボタン表示スペース
var soundEBSpace = document.getElementById("sound-effect-button-space");

// 表示するジャンルのタイトル
var genreTitle = document.getElementById("genre-title");

// 表示する音声ボタン
var buttons = "";

// ジャンル
var genre = document.getElementById("sound-select");


// フォルダ名と再生ファイル名を格納する関数
function soundsDirVariable(value) {
  // 配列を返す[フォルダ名, 再生ファイル名の配列
  switch(value) {
    case "0":
      return ["voice1", voice1];
    case "1":
      return ["voice2", voice2];
    case "2":
      return ["se1", se1];
    case "3":
      return ["se2", se2];
    case "4":
      return ["se3", se3];
    case "5":
      return ["danger", danger];
    default:
      return "";
  };
}

// 再生中のボタンの表示を変える(クラスの付け外し)
function toggleClass() {
  this.tag.classList.toggle("active");
}

// 再生の関数
function playSound() {
  var sound = new Audio(this.name);
  sound.play();
  sound.addEventListener("play", {tag: this.tag, handleEvent: toggleClass});
  sound.addEventListener("pause", {tag: this.tag, handleEvent: toggleClass});
}

// 再生ボタンを表示させる関数
function buttonsRegister(value) {
  var buttonTotal = document.getElementsByClassName("sound-effect-button");
  for (var i = 0; i < buttonTotal.length; i++) {
    var fileName = `./sound/${value}/${buttonTotal[i].innerText}.mp3`
    buttonTotal[i].addEventListener("click", {name: fileName, tag: buttonTotal[i], handleEvent: playSound});
  }
}

// selectタグのchangeイベントで発動させる
function indicateSoundButton() {
  var tmp = soundsDirVariable(genre.value);
  
  var soundDir;
  var soundArr;
  
  if (tmp) {
    [soundDir, soundArr] = tmp;
  
    for (var i = 0; i < soundArr.length; i++) {
      buttons += `
      <div class="sound-effect-button">
        ${soundArr[i]}
      </div>
      `
    }
    soundEBSpace.innerHTML = buttons;
    buttons = "";
    buttonsRegister(soundDir);
  } else {
    // selectAlert();
    alert("選択してください。");
  }
}

genre.addEventListener("change", indicateSoundButton);
