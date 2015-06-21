//effect有的属性
/*this.name = effectName;
this.$wrap = '';//效果元素包裹
this.picNow = '';//正在播放的图片
this.picNext = '';//将要出现的图片
this.durTime = 0;//效果持续时间
this.durT = 0;//持续时间定时器*/


var e2 = extendEffect('storm', function() {
	//this.$wrap.html("234124S");
	//console.log(this)

	var $picNowWrap = $('<div></div>').css({'width': '100%', 'height': '100%', 'transform-style': 'preserve-3d'}),
		$picNextWrap = $('<div></div>').css({'width': '100%', 'height': '100%', 'transform-style': 'preserve-3d'}),
		rowNum = parseInt(1 + Math.random() * 10),
		colNum = parseInt(1 + Math.random() * 10);

	this.$wrap.append($picNowWrap);
	this.$wrap.append($picNextWrap);
	
	//生成多个小方块
	for (var i = 0; i < rowNum; i++) {
		for (var j = 0; j < colNum; j++) {

			$picNowWrap.append($('<div></div>').css({
				'transition': 'all ' + this.durTime/2000 + 's ',// + (i + j) * 0.2 + 's',
				'width': 100/rowNum + '%', 
				'height': 100/colNum + '%',
				'left': i * 100/rowNum + '%',
				'top': j * 100/colNum + '%',
				'background-image': 'url(' + this.picNow + ')',
				'background-size': rowNum*100 + '% ' + colNum*100 + '%',
				'background-position': (-i * 100) + '% ' + (-j * 100) + '%',
				'transform': '',
				'opacity': '1'
			}));

			$picNextWrap.append($('<div></div>').css({
				'transition': 'all ' + this.durTime/2000 + 's ',// + (i + j) * 0.2 + 's',
				'width': 100/rowNum + '%',
				'height': 100/colNum + '%',
				'left': i * 100/rowNum + '%',
				'top': j * 100/colNum + '%',
				'background-image': 'url(' + this.picNext + ')',
				'background-size': rowNum*100 + '% ' + colNum*100 + '%',
				'background-position': (-i * 100) + '% ' + (-j * 100) + '%',
				'transform': 'translateZ(-300px) scale(0.2) rotate3d(' + Math.random() + ', ' + Math.random() + ', ' + Math.random() + ', ' + (Math.random() * -1480 + 720) + 'deg)',
				'opacity': '0'
			}));			
		}
	};



	setTimeout(function() {
		$picNowWrap.find('div').each(function() {
			$(this).css({
				'transform': 'translateZ(400px) scale(1.3) rotate3d(' + Math.random() + ', ' + Math.random() + ', ' + Math.random() + ', ' + (Math.random() * -1480 + 720) + 'deg)',
				'opacity': '0'
			});
		});

		$picNextWrap.find('div').each(function() {
			$(this).css({
				'transform': '',
				'opacity': '1'
			});
		});
	}, 10);


});

effectFactory.addEffect(e2);
