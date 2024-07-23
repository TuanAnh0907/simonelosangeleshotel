/*social icons in top menu*/
function getURL(a) {
    var c = window.location.href;
    a && (c = encodeURIComponent(c));
    return c
}

function openLink(a, b, c, g) {
    var h = "",
        o = "",
        l = "";
    null != c && null != g && (h = "status=0,toolbar=0,location=0,resizable=0,menubar=0,width=" + c + ",height=" + g);

    switch (a) {
        case "facebook":
            l = "facebook";
            o = "https://www.facebook.com/sharer.php?u=" + getURL(!0) + "&t=" + b;
            break;
        case "twitter":
            l = "twitter";
            o = "https://twitter.com/intent/tweet?text=" + b + " -&url=" + getURL(!0);
            break;
        case "googleplus":
            l = "googleplus";
            o = "https://plusone.google.com/_/+1/confirm?hl=en&url=" + getURL(!0);
    }
    window.open(o, l, h);
    return !1
}

function addToFav() {
    window.sidebar ? window.sidebar.addPanel(document.title, getURL(!1), "") : document.all ? window.external.AddFavorite(getURL(!1), document.title) : alert(HC.Translations.get("AddFavourites"))
}


// Determinate mobile devices
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i) ? true : false;
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i) ? true : false;
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) ? true : false;
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
    }
};

// Add <meta name="viewport" content="width=1160"> for mobile devices
if (isMobile.any()) {
    var meta;
    if (document.createElement && (meta = document.createElement('meta'))) {
        // set properties
        meta.name = "viewport";
        meta.content = "width=1160";
        // now add the meta element to the head
        document.getElementsByTagName('head').item(0).appendChild(meta);
    }
}
