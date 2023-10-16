var index = 0;


function buttonfunction(){
var colors = ["red","pink","blue","purple"];
document.getElementsByTagName("body")[0].style.background = colors[index++];


if( index > colors.length - 1){
   
    index = 0;
}

}