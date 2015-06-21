//effect有的属性
/*this.name = effectName;
this.$wrap = '';//效果元素包裹
this.picNow = '';//正在播放的图片
this.picNext = '';//将要出现的图片
this.durTime = 0;//效果持续时间
this.durT = 0;//持续时间定时器*/


var e1 = extendEffect('cool', function() {
	//this.$wrap.html("234124S");
	//console.log(this)

	var $picNow = $('<img>').attr('src', this.picNow).css({'width': '100%', 'height': '100%'}),
		$picNext = $('<img>').attr('src', this.picNext).css({'width': '100%', 'height': '100%'});


	this.$wrap.append($picNow);
	this.$wrap.append($picNext);
	$picNow.css({
		'transition': 'all ' + this.durTime/1000 + 's'
	});
	setTimeout(function() {
		$picNow.css({
			//'transform-origin': 'top',
			'transform': 'rotateX(90deg)',
			'opacity': '0'
		});		
	},10);

	$picNext.css({
		'transition': 'all ' + this.durTime/1000 + 's',
		//'transform-origin': 'left bottom',
		'transform': 'rotateX(-90deg)',
		'opacity': '0'
	});
	setTimeout(function() {
		$picNext.css({
			//'transform-origin': 'left bottom',
			'transform': 'rotateX(0deg)',
			'opacity': '1'
		});		
	},10);

});

effectFactory.addEffect(e1);
