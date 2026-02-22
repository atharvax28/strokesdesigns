const pptxgen = require('pptxgenjs');
const fs = require('fs');

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_16x9';
pptx.addSlide().addText('Hello World', { x: 1, y: 1 });
pptx.writeFile('test.pptx').then(() => {
    console.log('Test successful');
}).catch(err => {
    console.error('Test failed', err);
});
