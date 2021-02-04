"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSchema = void 0;
var tslib_1 = require("tslib");
require("reflect-metadata");
function generateSchema(object) {
    var _a;
    var _b, _c, _d;
    var name = Reflect.getMetadata("name", object);
    if (!name) {
        throw new Error("Class instance is not a firebase node.");
    }
    var keys = (_b = Reflect.getMetadata("keys", object)) !== null && _b !== void 0 ? _b : [];
    var classSchemaData = (_c = Reflect.getMetadata("class", object)) !== null && _c !== void 0 ? _c : [];
    var nestedData = (_d = Reflect.getMetadata("nested", object)) !== null && _d !== void 0 ? _d : {};
    var schemaData = keys.map(function (key) { return ({
        key: key,
        values: Reflect.getMetadata(key, object),
    }); });
    var schemaData_ = schemaData.reduce(function (obj, _a) {
        var _b;
        var key = _a.key, values = _a.values;
        return (tslib_1.__assign(tslib_1.__assign({}, obj), (_b = {}, _b[key] = values.reduce(function (obj, _a) {
            var _b;
            var type = _a.type, rule = _a.rule;
            return (tslib_1.__assign(tslib_1.__assign({}, obj), (_b = {}, _b["." + type] = obj["." + type]
                ? obj["." + type] + " && " + rule
                : rule, _b)));
        }, {}), _b)));
    }, {});
    var classSchemaData_ = classSchemaData.reduce(function (obj, _a) {
        var _b;
        var type = _a.type, rule = _a.rule;
        return (tslib_1.__assign(tslib_1.__assign({}, obj), (_b = {}, _b["." + type] = obj["." + type] ? obj["." + type] + " && " + rule : rule, _b)));
    }, {});
    var schema = tslib_1.__assign(tslib_1.__assign({}, schemaData_), classSchemaData_);
    Object.keys(nestedData).forEach(function (key) {
        var nestedObject = new nestedData[key]();
        var nestedObjectName = Reflect.getMetadata("name", nestedObject);
        var nestedObjectSchema = generateSchema(nestedObject)[nestedObjectName];
        var validate = (function () {
            if (schema[key][".validate"] && nestedObjectSchema[".validate"]) {
                return schema[key][".validate"] + " && " + nestedObjectSchema[".validate"];
            }
            else if (schema[key][".validate"] && !nestedObjectSchema[".validate"]) {
                return schema[key][".validate"];
            }
            else if (nestedObjectSchema[".validate"] && !schema[key][".validate"]) {
                return nestedObjectSchema[".validate"];
            }
            else {
                return undefined;
            }
        })();
        var read = (function () {
            if (schema[key][".read"] && nestedObjectSchema[".read"]) {
                return schema[key][".read"] + " && " + nestedObjectSchema[".read"];
            }
            else if (schema[key][".read"] && !nestedObjectSchema[".read"]) {
                return schema[key][".read"];
            }
            else if (nestedObjectSchema[".read"] && !schema[key][".read"]) {
                return nestedObjectSchema[".read"];
            }
            else {
                return undefined;
            }
        })();
        var write = (function () {
            if (schema[key][".write"] && nestedObjectSchema[".write"]) {
                return schema[key][".write"] + " && " + nestedObjectSchema[".write"];
            }
            else if (schema[key][".write"] && !nestedObjectSchema[".write"]) {
                return schema[key][".write"];
            }
            else if (nestedObjectSchema[".write"] && !schema[key][".write"]) {
                return nestedObjectSchema[".write"];
            }
            else {
                return undefined;
            }
        })();
        var nestedObjectMetadata = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, (validate ? { ".validate": validate } : {})), (read ? { ".read": read } : {})), (write ? { ".write": write } : {}));
        schema[key] = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, nestedObjectSchema), schema[key]), nestedObjectMetadata);
        if (key !== nestedObjectName) {
            throw new Error("Property name must have the same key as firebase node.");
        }
    });
    return _a = {}, _a[name] = schema, _a;
}
exports.generateSchema = generateSchema;
//# sourceMappingURL=generate-schema.js.map