import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
    input: 'src/main.ts', // 请根据你的项目结构调整入口文件路径
    output: {
        file: 'dist/main.js', // 输出的文件
        format: 'cjs', // 输出的模块格式
    },
    plugins: [
        nodeResolve({
            extensions: ['.js', '.ts'], // 添加这里
        }),
        typescript(),
    ],
}
