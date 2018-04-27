Playertwo={};
Playertwo.height=15;
Playertwo.width=15;
Playertwo.grassSpeed= 0.01;
Playertwo.onGrass= false;
Playertwo.onFinish=false;
Playertwo.x=70;
Playertwo.y=330;
Playertwo.dx=0.005;
Playertwo.dy=0.005;
Playertwo.color= "#C902E5";
Playertwo.draw= function() {

    game.drawObjects('rect', Playertwo.color,{x:Playertwo.x,y:Playertwo.y, width:Playertwo.width, height:Playertwo.height})
};
Playertwo.update= function(dt)
{


        if(game.state.pressedKeys.d===true && game.countdownsec<0)
        {
            Playertwo.x+=Playertwo.dx*dt;


        }
        if(game.state.pressedKeys.a===true  && game.countdownsec<0)
        {
            Playertwo.x-=Playertwo.dx*dt;
        }
        if(game.state.pressedKeys.w===true  && game.countdownsec<0)
        {
            Playertwo.y-=Playertwo.dy*dt;
        }
        if(game.state.pressedKeys.s===true  && game.countdownsec<0)
        {
            Playertwo.y+=Playertwo.dy*dt;
        }
    for(var l=0; l< tiles.list.length;l++) {



        if(Playertwo.collisiondetection(tiles.list[l]))
        {

            if(tiles.list[l].name==="wall") {

                if (tiles.list[l].y > Playertwo.y && Playertwo.y + Playertwo.height > tiles.list[l].y) {
                    Playertwo.y = tiles.list[l].y - tiles.list[l].height;


                }
                if (Playertwo.y > tiles.list[l].y && Playertwo.y + Playertwo.height > tiles.list[l].y) {
                    Playertwo.y = tiles.list[l].y + tiles.list[l].height;


                }
                if (Playertwo.x > tiles.list[l].x && Playertwo.x + Playertwo.width > tiles.list[l].x) {
                    Playertwo.x = tiles.list[l].x + tiles.list[l].width;


                }
                if (tiles.list[l].x > Playertwo.x && Playertwo.x + Playertwo.width > tiles.list[l].x) {
                    Playertwo.x = tiles.list[l].x - tiles.list[l].width;


                }
            }
            if(tiles.list[l].name==="grass")
            {
                Playertwo.dx=Playertwo.grassSpeed;
                Playertwo.dy=Playertwo.grassSpeed;


            }
            if(tiles.list[l].name==="Finish")
            {
                Playertwo.onFinish= true;
                game.states.win=true;

            }



        }


    }

    if(Playertwo.dx<=0.4&& Playertwo.onGrass===false) {


        Playertwo.dx += 0.001;

    }
    if(Playertwo.dy<=0.4 && Playertwo.onGrass===false) {
        Playertwo.dy += 0.001;
    }

};
Playertwo.collisiondetection= function(rect)
{
    return rect.x<Playertwo.x + Playertwo.width&& rect.x+rect.width>Playertwo.x
        &&rect.y<Playertwo.y+Playertwo.height&&rect.height+ rect.y>Playertwo.y;
};