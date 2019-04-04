// Draw stuff
// Time-stamp: <2019-01-21 20:08:33 Chuck Siska>
// ------------------------------------------------------------

// FUN. Draw filled rect.
var globalY = 50;
var DrawArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var stateMachine = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9];
var fillArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var readCount = 0;
var m = 0;
var id;
function generateNewGen(ctx) {





    //Draw the first array and set variable m to 1 to offset the drawing
    drawArray(ctx, DrawArr);

    id = setInterval(function () { turingMachine(ctx); }, 200);



}

function turingMachine(ctx) {
    var arrSet = [1, 1, 1];
    var arrSet2 = [1, 0, 0];
    var arrSet3 = [0, 1, 0];
    var arrSet4 = [0, 0, 1];

    var tempArr = DrawArr;
    var arrayLength = DrawArr.length;
    var newArr = [];

    newArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    tempArr = DrawArr;

    for (var i = 1; i < arrayLength - 1; i++) {

        var tempArrSet = [tempArr[i - 1], tempArr[i], tempArr[i + 1]];

        //call function compare to compare two arrays
        if (compare(arrSet, tempArrSet)) {
            newArr[i] = 1;
        }
        else if (compare(arrSet2, tempArrSet)) {
            newArr[i] = 1;
        }
        else if (compare(arrSet3, tempArrSet)) {
            newArr[i] = 1;
        }
        else if (compare(arrSet4, tempArrSet)) {
            newArr[i] = 1;
        }
        else {

            newArr[i] = 0;
        }




    }
    DrawArr = newArr;
    drawArray(ctx, DrawArr);
    m++;
    if (m >= 30)
        clearInterval(id);
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
	ctx.restore();
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
	ctx.restore();
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
	 globalY = globalY + 10; 
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

function NoteStateMachineRead(ctx)
{
 
	
}

function NoteStateMachineReadRight(ctx)
{
	draw_BIG_cell(ctx, 300,40); 
}

function NoteStateMachineReadeLeft(ctx)
{
		draw_BIG_cell(ctx, 200,40); 
}

function NoteStateMachineWrite(ctx)
{
		draw_BIG_cell(ctx, 300,120); 
}

function NoteStateMachineMove(ctx)
{
		draw_BIG_cell(ctx, 350,120); 
}

function NoteStateMachineWriteCellR(ctx)
{
		draw_BIG_cell(ctx, 300,30); 
}
function NoteStateMachineWriteCellL(ctx)
{
		draw_BIG_cell(ctx, 100,30); 
}
function NoteStateMachineWriteCellM(ctx)
{
		draw_BIG_cell(ctx, 200,30); 
}


/// reset functions  


function reNoteStateMachineReadRight(ctx)
{
	re_BIG_cell(ctx, 300,40); 
}

function reNoteStateMachineReadeLeft(ctx)
{
		re_BIG_cell(ctx, 200,40); 
}

function reNoteStateMachineWrite(ctx)
{
		re_BIG_cell(ctx, 300,120); 
}

function reNoteStateMachineMove(ctx)
{
		re_BIG_cell(ctx, 350,120); 
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