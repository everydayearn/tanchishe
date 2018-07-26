function Map(row, col) {
	this.row = row;
	this.col = col;
	this.dom = document.createElement("div");
	this.dom.className = "box";
	this.arr = [];
}
//创造元素；
Map.prototype.create = function() {
	//创建二维数组；
	for(var i = 0; i < this.row; i ++) {
		//创建行数组
		var row_arr = [];
		var row_box = document.createElement("div");
		row_box.className = "row";
		for(var j = 0; j < this.col; j++) {
			var small_box = document.createElement("div");
			small_box.className = "small";
			row_box.appendChild(small_box);
			//将每行的小格子都放进每行里面
			row_arr.push(small_box);
		}
		//将行数组放进arr中
		this.arr.push(row_arr);
		this.dom.appendChild(row_box);
	}
	document.body.appendChild(this.dom);
}
Map.prototype.clear = function () {
	for(var i = 0 ; i < this.arr.length ; i ++) {
		for(var j = 0 ; j < this.arr[i].length; j ++) {
			this.arr[i][j].style.backgroundImage = "none";
			this.arr[i][j].style.backgroundColor = "#fff";
			this.arr[i][j].innerHTML = "";
			// console.log(1);
		}
	}
}