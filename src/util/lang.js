export function extend(target, source) {
	for (var key in source) {
		target[key] = source[key];
	}
};

const DEFAULT_INTERVAL = 100 / 60;

export const requestAnimationFrame = (() => {
	return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		// if all else fails, use 如果其他方法都失败了，请使用setTimeout。
		function (callback) {
			return window.setTimeout(callback, (callback.interval || DEFAULT_INTERVAL) / 2); // 使间隔尽可能精确。make interval as precise as possible.
		};
})();

export const cancelAnimationFrame = (() => {
	return window.cancelAnimationFrame ||
		window.webkitCancelAnimationFrame ||
		window.mozCancelAnimationFrame ||
		window.oCancelAnimationFrame ||
		function (id) {
			window.clearTimeout(id);
		};
})();