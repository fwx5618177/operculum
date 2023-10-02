import inquirer from 'inquirer'
import { Context, PluginInterface } from '../../types/pluginInterface'
import { QuestionMap, questions } from './inquireOptions'
import Main from '@update/markdown'
import Template from '@operculum/template'

export class InquirePlugin implements PluginInterface {
    async prompt<T>(options: any): Promise<T> {
        const answers = await inquirer.prompt(options)

        return answers as T
    }

    async execute(context: Context): Promise<void> {
        const answers = await this.prompt<QuestionMap>(questions)
        // 将 answers 合并到 context 中
        context = { ...context, answers }

        const { templatePath, useTemplate, userName, outputFormat, renameFile, fileName } = answers

        if (useTemplate) {
            const templateList = new Template(templatePath)
            const fileList = templateList.getFileList()

            const answerFileList: Record<'file', any> = await this.prompt([
                {
                    type: 'list',
                    name: 'file',
                    message: 'Please select a template file:',
                    choices: fileList,
                    when: () => useTemplate,
                    validate: (input: string) => {
                        if (input.trim() === '') return 'The file name cannot be empty!'
                        return true
                    },
                },
            ])

            const { file } = answerFileList

            const content = templateList.getContent(file)

            const updater = new Main(content, 'simple')
            const result = updater.execute({ name: userName })

            console.log('result:', result)
        }

        if (renameFile) {
            console.log('rename:', fileName)
        }

        return
    }
}
