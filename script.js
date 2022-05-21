function compute()
{



    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rates").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    if(interest > 0)
    {


    document.getElementById("result").innerHTML="If you deposit " + principal + 
    " at an interest rate of " + rate + " you will recieve an amount of " + interest + 
    " in the year " + year; 
    }
    else
    {
        alert("Enter a positive number.")
    }

}

function updateRate() 
{
    var rateval = document.getElementById("rates").value;
    document.getElementById("rate_val").innerText=rateval;
}
