const { expect } = require('chai')
const Main = require('../dist/main.js')

describe('UpdateMarkdown Main', function () {
    const updater = new Main('the expected updated content', 'simple')

    it('should be instantiated correctly', function () {
        expect(updater).to.be.an.instanceOf(Main)
    })

    describe('update method', function () {
        it('should update the content correctly with given replacements', function () {
            const replacements = { placeholder: 'value' }
            const updatedContent = updater.execute(replacements)

            // 你需要根据你的实际实现和期望来调整下面这一行的断言
            expect(updatedContent).to.equal('the expected updated content')
        })
    })
})
