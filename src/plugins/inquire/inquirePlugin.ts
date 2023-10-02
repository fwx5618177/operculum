import inquirer from 'inquirer'
import { Context, PluginInterface } from '../../types/pluginInterface'
import { QuestionMap, questions } from './inquireOptions'
import Main from '@update/markdown'
import Template from '@operculum/template'

export class InquirePlugin implements PluginInterface {
    async execute(context: Context): Promise<void> {
        const answers = (await inquirer.prompt(questions)) as QuestionMap
        // 将 answers 合并到 context 中
        context = { ...context, answers }

        const { templatePath, useTemplate, userName, outputFormat, renameFile, fileName } = answers

        if (useTemplate) {
            const templateList = new Template(templatePath)
            const fileList = templateList.getFileList()

            const answerFileList = await inquirer.prompt([
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

        console.log('rename:', fileName)
    }
}
