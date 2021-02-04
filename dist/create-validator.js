"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
function createValidator(_a) {
    var name = _a.name, constraintsLength = _a.constraintsLength, validate = _a.validate, firebaseRule = _a.firebaseRule, _b = _a.classLevel, classLevel = _b === void 0 ? false : _b;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return function (object, propertyName) {
            var _a, _b;
            classLevel === false &&
                Reflect.defineMetadata("keys", tslib_1.__spread(new Set(tslib_1.__spread(((_a = Reflect.getMetadata("keys", object)) !== null && _a !== void 0 ? _a : []), [
                    propertyName,
                ]))), object);
            Reflect.defineMetadata(classLevel ? "class" : propertyName, tslib_1.__spread(((_b = Reflect.getMetadata(classLevel ? "class" : propertyName, object)) !== null && _b !== void 0 ? _b : []), [
                {
                    type: "validate",
                    rule: firebaseRule.apply(void 0, tslib_1.__spread(tslib_1.__spread(args.slice(0, constraintsLength), [
                        propertyName,
                    ]))),
                },
            ]), object);
            class_validator_1.registerDecorator({
                name: name,
                target: object.constructor,
                propertyName: propertyName,
                constraints: args.slice(0, constraintsLength),
                options: args[constraintsLength],
                validator: {
                    validate: validate,
                },
            });
        };
    };
}
exports.default = createValidator;
//# sourceMappingURL=create-validator.js.map