var e5 = extendEffect('scale', function() {
	//this.$wrap.html("234124S");
	//console.log(this)

	var $picNextWrap = $('<div></div>').css({'width': '100%', 'height': '100%', 'overflow':'hidden'}),
		$picNow = $('<img>').attr('src', this.picNow).css({'width': '100%', 'height': '100%'}),
		$picNext = $('<img>').attr('src', this.picNext).css({'width': '100%', 'height': '100%'});

	this.$wrap.append($picNextWrap.append($picNext).append($picNow));

	var pos = (Math.random() > 0.5 ? 1 : -1);
	$picNow.css({
		'transition': 'all ' + this.durTime/1000 + 's',
		'transform': '',
		'opacity': '1'
	});

	$picNext.css({
		'transition': 'all ' + this.durTime/1000 + 's',
		'opacity': '0',
		'transform': 'scale(0) rotate(' + pos*1080 + 'deg)'
	});

	setTimeout(function() {
		$picNow.css({
			'transform': 'scale(0) rotate(' + -pos*1080 + 'deg)',
			'opacity': '0'
		});	

		$picNext.css({
			'transform': '',
			'opacity': '1'
		});
	}, 100);


});

effectFactory.addEffect(e5);
