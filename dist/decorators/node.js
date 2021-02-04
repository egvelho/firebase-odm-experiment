"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
function Node(name) {
    return function (constructorFunction) {
        Reflect.defineMetadata("name", name, constructorFunction.prototype);
    };
}
exports.Node = Node;
//# sourceMappingURL=node.js.map