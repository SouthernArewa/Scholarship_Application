let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let age = document.getElementById("age");
let phone = document.getElementById("phone");
let gender = document.getElementById("gender");
let school = document.getElementById("school");
let country = document.getElementById("country");
let fname_error = document.getElementById("fname_error");
let lname_error = document.getElementById("lname_error");
let age_error = document.getElementById("age_error");
let phone_error = document.getElementById("phone_error");
let gender_error = document.getElementById("gender_error");
let school_error = document.getElementById("school_error");
let country_error = document.getElementById("country_error");
let submitBtn = document.getElementById("btn");
let maths = document.getElementById("maths"); 
let math_error = document.getElementById("math_error");
let english = document.getElementById("english");
let english_error = document.getElementById("english_error");
let subj1 = document.getElementById("subj1");
let subject1_error = document.getElementById("subject1_error");
let subj2 = document.getElementById("subj2");
let subject2_error = document.getElementById("subject2_error");
let subj3 = document.getElementById("subj3");
let subject3_error = document.getElementById("subject3_error");
let subj4 = document.getElementById("subj4");
let subject4_error = document.getElementById("subject4_error");
let subj5 = document.getElementById("subj5");
let subject5_error = document.getElementById("subject5_error");
let subj6 = document.getElementById("subj6");
let subject6_error = document.getElementById("subject6_error");
let score1 = document.getElementById("score1");
let score1_error = document.getElementById("score1_error");
let score2 = document.getElementById("score2");
let score2_error = document.getElementById("score2_error");
let score3 = document.getElementById("score3");
let score3_error = document.getElementById("score3_error");
let score4 = document.getElementById("score4");
let score4_error = document.getElementById("score4_error");
let score5 = document.getElementById("score5");
let score5_error = document.getElementById("score5_error");
let score6 = document.getElementById("score6");
let score6_error = document.getElementById("score6_error");
let score7 = document.getElementById("score7");
let score7_error = document.getElementById("score7_error");
let score8 = document.getElementById("score8"); 
let score8_error = document.getElementById("score8_error");
let subjects = ["Animal Husbandry", "Biology", "Physics", "Chemistry", "Geography", "Economics", "Literature", "Government", "Accounting", "Data Processing"]
let subjectsView = document.getElementById("subjectsView")
let countryvalue;
let gradevalue;
let agepoint;
let countrypoint;
let gradepoint;
let gradesum;
let point;
let score;
let score_total

