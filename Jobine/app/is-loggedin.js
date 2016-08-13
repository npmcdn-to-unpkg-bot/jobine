System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    /**
     * Created by Alain on 5/10/2016.
     */
    // is-loggedin.ts
    function isLoggedin() {
        return !!localStorage.getItem('token');
    }
    exports_1("isLoggedin", isLoggedin);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=is-loggedin.js.map