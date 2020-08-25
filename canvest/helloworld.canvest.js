import {Pointillism} from "../src";

describe('Test my canvas', () => {

    it('should render hello world text in canvas', async () => {
        let canvas = document.createElement('canvas');
        canvas.height = 448
        canvas.width = 512
        const a = await snapshot(canvas);

        const pointillism = new Pointillism(canvas)

        // populate the pixels
        for (let i = 0; i < 300; i++) {
            pointillism.loadPixel(pointillism.getRandomPixel(), 'red')
        }

        // draw the display
        pointillism.draw()

        const b = await snapshot(canvas);
        a.notEqual(b);
        await autoShot('test', canvas); // this create a snapshot in local that will check canvas image to test if it is still the same
    });

});
