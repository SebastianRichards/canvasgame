// playerSprite.js
export const loadCharacter = () => {
    const characterSprite = 'assets/characterSprites/testplayer.png';
    return new Promise((resolve) => {
        const characterImage = new Image();
        characterImage.onload = () => resolve(characterImage);
        characterImage.src = characterSprite;
    });
};