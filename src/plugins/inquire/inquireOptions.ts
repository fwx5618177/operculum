import dayjs from 'dayjs'

export const questions = [
    {
        type: 'input',
        name: 'userName',
        message: 'Please enter your name:',
        default: 'John Doe',
        validate: (input: string) => {
            if (input.trim() === '') return 'The name cannot be empty!'
            return true
        },
    },
    {
        type: 'confirm',
        name: 'useTemplate',
        message: 'Do you want to use a template?',
        default: false,
    },
    {
        type: 'input',
        name: 'templatePath',
        message: 'Please enter the path of the resume template:',
        when: (answers: { useTemplate: boolean }) => answers.useTemplate,
        default: 'templates',
        validate: (input: string) => {
            if (input.trim() === '') return 'The path cannot be empty!'
            return true
        },
    },
    {
        type: 'confirm',
        name: 'renameFile',
        message: 'Do you want to rename the output file?',
        default: false,
    },
    {
        type: 'input',
        name: 'fileName',
        message: 'Please enter the new file name:',
        default: () => `resume_${dayjs().format('YYYY-MM-DD')}`,
        when: (answers: { renameFile: boolean }) => answers.renameFile,
        validate: (input: string) => {
            if (input.trim() === '') return 'The file name cannot be empty!'
            return true
        },
    },
    {
        type: 'checkbox',
        name: 'outputFormat',
        message: 'Select the format(s) for the generated result:',
        choices: ['PDF', 'DOCX', 'HTML'],
        validate: (choices: string[]) => {
            if (choices.length === 0) return 'You must select at least one format!'
            return true
        },
    },
] as const

type Question = typeof questions
export type QuestionNames = Question[number]['name']
export type QuestionMap = Record<QuestionNames, any>