submitBtn.addEventListener('click', function () {
        validateForm()
    })
    function validateForm() {
        if(fname.value=="" || fname.value === null){
          fname_error.innerHTML="First name is required"
      }
       else if(lname.value=="" || lname.value === null){
        lname_error.innerHTML="Last name is required"
      }
      else if(age.value=="" || age.value === null){
          age_error.innerHTML="Age is required"
      }
      else if(gender.value=="" || gender.value === null){
        gender_error.innerHTML="Gender is required"
       }
      else if(phone.value=="" || phone.value === null){
        phone_error.innerHTML="Phone number is required"
       }
       else if(school.value=="" || school.value === null){
        school_error.innerHTML="School is required"
       }
       else if(country.value=="" || country.value === null){
        country_error.innerHTML="Country is required"
       }
       else if(subj1.value=="" || subj1.value === null){
        subject1_error.innerHTML="Subject is required"
       }
       else if(subj2.value=="" || subj2.value === null){
        subject2_error.innerHTML="Subject is required"
       }
       else if(subj3.value=="" || subj3.value === null){
        subject3_error.innerHTML="Subject is required"
       }
       else if(subj4.value=="" || subj4.value === null){
        subject4_error.innerHTML="Subject is required"
       }
       else if(subj5.value=="" || subj5.value === null){
        subject5_error.innerHTML="Subject is required"
       }
       else if(subj6.value=="" || subj6.value === null){
        subject6_error.innerHTML="Subject is required"
       }
       else if(score1.value=="" || score1.value === null){
        score1_error.innerHTML="Score is required"
       }
       else if(score2.value=="" || score2.value === null){
        score2_error.innerHTML="Score is required"
       }
       else if(score3.value=="" || score3.value === null){
        score3_error.innerHTML="Score is required"
       }
       else if(score4.value=="" || score4.value === null){
        score4_error.innerHTML="Score is required"
       }
       else if(score5.value=="" || score5.value === null){
        score5_error.innerHTML="Score is required"
       }
       else if(score6.value=="" || score6.value === null){
        score6_error.innerHTML="Score is required"
       }
       else if(score7.value=="" || score7.value === null){
        score7_error.innerHTML="Score is required"
       }
       else if(score8.value=="" || score8.value === null){
        score8_error.innerHTML="Score is required"
       }
      else{
        Submit()
      }
clearError()
    }   
  
     function clearError() {
     if(fname.value!=""){
      fname_error.innerHTML=""
      }
      if(lname.value!=""){
       lname_error.innerHTML=""
      }
      if(age.value!=""){
       age_error.innerHTML=""
      }
      if(gender.value!=""){
        gender_error.innerHTML=""
      }
      if(phone.value!=""){
       phone_error.innerHTML=""
      }
      if(school.value!=""){
            school_error.innerHTML=""
           }
      if(country.value!=""){
        country_error.innerHTML=""
           }
      if(maths.value!=""){
            math_error.innerHTML=""
               }
      if(english.value!=""){
            english_error.innerHTML=""
                   }
      if(subj1.value!=""){
            subject1_error.innerHTML=""
                       }
      if(subj2.value!=""){
            subject2_error.innerHTML=""
                           }
      if(subj3.value!=""){
            subject3_error.innerHTML=""
                               }
      if(subj4.value!=""){
            subject4_error.innerHTML=""
                                   }
      if(subj5.value!=""){
            subject5_error.innerHTML=""
         }
      if(subj6.value!=""){
            subject6_error.innerHTML=""
         }
    if(score1.value!=""){
          score1_error.innerHTML=""
         }
    if(score2.value!=""){
          score2_error.innerHTML=""
       }
    if(score3.value!=""){
          score3_error.innerHTML=""
       }
    if(score4.value!=""){
        score4_error.innerHTML=""
       }    
    if(score5.value!=""){
        score5_error.innerHTML=""
     }
    if(score6.value!=""){
      score6_error.innerHTML=""
     }   
    if(score7.value!=""){
      score7_error.innerHTML=""
   }
    if(score8.value!=""){
    score8_error.innerHTML=""
   }                                            
   
    }

    subj1.addEventListener("change", function () {
        let subjectIndex = subj1.value
        subjects.splice(subjectIndex, 1)
        loopSubj2()
        loopSubj3()
        loopSubj4()
        loopSubj5()
        loopSubj6()
    })
    subj2.addEventListener("change", function () {
        let subjectIndex2 = subj2.value
        subjects.splice(subjectIndex2, 1)
        loopSubj3()
        loopSubj4()
        loopSubj5()
        loopSubj6()
    })
    subj3.addEventListener("change", function () {
        let subjectIndex3 = subj3.value
        subjects.splice(subjectIndex3, 1)
        loopSubj4()
        loopSubj5()
        loopSubj6()
    })
    
    subj4.addEventListener("change", function () {
        let subjectIndex4 = subj4.value
        subjects.splice(subjectIndex4, 1)
        loopSubj5()
        loopSubj6()
    })
    subj5.addEventListener("change", function () {
        let subjectIndex5 = subj5.value
        subjects.splice(subjectIndex5, 1)
        loopSubj6()
    })
    subj6.addEventListener("change", function () {
        let subjectIndex6 = subj6.value
        subjects.splice(subjectIndex6, 1)
    })
    
function Submit(){
        age_calc()
        
      }
function age_calc(){
      let agevalue = parseInt(age.value);
        if ( agevalue >=18 && agevalue <=24 ) {
                     agepoint = 100;
                     console.log(agepoint)
         }
        else if ( agevalue >=25 && agevalue <=30 ) {
                     agepoint = 80;
                     console.log(agepoint)
         }
        else if ( agevalue >=31 && agevalue <=35 ) {
                     agepoint = 50;
                     console.log(agepoint)
        }
        else if ( agevalue >=36 && agevalue <=40 ) {
                     agepoint = 30;
                     console.log(agepoint)
          }
        else if (agevalue > 41) {
                     agepoint = 10
                     console.log(agepoint)
          } else {
                     agepoint = 0
                     console.log(agepoint)
       }
                 country_calc()
    }
function country_calc(){
      if ( country.value === "Africa" ) {
          countrypoint = 50;
          console.log(countrypoint)
      }
      else if ( country.value === "Asia" ) {
          countrypoint = 40;
          console.log(countrypoint)
      }
      else if ( country.value = "South-America" ) {
              countrypoint = 30;
              console.log(countrypoint)
      }
      else if ( countryvalue = "North-America" ) {
          countrypoint = 20;
          console.log(countrypoint)
      }
       else {
              countrypoint = 10;
              console.log(countrypoint)
          } 
          scores_calc()
        }
function grade_calc() {
          if (gradevalue <= 100 && gradevalue >= 90) {
              gradepoint = 150
          } else if (gradevalue <= 89 && gradevalue >= 85) {
              gradepoint = 140;
          } else if (gradevalue <= 84 && gradevalue >= 75) {
              gradepoint = 120
          } else if (gradevalue <= 74 && gradevalue >= 65) {
              gradepoint = 100
          } else if (gradevalue <= 64 && gradevalue >= 60) {
              gradepoint = 80
          } else if (gradevalue <= 59 && gradevalue >= 50) {
              gradepoint = 50
          } else if (gradevalue <= 49 && gradevalue >= 40) {
              gradepoint = 20
          } country_calc()

          console.log("Point for average=" + gradepoint);
      }
      
