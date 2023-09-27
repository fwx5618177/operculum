#!/usr/bin/env node

import { Command } from 'commander'
import { version } from './package.json'
import Main from './src/main'

const program = new Command()
const main = new Main()

program.addHelpText(
    'beforeAll',
    `
        It's a toy for self so that simply convert template files to resume.
    `,
)

program.usage('<command> [options]').description('An enhanced CLI for resume template parsing and processing.')
program.version(version, '-v, --version', 'Output the current version of operculum.').name('operculum') // 这里添加你的CLI命令名
program
    .helpOption('-h, --help', 'Display help for commands and options.')
    .addHelpCommand('help [command]', 'Display help for specific command')
    .usage('<command> [options]') // Setting usage information
    .description('An enhanced CLI for resume template parsing and processing.')

// 1. Parse Command
program
    .command('parse <templatePath>')
    .description('Parse a specific resume template.')
    .option('-o, --output <outputPath>', 'Specify the output path for the parsed resume.')
    .action((templatePath, options) =>
        main.execute('parse', {
            templatePath,
            options,
        }),
    )

// Additional Help Information
program.addHelpText(
    'after',
    `
Example usage:
  $ operculum parse ./my-resume-template.md -o ./parsed-resume.md
`,
)

// Parse program arguments or show help by default
const args = process.argv
if (args.length <= 2) {
    program.outputHelp() // Show help if no arguments
    process.exit()
}

program.parse(args)
