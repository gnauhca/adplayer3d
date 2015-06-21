function Player(wrapId, imgs) {
	this.$wrap = $('#' + wrapId);
	this.picBoxs = [];//容纳每一个图片的容器， jq元素
	this.$effectWrap = null;
	this.imgs = imgs;
	this.count = imgs.length;
	this.currentIndex = 0;
	this.nextIndex = 0;
	this.effects = {};//生成过的effect，保存起来
	this.currentEffect = null;
	this.effectDurTime = 2500;//效果持续时间
	//this.effectDurTime = 20000000;//效果持续时间
	this.effectT = 0;//效果计时器
	this.effectNames = effectFactory.getEffectList();//效果名字数组
	this.handler = null;//设置控制器
	this.playing = false;
	this.init();
}


Player.prototype.init = function() {
	//创建效果包裹
	this.$effectWrap = $('<div class="effect-wrap"></div>');
	this.$effectWrap.appendTo(this.$wrap);
	this.$wrap.css('height', this.$wrap.outerWidth() * (9/16));

	var that = this;
	window.onresize = function() {
		(function() {this.$wrap.css('height', this.$wrap.outerWidth() * (9/16));}).call(that);
	}
	//创建容纳图片的每一个容器
	var $picBox = null;
	for (var i = 0; i < imgs.length; i++) {
		$picBox = $('<div class="pic-box"></div>');
		this.picBoxs.push($picBox);

		//设置背景图片 
		$picBox.css({
			'background-image': 'url(' + imgs[i] + ')',
			'background-size': '100% 100%', 
			//'background-size': this.$wrap.outerWidth() + 'px ' + this.$wrap.outerHeight() + 'px', 
			'background-repeat': 'no-repeat' 
		});

		$picBox.hide().appendTo(this.$wrap);
	}
	//console.log(this.effectNames);
	this.picBoxs[this.currentIndex].show();
	this.handler = new Handler(this);
	//this.setEffect(this.effectNames[3])
}


Player.prototype.play = function(index) {
	//Effect.prototype.playEffect = function(picNow, picNext, durTime, wrapId)
	//使用当前效果对象播放效果

	var that = this;

	if (this.playing) {return false;}
	if (this.currentIndex == index) {return true;}

	this.nextIndex = index;

	this.playing = true;

	//console.log('effectplay');
	this.currentEffect.playEffect(this.imgs[this.currentIndex], this.imgs[this.nextIndex], this.effectDurTime, this.$effectWrap, function() {
		that.picBoxs[that.nextIndex].show(); that.playing = false;
	});

	this.picBoxs[this.currentIndex].hide();


	this.currentIndex = this.nextIndex;

	return true;
}

Player.prototype.setIndex = function(index) {
	return this.play(index);
}

Player.prototype.setEffect = function(effectName) {
	if (!this.effects[effectName]) {
		this.effects[effectName] = effectFactory.getEffect(effectName);
	}
	this.currentEffect = this.effects[effectName];
}