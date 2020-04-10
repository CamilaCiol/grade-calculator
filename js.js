function calculateGrade(){
var grades = document.querySelectorAll("input[type=number]");

var sum = 0;
for(let i =0; i< grades.length ; i++){
  sum += parseFloat(grades[i].value);
}

 let average = sum/grades.length;

 

  if (average <= 59) {
     document.getElementById("average").innerHTML = average;
     document.getElementById("result").innerHTML = 'F';
  }
  else if (average >= 60 && average <= 69) {
    document.getElementById("average").innerHTML = average;
    document.getElementById("result").innerHTML = 'D';
  }
  else if (average >= 70 && average <= 79) {
    document.getElementById("average").innerHTML = average;
    document.getElementById("result").innerHTML = 'C';
 }
  else if (average >= 80 && average <= 89) {
    document.getElementById("average").innerHTML = average;
    document.getElementById("result").innerHTML = 'B';
 }
  else {
    document.getElementById("average").innerHTML = average;
    document.getElementById("result").innerHTML = 'A';
 }
  
 }



var counter = 1;
var limit = 7;
function addInput(divName){
     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " exams");
     }
     else {
          var newdiv = document.createElement('div');
          newdiv.innerHTML = " <input type='text' name='myInputs[]'>";
          document.getElementById(divName).appendChild(newdiv);
          counter++;
     }
}

var counter1 = 1;

function addInput1(divName){
    
          var newdiv = document.createElement('div');
          newdiv.innerHTML = " <input type='number' name='myInputs[]'>";
          document.getElementById(divName).appendChild(newdiv);
         
        
          counter1++;
     
}