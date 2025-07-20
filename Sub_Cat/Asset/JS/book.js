//responsive navbar code
var sidemenu=document.getElementById("sidemenu");
function closemenu(){
    sidemenu.style.right="-200px";
    document.getElementById("open").style.display="block";
}
function openmenu(){
    sidemenu.style.right="0";
    console.log("Done open");
    document.getElementById("open").style.display="none";
}

function openForm() {
        document.getElementById("myForm").style.display = "flex";
      //   document.getElementById("car-name").value="Lamborghini Urus";
      //   document.getElementById("price").value="35₹/KM";
      //   document.getElementById("price").disabled=true;
      //   document.getElementById("car-name").disabled=true;
        document.getElementById("total").disabled=true;
      }
function sub_cat(){
   var x = false;
   x=sessionStorage.getItem("log");
   var un=sessionStorage.getItem("uname");
   //  alert(x);
   if(x)
   {
      document.getElementById("lr").innerHTML=un;
      document.getElementById("lr").href="index.html";
      
   }
}
function cancel1()
{
   document.getElementById("myForm").style.display = "none";
}
      
      function closeForm() {
         var f=0;
         //   Validattion
         var name=document.getElementById("name1");
         var number=document.getElementById("number1");
         var lno=document.getElementById("lno");
         var ano=document.getElementById("ano");
         var km=document.getElementById("km");

         if(name.value==""||number.value==""||lno.value==""||ano.value=="")
            {
               f=1;
               alert("Please Fill All The Fields");   
               return;   
            }

            var pattern=/^[a-zA-Z ]{2,30}$/  ;
            if (!pattern.test(name.value)) {
               f=1;
             alert("Invalid Name");
             number.focus();
            }
            pattern=/^[0-9]{10}$/;
            if (!pattern.test(number.value)) {
               f=1;
             alert("Invaliid Contact Number");
             number.focus();
             return;
            }

            pattern=/^[A-Za-z0-9]+$/;
            if (!pattern.test(lno.value)) {
               f=1;
             alert("Invaliid License Number");
             number.focus();
             return;
            }

            pattern=/^[0-9]{12}$/;
            if (!pattern.test(ano.value)) {
               f=1;
             alert("Invaliid Aadhar Card Number");
             number.focus();
             return;
            }

            if(km.value=="")
            {
               km.focus();
               alert("Please Mention No. Of KMs")
               f=1;
               return;
            }
         

         // styles
         if(f==0)
            {
               alert("Thank You "+name.value+" !! \n Your Car Booked Successfully")
               document.getElementById("button").innerHTML="Car Booked!!";
               document.getElementById("button").disabled=true;
               document.getElementById("button").style.cursor="not-allowed";
               document.getElementById("myForm").style.display = "none";
            }
      }
   function Validate()
   {
    var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
   dd = '0' + dd;
}

if (mm < 10) {
   mm = '0' + mm;
} 
    
today = yyyy + '-' + mm + '-' + dd;
document.getElementById("from").setAttribute("min",today);
   }

   function Validate1()
   {
      // 
      var startDateInput = document.getElementById('from');
      var endDateInput = document.getElementById('To');

      var startDate = new Date(startDateInput.value);
      var minDate = startDate.toISOString().split('T')[0];
      endDateInput.min = minDate;

      if (isNaN(startDate)) {
          alert("Invalid start date. Please enter a valid date.");
          return;
      }

      startDate.setDate(startDate.getDate() + 7);

      var maxDate = startDate.toISOString().split('T')[0];
      endDateInput.max = maxDate;

//       var today = new Date();
//       var dd = today.getDate();
//       var mm = today.getMonth() + 1; //January is 0!
//       var yyyy = today.getFullYear();
      
//       if (dd < 10) {
//          dd = '0' + dd;
//       }
      
//       if (mm < 10) {
//          mm = '0' + mm;
//       } 
          
//       today = yyyy + '-' + mm + '-' + dd;
//       document.getElementById("To").setAttribute("min",today);
      
//    var d=document.getElementById("from");
//    var dt=new Date(d.value);

//    // var dt=d.getDate();
//    dt.setDate(dt.getDate() + 5);


// document.getElementById("To").setAttribute("max",dt);
   }
   
   function total1()
   {
      var price=parseInt(document.getElementById("price").value);
      document.getElementById("total").value="Total="+(document.getElementById("km").value*price)+"₹";
   }