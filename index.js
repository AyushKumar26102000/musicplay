var j=document.querySelectorAll(".drum").length;
for(var i=0;i<j;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}
function handleClick()
{

  var b=this.innerHTML;
  makesound(b);
buttonAnimation(b);
}
//for keyboard pressed
document.addEventListener("keypress",function(event){
  makesound(event.key);
  buttonAnimation(event.key);
});
function buttonAnimation(value)
{
  var ckey=document.querySelector("." + value);
  ckey.classList.add("pressed");
  setTimeout(function(){ckey.classList.remove("pressed")},100);


}
 function makesound(key){
switch (key) {
  case "w":
  var audio=new Audio("sounds/crash.mp3");
  audio.play();
    break;
    case "a":
    var au=new Audio("sounds/kick-bass.mp3");
    au.play();
      break;
      case "s":
      var a=new Audio("sounds/snare.mp3");
      a.play();
        break;
        case "d":
        var d=new Audio("sounds/tom-1.mp3");
        d.play();
          break;
          case "j":
          var io=new Audio("sounds/tom-2.mp3");
          io.play();
            break;
            case "k":
            var o=new Audio("sounds/tom-3.mp3");
            o.play();
              break;
              default:
              var ao=new Audio("sounds/tom-4.mp3");
              ao.play();
}}
