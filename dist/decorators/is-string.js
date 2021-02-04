"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsString = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var create_validator_1 = tslib_1.__importDefault(require("../create-validator"));
exports.IsString = create_validator_1.default({
    name: "firebaseIsString",
    constraintsLength: 0,
    validate: class_validator_1.isString,
    firebaseRule: function () {
        return "newData.isString()";
    },
});
//# sourceMappingURL=is-string.js.map