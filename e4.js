//effect有的属性
/*this.name = effectName;
this.$wrap = '';//效果元素包裹
this.picNow = '';//正在播放的图片
this.picNext = '';//将要出现的图片
this.durTime = 0;//效果持续时间
this.durT = 0;//持续时间定时器*/


var e4 = extendEffect('cube', function() {

	//this.$wrap.html("234124S");
	//console.log(this)

	var $picWrap = $('<div></div>').css({'width': '100%', 'height': '100%'}),
		rowNum = parseInt(1 + Math.random() * 8),
		colNum = parseInt(1 + Math.random() * 8);


		//console.log(blockHeight)

	this.$wrap.append($picWrap);
	
	var blockWidth = ($picWrap[0].clientWidth)/rowNum,
		blockHeight = ($picWrap[0].clientHeight)/colNum;


	var that = this;
	//生成多个小方块
	for (var i = 0; i < rowNum; i++) {
		for (var j = 0; j < colNum; j++) {
			var $blockWrap = $('<div class="block-wrap"></div>').css({
				'transition': 'all ' + this.durTime/2000 + 's ' + (i + j) * 0.2 + 's',
				'width': 100/rowNum + '%', 
				'height': 100/colNum + '%',
				'left': i * 100/rowNum + '%',
				'top': j * 100/colNum + '%',
				'transform': 'translateZ(' + -blockHeight/2 + 'px) rotateX(0deg)',
				'transform-style': 'preserve-3d'
			});
			$picWrap.append($blockWrap);	

			$blockWrap.html('<div></div><div></div><div></div><div></div><div></div><div></div>');

			$blockWrap.find('div').each(function(index) {
				$(this).show().css({
					'left': 0,
					'top': 0,
					'width': 100 + '%',
					'height': 100 + '%',
					'background-color': '',
					'background-size': rowNum*100 + '% ' + colNum*100 + '%'
				});
				//立方体
				switch (index) {
					case 0: 
						$(this).css({
							'transform': 'rotateX(0deg) translateZ(' + blockHeight/2 + 'px)',
							'background-image': 'url(' + that.picNow + ')',
							'background-position': (-i * 100) + '% ' + (-j * 100) + '%'
						});
						break;
					case 1: 
						$(this).css({
							'transform': 'rotateX(-90deg) translateZ(' + blockHeight/2 + 'px)',
							'background-image': 'url(' + that.picNext + ')',
							'background-position': (-i * 100) + '% ' + (-j * 100) + '%'
						});
						break;
					case 2: 
						$(this).css({
							'transform': 'rotateX(-180deg) translateZ(' + blockHeight/2 + 'px)'
						});
						break;
					case 3: 
						$(this).css({
							'transform': 'rotateX(-270deg) translateZ(' + blockHeight/2 + 'px)'
						});
						break;
					case 4: 
						$(this).css({
							'transform': 'rotateY(90deg) translateZ(' + blockWidth/2 + 'px)'
						});
						break;
					case 5: 
						$(this).css({
							'transform': 'rotateY(270deg) translateZ(' + blockWidth/2 + 'px)'
						});
						break;
				}
			});


		}
	};



	setTimeout(function() {
		$picWrap.find('.block-wrap').each(function() {
			$(this).css({
				'transform': 'translateZ(' + -blockHeight/2 + 'px) rotateX(90deg)'
			});
		});
	}, 10);

});

effectFactory.addEffect(e4);
