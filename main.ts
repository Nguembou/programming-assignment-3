input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
let player: game.LedSprite = null
player = game.createSprite(2, 2)
let enemy = game.createSprite(randint(0, 4), 2)
basic.forever(function () {
    if (player.isTouching(enemy)) {
        basic.showIcon(IconNames.Heart)
    }
})
