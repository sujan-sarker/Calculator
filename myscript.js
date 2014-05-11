/**
 * Created with IntelliJ IDEA.
 * User: sujan.sarkar
 * Date: 4/20/14
 * Time: 3:57 PM
 * To change this template use File | Settings | File Templates.
 */
var i=0;
function print(val)
{
    document.getElementById("d").value=val;
}
function inVal(val)
{
    if(i==0)
    {
        document.getElementById("d").value=" ";
        i=1;
    }
    document.getElementById("d").value+=val;
}
function clrAll()
{
    document.getElementById("d").value="0";
    i=0;
}
function undo()
{

var n = document.getElementById("d").value.length;
if(n<=2)
{
    print(0);
    i=0;

}

else {
    var val=document.getElementById("d").value;
    print(val.substring(0,n-1));

}

}
function calculate()
{
    var val = document.getElementById("d").value;
    var matches1;
    val=val.replace(/\u221A/g,"Math.sqrt");
    val=val.replace(/%/g,"/100");
    if(val.contains("^"))
    {
        var matches = val.match(/\d+\^\d+/g);
        for(var i= 0; i < matches.length; i++)
        {
            var token = matches[i].split("^");
            val=val.replace(matches[i],"Math.pow(token[0],token[1])");
        }
    }


    try
    {
        print(eval(val))
    }
    catch(e)
    {
        print('Error')
    }
}