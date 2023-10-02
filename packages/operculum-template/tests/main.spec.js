const { expect } = require('chai')
const ReadTemplate = require('../dist/main.js')

describe('UpdateMarkdown Main', function () {
    const templates = new ReadTemplate('tests/templates')

    describe('update method', function () {
        it('should update the content correctly with given replacements', function () {
            const list = templates.getFileList()
            console.log(list)

            expect(list).to.be.an('array')
            const listMap = templates.getContentMap()

            expect(listMap).to.be.an('object')

            const content = templates.getContent(list[0])

            console.log(content)
            expect(content).to.be.a('string')
        })
    })
})
