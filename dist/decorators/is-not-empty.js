"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNotEmpty = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var create_validator_1 = tslib_1.__importDefault(require("../create-validator"));
exports.IsNotEmpty = create_validator_1.default({
    name: "firebaseIsNotEmpty",
    constraintsLength: 0,
    validate: class_validator_1.isNotEmpty,
    classLevel: true,
    firebaseRule: function (propertyName) {
        return "newData.hasChildren(['" + propertyName + "'])";
    },
});
//# sourceMappingURL=is-not-empty.js.map