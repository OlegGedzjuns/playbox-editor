window.onload = () => {
	const scripts = [
		'constants.js',
		'menu-items.js',
		'graph-schema.js',
		'playbox.js',
	];

	scripts.forEach(s => {
		const script = document.createElement('script');
		script.src = chrome.extension.getURL(s);
		script.type = 'module';
		s.onload = function() {
			this.remove();
		};
		
		(document.head || document.documentElement).appendChild(script);
	});
}