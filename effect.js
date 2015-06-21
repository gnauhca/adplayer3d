function Effect() {
	this.$wrap = '';//效果元素包裹
	this.picNow = '';//正在播放的图片
	this.picNext = '';//将要出现的图片
	this.durTime = 0;//效果持续时间
	this.durT = 0;//持续时间定时器
}

Effect.prototype.name = '';

Effect.prototype.playEffect = function(picNow, picNext, durTime, wrap, callback) {
	this.picNow = picNow;
	this.picNext = picNext;
	this.durTime = durTime;
	this.$wrap = $(wrap);
	this.doEffect && this.doEffect();

	var that = this;
	this.durT = setTimeout(function() {
		callback();
		that.$wrap.html("");
	}, durTime);
}

Effect.prototype.doEffect = function() {}//效果写在这个方法

//通过对effect的继承，完成对effect的扩展
function extendEffect(effectName, effectFun) {
	var newClass = {};

	newClass = function() {
		Effect.call(this);
	}

	newClass.prototype = new Effect();
	newClass.prototype.constructor = newClass;

	newClass.prototype.name = effectName;
	newClass.prototype.doEffect = effectFun;

	return newClass;
}

var effectFactory = (function() {
	var factory = {},
		effectCs = {};//效果类存放数组


	factory.addEffect = function(effectClass) {
		//添加效果类
		effectCs[effectClass.prototype.name] = effectClass;

	}

	factory.removeEffect = function(effectName) {

		if (effectCs[effectName])	{
			delete effectCs[effectName];
		}
	}

	//获取所有效果名字
	factory.getEffectList = function() {
		var nameList = [];

		for (var effectName in effectCs) {
			nameList.push(effectName);
		}

		return nameList;
	}

	//拿到效果对象
	factory.getEffect = function(effectName) {
		return new effectCs[effectName];
	}

	return factory;
})();





