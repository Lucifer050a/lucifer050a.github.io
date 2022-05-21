function FindProxyForURL(url, host) {
    var proxy = 'SOCKS5 127.0.0.1:1080';
    var direct = 'DIRECT';

    function suffixMatch() {
        if (shExpMatch(host, '*.android.com') || host == 'android.com') {
            return true;
        }
        if (shExpMatch(host, '*.blogblog.com') || host == 'blogblog.com') {
            return true;
        }
        if (shExpMatch(host, '*.blogger.com') || host == 'blogger.com') {
            return true;
        }
        if (shExpMatch(host, '*.blogspot.com') || host == 'blogspot.com') {
            return true;
        }
        if (shExpMatch(host, '*.e-hentai.org') || host == 'e-hentai.org') {
            return true;
        }
        if (shExpMatch(host, '*.ehgt.org') || host == 'ehgt.org') {
            return true;
        }
        if (shExpMatch(host, '*.facebook.com') || host == 'facebook.com') {
            return true;
        }
        if (shExpMatch(host, '*.facebook.net') || host == 'facebook.net') {
            return true;
        }
        if (shExpMatch(host, '*.fbcdn.net') || host == 'fbcdn.net') {
            return true;
        }
        if (shExpMatch(host, '*.githubusercontent.com') || host == 'githubusercontent.com') {
            return true;
        }
        if (shExpMatch(host, '*.chrome.com') || host == 'chrome.com') {
            return true;
        }
        if (shExpMatch(host, '*.g.co') || host == 'g.co') {
            return true;
        }
        if (shExpMatch(host, '*.google.com') || host == 'google.com') {
            return true;
        }
        if (shExpMatch(host, '*.googleapis.cn') || host == 'googleapis.cn') {
            return true;
        }
        if (shExpMatch(host, '*.googleapis.com') || host == 'googleapis.com') {
            return true;
        }
        if (shExpMatch(host, '*.googleusercontent.com') || host == 'googleusercontent.com') {
            return true;
        }
        if (shExpMatch(host, '*.googlesyndication.com') || host == 'googlesyndication.com') {
            return true;
        }
        if (shExpMatch(host, '*.googlevideo.com') || host == 'googlevideo.com') {
            return true;
        }
        if (shExpMatch(host, '*.googlezip.net') || host == 'googlezip.net') {
            return true;
        }
        if (shExpMatch(host, '*.google-analytics.com') || host == 'google-analytics.com') {
            return true;
        }
        if (shExpMatch(host, '*.gstatic.com') || host == 'gstatic.com') {
            return true;
        }
        if (shExpMatch(host, '*.gvt1.com') || host == 'gvt1.com') {
            return true;
        }
        if (shExpMatch(host, '*.k8s.io') || host == 'k8s.io') {
            return true;
        }
        if (shExpMatch(host, '*.recaptcha.net') || host == 'recaptcha.net') {
            return true;
        }
        if (shExpMatch(host, '*.btdig.com') || host == 'btdig.com') {
            return true;
        }
        if (shExpMatch(host, '*.javbus.com') || host == 'javbus.com') {
            return true;
        }
        if (shExpMatch(host, '*.cdninstagram.com') || host == 'cdninstagram.com') {
            return true;
        }
        if (shExpMatch(host, '*.instagram.com') || host == 'instagram.com') {
            return true;
        }
        if (shExpMatch(host, '*.live.com') || host == 'live.com') {
            return true;
        }
        if (shExpMatch(host, '*.vscode.dev') || host == 'vscode.dev') {
            return true;
        }
        if (shExpMatch(host, '*.norton.com') || host == 'norton.com') {
            return true;
        }
        if (shExpMatch(host, '*.nortoncdn.com') || host == 'nortoncdn.com') {
            return true;
        }
        if (shExpMatch(host, '*.pixiv.net') || host == 'pixiv.net') {
            return true;
        }
        if (shExpMatch(host, '*.pximg.net') || host == 'pximg.net') {
            return true;
        }
        if (shExpMatch(host, '*.pornhub.com') || host == 'pornhub.com') {
            return true;
        }
        if (shExpMatch(host, '*.phncdn.com') || host == 'phncdn.com') {
            return true;
        }
        if (shExpMatch(host, '*.trafficjunky.net') || host == 'trafficjunky.net') {
            return true;
        }
        if (shExpMatch(host, '*.adtng.com') || host == 'adtng.com') {
            return true;
        }
        if (shExpMatch(host, '*.reddit.com') || host == 'reddit.com') {
            return true;
        }
        if (shExpMatch(host, '*.redditstatic.com') || host == 'redditstatic.com') {
            return true;
        }
        if (shExpMatch(host, '*.redditmedia.com') || host == 'redditmedia.com') {
            return true;
        }
        if (shExpMatch(host, '*.redd.it') || host == 'redd.it') {
            return true;
        }
        if (shExpMatch(host, '*.spotify.com') || host == 'spotify.com') {
            return true;
        }
        if (shExpMatch(host, '*.hltv.org') || host == 'hltv.org') {
            return true;
        }
        if (shExpMatch(host, '*.steamcommunity.com') || host == 'steamcommunity.com') {
            return true;
        }
        if (shExpMatch(host, '*.steampowered.com') || host == 'steampowered.com') {
            return true;
        }
        if (shExpMatch(host, '*.steamstatic.com') || host == 'steamstatic.com') {
            return true;
        }
        if (shExpMatch(host, '*.steam.tv') || host == 'steam.tv') {
            return true;
        }
        if (shExpMatch(host, '*.tiktokv.com') || host == 'tiktokv.com') {
            return true;
        }
        if (shExpMatch(host, '*.tiktokcdn.com') || host == 'tiktokcdn.com') {
            return true;
        }
        if (shExpMatch(host, '*.tiktok.com') || host == 'tiktok.com') {
            return true;
        }
        if (shExpMatch(host, '*.twitch.tv') || host == 'twitch.tv') {
            return true;
        }
        if (shExpMatch(host, '*.ttvnw.net') || host == 'ttvnw.net') {
            return true;
        }
        if (shExpMatch(host, '*.twitter.com') || host == 'twitter.com') {
            return true;
        }
        if (shExpMatch(host, '*.twimg.com') || host == 'twimg.com') {
            return true;
        }
        if (shExpMatch(host, '*.userjoy.com') || host == 'userjoy.com') {
            return true;
        }
        if (shExpMatch(host, '*.uj.com.tw') || host == 'uj.com.tw') {
            return true;
        }
        if (shExpMatch(host, '*.tcb-bank.com.tw') || host == 'tcb-bank.com.tw') {
            return true;
        }
        if (shExpMatch(host, '*.playuj.com') || host == 'playuj.com') {
            return true;
        }
        if (shExpMatch(host, '*.wikipedia.org') || host == 'wikipedia.org') {
            return true;
        }
        if (shExpMatch(host, '*.wikimedia.org') || host == 'wikimedia.org') {
            return true;
        }
        if (shExpMatch(host, '*.wikisource.org') || host == 'wikisource.org') {
            return true;
        }
        if (shExpMatch(host, '*.appguard.co.kr') || host == 'appguard.co.kr') {
            return true;
        }
        if (shExpMatch(host, '*.doubleclick.net') || host == 'doubleclick.net') {
            return true;
        }
        if (shExpMatch(host, '*.tap.io') || host == 'tap.io') {
            return true;
        }
        if (shExpMatch(host, '*.statically.io') || host == 'statically.io') {
            return true;
        }
        if (shExpMatch(host, '*.jsdelivr.net') || host == 'jsdelivr.net') {
            return true;
        }
        if (shExpMatch(host, '*.okx.com') || host == 'okx.com') {
            return true;
        }
        if (shExpMatch(host, '*.quora.com') || host == 'quora.com') {
            return true;
        }
        if (shExpMatch(host, '*.quoracdn.net') || host == 'quoracdn.net') {
            return true;
        }
        return false;
    }

    function ipMatch() {
        if (isInNet(host, '127.0.0.0', '255.0.0.0')) {
            return false;
        }
        if (isInNet(host, '172.16.0.0', '255.240.0.0')) {
            return false;
        }
        if (isInNet(host, '192.168.0.0', '255.255.0.0')) {
            return false;
        }
        if (isInNet(host, '10.0.0.0', '255.0.0.0')) {
            return false;
        }
        if (isInNet(host, '100.64.0.0', '255.192.0.0')) {
            return false;
        }
        return false;
    }

    function domainKeyword() {
        if (shExpMatch(host, '*.google.com.*')) {
            return true;
        }
        if (shExpMatch(host, '*.google.co.*')) {
            return true;
        }
        return false;
    }
    var match = function () {
        if (ipMatch()) {
            return true;
        }
        if (suffixMatch()) {
            return true;
        }
        if (domainKeyword()) {
            return true;
        }
        return false;
    };
    if (match()) {
        return proxy;
    }
    return direct;
}
