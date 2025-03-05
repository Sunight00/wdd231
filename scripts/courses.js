const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]


createCourses(courses)

let all= document.querySelector(".all");
all.addEventListener("click", ()=>{createCourses(courses)})


let cse= document.querySelector(".cse");
cse.addEventListener("click", ()=>{createCourses(courses.filter((courses)=>courses.subject=="CSE"));})

function createCourses(filterdcourses)
{
    document.querySelector(".Certificate").innerHTML="";
    //const filterdcourses = courses.filter((courses)=>courses.subject=="CSE")
    filterdcourses.forEach(course =>{
        let subject = document.createElement("p")
        let number = document.createElement("p")
        let title = document.createElement("p")
        let credits = document.createElement("p")
        let certificate = document.createElement("p")
        let description = document.createElement("p")
        let technology = document.createElement("p")
        let completed = document.createElement("p")
        let display = document.createElement("p");
        display.setAttribute("class","display")
        if (course.completed == true)
        {
            display.style.backgroundColor = "gray";
            display.style.color="white"
        }

        if (course.completed == false)
            {
                display.style.backgroundColor = "lightgrey";
                display.style.color=""
            }
        display.innerHTML=course.subject + " "+course.number;

        
        //subject.innerHTML=course.subject;
        //number.innerHTML=course.number
        //document.querySelector(".cc").appendChild(subject);
        
        document.querySelector(".Certificate").appendChild(display)
      
      })

    
}






let wdd= document.querySelector(".wdd");
wdd.addEventListener("click", ()=>{createCourses(courses.filter((courses)=>courses.subject=="WDD"));})


/*wwwd()
function WDD(filterdcourses)
{
    //const filterdcourses = courses.filter((courses)=>courses.subject=="WDD")

    
    filterdcourses.forEach(course =>{
       
        let subject = document.createElement("p")
        let number = document.createElement("p")
        let title = document.createElement("p")
        let credits = document.createElement("p")
        let certificate = document.createElement("p")
        let description = document.createElement("p")
        let technology = document.createElement("p")
        let completed = document.createElement("p")
        let display = document.createElement("p");
        display.innerHTML=course.subject + " "+course.number;

        
        //subject.innerHTML=course.subject;
        //number.innerHTML=course.number
        //document.querySelector(".cc").appendChild(subject);
        card.appendChild(display)
        document.querySelector(".cc").appendChild(card);
        
    
      })

}


*/

    



