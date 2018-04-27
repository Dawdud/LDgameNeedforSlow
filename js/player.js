Player={};
Player.height= 15;
Player.width=15;
Player.grassSpeed= 0.01;
Player.onGrass= false;
Player.onFinish=false;
Player.x=40;
Player.y=330;
Player.dx=0.005;
Player.dy=0.005;

Player.color='#FF1E09';

Player.draw= function()
{
  game.drawObjects('rect', Player.color,{x:Player.x,y:Player.y, width:Player.width, height:Player.height})

};
Player.update= function(dt)
{

    if(game.state.pressedKeys.right===true && game.countdownsec<0)
    {
        Player.x+=Player.dx*dt;


    }
    if(game.state.pressedKeys.left===true  && game.countdownsec<0)
    {
        Player.x-=Player.dx*dt;
    }
    if(game.state.pressedKeys.up===true  && game.countdownsec<0)
    {
        Player.y-=Player.dy*dt;
    }
    if(game.state.pressedKeys.down===true  && game.countdownsec<0)
    {
        Player.y+=Player.dy*dt;
    }

    for(var l=0; l< tiles.list.length;l++) {



        if(Player.collisiondetection(tiles.list[l]))
        {

            if(tiles.list[l].name==="wall") {

                if (tiles.list[l].y > Player.y && Player.y + Player.height > tiles.list[l].y) {
                    Player.y = tiles.list[l].y - tiles.list[l].height;


                }
                if (Player.y > tiles.list[l].y && Player.y + Player.height > tiles.list[l].y) {
                    Player.y = tiles.list[l].y + tiles.list[l].height;


                }
                if (Player.x > tiles.list[l].x && Player.x + Player.width > tiles.list[l].x) {
                    Player.x = tiles.list[l].x + tiles.list[l].width;


                }
                if (tiles.list[l].x > Player.x && Player.x + Player.width > tiles.list[l].x) {
                    Player.x = tiles.list[l].x - tiles.list[l].width;


                }
            }
            if(tiles.list[l].name==="grass")
            {
                Player.dx=Player.grassSpeed;
                Player.dy=Player.grassSpeed;


            }
            if(tiles.list[l].name==="Finish")
            {
                Player.onFinish= true;
                game.states.win=true;

            }



        }


    }
    if(Player.dx<=0.4&& Player.onGrass===false) {


        Player.dx += 0.001;

    }
    if(Player.dy<=0.4 && Player.onGrass===false) {
        Player.dy += 0.001;
    }

};
Player.collisiondetection= function(rect)
{
    return rect.x<Player.x + Player.width&& rect.x+rect.width>Player.x
        &&rect.y<Player.y+Player.height&&rect.height+ rect.y>Player.y;
};