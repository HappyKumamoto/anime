var header = document.getElementById("header");
var isPositive = true;
var opacity = 0; // 不透明度

function opacityAnimate() {
  if (isPositive) {
    opacity += 0.05;
  } else {
    opacity -= 0.05;
  }

  if (opacity > 1) {
    isPositive = false;
  } else if (opacity < 0) {
    isPositive = true;
  }

  header.style.opacity = opacity;
}

// 300ミリ秒ごとに opacityAnimate 関数を実行する
setInterval(opacityAnimate, 300);



//また授業ではできませんでしたが、以下のように更に簡単に書くこともできます。
//var header = document.getElementById("header");
//var vector = 0.05; // 不透明度の増分（負の値にもなる）
//var opacity = 0; // 不透明度

//function opacityAnimate() {
//  if (opacity > 1) {
  //  vector = -0.05;
 // } else if (opacity < 0) {
  //  vector = 0.05;
  //    }
//  opacity += vector;
 // header.style.opacity = opacity;
//}

//setInterval(opacityAnimate, 20);