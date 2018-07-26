function Food(x, y, img) {
	this.row = x;
	this.col = y;
	this.img = img;
}
//食物的方法；
Food.prototype.reset = function (x, y) {
	this.row = x;
	this.col = y;
}