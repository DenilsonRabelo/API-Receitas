"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsPublic = exports.IS_PUBLIC_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.IS_PUBLIC_KEY = 'isPublic';
const IsPublic = () => (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.IsPublic = IsPublic;
//# sourceMappingURL=is-public.decorator.js.map