
$(function(){
	var playItem = 0,
		title=$('.jp-interface .jp-title'),
		jPlayer=$("#jplayer"),
		myPlayList = [
            { name: "You make the rain fall", mp3: "/Audio/rain.mp3", ogg: "/Audio/rain.ogg" },
            { name: "Rockstar", mp3: "/Audio/rockstar.mp3", ogg: "/Audio/rockstar.ogg" },
            { name: "Sandandreas", mp3: "/Audio/sanandreas.mp3", ogg: "/Audio/sanandreas.ogg" },
            { name: "Awesome", mp3: "/Audio/awesome.mp3", ogg: "/Audio/awesome.ogg" },
            {name:"Axe",mp3:"/Audio/axe.mp3",ogg:"/Audio/axe.ogg"},
			{name:"Black Plant",mp3:"/Audio/black_plant.mp3",ogg:"/Audio/black_plant.ogg"},
			{name:"Hidden",mp3:"/Audio/hidden.mp3",ogg:"/Audio/hidden.ogg"},
			{name:"The Separation",mp3:"/Audio/separation.mp3",ogg:"/Audio/separation.ogg"}
		],		
		jPlay=function(idx){
			if(typeof idx==typeof 0)
				jPlayer.jPlayer("setMedia",myPlayList[idx]).jPlayer('play')
			if(typeof idx==typeof '')
				jPlayer.jPlayer("setMedia",myPlayList[playItem=idx=='next'?(++playItem<myPlayList.length?playItem:0):(--playItem>=0?playItem:myPlayList.length-1)]).jPlayer('play')					
			title.text(myPlayList[playItem].name)
			Cufon.refresh()
		}

	jPlayer.jPlayer({
		ready: function() {
			jPlay(playItem)
		},
		ended:function(){
			jPlay('next')
		}
	})
	
	$(".jp-prev,.jp-next")
		.click( function() { 
			jPlay($(this).is('.jp-next')?'next':'prev')
			return false;
		})
	
});
