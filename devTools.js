export default function (Alpine) {
	Alpine.magic('devTools', () => {
		// Ensure that the Alpine.js DevTools plugin is active
		if (typeof window.$x0 === 'undefined') return [];

		const alpineComponents = Array.from(document.querySelectorAll('[x-data]')).map((el, index) => {
			return window[`$x${index}`];
		});

		return alpineComponents;
	});
}
