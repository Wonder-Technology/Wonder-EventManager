open POType

let getCanvas = po => {
  po.canvas
}

let setCanvas = (canvas, po) => {
  {
    ...po,
    canvas: Some(canvas),
  }
}

let getOffset: Dom.htmlCanvasElement => (int, int) = %raw(`
  function(canvas){
                var offset = [canvas.offsetLeft,  canvas.offsetTop];
                var offsetParent = canvas;

            while (offsetParent = offsetParent.offsetParent) {
                offset[0] += offsetParent.offsetLeft;
                offset[1] += offsetParent.offsetTop;
            }

            return offset;
            }
`)
