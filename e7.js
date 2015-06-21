//effect有的属性
/*this.name = effectName;
this.$wrap = '';//效果元素包裹
this.picNow = '';//正在播放的图片
this.picNext = '';//将要出现的图片
this.durTime = 0;//效果持续时间
this.durT = 0;//持续时间定时器*/


var e7 = extendEffect('blocks', function() {

	//this.$wrap.html("234124S");
	//console.log(this)

	var $picNowWrap = $('<div></div>').css({'width': '100%', 'height': '100%'}),
		$picNextWrap = $('<div></div>').css({'width': '100%', 'height': '100%'}),
		rowNum = parseInt(1 + Math.random() * 10),
		colNum = parseInt(1 + Math.random() * 10);


		//console.log(blockHeight)

	this.$wrap.append($picNowWrap).append($picNextWrap);
	
	var blockWidth = ($picNowWrap[0].clientWidth)/rowNum,
		blockHeight = ($picNowWrap[0].clientHeight)/colNum;


	var that = this;
	//生成多个小方块
	for (var i = 0; i < rowNum; i++) {
		for (var j = 0; j < colNum; j++) {
			var $blockNow = $('<div></div>').css({
				'transition': 'all ' + this.durTime/2000 + 's ' + Math.abs(i - j) * (this.durTime/(rowNum + colNum)/2000) + 's',
				'width': 100/rowNum + '%', 
				'height': 100/colNum + '%',
				'left': i * 100/rowNum + '%',
				'top': j * 100/colNum + '%',
				'transform': 'scale(1)',
				'background-image': 'url(' + that.picNow + ')',
				'background-position': (-i * 100) + '% ' + (-j * 100) + '%',
				'background-size': rowNum*100 + '% ' + colNum*100 + '%'
			});
			$picNowWrap.append($blockNow);	

			var $blockNext = $('<div></div>').css({
				'transition': 'all ' + this.durTime/2000 + 's ' + Math.abs(i - j) * (this.durTime/(rowNum + colNum)/2000) + 's',
				'width': 100/rowNum + '%', 
				'height': 100/colNum + '%',
				'left': i * 100/rowNum + '%',
				'top': j * 100/colNum + '%',
				'transform': 'scale(0)',
				'background-image': 'url(' + that.picNext + ')',
				'background-position': (-i * 100) + '% ' + (-j * 100) + '%',
				'background-size': rowNum*100 + '% ' + colNum*100 + '%'
			});
			$picNextWrap.append($blockNext);	

		}
	};



	setTimeout(function() {
		$picNowWrap.find('div').each(function() {
			$(this).css({
				'transform': 'scale(0)'
			});
		});

		$picNextWrap.find('div').each(function() {
			$(this).css({
				'transform': 'scale(1)'
			});
		});


	}, 10);

});

effectFactory.addEffect(e7);
