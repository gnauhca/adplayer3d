var e6 = extendEffect('dex', function() {
	//this.$wrap.html("234124S");
	//console.log(this)

	var $picNowWrap = $('<div></div>').css({'width': '100%', 'height': '100%', 'o0verflow':'hidden'}),
		$picNextWrap = $('<div></div>').css({'width': '100%', 'height': '100%', 'o0verflow':'hidden'});


	$picNextWrap.html('<img><img><img><img><img><img><img><img>');
	$picNowWrap.html('<img><img><img><img><img><img><img><img>');
	this.$wrap.append($picNextWrap).append($picNowWrap);


	var that = this;
	var imgLength = $picNextWrap.find('img').length;

	$picNextWrap.find('img').attr('src', this.picNext).css({'width': '100%', 'height': '100%'}).each(function(i) {
		$(this).css({
			'transition': 'all ' + that.durTime/(2000) + 's ' + (i*that.durTime/(2000))/imgLength + 's',
			'transform': 'rotateY(' + -270 + 'deg)',
			'opacity': 0,
			'transform-origin': '0 0',			
		});
	});

	$picNowWrap.find('img').attr('src', this.picNow).css({'width': '100%', 'height': '100%'}).each(function(i) {
		$(this).css({
			'transition': 'all ' + that.durTime/(2000) + 's ' + (i*that.durTime/(2000))/imgLength + 's',
			'transform': '',
			'opacity': 1/(imgLength)+0.2,
			'transform-origin': '100% 0',			
		});
	});

	$picNextWrap.css({
		'transform-style': 'preserve-3d'
	});

	$picNowWrap.css({
		'transform-style': 'preserve-3d'
	});

	setTimeout(function() {
		$picNextWrap.find('img').css({
			'transform': '',
			'opacity': 1/(imgLength)+0.2			
		});
		$picNowWrap.find('img').css({
			'transform': 'rotateY(' + 270 + 'deg)',
			'opacity': 0			
		});


	}, 100);


});

effectFactory.addEffect(e6);
