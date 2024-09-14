function extractDataUrl (url) {
	var [mime, encoding] = url.split(',')[0].split('data:')[1].split(';');
	var body = url.split(',').slice(1).join(',');
	switch ((encoding || '').toLowerCase()) { default:
		break; case 'utf8':
			body = decodeURIComponent(body);
		break; case 'base64':
			body = decodeURIComponent(escape(atob(body)));
	}
	return [mime, body, encoding];
}
