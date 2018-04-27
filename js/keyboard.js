game.keyboard = {};

game.state= {

    pressedKeys:{
        up: false,
        down:false,
        left: false,
        right: false,
        w: false,
        s: false,
        a: false,
        d: false

    }
};

game.keyboard.getValue = function(key)
{

    switch(key)
    {

        case 'up':    return 38;
        case 'down':  return 40;
        case 'left':  return 37;
        case 'right': return 39;
        case 'w': return 87;
        case 's': return 83;
        case 'a': return 65;
        case 'd': return 68;
        case 'enter': return 13;


    }
};


game.keyboard.KeyDown = function(event) {
    switch (event.keyCode) {

        case game.keyboard.getValue('left'):
            game.state.pressedKeys.left= true;

            break;
        case game.keyboard.getValue('up'):
            game.state.pressedKeys.up= true;
            break;
        case game.keyboard.getValue('down'):
            game.state.pressedKeys.down= true;
            break;
        case game.keyboard.getValue('right'):
           game.state.pressedKeys.right= true;
            break;
        case game.keyboard.getValue('w'):
            game.state.pressedKeys.w= true;
            break;
        case game.keyboard.getValue('s'):
            game.state.pressedKeys.s= true;
            break;
        case game.keyboard.getValue('a'):
            game.state.pressedKeys.a= true;
            break;
        case game.keyboard.getValue('d'):
            game.state.pressedKeys.d= true;
            break;
        case game.keyboard.getValue('enter'):
               game.states.play= true;
               game.states.start=false;
               game.states.end=false;
               break;
    }
};
game.keyboard.KeyUp = function(event) {
    switch (event.keyCode) {

        case game.keyboard.getValue('left'):
            game.state.pressedKeys.left= false;

            break;

        case game.keyboard.getValue('right'):
            game.state.pressedKeys.right= false;
            break;

        case game.keyboard.getValue('up'):
            game.state.pressedKeys.up= false;
            break;
        case game.keyboard.getValue('down'):
            game.state.pressedKeys.down= false;
            break;
        case game.keyboard.getValue('w'):
            game.state.pressedKeys.w= false;
            break;
        case game.keyboard.getValue('s'):
            game.state.pressedKeys.s= false;
            break;
        case game.keyboard.getValue('a'):
            game.state.pressedKeys.a= false;
            break;
        case game.keyboard.getValue('d'):
            game.state.pressedKeys.d= false;
            break;

    }
};
