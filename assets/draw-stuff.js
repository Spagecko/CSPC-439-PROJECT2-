// Draw stuff
// Time-stamp: <2019-01-21 20:08:33 Chuck Siska>
// ------------------------------------------------------------

// FUN. Draw filled rect.
var globalX =  70; 
var globalY = 50;
var DrawArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var tmpArrSet = [0, 0, 0];
var currentState = 0; // 0: rest; 1: read left; 2: read center; 3: read right; 4; check 
var fillArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var arrayLength = DrawArr.length;
var i = 0; //cannot be larger than array length
var m = 1;
var id;
function generateNewGen(ctx, ctx2_l, ctx2_m, ctx2_r,ctx_wr,ctx2_mov,ctx3) {





    //Draw the first array and set variable m to 1 to offset the drawing
    drawArray(ctx, DrawArr);

    id = setInterval(function () { turingMachine(ctx, ctx2_l, ctx2_m, ctx2_r,ctx_wr,ctx2_mov,ctx3); }, 500);   //set interval function on turing machine
                                                                //store id of interval


}
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
	
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function turingMachine(ctx, ctx2_l, ctx2_m, ctx2_r,ctx_wr,ctx2_mov,ctx3) {
    var arrSet = [1, 1, 1]; //array set condition 1
    var arrSet2 = [1, 0, 0];//array set condition 1
    var arrSet3 = [0, 1, 0];//array set condition 1
    var arrSet4 = [0, 0, 1];//array set condition 1

    //console.log("current state: " + currentState + "\ni position: " + i);

    if(currentState == 0) //resting state
    {
        if(i >= arrayLength)//reach end of arrray, move down a lvl to next array
        {
            i = 0;
            globalX = 70;
            globalY += 10;
            DrawArr = fillArr;
            fillArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            m++;
            if (m >= 30)
                clearInterval(id);
            
        }
        else
        {
            reNoteStateMachineWriteCellM(ctx3);
			//sleep(500);//reset write state
            NoteStateMachineMove(ctx2_mov);
			//sleep(500);			//start move state
        }
    }
    else if (currentState == 1) //read left
    {
		//sleep(500);
        reNoteStateMachineMove(ctx2_mov);
		//sleep(500);
       NoteStateMachineReadLeft(ctx2_l);
		//sleep(1000);
    }
    else if (currentState == 2) //read middle
    {
		//sleep(500);
       reNoteStateMachineReadLeft(ctx2_l);
		//sleep(500);500
       NoteStateMachineReadMiddle(ctx2_m);
		//sleep();
    }
    else if (currentState == 3) //read right
    {
		//sleep(500);
        reNoteStateMachineReadMiddle(ctx2_m);
		//sleep(500);
        NoteStateMachineReadRight(ctx2_r);
		//sleep(500);
    }
    else if (currentState == 4) //check to see if write needed
    {
            if (compare(arrSet,tmpArrSet)) {
                    fillArr[i] = 1;
                    currentState++;
                }
                else if (compare(arrSet2, tmpArrSet)) {
                    fillArr[i] = 1;
                    currentState++;
                }
                else if (compare(arrSet3, tmpArrSet)) {
                    fillArr[i] = 1;
                    currentState++;
                }
                else if (compare(arrSet4, tmpArrSet)) {
                    fillArr[i] = 1;
                    currentState++;
                }
                else {
                    currentState = 0;
					//sleep(500);
                    reNoteStateMachineReadRight(ctx2_r);
					//sleep(500);
                }
    }
    else if (currentState == 5) //write pixel
    {
		//sleep(500);
      reNoteStateMachineReadRight(ctx2_r);
		//sleep(500);
        NoteStateMachineWriteCellM(ctx,ctx3);
		//sleep(500);
    }

    //var tempArr = DrawArr;
    //var arrayLength = DrawArr.length;
    //var newArr = [];

    //newArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    //tempArr = DrawArr;

    //for (var i = 1; i < arrayLength - 1; i++) {

    //    var tempArrSet = [tempArr[i - 1], tempArr[i], tempArr[i + 1]];

    //    //call function compare to compare two arrays
    //    if (compare(arrSet, tempArrSet)) {
    //        newArr[i] = 1;
    //    }
    //    else if (compare(arrSet2, tempArrSet)) {
    //        newArr[i] = 1;
    //    }
    //    else if (compare(arrSet3, tempArrSet)) {
    //        newArr[i] = 1;
    //    }
    //    else if (compare(arrSet4, tempArrSet)) {
    //        newArr[i] = 1;
    //    }
    //    else {

    //        newArr[i] = 0;
    //    }




    //}
    //DrawArr = newArr;
    //drawArray(ctx, DrawArr);
    //m++;
    //if (m >= 30)
    //    clearInterval(id);
}

function draw_rect( ctx, stroke, fill ) 
{
    stroke = stroke || 'lightgrey';
    fill = fill || 'dimgrey';
    ctx.save( );
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    ctx.lineWidth = 5;
    ctx.rect(80, 50, canvas.width - 150, canvas.height - 100);
    ctx.stroke();
    ctx.fill();
    ctx.restore( );
	

}

