// 这是一个纯 JavaScript 包装器文件，用于处理 diff-match-patch 的导入
const dmpModule = require('./diff-match-patch.js');

// 导出为 ES 模块格式
export const diff_match_patch = dmpModule.diff_match_patch;
export const DIFF_DELETE = dmpModule.DIFF_DELETE;
export const DIFF_INSERT = dmpModule.DIFF_INSERT;
export const DIFF_EQUAL = dmpModule.DIFF_EQUAL;
export default diff_match_patch; 