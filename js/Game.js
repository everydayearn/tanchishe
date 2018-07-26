function Game(map, snake, snake1, food, block) {
	this.map = map;
	this.snake = snake;
	this.snake1 = snake1;
	this.food = food;
	this.block = block;
	this.timer = null;
	this.flag = true;
	this.init();
}
//game中的各种方法
Game.prototype.init = function() {
	this.renderMap();
	this.renderFood();
	this.renderSnake();
	this.renderSnake1();
	this.renderBlock();
	this.bindEvent();
	// this.start();
}
//1.渲染地图的方法；
Game.prototype.renderMap = function() {
	this.map.create();

}
//2.渲染食物；
Game.prototype.renderFood = function() {
	var row = this.food.row;
	var col = this.food.col;
	this.map.arr[row][col].style.backgroundImage = "url(" + this.food.img + ")";
	this.map.arr[row][col].style.backgroundSize = "cover";
}
//3.渲染蛇的方法；
Game.prototype.renderSnake = function() {
	//snake  1 先渲染一开始蛇的位置；
	//渲染蛇的 位置
	var head = this.snake.arr[this.snake.arr.length - 1];
	this.map.arr[head.row][head.col].style.backgroundImage = "url(" + this.snake.headp[this.snake.headp_idx] + ")";
	//渲染蛇的身体
	for(var i = 1; i < this.snake.arr.length - 1; i ++) {
		var row = this.snake.arr[i].row;
		var col = this.snake.arr[i].col;
		this.map.arr[row][col].style.backgroundImage = "url(" + this.snake.bodyp[0] + ")";
		// console.log(this.snake.bodyp[0]);
	}
	//渲染蛇的尾部
	var tail = this.snake.arr[0];
	this.map.arr[tail.row][tail.col].style.backgroundImage = "url(" + this.snake.tailp[this.snake.tailp_idx] + ")";
}
//渲染第二条蛇
Game.prototype.renderSnake1 = function() {
	//snake  1 先渲染一开始蛇的位置；
	//渲染蛇的 位置
	var head = this.snake1.arr[this.snake1.arr.length - 1];
	this.map.arr[head.row][head.col].style.backgroundColor = "green";
	this.map.arr[head.row][head.col].innerHTML = "唐皮";

	//渲染蛇的身体
	for(var i = 1; i < this.snake1.arr.length - 1; i ++) {
		var row = this.snake1.arr[i].row;
		var col = this.snake1.arr[i].col;
		this.map.arr[row][col].style.backgroundImage = "url(" + this.snake1.bodyp[0] + ")";
		// console.log(this.snake1.bodyp[0]);
	}
	//渲染蛇的尾部
	var tail = this.snake1.arr[0];
	this.map.arr[tail.row][tail.col].style.backgroundImage = "url(" + this.snake1.tailp[this.snake.tailp_idx] + ")";
}
//渲染障碍物；
Game.prototype.renderBlock = function() {
	for (var i = 0; i < this.block.arr.length; i++) {
		var row = this.block.arr[i].row;
		var col = this.block.arr[i].col;
		this.map.arr[row][col].style.backgroundImage = "url(" + this.block.img +")";
		this.map.arr[row][col].style.backgroundSize = "cover";
	}
}

