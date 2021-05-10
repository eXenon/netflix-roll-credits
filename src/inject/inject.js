function click(el) {
	if (el.fireEvent) {
		el.fireEvent('onclick');
	} else {
		var evObj = document.createEvent('Events');
		evObj.initEvent('click', true, false);
		el.dispatchEvent(evObj);
	}
}

function callback(_) {
	player_elts = document.getElementsByClassName("player-view-childrens player-view-childrens-static")
	promotem_elts = document.getElementsByClassName("PromotedVideo-actions")
	promotes_elts = document.getElementsByClassName("season-renewal-actions")
	if (player_elts.length == 1 && (promotem_elts.length > 0 || promotes_elts.length > 0)) {
		click(player_elts.item(0))
	}
}

// Selectionne le noeud dont les mutations seront observées
var targetNode = document.getElementsByTagName("body").item(0)

// Options de l'observateur (quelles sont les mutations à observer)
var config = { attributes: true, childList: true };

// Créé une instance de l'observateur lié à la fonction de callback
var observer = new MutationObserver(callback);

// Commence à observer le noeud cible pour les mutations précédemment configurées
observer.observe(targetNode, config);