import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';

export default [
  // ES模块构建 - 保持文件结构
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist/esm',
      format: 'es',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src'
    },
    external: ['slate', 'lodash-es', /^lodash-es\//],
    plugins: [
      resolve({
        preferBuiltins: false
      }),
      commonjs({
        include: ['node_modules/**', 'src/**'],
        transformMixedEsModules: true
      }),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        outDir: 'dist/esm',
        declarationDir: 'dist/esm',
        exclude: ['src/diff-match-patch.js']
      }),
      copy({
        targets: [
          { src: 'src/diff-match-patch.js', dest: 'dist/esm' },
          { src: 'src/diff-match-patch-wrapper.js', dest: 'dist/esm' }
        ]
      })
    ]
  },
  // CommonJS构建 - 保持文件结构
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist/cjs',
      format: 'cjs',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src'
    },
    external: ['slate', 'lodash', 'lodash-es', /^lodash-es\//],
    plugins: [
      resolve({
        preferBuiltins: false
      }),
      commonjs({
        include: ['node_modules/**', 'src/**'],
        transformMixedEsModules: true
      }),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        outDir: 'dist/cjs',
        declarationDir: 'dist/cjs',
        exclude: ['src/diff-match-patch.js']
      }),
      copy({
        targets: [
          { src: 'src/diff-match-patch.js', dest: 'dist/cjs' },
          { src: 'src/diff-match-patch-wrapper.js', dest: 'dist/cjs' }
        ]
      })
    ]
  }
]; 