function draw_cell (ctx, x, y)
{
	var stroke = 'transparent';
	var  fill = 'red';
	ctx.save();
	ctx.strokeStyle = stroke;
	ctx.fillStyle = fill;
	ctx.lineWidth = 0;
	var gen = 0;
	width = canvas.width - 210;
	ctx.rect(x,y,8.5,8.5);
	ctx.fill();
	ctx.restore();
}
function draw_BIG_cell (ctx, x, y)
{
	var stroke = 'transparent';
	var  fill = 'Green';
	ctx.save();
	ctx.strokeStyle = stroke;
	ctx.fillStyle = fill;
	ctx.lineWidth = 0;
	var gen = 0;
	width = canvas.width - 210;
	ctx.rect(x,y,17,17);
	ctx.fill();
	//ctx.restore();
}
function re_BIG_cell (ctx, x, y)
{
	var stroke = 'transparent';
	var  fill = 'black';
	ctx.save();
	ctx.strokeStyle = stroke;
	ctx.fillStyle = fill;
	ctx.lineWidth = 0;
	var gen = 0;
	width = canvas.width - 210;
	ctx.rect(x,y,17,17);
	ctx.fill();
	//ctx.restore();
}

 function drawArray (ctx, arr )
 {
	 var localX =  70; 
	 var arrayLength = arr.length; 
	 for(var i = 0 ; i < arrayLength; i++)
	 {
	     if(arr[i] === 1)
	     {
	    	 draw_cell(ctx,localX, globalY );
	     }
	     localX = localX + 10; 
	 }
	 //globalY = globalY + 10; 
 }




// =====================================================  draw_grid ====
function draw_grid( rctx, rminor, rmajor, rstroke, rfill  ) 
{
    rctx.save( );
    rctx.strokeStyle = rstroke;
    rctx.fillStyle = rfill;
    let width = rctx.canvas.width;
    let height = rctx.canvas.height;
    for ( var ix = 0; ix < width; ix += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( ix, 0 );
        rctx.lineTo( ix, height );
        rctx.lineWidth = ( ix % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( ix % rmajor == 0 ) { rctx.fillText( ix, ix, 10 ); }
    }
    for ( var iy = 0; iy < height; iy += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( 0, iy );
        rctx.lineTo( width, iy );
        rctx.lineWidth = ( iy % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( iy % rmajor == 0 ) {rctx.fillText( iy, 0, iy + 10 );}
    }
    rctx.restore( );
}

// this function compares both arrays one number at a time.
// if one number doesn't match, return false. otherwise, return true
function compare(a, b)
{
	for(var i = 0; i < a.length; i++)
		{
			if (a[i] !== b[i]) return false;
		}

	return true;
}
function SignalOn(ctx)
{
}



function NoteStateMachineReadRight(ctx)
{
        currentState++;
        tmpArrSet[0] = DrawArr[i - 1];
	    draw_BIG_cell(ctx, 50,50); 
}

function NoteStateMachineReadMiddle(ctx)
{
        currentState++;
        tmpArrSet[1] = DrawArr[i];
        draw_BIG_cell(ctx, 50,50);
	
}

function NoteStateMachineReadLeft(ctx)
{
        currentState++;
        tmpArrSet[2] = DrawArr[i + 1];
		draw_BIG_cell(ctx, 50,50); 
}

function NoteStateMachineWrite(ctx)
{
		draw_BIG_cell(ctx, 300,120); 
}

function NoteStateMachineMove(ctx)
{
        i++;
        currentState++;
        globalX += 10; 
		draw_BIG_cell(ctx,50,50); 
}

function NoteStateMachineWriteCellR(ctx)
{
		draw_BIG_cell(ctx, 300,30); 
}
function NoteStateMachineWriteCellL(ctx)
{
		draw_BIG_cell(ctx, 100,30); 
}
function NoteStateMachineWriteCellM(ctx,ctx3)
{
        globalY += 10;
        draw_cell(ctx,globalX, globalY );
        globalY -= 10;
        currentState = 0;
		draw_BIG_cell(ctx3, 200,30); 
}


/// reset functions  


function reNoteStateMachineReadRight(ctx)
{
	re_BIG_cell(ctx, 50,50); 
}

function reNoteStateMachineReadMiddle(ctx)
{
 
	re_BIG_cell(ctx, 50,50);
}

function reNoteStateMachineReadLeft(ctx)
{
		re_BIG_cell(ctx, 50,50); 
}

function reNoteStateMachineWrite(ctx)
{
		re_BIG_cell(ctx, 50,50); 
}

function reNoteStateMachineMove(ctx)
{
		re_BIG_cell(ctx, 50,50); 
}

function reNoteStateMachineWriteCellR(ctx)
{
		re_BIG_cell(ctx, 300,30); 
}
function reNoteStateMachineWriteCellL(ctx)
{
		re_BIG_cell(ctx, 100,30); 
}
function reNoteStateMachineWriteCellM(ctx)
{
		re_BIG_cell(ctx, 200,30); 
}
function ClearNote(ctx )
{
	// reset graph 
}