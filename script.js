function compute()
{
    
   var principal = document.getElementById("principal").value;
   var rate = document.getElementById("rate").value;
   var years = document.getElementById("years").value;

   var interest = principal * years * rate / 100;
   var current_year = new Date().getFullYear(); //get the current year 
   var future = current_year + parseInt(years);

   document.getElementById('result').innerHTML = 
   `If you deposit ${principal}, <br> 
   at an interest rate of ${rate}%. <br>
   You will receive an amount of ${interest}, <br>
   in the year ${future}`
}

function sliderUpdate()
{
    var rate =  document.getElementById("rate").value;
    document.getElementById('slider_value').innerHTML = `${rate}%`;
}
        