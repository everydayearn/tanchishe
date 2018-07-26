function Snake1(snakeObj){ 
	// snake 1定义蛇一开始的位置  用数组表示  并在map上渲染
	this.arr = [
		{row : 18 , col : 8},
		{row : 18 , col : 9},
		{row : 18 , col : 10},
		{row : 18 , col : 11}
	];
	this.headp = snakeObj.headp;
	this.bodyp = snakeObj.bodyp;
	this.tailp = snakeObj.tailp;
	this.direction = 68;
	this.headp_idx = 2;
	this.tailp_idx = 0;
	//定义一个锁防止蛇没运动完就转头； 
	this.lock = true;
	this.n = 40;
}
Snake1.prototype.move = function () {
	//定义蛇头
	var snake_head = {
		row : this.arr[this.arr.length - 1].row,
		col : this.arr[this.arr.length - 1].col
	};
	//当移动时改变头的位置  删去尾部；
	if(this.direction === 65) {
		snake_head.col --;
	}else if (this.direction === 87) {
		snake_head.row --;
	}else if (this.direction === 68) {
		snake_head.col ++;
	}else if (this.direction === 83) {
		snake_head.row ++;
	}
	this.arr.push(snake_head);
	this.arr.shift();
	this.lock = true;
	var tail = this.arr[0];
	var tail_1 = this.arr[1];
	if (tail.row === tail_1.row) {
		this.tailp_idx = tail.col > tail_1.col ? 2 : 0;
	}else {
		this.tailp_idx = tail.row > tail_1.row ? 3 : 1;
	}
}
Snake1.prototype.change = function(direction) {
	if (!this.lock) {
		return;
	};
	this.lock = false;
	//判断进来的方向是什么；
	var fangxiang = Math.abs(this.direction - direction);
	if (fangxiang  === 3 || fangxiang === 4) {
		return;
	}else {
		
		this.direction = direction;
	}
	//在change的时候改变头部
	// if(direction === 65) {
	// 	this.headp_idx = 0;
	// }else if (direction === 87) {
	// 	this.headp_idx = 1;
	// }else if (direction === 68) {
	// 	this.headp_idx = 2;
	// }else if (direction === 83) {
	// 	this.headp_idx = 3;
	// }

}
//蛇只负责自己的东西  蛇长长是自己的事情。需要跟food什么的联系着写规则写在game中；
Snake1.prototype.chang = function() {
	this.n --;
	var tail = this.arr[0];
	this.arr.unshift(tail);
}