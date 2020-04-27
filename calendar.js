
function getCurrentMonthName()
{
    var months = ["January" ,"February","March","April","May","June","July","August","September","October","November","December" ];
    var dateobj= new Date();
    var monthnum= dateobj.getMonth();
    var currmonthname = months [monthnum]; 
    return currmonthname;

}
function getMonthName( monthnum)
{
    var months = ["January" ,"February","March","April","May","June","July","August","September","October","November","December" ];
    var dateobj= new Date();
    var monthname = months [monthnum]; 
    return monthname;

}

function getCurrentMonthNum()
{
        var dateobj= new Date();
        var monthnum= dateobj.getMonth();
        return monthnum;
}

function getCurrentYear()
{
        var dateobj= new Date();
        var year= dateobj.getFullYear();
        return year;
}

function numOfDays(month, year){
 return new Date(year, month+1, 0).getDate();

}

function fillblankcontent(target){
    var datediv = document.createElement('div');
    datediv.className ="col-sm-* nd_cal-day"; 
    datediv.innerHTML = ""; 
    datediv.id = "datediv";
    document.getElementById(target).appendChild(datediv);

}


function createcalendarday (target, data)
{
    
    var datediv = document.createElement('div');
    datediv.id = "datediv"; 
    datediv.className ="col-sm-* nd_cal-day"; 
    datediv.innerHTML = data;

    datediv.addEventListener('click' , function (e){
        var dateobj = e.target;  
        var optrowdiv = dateobj.getElementsByTagName('div')[0];
        var optdiv = optrowdiv.getElementsByTagName('div')[0]; 
        optdiv.style= "display: block; position: relative; right: 60px;";});
   
   


    
    document.getElementById(target.id).appendChild(datediv);
    
}
function displayhighlighteddate(){




}



function fillcalcontent(target, month,year){

var dateobj = new Date(); 
var currentmonth = dateobj.getMonth(); 
var currentyear = dateobj.getFullYear(); 
var Today = dateobj.getDate(); 
// Put the selected month number here. 
document.getElementById("monthnumholder").innerHTML = month; 

    //Put current month name 
document.getElementById("id_calmonthname").innerHTML = getMonthName(month) + "   " + year; 


// clear the data in the id_cal-day 
document.getElementById(target).innerHTML = ""; 

var firstDayOfMonth = new Date(year, month);
var numdays = numOfDays(month, year);
var counter= 1;
var calStartPointer= firstDayOfMonth.getDay();
//Create the fist row div element here. 

var firstrowdiv = document.createElement('div');
firstrowdiv.className ="row"; 
firstrowdiv.id= "rowdiv_" + 1;
//document.getElementById(target).appendChild(firstrowdiv);
// Fill the blanks for the first row here. 
//for(var i=0;i<calStartPointer;i++){
  //  fillblankcontent(firstrowdiv.id, i);
//}

// Fill the content for the first row here. 
//for(var j= (7 - calStartPointer); j <= 7; j++){
  //  createcalendarday(firstrowdiv, counter++);
//}
// Now, fill the calendar content. 
for(var i=1; i<= 6 ;i++){
    // The row for the calendar data. 
   var  rowdiv = document.createElement('div');
    rowdiv.className ="row"; 
    rowdiv.id= "rowdiv_" + i + 1;
    document.getElementById(target).appendChild(rowdiv);

    for(var j=0;j< 7 ;j++){
        if(counter <= numdays){
                if(i==1 && j < calStartPointer)
                {
                    fillblankcontent(rowdiv.id); 
                }
                else 
                    {
                        createcalendarday(rowdiv, counter);
                        // Highlight the day if it is Today. 
                        if((month == currentmonth) && (year == currentyear) && (counter == Today))
                       {
                         
                        var datediv = rowdiv.getElementsByTagName('div')[j]; 
                        datediv.style = "background-color: rgb(253, 245, 137);";
                        

                       } 
                       counter++; 
                        
                    }
            }
            else
               {
                    fillblankcontent(rowdiv.id); 
                    if(j == 6) i++;
               }

        }
        
    }
 }// Main for loop ends here. 



function changeCalMonth(month)
{
    var dateobj = new Date(); 
    var year = dateobj.getFullYear(); 
    fillcalcontent("id_cal-day", month, year);

}


window.addEventListener('load', function(){
    fillcalcontent("id_cal-day", getCurrentMonthNum(), getCurrentYear());
});


//----------------------------------------------------------------------------------
//-----------------------nidhi's rough work here------------------------------------
//----------------------------------------------------------------------------------

function nidhi_add(a , b)
{
var c= a+b;
return c;
}
function nidhi_subtract(a , b)
{
var c= a-b;
return c;
}
function nidhi_multiply(a , b)
{
var c= a*b;
return c;
}
function nidhi_divide(a , b)
{
var c= a/b;
return c;
}

function nidhi_even (num){
if( num > 0 ){
    if (num % 2 == 0 )
    console.log ("The given number "  +  num    +  " is even" );
else 
    console.log ("The given number "  +  num    +  " is odd" );

}


}

function nidhi_max (a, b){
    if( a - b >0 )
        return a;
        else 
        return b;
}
    
function nidhi_min (a, b){
    if( a<b )
        return a;
        else 
        return b;
}
    function nidhi_simpleinterest (principal, rate, time){
if (principal >0){
if (rate>0){
if (time>0){
var interest =( principal*rate*time)/100;
return interest;

}


}

}



    }

   function  nidhi_element(){
var numbers =[ 1,2, 3,4,5,6,7,8,9,10]


   }


   



    

   
