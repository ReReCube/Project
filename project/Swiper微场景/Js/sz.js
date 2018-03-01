//origin js
var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      on:{
		  init: function(){
		    swiperAnimateCache(this); //隐藏动画元素 
		    swiperAnimate(this); //初始化完成开始动画
		  	}, 
		  slideChangeTransitionEnd: function(){ 
		    swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
		    } 
    	}
   });
//origin js end
//抓元素
var music = document.getElementById("music");
var MP = music.getElementsByClassName("musicPic")[0];
var MB = music.getElementsByClassName("musicBg")[0];
var med = music.getElementsByClassName("media")[0];

//音乐控制
var music_sta = 1;
music.onclick = function () {
	if (music_sta == 1) {
		MB.style.display = 'none';
		MP.style.animation = "0";
		med.pause();
		music_sta = 0;
	} else{
		MB.style.display = 'block';
		MP.style.animation = "musicPlay 5s linear infinite";
		med.play();
		music_sta = 1;
	}
	
}



