export const questions = [
    {
        type: 'input',
        name: 'templatePath',
        message: 'Please enter the path of the resume template:',
        validate: (input: string) => {
            if (input.trim() === '') return 'The path cannot be empty!'
            return true
        },
    },
    {
        type: 'confirm',
        name: 'wantToSpecifyOutput',
        message: 'Do you want to specify an output path?',
        default: false,
    },
    {
        type: 'input',
        name: 'outputPath',
        message: 'Please enter the output path:',
        when: (answers: any) => answers.wantToSpecifyOutput,
        validate: (input: string) => {
            if (input.trim() === '') return 'The path cannot be empty!'
            return true
        },
    },
] as const

type Question = typeof questions
export type QuestionNames = Question[number]['name']
export type QuestionMap = Record<QuestionNames, Question[number]>
