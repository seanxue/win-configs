function regExpMatch(url, pattern) {
	try { return new RegExp(pattern).test(url); } catch(ex) { return false; }
}

function FindProxyForURL(url, host) {
  var hyk_proxy_str = 'PROXY 127.0.0.1:48100';
  var proxy_str = hyk_proxy_str;

	if (shExpMatch(url, '*://*.8cyber.com/*') || shExpMatch(url, '*://*8cyber.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.aiweiweiblog.com/*') || shExpMatch(url, '*://*aiweiweiblog.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.android.com/*') || shExpMatch(url, '*://*android.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.avidemux.org/*') || shExpMatch(url, '*://*avidemux.org/*')) return proxy_str;
	if (shExpMatch(url, '*://*.bbc.co.uk/*') || shExpMatch(url, '*://*bbc.co.uk/*')) return proxy_str;
	if (shExpMatch(url, '*://bit.ly/*')) return proxy_str;
	if (shExpMatch(url, '*://*.blogger.com/*') || shExpMatch(url, '*://*blogger.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.blogspot.com/*') || shExpMatch(url, '*://*blogspot.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.chinagfw.org/*') || shExpMatch(url, '*://*chinagfw.org/*')) return proxy_str;
	if (shExpMatch(url, '*://*.chromium.org/*') || shExpMatch(url, '*://*chromium.org/*')) return proxy_str;
	if (shExpMatch(url, '*://*.codecguide.com/*') || shExpMatch(url, '*://*codecguide.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.cstringdirect.com/*') || shExpMatch(url, '*://*cstringdirect.com/*')) return proxy_str;
	if (shExpMatch(url, '*://d.pr/*')) return proxy_str;
	if (shExpMatch(url, '*://*.dropbox.com/*') || shExpMatch(url, '*://*dropbox.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.facebook.com/*') || shExpMatch(url, '*://*facebook.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.fbcdn.net/*') || shExpMatch(url, '*://*fbcdn.net/*')) return proxy_str;
	if (shExpMatch(url, '*://*.fc2.com/*') || shExpMatch(url, '*://*fc2.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.feedburner.com/*') || shExpMatch(url, '*://*feedburner.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.fleshbot.com/*') || shExpMatch(url, '*://*fleshbot.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.frannieadams.com/*') || shExpMatch(url, '*://*frannieadams.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.friendfeed.*') || shExpMatch(url, '*://*friendfeed.*')) return proxy_str;
	if (shExpMatch(url, '*://gim.org.pl/*')) return proxy_str;
	if (shExpMatch(url, '*://*.google.com/music/*') || shExpMatch(url, '*://*google.com/music/*')) return proxy_str;
  if (shExpMatch(url, '*://*.docs.google.com/*') || shExpMatch(url, '*://*docs.google.com/*')) return proxy_str;
	if (shExpMatch(url, '*://feedproxy.google.com/*')) return proxy_str;
	if (shExpMatch(url, '*://groups.google.com/*')) return proxy_str;
	if (shExpMatch(url, '*://spreadsheets*.google.com/*')) return proxy_str;
	if (shExpMatch(url, '*://video.google.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.graphviz.org/*') || shExpMatch(url, '*://*graphviz.org/*')) return proxy_str;
	if (shExpMatch(url, '*://www.hk-pub.com/*')) return proxy_str;
	if (shExpMatch(url, '*://hot-image.net/*')) return proxy_str;
	if (shExpMatch(url, '*://*.iblog.com/*') || shExpMatch(url, '*://*iblog.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.imdb.com/*') || shExpMatch(url, '*://*imdb.com/*')) return proxy_str;
	if (shExpMatch(url, '*://img.ly/*')) return proxy_str;
	if (shExpMatch(url, '*://j.mp/*')) return proxy_str;
	if (shExpMatch(url, '*://*.kenengba.com/*') || shExpMatch(url, '*://*kenengba.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.lalulalu.com/*') || shExpMatch(url, '*://*lalulalu.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.mail-archive.com/*') || shExpMatch(url, '*://*mail-archive.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.min.us/*') || shExpMatch(url, '*://*min.us/*')) return proxy_str;
	if (shExpMatch(url, '*://*.mobypicture.com/*') || shExpMatch(url, '*://*mobypicture.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.multiupload.com/*') || shExpMatch(url, '*://*multiupload.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.myheritagefiles.com/*') || shExpMatch(url, '*://*myheritagefiles.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.nextmedia.com/*') || shExpMatch(url, '*://*nextmedia.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.ow.ly/*') || shExpMatch(url, '*://*ow.ly/*')) return proxy_str;
	if (shExpMatch(url, '*://*.plurk.com/*') || shExpMatch(url, '*://*plurk.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.posterous.com/*') || shExpMatch(url, '*://*posterous.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.python.org/*') || shExpMatch(url, '*://*python.org/*')) return proxy_str;
	if (shExpMatch(url, '*://*.hanyee.cn/*') || shExpMatch(url, '*://*hanyee.cn/*')) return proxy_str;
	if (shExpMatch(url, '*://www.cavtc.edu.cn/*')) return proxy_str;
	if (shExpMatch(url, '*://*.rocketinbottle.com/*') || shExpMatch(url, '*://*rocketinbottle.com/*')) return proxy_str;
	if (shExpMatch(url, '*://www.se-radio.net/*')) return proxy_str;
	if (shExpMatch(url, '*://wt.servebbs.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.sns.ly/*') || shExpMatch(url, '*://*sns.ly/*')) return proxy_str;
	if (shExpMatch(url, '*://t.co/*')) return proxy_str;
	if (shExpMatch(url, '*://*.torproject.org/*') || shExpMatch(url, '*://*torproject.org/*')) return proxy_str;
	if (shExpMatch(url, '*://*.tweetmeme.com/*') || shExpMatch(url, '*://*tweetmeme.com/*')) return proxy_str;
	if (shExpMatch(url, '*://twitgoo.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.twitpic.com/*') || shExpMatch(url, '*://*twitpic.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.twitter.com/*') || shExpMatch(url, '*://*twitter.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.twiyia.com/*') || shExpMatch(url, '*://*twiyia.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.vevo.com/*') || shExpMatch(url, '*://*vevo.com/*')) return proxy_str;
	if (shExpMatch(url, '*://vimeo.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.voanews.com/*') || shExpMatch(url, '*://*voanews.com/*')) return proxy_str;
	if (shExpMatch(url, '*://wahas.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.waveprotocol.org/*') || shExpMatch(url, '*://*waveprotocol.org/*')) return proxy_str;
	if (shExpMatch(url, '*://*.wikileaks.org/*') || shExpMatch(url, '*://*wikileaks.org/*')) return proxy_str;
	if (shExpMatch(url, '*://*.wikimedia.org/*') || shExpMatch(url, '*://*wikimedia.org/*')) return 'DIRECT';
	if (shExpMatch(url, '*://*.wikipedia.org/*') || shExpMatch(url, '*://*wikipedia.org/*')) return 'DIRECT';
	if (shExpMatch(url, '*://*.xuite.net/*') || shExpMatch(url, '*://*xuite.net/*')) return proxy_str;
	if (shExpMatch(url, '*://yfrog.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.youtu.be/*') || shExpMatch(url, '*://*youtu.be/*')) return proxy_str;
	if (shExpMatch(url, '*://*.youtube.com/*') || shExpMatch(url, '*://*youtube.com/*')) return proxy_str;
	if (shExpMatch(url, '*://*.ytimg.com/*') || shExpMatch(url, '*://*ytimg.com/*')) return proxy_str;
  if (shExpMatch(url, '*://*.mytweetplace.com/*') || shExpMatch(url, '*://*mytweetplace.com/*')) return proxy_str;
  if (shExpMatch(url, '*://*.fbcdn.net/*') || shExpMatch(url, '*://*fbcdn.net/*')) return proxy_str;
  if (shExpMatch(url, '*://clients2.googleusercontent.com/*')) return proxy_str;
  if (shExpMatch(url, '*://*.appspot.com/*')) return proxy_str;
  if (shExpMatch(url, '*://*.appspot.com/*')) return proxy_str;

	return 'DIRECT';
}