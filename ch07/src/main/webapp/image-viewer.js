var imageViewer = {
	init:function() {
		var that = this;
		$(function() {
			$("#btn-change").click(that._changeImage.bind(that));
			$("#btn-show").click(that._slideshow.bind(that));
			$(".image-viewer img").dblclick(that._consoleLog);
			
			// 첫 번쨰 이미지 선택.
			that._changeImage();
		});
	},
	_consoleLog: function(){
		var name = $(this).attr("alt");
		console.log(name);
	},	
	_changeImage: function(){
		var result = Math.floor( Math.random() * (this._images.length-1)  ) + 1;
		var info = this._images[result];
		
		$(".image-viewer img").attr({
			src: "images/"+ info.file,
			alt: info.name,
			title: info.name
		})
	},
	
	_slideshow: function(){
		if(this._intervalId){
			$("#btn-show").text("슬라이드쇼 시작");
			this._stopshow();
		} else {
			$("#btn-show").text("슬라이드쇼 중지");
			this._playshow();
		}
	},
	
	_playshow: function(){
		console.log("play" + this);
		var that = this;
		this._intervalId = setInterval(function(){
			that._changeImage();
		}, 2000);
		
		// this._intervalId = setInterval(that._changeImage.bind(that),2000);
	},
	
	_stopshow: function(){
		console.log("stop" + this);
		clearInterval(this._intervalId);
		this._intervalId = null;
	},
	
	
	_intervalId : null ,
	_images : [{
			name: "국화",
			file: "Chrysanthemum.jpg" 
		}, {
			name: "사막",
			file: "Desert.jpg" 
		}, {
			name: "수국",
			file: "Hydrangeas.jpg"
		}, {
			name: "해파리",
			file: "Jellyfish.jpg"
		}, {
			name: "코알라",
			file: "Koala.jpg"
		}, {
			name: "등대",
			file: "Lighthouse.jpg"
		}, {
			name: "펭귄",
			file: "Penguins.jpg"
		}, {
			name: "툴립",
			file: "Tulips.jpg"
		}]
}
