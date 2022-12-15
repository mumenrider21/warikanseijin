console.log("main.js!!");

$(document).ready(()=>{
	console.log("Ready!!");
	

	let result = confirm("割り勘でいいか？　ウルトラマン");

if (result) {
alert("豪に入れば郷に従え 私の好きな言葉です");
} else {
alert("一文銭で生爪はがず　私の嫌いな言葉です");
}





	console.log("	案件:「割り勘」を計算するアプリを作る事要件: 金額入力、人数入力を入力する事で、割り勘金額が算出される条件: 各チームごと開発を進める事(CEOは全員提出を確認) 提出: GitHub PagesにUploadし、URLを報告する事 期限: 12月19日(月)")
});




$(window).scroll(function () {
	var scrollAnimationElm = document.querySelectorAll('.scroll_up , .scroll_left , .scroll_right');
	var scrollAnimationFunc = function () {
	  for (var i = 0; i < scrollAnimationElm.length; i++) {
		var triggerMargin = 150;
		if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
		  scrollAnimationElm[i].classList.add('on');
		}
	  }
	}
	window.addEventListener('load', scrollAnimationFunc);
	window.addEventListener('scroll', scrollAnimationFunc);
  });