function scores_calc() {
    score_total = parseInt(score1.value) + parseInt(score2.value) + parseInt(score3.value) + parseInt(score4.value) + parseInt(score5.value) + parseInt(score6.value) + parseInt(score7.value) + parseInt(score8.value)
    console.log("Total Subject Score is " + score);
    score = score_total / 8
    console.log("Average= " + score);

      if ( score >=90 && score <=100 ) {
              scorepoint = 50;
              console.log(scorepoint)
          }
          else if ( score >=85 && score <=89 ) {
              scorepoint = 40;
              console.log(scorepoint)
          }
          else if ( score >=75 && score <=84 ) {
              scorepoint = 30;
              console.log(scorepoint)
          }
          else if ( score >=65 && score <=74 ) {
              scorepoint = 20;
              console.log(scorepoint)
          }
          else if ( score >=60 && score <=64 ) {
              scorepoint = 20;
              console.log(scorepoint)
          }
          else if ( score >=50 && score <=59 ) {
              scorepoint = 20;
           console.log(scorepoint)
       }
       else if ( score >=40 && score <=49 ) {
           scorepoint = 20;
           console.log(scorepoint)
       }
        else {
               scorepoint = 0;
               console.log(scorepoint)
           } 
           pointGetter()
          }

function   pointGetter(){
      point = agepoint + countrypoint + scorepoint
      alert("You have " + point + "points")
      summary()
    } 
function summary() {
     
      if ( point >=180 ) {
           alert(" Congratulations! You are Qualified for the fully funded Rework Academy Scholarship!") 
           jsChart()
  
        }
         else {
           alert("Oops! You are not Qualified for tyhe Scholarship")
         }
  }
  
  function jsChart() {
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart 
  myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Age', 'Score', 'Country'],
          datasets: [{
              label: ['Points'],
              data: [agepoint, scorepoint, countrypoint],
              backgroundColor: [
                  ' rgb(78, 11, 2)',
                  ' rgb(6, 70, 35)',
                  'rgb(206, 100, 14)',
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
              ],
              borderWidth: 1,
              borderColor:'#777',
              hoverBorderWidth:3,
              hoverBorderColor:'#000'
          }]
      },
      options: {
          title:{
              display: true,
              text:'Chart showing Eligibility points',
              fontSize:25},
          legend:{
              display:false,
              position:'right',
              labels:{
                  fontColor:'#000'
              }
          },
          scales: {
              y: {
                  beginAtZero: true
              }
          }
  }
  });
  }
  
  loopSubj1()
  loopSubj2()
  loopSubj3()
  loopSubj4()
  loopSubj5()
  loopSubj6()
  function loopSubj1() {
      let allOptions = ""
      for (let a = 0; a < subjects.length; a++) {
          allOptions += ` <option value="${a}"> ${subjects[a]}</option>`
          console.log(subjects);
      }
      subj1.innerHTML = `  <option value="">Select Subjects</option> ${allOptions}`
  }
  
  function loopSubj2() {
      let allOptions = ""
      for (let a = 0; a < subjects.length; a++) {
          allOptions += ` <option value="${a}"> ${subjects[a]}</option>`
      }
  
      subj2.innerHTML = `  <option value="">Select Subjects</option> ${allOptions}`
  }
  
  function loopSubj3() {
      let allOptions = ""
      for (let a = 0; a < subjects.length; a++) {
          allOptions += ` <option value="${a}"> ${subjects[a]}</option>`
      }
      subj3.innerHTML = `  <option value="">Select Subjects</option> ${allOptions}`
  }
  function loopSubj4() {
      let allOptions = ""
      for (let a = 0; a < subjects.length; a++) {
          allOptions += ` <option value="${a}"> ${subjects[a]}</option>`
      }
      subj4.innerHTML = `  <option value="">Select Subjects</option> ${allOptions}`
  }
  function loopSubj5() {
      let allOptions = ""
      for (let a = 0; a < subjects.length; a++) {
          allOptions += ` <option value="${a}"> ${subjects[a]}</option>`
      }
      subj5.innerHTML = `  <option value="">Select Subjects</option> ${allOptions}`
  }
  function loopSubj6() {
      let allOptions = ""
      for (let a = 0; a < subjects.length; a++) {
          allOptions += ` <option value="${a}"> ${subjects[a]}</option>`
      }
      subj6.innerHTML = `  <option value="">Select Subjects</option> ${allOptions}`
  }    