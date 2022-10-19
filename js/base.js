function debounce(fn, delay) {
	let time = null;//time用来控制事件的触发
	console.log(333333)
	return function () {
		console.log(22222,)
		if (time !== null) {
			clearTimeout(time);
		}
		time = setTimeout(() => {
			fn.call(this);
			//利用call(),让this的指针从指向window 转成指向input
		}, delay)
	}
}

function throttle(fn, delay) {
	var flag = true;
	return function () {
		if (flag) {
			setTimeout(() => {
				fn.call(this)
				flag = true;
			}, delay);
		}
		flag = false;
	}
}