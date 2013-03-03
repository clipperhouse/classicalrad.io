function isMobile (req) {
	var ua = req.header('user-agent')
	return /mobile/i.test(ua) || /android/i.test(ua) || /nexus/i.test(ua);
};

function isPopup (req) {
	return req.query.pop != undefined;
};

function bodyClass (req, classname) {
	var result = '' + classname;

	if (isMobile(req)) {
		result += ' mobile';
	}

	if (isPopup(req)) {
		result += ' pop';
	}
	return result;
};

exports.isMobile = isMobile;
exports.isPopup = isPopup;
exports.bodyClass = bodyClass;