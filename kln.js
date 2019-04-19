(function yagma() {
	plunder = document.getElementById("plunder_list")
	tbody = plunder.childNodes[1]
	trs = tbody.childNodes

	var i = 4
	function myLoop () {
		if (i < trs.length) {
			a = trs[i].childNodes[17]
			a.childNodes[1]
			a.childNodes[1].click()
			i += 2
			setTimeout(myLoop, 200)
		}
	}
	setTimeout(myLoop, 0)
})();
