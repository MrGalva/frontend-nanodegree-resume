/*      Matteo Galvagni      */

/*------- JSON OBJECT -------*/
/*
Bio object:
  name : string
  role : string
  contacts : an object with
  mobile: string
  email: string
  github: string
  twitter: string
  location: string
  welcomeMessage: string
  skills: array of strings
  biopic: url
  display: function
  displayfooter: function
*/
var bio = {
  "name": "Matteo Galvagni",
  "age": 26,
  "role": "Front-End Web Developer",
  "contacts": {
    "mobile": "+393409198136",
    "email": "mrgalva@gmail.com",
    "twitter": "mrgalva",
    "github": "mrgalva",
    "location": "Riva del Garda, Italy"
  },
  "welcomeMessage": "I love to create new digital experiences",
  "skills": [
  "User Experience Design",
  "User Interface Design",
  "Front-End Web Coding"
  ],
  "bioPic": "images/profile3.gif",
  "display":  function() {
    //Function to display bio data:
    //create the html element with data from bio
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    var formattedPic = HTMLbioPic.replace("%data%",bio.bioPic);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    //add elements to header
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedPic);
    $("#header").append(formattedWelcomeMsg);
    //Contacts
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);

    // if there is at least a skill:
    if (bio.skills.length > 0) {
      //create a html element that contains all skills
      $("#header").append(HTMLskillsStart);
      // for all elements
      for(index in bio.skills) {
        // create a html element with data from bio.skills
        var formattedSkill = HTMLskills.replace("%data%",bio.skills[index]);
        $("#skills").append(formattedSkill); //add the skill
      }
    }
  },
  "displayfooter": function() {
    //Function to display bio.contacts data to the footer element:
    $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
  }
}


/*
education object:
  schools: array of objects with
  name: string
  location: string
  degree: string
  majors: array of strings
  dates: integer (graduation date)
  url: string
  onlineCourses: array with
  title: string
  school: string
  date: integer (date finished)
  url: string
  display: function taking no parameters
*/
var education = {
  "schools": [
{
  "name": "University of Trento",
  "location": "Trento, Italy",
  "degree": "BA",
  "major": [
  " Psychology",
  " Computer Science"
  ],
  "dates": 2015,
  "url": "http://www.unitn.it/en"
},
{
  "name": "Industrial and technical institute",
  "location": "Via Monti, 1, Sant'Ilario , Rovereto, Italy",
  "degree": "High School",
  "major": [
  " Computer Science",
  " Math"
  ],
  "dates": 2009,
  "url": "http://www.marconirovereto.it/"
}],
"onlinecourses": [
{
  "title": "Javascript Basics",
  "school": "Udacity",
  "date": "2014",
  "url": "https://www.udacity.com/course/ud804"
},
{
  "title": "Intro to JQuery",
  "school": "Udacity",
  "date": "2014",
  "url": "https://www.udacity.com/course/ud245"
},
{
  "title": "HTML and CSS",
  "school": "Udacity",
  "date": "2014",
  "url": "https://www.udacity.com/course/ud304"
}
],
"display": function() {
  //Function to display education data:
  // if there is a school or more:
  if(education.schools.length > 0) {
    // for each school
    for (index in education.schools) {
      // insert a div that contains all school (class: education-entry)
      $("#education").append(HTMLschoolStart);
      // string formatted
      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[index].name);
      formattedSchoolName = formattedSchoolName.replace("#", education.schools[index].url);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[index].degree);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[index].location);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[index].dates);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[index].major);
      // append to education-entry
      $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
      $(".education-entry:last").append(formattedSchoolLocation);
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolMajor);
    }
  }
  //if there is a online course:
  if(education.onlinecourses.length > 0) {
    // online course title
    $("#education").append(HTMLonlineClasses);
    // the div container
    $("#education").append(HTMLschoolStart);
    //for each online course
    for (online_index in education.onlinecourses) {
      //string formatted
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlinecourses[online_index].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlinecourses[online_index].school);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlinecourses[online_index].date);
      var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlinecourses[online_index].url);
      formattedOnlineURL = formattedOnlineURL.replace("#", education.onlinecourses[online_index].url);
      //append to div
      $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
      $(".education-entry:last").append(formattedOnlineDates);
      $(".education-entry:last").append(formattedOnlineURL);
    }
  }
}
}


/*
work object:
  jobs: array of objects with
  employer: string
  title: string
  location: string
  dates: string (works with a hyphen between them)
  description: string
  display: function taking no parameters
*/
var work = {
  "jobs": [
{
  "employer": "Ellisse Informatica",
  "title": "Computer Scientist",
  "location": "Rovereto, Italy",
  "dates": "June 2010 - September 2010",
  "description": "Computer scientist"
},
{
  "employer": "Zobele Spa",
  "title": "Computer Scientist",
  "location": "Via Fersina, 4, Trento, Italy",
  "dates": "May 2011 - October 2011",
  "description": "App Developer"
}
],
"display": function() {
  //display function for jobs elements:
  for(job in work.jobs) {
    // insert start div for a new job element
    $("#workExperience").append(HTMLworkStart);
    // string to html element
    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    // Append elements to div
    $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
    $(".work-entry:last").append(formattedWorkDates);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedWorkDescription);
  }
}
}


/*
projects objects:
projects: array of objects with
title: string
dates: string (works with a hyphen between them)
description: string
images: array with string urls
display: function taking no parameters
*/
var projects = {
  "projects": [
{
  "title": "NoDyar",
  "dates": "2013 - 2014",
  "description": "Not Distraction You Are Reading, app for dyslexic children",
  "images": ["images/img1.png","images/img2.png"]
},
{
  "title": "Other",
  "dates": "2014",
  "description": "An other projects",
  "images": ["images/197x148.gif","images/197x148.gif"]
}
],
"display": function() {
  //display funtion for projects:
  for (index in projects.projects) {
    // insert start div for a new project element
    $("#projects").append(HTMLprojectStart);
    //string to html element
    var formattedprojectDates = HTMLprojectDates.replace("%data%",projects.projects[index].dates);
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[index].title);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[index].description);
    // Append elements
    $(".project-entry:last").append(formattedProjectTitle + formattedprojectDates);
    $(".project-entry:last").append(formattedProjectDescription);
    // Append all image from images array
    for(img_index in projects.projects[index].images) {
      var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[index].images[img_index]);
      $(".project-entry:last").append(formattedProjectImage);
    }
  }
}
};


/*------- CALL FUNCTION -------*/
//Show bio infromation
bio.display();
//Show work information
work.display();
//Show education information
education.display();
//Show project information
projects.display();
//Show contacts inside footer
bio.displayfooter();

//Add google map
$("#mapDiv").append(googleMap);
