let mySprite = sprites.create(img`
    . . . . . . 7 7 7 . . . . . . . 
    . . . . . 7 7 7 7 7 . . . . . . 
    . . . . . d 9 d 9 d . . . . . . 
    . . . . . d d d d d . . . . . . 
    . . . . . d d f d d . . . . . . 
    . . . 7 7 7 d d d 7 7 7 7 . . . 
    . . . 7 7 7 7 d 7 7 7 7 7 . . . 
    . . . d d 7 7 7 7 7 7 d d . . . 
    . . . d d 7 7 7 7 7 7 d d . . . 
    . . . d d e 5 e e e f f f f . . 
    . . 8 8 8 8 7 7 7 7 7 e e . . . 
    . . 8 9 9 8 7 7 7 7 7 e e . . . 
    . . 8 8 8 8 7 . . 7 7 e e . . . 
    . . . . . d d . . d d e e . . . 
    . . . . . e e . . e e . . . . . 
    . . . . e e e . . e e e . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
