let sprite = game.createSprite(2, 2)
let sprite2 = game.createSprite(0, 2)
basic.forever(function () {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    if (sprite.isTouching(sprite2)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
