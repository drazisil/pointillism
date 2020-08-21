Array.matrix = function(rows, cols, initial) {
    const arr = [];
    for (let i = 0; i < cols; ++i) {
        const columns = [];
        for (let j = 0; j < rows; ++j) {
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
}

class Pointillism {
    constructor(canvas) {
        this.canvas = canvas
        this.width = this.canvas.width
        this.height = this.canvas.height

        this.pixels = Array.matrix(this.width, this.height, 'black')
    }

    draw() {
        this.drawBackground()
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
        //         // console.log(y, x)
                this.drawPixel({x, y}, this.pixels[y][x])
            }
        }
    }

    drawBackground() {
        this.ctx = this.canvas.getContext('2d');

        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    drawPixel(pixelXY, color) {
        if (pixelXY.x < 0 || pixelXY.y < 0) {
            return
        }
        if (pixelXY.x > this.width || pixelXY.y > this.height) {
            return
        }
        this.ctx.fillStyle = color;
        this.ctx.fillRect(pixelXY.x, pixelXY.y, 2, 2);
    }

    getRandomPixel() {
        const x = Math.floor((Math.random() * this.width));
        const y = Math.floor((Math.random() * this.height));
        return {x, y}
    }

    loadPixel(pixelXY, color) {
        this.pixels[pixelXY.y][pixelXY.x] = color
    }
}
