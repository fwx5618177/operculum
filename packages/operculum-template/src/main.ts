import path from 'path'
import fs from 'fs'

class ReadTemplate {
    private templatePath: string

    constructor(dir: string) {
        this.templatePath = dir
    }

    public getFileList(): string[] {
        const list = fs.readdirSync(this.templatePath)

        return list
    }

    public getContentMap(): Record<string, string> {
        const list = this.getFileList()

        const fileMap: Record<string, string> = {}

        for (const item of list) {
            const filePath = path.join(this.templatePath, item)
            const stat = fs.statSync(filePath)
            if (stat.isFile()) {
                const content = fs.readFileSync(filePath, 'utf-8')
                fileMap[item] = content
            }
        }

        return fileMap
    }

    // 获取模板文件的内容
    public getContent(fileName: string): string {
        const contentMap = this.getContentMap()
        return contentMap[fileName]
    }
}

export default ReadTemplate
