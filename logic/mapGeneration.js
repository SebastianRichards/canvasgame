export function initialiseMap(canvasId) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');

    // Disable image smoothing
    ctx.imageSmoothingEnabled = false;

    const tileset = {
        0: './assets/tiles/grass1.png',
        1: './assets/tiles/sand1.png',
    };

    const gameMap = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Row 1
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Row 2
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Row 3
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Row 4
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Row 5
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Row 6
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Row 7
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Row 8
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Row 9
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0], // Row 10
    ];

    const tilesLoaded = {};
    const tilePromises = [];

    Object.entries(tileset).forEach(([tileCode, tilePath]) => {
        const tileImage = new Image();
        tileImage.src = tilePath;
        const tilePromise = new Promise((resolve) => {
            tileImage.onload = () => resolve(tileImage);
        });
        tilePromises.push(tilePromise);
        tilesLoaded[tileCode] = tileImage;
    });

    Promise.all(tilePromises).then(() => {
        for (let row = 0; row < gameMap.length; row++) {
            for (let col = 0; col < gameMap[row].length; col++) {
                const tileCode = gameMap[row][col];
                const tileImg = tilesLoaded[tileCode];
                ctx.drawImage(tileImg, col * 32, row * 32, 32, 32);
            }
        }
    });
}