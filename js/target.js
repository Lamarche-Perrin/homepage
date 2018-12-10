function getTab () {
	var url = new URL (window.location.href);
	var tab = url.searchParams.get ("t");
	if (url.searchParams.has ("t")) { window.frames['right'].location.href = 'html/' + tab + '.html'; }
}

if (window.addEventListener) { window.addEventListener("load", getTab, false); }
else if (window.attachEvent) { window.attachEvent("onload", getTab); }
else { window.onload = getTab; }
