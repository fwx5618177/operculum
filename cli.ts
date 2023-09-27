#!/usr/bin/env node

import { Command } from 'commander'
import { version } from './package.json'
import fs from 'fs'
import path from 'path'

const program = new Command()

program.addHelpText(
    'beforeAll',
    `
    A CLI for parsing and handling resume templates.
    `,
)

program
    .version(version, '-v, --version', 'Output the current version of resume-cli.')
    .name('resume-cli') // 这里添加你的CLI命令名
    .usage('<command> [options]')
    .description('An enhanced CLI for resume template parsing and processing.')

program.helpOption('-h, --help', 'Display help for commands and options.').addHelpCommand('help [command]', 'Display help for specific command')

// Setting usage information
program.usage('<command> [options]').description('An enhanced CLI for resume template parsing and processing.')

program
    .command('parse <templatePath>')
    .description('Parse a specific resume template.')
    .option('-o, --output <outputPath>', 'Specify the output path for the parsed resume.')
    .action((templatePath, options) => {
        const content = fs.readFileSync(path.resolve(templatePath), 'utf-8')
        console.log('Parsing the resume template...')
        // TODO: Add your template parsing logic here
        const parsedContent = content // This should be replaced with actual parsed content

        if (options.output) {
            fs.writeFileSync(path.resolve(options.output), parsedContent, 'utf-8')
            console.log(`Parsed resume has been saved to ${options.output}`)
        } else {
            console.log('Parsed Resume Content:', parsedContent)
        }
    })

program
    .command('hello <name>')
    .description('say hello')
    .action(name => {
        console.log(`Hello, ${name}!`)
    })

// Additional Help Information
program.addHelpText(
    'after',
    `
Example usage:
  $ resume-cli parse ./my-resume-template.md -o ./parsed-resume.md
  $ resume-cli hello John
`,
)

program.parse(process.argv)

// Parse program arguments or show help by default
const args = process.argv
if (args.length <= 2) {
    program.help() // Show help if no arguments
} else {
    program.parse(args)
}
