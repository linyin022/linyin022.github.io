(()=>{function n(){for(var e=0;e<d.length;e++)d[e]()}var o=!(!window.attachEvent||window.opera),a=/webkit\/(\d+)/i.test(navigator.userAgent)&&RegExp.$1<525,d=[],l=document;l.ready=function(e){if(!o&&!a&&l.addEventListener)return l.addEventListener("DOMContentLoaded",e,!1);var t;1<d.push(e)||(o?function(){try{l.documentElement.doScroll("left"),n()}catch(e){setTimeout(arguments.callee,0)}}():a&&(t=setInterval(function(){/^(loaded|complete)$/.test(l.readyState)&&(clearInterval(t),n())},0)))}})(),document.ready(function(){var e=window._Blog||{},t="dark"===(window.localStorage&&window.localStorage.getItem("theme")),n=document.getElementsByTagName("body")[0];document.getElementById("switch_default").checked=t,document.getElementById("mobile-toggle-theme").innerText="· Dark",e.toggleTheme=function(){t?(n.classList.add("dark-theme"),document.getElementById("mobile-toggle-theme").innerText="· Dark"):(n.classList.remove("dark-theme"),document.getElementById("mobile-toggle-theme").innerText="· Light"),document.getElementsByClassName("toggleBtn")[0].addEventListener("click",function(){n.classList.contains("dark-theme")?n.classList.remove("dark-theme"):n.classList.add("dark-theme"),window.localStorage&&window.localStorage.setItem("theme",document.body.classList.contains("dark-theme")?"dark":"light")}),document.getElementById("mobile-toggle-theme").addEventListener("click",function(){n.classList.contains("dark-theme")?(n.classList.remove("dark-theme"),document.getElementById("mobile-toggle-theme").innerText="· Light"):(n.classList.add("dark-theme"),document.getElementById("mobile-toggle-theme").innerText="· Dark"),window.localStorage&&window.localStorage.setItem("theme",document.body.classList.contains("dark-theme")?"dark":"light")})},e.toggleTheme()});