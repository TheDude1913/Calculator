var $screen = document.getElementById("#screen")
var $number = $(".number");

var sign

$number.on('click', function()
{
    var numberPressed = $(this).html();
    $screen.append(numberPressed);
}
);

document.getElementById("num1").onclick = function Write1 ()
{
    $screen.append("1");
}
document.getElementById("num2").onclick = function Write2 ()
{
    $screen.append("2");
}

document.getElementById("num3").onclick = function Write3 ()
{
    $screen.append("3");
}

document.getElementById("num4").onclick = function Write4 ()
{
    $screen.append("4");
}

document.getElementById("num5").onclick = function Write5 ()
{
    $screen.append("5");
}

document.getElementById("num6").onclick = function Write6 ()
{
    $screen.append("6");
}
document.getElementById("num7").onclick = function Write7 ()
{
    $screen.append("7");
}

document.getElementById("num8").onclick = function Write8 ()
{
    $screen.append("8");
}

document.getElementById("num9").onclick = function Write9 ()
{
    $screen.append("9");
}

document.getElementById("num0").onclick = function Write0 ()
{
    $screen.append("0");
}

document.getElementById("plus").onclick = function WritePlus ()
{
    $screen.append("+");
    sign = "+"
    $screen.append(num1);
}

document.getElementById("minus").onclick = function WritePlus ()
{
    $screen.append("-");
    sign = "-"
}

document.getElementById("times").onclick = function WritePlus ()
{
    $screen.append("*");
    sign = "*"
}

document.getElementById("devided").onclick = function WritePlus ()
{
    $screen.append("/");
    sign = "/"
}

document.getElementById("equals").onclick = function WriteEquals ()
{
    $screen.append("=");
    
    
}



document.getElementById("clear").onclick = function Clear ()
{
    $screen.empty();
}