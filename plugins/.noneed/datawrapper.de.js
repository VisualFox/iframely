module.exports = {
    re: [
        /^http[s]?:\/\/(cf.datawrapper.de|datawrapper.dwcdn.net)\/(.+?)(?:[\/](?:index\.html)?)?$/
    ],

    mixins: [
        "*"
    ],

    getLink: function(urlMatch, oembed) {
        return {
            type: CONFIG.T.text_html,
            rel: [CONFIG.R.app, CONFIG.R.ssl, CONFIG.R.html5],
            href: urlMatch[0] + "?for=iframely",
            height: 350
        }
    },

    getMeta: function(meta) {
        return {
            site: 'datawrapper'
        };
    },

    tests: [
        "http://datawrapper.dwcdn.net/zjCKi/2/",
        "http://cf.datawrapper.de/zjCKi/2/",
        "http://cf.datawrapper.de/Gx44C/21/",
        "http://cf.datawrapper.de/RrO5t/2/",
        "http://datawrapper.dwcdn.net/pKk9h/1/"
    ]
};
