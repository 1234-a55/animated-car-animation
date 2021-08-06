m=0;
function start{
    y=setInterval(run,1000);
function run()
{
    m+=5;
    var x=document.getElementById("img");
    x.style.marginleft=m+'px';
}
}

function stop{
    clearInterval(y);
}