function Handler(player) {
	this.index = 1;
	this.player = player;
	this.count = player.count;
	this.autoPlayT = 0;
	this.autoPlayTime = player.effectDurTime*2;//自动播放等待时间
	this.randomEffect = false;
	this.init();
}

Handler.prototype.init = function() {
	//this.autoPlay();

	var that = this;
	//setTimeout(function() {that.player.setIndex(that.index+1)}, 10);

	//创建图片按钮
	this.$btnWrap = $('<div class="pic-btn-wrap"></div>').appendTo(this.player.$wrap);


	for (var i = 0; i < this.count; i++) {
		$('<span class="pic-btn"></span>').appendTo(this.$btnWrap);
	}

	this.$btnWrap.find('.pic-btn').each(function(i) {
		this.onclick = function() {that.setIndex(i);};
	});;



	//创建effect选择
	this.$effectSltWrap = $('<div class="effect-item-wrap"></div>').appendTo($('body'));


	for (var i = 0; i < this.player.effectNames.length; i++) {
		$('<span class="effect-item" alt="' + this.player.effectNames[i] + '">' + this.player.effectNames[i] + '</span>').appendTo(this.$effectSltWrap);
	}
	$('<span class="effect-item" alt="random">random</span>').appendTo(this.$effectSltWrap);

	this.$effectSltWrap.find('.effect-item').each(function(i) {
		this.onclick = function() {
			that.changeEffect(this.innerHTML);
		};
	});;

	this.changeEffect('random')
	this.setIndex(this.index);
	this.autoPlay();
}

Handler.prototype.autoPlay = function() {

	var that = this;
	this.autoPlayT = setInterval(function() {
		//console.log((that.index + 1) % that.count);
		that.setIndex((that.index + 1) % that.count);
	}, this.autoPlayTime);
}

Handler.prototype.changeEffect = function(effectName) {
	
	this.$effectSltWrap.find('.effect-item').removeClass('effect-item-current');
	this.$effectSltWrap.find('.effect-item').each(function() {
		if (this.innerHTML == effectName) {
			$(this).addClass("effect-item-current");
		}
	});
	if (effectName != 'random') {
		this.player.setEffect(effectName);
		this.randomEffect = false;
	} else {
		this.randomEffect = true;
	}
}


Handler.prototype.handsetIndex = function(index) { //console.log('try' + index)
	
	clearInterval(this.autoPlayT);
	this.setIndex(index);
	this.autoPlay();
}


Handler.prototype.setIndex = function(index) { //console.log('try' + index)

	if (this.randomEffect) {
		this.player.setEffect(this.player.effectNames[parseInt(Math.random() * this.player.effectNames.length)]);
	}
	if (this.player.setIndex(index)) {
		this.index = index;
		this.$btnWrap.find('.pic-btn').removeClass('pic-btn-current');
		this.$btnWrap.find('.pic-btn').eq(index).addClass('pic-btn-current');
	}
}


