var urlMatcherFactory_1 = require("./url/urlMatcherFactory");
var urlRouter_1 = require("./url/urlRouter");
var state_1 = require("./state/state");
var Router = (function () {
    function Router() {
        this.urlMatcherFactory = new urlMatcherFactory_1.UrlMatcherFactory();
        this.urlRouterProvider = new urlRouter_1.$UrlRouterProvider(this.urlMatcherFactory);
        this.stateProvider = new state_1.$StateProvider(this.urlRouterProvider, this.urlMatcherFactory);
    }
    return Router;
})();
exports.Router = Router;
//# sourceMappingURL=router.js.map