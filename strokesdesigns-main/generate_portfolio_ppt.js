const pptxgen = require('pptxgenjs');
const fs = require('fs');
const path = require('path');

async function createPresentation() {
    const pptx = new pptxgen();
    pptx.layout = 'LAYOUT_16x9';

    // Slide master for consistent branding
    pptx.defineSlideMaster({
        title: 'MASTER_SLIDE',
        background: { color: '1D1E20' },
        objects: [
            { rect: { x: 0, y: 0, w: '100%', h: 0.15, fill: { color: '00A8E8' } } }, // Top bar
            { text: { text: 'Strokes Designs', options: { x: 0.5, y: 5.2, w: 3, h: 0.3, fontSize: 10, color: '888888' } } }
        ]
    });

    // Theme Colors
    const textColor = 'FFFFFF';
    const subTextColor = 'CCCCCC';

    // Slide 1: Cover
    let slide = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
    slide.addText('STROKES DESIGNS', { x: 0.5, y: 2, w: 9, h: 1, fontSize: 48, color: textColor, bold: true, align: 'center' });
    slide.addText('PORTFOLIO 2026', { x: 0.5, y: 3, w: 9, h: 0.5, fontSize: 24, color: subTextColor, align: 'center' });

    // Project Data
    const projects = [
        { title: 'Axis Bank HQ', location: 'Corporate | Mumbai', image: 'media/axis bank/image17.jpg' },
        { title: 'EY Corporate', location: 'Workplace | Multi-city', image: 'media/ey/image24.jpg' },
        { title: 'Fractal Analytics', location: 'Tech | Bangalore', image: 'assets/images/fractal/MANYATA/FRACTAL-MANYATA_PLAY AREA.jpg' },
        { title: 'Fidelity Investments', location: 'Financial | Bangalore', image: 'assets/images/fidelity/FIDELITY-_OPTION-01_07_Board-Room.jpg' },
        { title: 'DNV GL', location: 'Corporate | Pune', image: 'assets/images/dnvgl/DNV GL_Agile Space Hot desk  02.jpg' }, // Verified double space
        { title: 'Hitachi Office', location: 'Corporate | Bangalore', image: 'assets/images/hitachi/Picture2.png' },
        { title: 'Cargill Office', location: 'Corporate | Bangalore', image: 'assets/images/cargil/Cargil_Master Chef Class_03.jpg' },
        { title: 'EY Pune', location: 'Workplace | Pune', image: 'assets/images/ey-pune/Picture7.jpg' },
        { title: 'EY Ruby', location: 'Consulting | Mumbai', image: 'assets/images/ey-ruby/Picture2.jpg' },
        { title: 'Framestore Studio', location: 'Media | Mumbai', image: 'assets/images/framestore/17_12_MeetingType2_colour1.jpg' },
        { title: 'Financial Centre -- Bajaj', location: 'Finance | Mumbai', image: 'assets/images/bajaj-financial-centre-new.png' },
        { title: 'OIC Office', location: 'Corporate | Bangalore', image: 'assets/images/oic/pre-function-area_01.jpg' },
        { title: 'Nucleus Office', location: 'Corporate | Bangalore', image: 'assets/images/nucleus/Nucleus_Cabin_02.jpg' },
        { title: 'Global Tech Hub', location: 'Tech | Bangalore', image: 'assets/images/simoliworks/Booth_Seating.jpg' },
        { title: 'Allianz Campus', location: 'Institutional | Trivandrum', image: 'media/allianz/image40.jpg' },
        { title: 'JSA Offices', location: 'Legal | Mumbai / Pune', image: 'media/jsa/image50.png' }
    ];

    for (const project of projects) {
        let slide = pptx.addSlide({ masterName: 'MASTER_SLIDE' });

        // Title
        slide.addText(project.title, { x: 0.5, y: 0.4, w: 9, h: 0.6, fontSize: 32, color: textColor, bold: true });

        // Location
        slide.addText(project.location, { x: 0.5, y: 1.0, w: 9, h: 0.4, fontSize: 16, color: subTextColor });

        // Image
        if (fs.existsSync(project.image)) {
            try {
                slide.addImage({ path: project.image, x: 0.5, y: 1.6, w: 8.8, h: 3.5 });
            } catch (e) {
                console.error(`Error adding image ${project.image}:`, e);
                slide.addText(`[Error loading image]`, { x: 0.5, y: 2.5, w: 9, h: 1, fontSize: 14, color: 'FF0000', align: 'center' });
            }
        } else {
            // Try searching for the image in assets? No, strict path for now.
            console.warn(`Image missing: ${project.image}`);
            slide.addText(`[Image missing: ${path.basename(project.image)}]`, { x: 0.5, y: 2.5, w: 9, h: 1, fontSize: 14, color: 'FF0000', align: 'center' });
        }
    }

    // Save
    try {
        await pptx.writeFile({ fileName: 'Strokes_Designs_Portfolio.pptx' });
        console.log('Presentation created successfully: Strokes_Designs_Portfolio.pptx');
    } catch (e) {
        console.error('Error saving presentation:', e);
    }
}

createPresentation();
