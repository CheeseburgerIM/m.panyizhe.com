(function () {
    var ua = window.navigator.userAgent,
        agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPod'],
        isPC = true
    if (/\sVR\s/g.test(ua)) return
    for (var i = 0, len = agents.length; i < len; i++) {
        if (ua.indexOf(agents[i]) > 0) {
            isPC = false
            break
        }
    }
    if (isPC) {
        window.location.href = 'https://panyizhe.com'
    }
})()