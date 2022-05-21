function compute()
{



    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rates").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    if(interest > 0)
    {


    document.getElementById("result").innerHTML="If you deposit <mark>" + principal + 
    "</mark> at an interest rate of <mark>" + rate + "</mark> you will recieve an amount of <mark>" + interest + 
    "</mark> in the year <mark>" + year + "</mark>"; 
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
