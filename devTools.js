export default function (Alpine) {
	Alpine.magic('devTools', () => {
		// Ensure that the Alpine.js DevTools plugin is active
		if (typeof window.$x0 === 'undefined') return [];

		const alpineComponents = Array.from(document.querySelectorAll('[x-data]')).map((el, index) => {
			const id = el.id ? `#${el.id}` : el.tagName.toLowerCase();

			// Skip logging if id is 'alpine-dev-tools'
			if (id !== '#alpine-dev-tools') {
				// Log the component id
				console.log(`%c${id}`, 'background-color: #db2777; color: #f1f5f9; font-weight: bold;');
			}

			const component = window[`$x${index}`];

			// Log the component if its id is not 'alpine-dev-tools'
			if (id !== '#alpine-dev-tools') {
				console.log('Alpine DevTools', component);
			}

			return { _xdataId: id, ...component }; // Create a new object with _xdataId as the first property
		});

		return alpineComponents;
	});
}