//判定游戏是否结束；
Game.prototype.checkSnake = function() {
	//如果蛇头行或者高小于0  或者大于arrlength-1就输出撞到墙了；
	var head = this.snake.arr[this.snake.arr.length - 1];
	if(head.row < 0 || head.row >this.map.row - 1 || head.col < 0 || head.col > this.map.col - 1) {
		console.log("蛇撞到墙了");
		this.end();
	}
	for(var i = 0; i < this.snake.arr.length - 1; i++) {
		if(head.row === this.snake.arr[i].row && head.col === this.snake.arr[i].col) {
			console.log("恭喜你吃到自己了   ");
			this.end();
		}
	}
	for(var i = 0; i < this.snake1.arr.length - 1; i++) {
		if(head.row === this.snake1.arr[i].row && head.col === this.snake1.arr[i].col) {
			console.log("撞一起了");
			if (this.snake.arr.length >= this.snake1.arr.length){
				alert("张亚豪（渣渣辉赢了呢），唐皮gg")
			}else {
				alert("唐皮的大蛇赢了，渣渣辉gg了")
			}
			this.end();
		}
	}
	for (var i = 0; i < this.block.arr.length; i++) {
		var row = this.block.arr[i].row;
		var col = this.block.arr[i].col;
		if(head.row === row && head.col ===col) {
			this.end();
		}
	}
}
//snake1
//判定游戏是否结束；
Game.prototype.checkSnake1 = function() {
	//如果蛇头行或者高小于0  或者大于arrlength-1就输出撞到墙了；
	var head = this.snake1.arr[this.snake1.arr.length - 1];
	if(head.row < 0 || head.row >this.map.row - 1 || head.col < 0 || head.col > this.map.col - 1) {
		console.log("蛇撞到墙了");
		this.end();
	}
	for(var i = 0; i < this.snake1.arr.length - 1; i++) {
		if(head.row === this.snake1.arr[i].row && head.col === this.snake1.arr[i].col) {
			console.log("恭喜你吃到自己了   ");
			this.end();
		}
	}
	for(var i = 0; i < this.snake.arr.length - 1; i++) {
		if(head.row === this.snake.arr[i].row && head.col === this.snake.arr[i].col) {
			if (this.snake1.arr.length >= this.snake.arr.length){
				alert("唐皮的大蛇赢了，渣渣辉gg了")
			}else {
				alert("张亚豪（渣渣辉赢了呢），唐皮gg")
			}
			this.end();
		}
	}
	for (var i = 0; i < this.block.arr.length; i++) {
		var row = this.block.arr[i].row;
		var col = this.block.arr[i].col;
		if(head.row === row && head.col ===col) {
			this.end();
		}
	}
}
//判定食物是否被吃；
Game.prototype.checkFood = function () {
	var head_row = this.snake.arr[this.snake.arr.length - 1].row;
	var head_col = this.snake.arr[this.snake.arr.length - 1].col;
	if(this.food.row === head_row && this.food.col === head_col) {
		console.log("蛇吃到食物了  哈哈哈；")
		this.snake.chang();
		this.resetFood();
	}
	var head1_row = this.snake1.arr[this.snake1.arr.length - 1].row;
	var head1_col = this.snake1.arr[this.snake1.arr.length - 1].col;
	if(this.food.row === head1_row && this.food.col === head1_col) {
		console.log("蛇吃到食物了  哈哈哈；")
		this.snake1.chang();
		this.resetFood();
	}
}
//食物重置，得到符合条件的食物的row  和col
Game.prototype.resetFood = function () {
	var row = parseInt(Math.random() * this.map.row);
	var col = parseInt(Math.random() * this.map.col);
	for(var i = 0 ; i < this.snake.arr.length ; i ++) {
		if(row === this.snake.arr[i].row && col === this.snake.arr[i].col){
			this.resetFood();
			return;
		}
	}
	for(var i = 0 ; i < this.snake1.arr.length ; i ++) {
		if(row === this.snake1.arr[i].row && col === this.snake1.arr[i].col){
			this.resetFood();
			return;
		}
	}
	this.food.reset(row, col);
}
//游戏开始；
Game.prototype.start = function() {
	var m = 0;
	var x = 0;
	var me = this;
	this.timer = setInterval(function(){
		m ++;
		x ++;
		if (m % me.snake.n === 0) {
		// console.log(m);
		me.snake.move();
		// me.renderSnake();
		me.checkSnake();
		me.checkFood();
		m = 0
		}
		if (x % me.snake1.n === 0) {
		me.snake1.move();
		me.checkSnake1();
		// me.renderSnake1();
		me.checkFood();
		x = 0;
		}
		if (me.flag) {
			me.map.clear();
			me.renderSnake();
			me.renderSnake1();
			me.renderFood();
			me.renderBlock();
		}
		
	},10);
	
}
//游戏结束
Game.prototype.end = function() {
	clearInterval(this.timer);
	this.flag = false;
	alert("游戏结束");
}
//暂停游戏了
Game.prototype.endjieshu = function() {
	clearInterval(this.timer);
	this.flag = false;
	alert("张亚豪的大蛇gg了呢");
}
//键盘事件用来传递给snake   direction；
Game.prototype.bindEvent = function() {
	var me = this;
	console.log("方向键")
	document.onkeydown = function(e) {
		//这里只需要将 四个按键的四种情况写进去并传递给snake。change就行；
		if(e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40) {
			me.snake.change(e.keyCode);
		}else {
			console.log("别瞎按大兄弟");
		}
		if(e.keyCode === 65 || e.keyCode === 87 || e.keyCode === 68 || e.keyCode === 83) {
			me.snake1.change(e.keyCode);
		}else {
			console.log("别瞎按大兄弟");
		}
		//加速按键；
		if(e.keyCode === 13) {
			me.snake.n -= 2;
			console.log(me.snake.n);
		}
		if(e.keyCode === 16) {
			me.snake1.n -= 2;
		}


	}
}





















// //snake1的按键传递
// Game.prototype.bindEvent = function() {
// 	var me = this;
// 	console.log("wasd");
// 	document.onkeydown = function(e) {
// 		//这里只需要将 四个按键的四种情况写进去并传递给snake。change就行；
// 		if(e.keyCode === 65 || e.keyCode === 87 || e.keyCode === 68 || e.keyCode === 83) {
// 			me.snake1.change(e.keyCode);
// 		}else {
// 			console.log("别瞎按大兄弟");
// 		}
// 	}
// }
