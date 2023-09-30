# @update/markdown

> Update markdown files.

## Install

Using npm:

```
$ npm install --save-dev @update/markdown
```

or using yarn:

```
$ yarn add @update/markdown --dev
```

## Usage

```js
const updateMarkdown = require('@update/markdown')

updateMarkdown('path/to/file.md', {
    title: 'New title',
    description: 'New description',
    tags: ['tag1', 'tag2'],
    categories: ['category1', 'category2'],
    date: '2019-01-01',

    // or
    // title: 'New title',
    // description: 'New description',
    // tags: 'tag1, tag2',
    // categories: 'category1, category2',
    // date: '2019-01-01',
})
```
