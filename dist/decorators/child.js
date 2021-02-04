"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Child = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
function Child(propertyObject, validationOptions) {
    return function (object, propertyName) {
        var _a;
        var _b, _c, _d;
        Reflect.defineMetadata("keys", tslib_1.__spread(new Set(tslib_1.__spread(((_b = Reflect.getMetadata("keys", object)) !== null && _b !== void 0 ? _b : []), [
            propertyName,
        ]))), object);
        Reflect.defineMetadata(propertyName, tslib_1.__spread(((_c = Reflect.getMetadata(propertyName, object)) !== null && _c !== void 0 ? _c : []), [
            {
                type: "validate",
                rule: true,
            },
        ]), object);
        Reflect.defineMetadata("nested", tslib_1.__assign(tslib_1.__assign({}, ((_d = Reflect.getMetadata("nested", object)) !== null && _d !== void 0 ? _d : {})), (_a = {}, _a[propertyName] = propertyObject, _a)), object);
        object[propertyName] = new propertyObject();
        class_validator_1.registerDecorator({
            name: "firebaseChild",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [propertyObject],
            options: validationOptions,
            validator: {
                validate: class_validator_1.isObject,
            },
        });
    };
}
exports.Child = Child;
//# sourceMappingURL=child.js.map