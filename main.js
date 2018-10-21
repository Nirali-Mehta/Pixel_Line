// function pixel () {

//     var i , j ;
//     var width = 30;
//     var height = 30;
//     for (i=0; i<10; i++){
//         for(j = 0; j<10; j++){
//             this.innerHTML = 'This is the layer created by the JavaScript.';
//             var myLayer = document.getElementById('pix');
//             width = width + 30 ;
//             height = height + 30;
            
//             myLayer.style.padding = '10px';
//             myLayer.style.background = '#00ff00';
//         }
//     }
// }
function pixel(left, top){
var myLayer = document.createElement('div');
myLayer.style.position = "absolute";
myLayer.style.left = left + 'px';
myLayer.style.top = top + 'px';
myLayer.style.backgroundColor = 'black'; 
myLayer.style.width = '1px';
myLayer.style.height = '1px';
document.body.appendChild(myLayer);
}

function pixelgenrator (){
    var i , j ;
    var topp = 0;
    var leftt = 0;
    for (i=0; i<200; i++){
        for(j = 0; j<200; j++){
            leftt = leftt +1;
            topp = topp + 1;
            pixel(leftt, topp)
        }
    }
}
