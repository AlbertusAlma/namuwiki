function getPosition(str, m, i) {
    return str.split(m, i).join(m).length;
}

chrome.storage.sync.get(["rigvedawikiNet", "mirrorEnhaKr"], function (items) {
    var href, page, rigvedawikiNet, mirrorEnhaKr;

    rigvedawikiNet = items["rigvedawikiNet"];
    mirrorEnhaKr = items["mirrorEnhaKr"];

    href = window.location.href;
    if (href.indexOf("rigvedawiki") != -1) {
        if (rigvedawikiNet === "none") {
            return;
        }
        page = href.substr(getPosition(href, "/", 5) + 1);

        if (rigvedawikiNet === "namu-wiki") {
            window.location.href = "https://namu.wiki/w/" + page;
        }
        else if (rigvedawikiNet === "namu-mirror-wiki") {
            window.location.href = "http://namu.mirror.wiki/wiki/" + page;
        }
        else if (rigvedawikiNet === "dark-namu-wiki") {
            window.location.href = "https://dark.namu.wiki/w/" + page;
        }
        else {
            window.location.href = "https://namu.wiki/w/" + page;
        }
    }
    else if (href.indexOf("mirror.enha") != -1) {
        if (mirrorEnhaKr === "none") {
            return;
        }
        page = href.substr(getPosition(href, "/", 4) + 1);

        if (mirrorEnhaKr === "namu-wiki") {
            window.location.href = "https://namu.wiki/w/" + page;
        }
        else if (mirrorEnhaKr === "namu-mirror-wiki") {
            window.location.href = "http://namu.mirror.wiki/wiki/" + page;
        }
        else if (mirrorEnhaKr === "dark-namu-wiki") {
            window.location.href = "https://dark.namu.wiki/w/" + page;
        }
        else {
            window.location.href = "https://namu.wiki/w/" + page;
        }
    }

});
