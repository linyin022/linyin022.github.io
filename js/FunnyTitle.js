// 浏览器标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    $('[rel="icon"]').attr('href', "/img/header.jpg");
    document.title = '╭(°A°`)╮ 不准走!!! ~';
    clearTimeout(titleTime);
  }
  else {
    $('[rel="icon"]').attr('href', "/img/header.jpg");
    document.title = '(ฅ>ω<*ฅ) 噫你回来啦 ~' + OriginTitle;
    titleTime = setTimeout(function () {
      document.title = OriginTitle;
    }, 2000);
  }
});
