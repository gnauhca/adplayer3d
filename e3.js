//effect有的属性
/*this.name = effectName;
this.$wrap = '';//效果元素包裹
this.picNow = '';//正在播放的图片
this.picNext = '';//将要出现的图片
this.durTime = 0;//效果持续时间
this.durT = 0;//持续时间定时器*/


var e3 = extendEffect('page', function() {

	var $rotateWrap = $('<div></div>'),
		$picNow = $('<img src="' + this.picNow + '" alt="" />').css({'width': '100%', 'height': '100%'}),
		$picNext = $('<img src="' + this.picNext + '" alt="" />').css({'width': '100%', 'height': '100%'}),
		halfHeight =  this.$wrap.outerHeight()/2;

	$picNow.css({
		'transform': 'rotateX(0) translateZ(' + halfHeight + 'px)'
	});


	$picNext.css({
		'transform': 'rotateX(-90deg) translateZ(' + halfHeight + 'px)'
	});

	$rotateWrap.css({
		'transition': 'all ' + this.durTime/1000 + 's ',// + (i + j) * 0.2 + 's',
		'transform': ' translateZ(' + -halfHeight + 'px) rotateX(0deg)',
		'transform-style': 'preserve-3d',
		'width': '100%',
		'height': '100%'
	});

	this.$wrap.append($rotateWrap.append($picNow).append($picNext));
	setTimeout(function() {

		$rotateWrap.css({
			'transform': ' translateZ(' + -halfHeight + 'px) rotateX(90deg)',
		});

	}, 10);

});

effectFactory.addEffect(e3);
