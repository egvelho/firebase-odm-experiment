"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexOn = void 0;
var tslib_1 = require("tslib");
var create_rule_1 = tslib_1.__importDefault(require("../create-rule"));
exports.IndexOn = create_rule_1.default({
    type: "indexOn",
    firebaseRule: function (indexes) {
        return indexes;
    },
});
//# sourceMappingURL=index-on.js.map