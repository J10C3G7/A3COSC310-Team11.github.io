	if (bestmatching === -1)
		translateText(wordvec(input2), lang).then(
			function(value) {match += value}
		);
	else
		translateText(getResponseFromVocabulary(bestmatching), lang).then(
			function(value) {match += value}
		);
	return match;