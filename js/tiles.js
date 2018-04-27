tiles= {};
tiles.width= 32;
tiles.height=32;
tiles.list=[];
tiles.getTiles= function()
{
    for(let c=0; c<map.cols; c++)
    {
        for(let r=0; r< map.rows; r++ )
        {
            var tile= map.getTile(c,r);
            if(tile===5)
            {
                tiles.list.push({name: "wall",color:"#87371B",x:c*map.tsize,y:r*map.tsize,width:tiles.width,height:tiles.height})
            }
            if(tile===4)
            {
                tiles.list.push({name: "grass",color:"#175E19",x:c*map.tsize,y:r*map.tsize,width:tiles.width,height:tiles.height})
            }
            if(tile===1)
            {
                tiles.list.push({name: "road",color:"#2A087E",x:c*map.tsize,y:r*map.tsize,width:tiles.width,height:tiles.height})
            }
            if(tile===2)
            {
                tiles.list.push({name: "Start",color:"#ffffff",x:c*map.tsize,y:r*map.tsize,width:tiles.width,height:tiles.height})
            }
            if(tile===3)
            {
                tiles.list.push({name: "Finish",color:"#A68F05",x:c*map.tsize,y:r*map.tsize,width:tiles.width,height:tiles.height})
            }
        }
    }
    return tiles.list;
};