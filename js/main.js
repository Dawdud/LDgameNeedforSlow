game={};

game.canvas= document.createElement('canvas');
game.canvas.width= 1400;
game.canvas.height= 688;
game.lastrender= 0;
game.end= false;
game.lastFrameTimems=0;
game.maxFPS=60;
game.countdownsec=10;
game.timestep= 1000/60;
game.ctx= game.canvas.getContext('2d');
document.body.appendChild(game.canvas);
game.states={start:true, play:false, win:false};
game.scene=function(scene, timestamp){
    var dt= timestamp - game.lastFrameTimems;
    game.lastFrameTimems= timestamp;


        scene.update(dt);





    scene.draw();

};
game.countdown= function()
{
    setInterval(function(){
        if(game.countdownsec>=-2){game.countdownsec--};

    },1000)
};
game.scene.current="";
game.changescene= function(scene,stamp)
{
    game.ctx.clearRect(0,0,game.canvas.width,game.canvas.height);
    game.scene.current={name:scene.name};
    game.scene(scene,stamp);

};
game.gameover= {};
game.gameover.name="gameover";
game.gameover.draw=function()
{
game.drawObjects('rect', "#OOOOOO",{x:0, y:0, width:game.canvas.width, height: game.canvas.height});
    game.drawText(game.canvas.width/3,game.canvas.height/3,"40px Arial","#ffffff","Game Over");
    game.drawText(game.canvas.width/3,(game.canvas.height/3)+40,"20px Arial","#ffffff","Press enter to play again");

};
game.gameover.update= function()
{

};

game.level={};
game.level.name="level";

game.level.update=function(dt){
   var delta=dt;
Player.update(delta);
Playertwo.update(delta);

};

game.level.draw= function()
{


    game.ctx.clearRect(0,0,game.canvas.width,game.canvas.height);
    game.ctx.lineWidth=3;
    game.ctx.strokeStyle='#1C2378';
    game.ctx.strokeRect(0,0,game.canvas.width, game.canvas.height);



    for(let c=0; c<tiles.list.length; c++)
    {

                    game.drawObjects('rect',tiles.list[c].color, tiles.list[c])

    }
    if(game.countdownsec>=-2)
    {
        game.drawObjects('rect',"#000000", {x:game.canvas.width/4, y:game.canvas.height/3,width:650, height:200});

        if(game.countdownsec>=0)
        {
            game.drawText(game.canvas.width/3,game.canvas.height/2, "50px Arial","#ffffff",game.countdownsec+ " Second to start");
        }
        if(game.countdownsec<0)
        {
            game.drawText(game.canvas.width/2,game.canvas.height/2, "50px Arial","#ffffff", "Go!!!");
        }

    }
    Player.draw();
    Playertwo.draw();



};
game.startgame={};
game.startgame.name="start";
game.startgame.update= function()
{

};
game.startgame.draw=function()
{
game.drawObjects('rect', "#175E1A",{x:0, y:0, width:game.canvas.width, height: game.canvas.height});
  game.drawText(game.canvas.width/3,game.canvas.height/2, "50px Arial","#ffffff","Super need for slow");
    game.drawText(game.canvas.width/3,(game.canvas.height/2)+20, "20px Arial","#ffffff","Press Enter to start game");
};

game.win={};
game.win.name="win";
game.win.update= function(){};
game.win.draw=function()
{
  game.drawObjects('rect', "#78761F",{x:0, y:0, width:game.canvas.width, height: game.canvas.height});
    if(Player.onFinish===true) {


        game.drawText(game.canvas.width / 3, game.canvas.height / 2, "50px Arial", "#ffffff", "Player one win!!!");
    }
    if(Playertwo.onFinish===true) {
        game.drawText(game.canvas.width / 3, game.canvas.height / 2, "50px Arial", "#ffffff", "Player two win!!!");
    };

};
game.drawObjects= function(object,color, coords)
{
    game.ctx.beginPath();
    if(object==='rect')
    {
        game.ctx.rect(coords.x,coords.y, coords.width, coords.height)
    }
    else if(object==='ball')
    {
        game.ctx.arc(coords.x, coords.y,coords.radius,0,Math.PI*2);
    }
    game.ctx.fillStyle=color;
    game.ctx.fill();
    game.ctx.closePath();

};
game.drawText= function(x,y, font, color, text)
{
    game.ctx.font= font;
    game.ctx.fillStyle= color;
    game.ctx.fillText(text, x,y);
};



game.main= function(timestamp)
{
    if(game.states.start)
    {
    game.changescene(game.startgame,timestamp);
  }
    if(game.states.play)
    {
      game.changescene(game.level,timestamp);
    }
    if(game.states.win)
    {
        game.changescene(game.win, timestamp);
    }


    if(timestamp< game.lastFrameTimems+(1000/game.maxFPS))
    {
        requestAnimationFrame(game.main);
        return
    }
    requestAnimationFrame(game.main);
};

requestAnimationFrame(game.main);
tiles.getTiles();
game.countdown();