var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');

// Handle the GET request
exports.get = function () {

    var content = portal.getContent();
    var mainRegion = content.page.regions.main;
    var siteConfig = portal.getSiteConfig();

    var model = {
        mainRegion: mainRegion
    };

    return {
        body: thymeleaf.render(resolve('page.html'), model)
    }
};
