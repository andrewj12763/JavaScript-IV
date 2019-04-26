// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
        this.name = attributes.name
        this.gender = attributes.gender
        this.age = attributes.age
        this.location = attributes.location
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person{
    constructor(attributes){
        super(attributes)
        this.specialty = attributes.specialty
        this.favLanguage = attributes.favLanguage
        this.catchPhrase = attributes.catchPhrase
    }
    demo(subject) {
        console.log(`Today we are going to be learning about ${subject}`)
    }
    grade(student, subject){
        //create a random grade number. 
        let randomNum = Math.floor(Math.random() * 10);
            if(randomNum > 5){
                randomNum *= 1;
            } else {
                randomNum *= -1
            }
        //check if grade to make sure grade doesnt go over 100 
        if((student.grade + randomNum) > 100 ){
            student.grade = 100
        } else {
            student.grade += randomNum
        }
        console.log(`${student.name} recieves a score of ${randomNum} on ${subject} and now has a ${student.grade}`)
    }
}

class Student extends Person{
    constructor(attributes){
        super(attributes)
        this.previousBackground = attributes.previousBackground
        this.className = attributes.className
        this.favSubjects = attributes.favSubjects
        this.grade = attributes.grade
    }
    listSubjects(){
        this.favSubjects.forEach(subject => console.log(subject))
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a pull request for ${subject}`)
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun a sprint challenge for ${subject}`)
    }
    graduate(){
        if(this.grade < 70){
            console.log(`Unfortunately ${this.name} has a grade of ${this.grade}. ${this.name} may not graduate at this time`)
        } else {
            console.log(`We are pleased to announce that ${this.name} has graduated from the school with a grade of ${this.grade}`)
        }
    }
}

class ProjectManager extends Instructor{
    constructor(attributes){
        super(attributes)
        this.gradClassName = attributes.gradClassName
        this.favInstructor = attributes.favInstructor
    }
    standUp(slack){
        console.log(`${this.name} announces ${slack}, @channel study times!`)
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

//NEW INSTRUCTORS fred and jane

const Kieran = new Instructor({
name: 'Kieran',
    location: 'Ohio',
    age: 20,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `These are just hot dogs`
  });

  const jane = new Instructor({
    name: 'jane',
    location: 'Cali',
    age: 20,
    gender: 'female',
    favLanguage: 'Python',
    specialty: 'Databases',
    catchPhrase: `If its a number, I can add it`
});

//New Students blake and Jasmine

const blake = new Student({
    name: 'Blake',
    location: 'Little Rock',
    age: 22,
    gender: 'Male',
    previousBackground: 'Roof Sweeper',
    className: 'FSW PT2',
    favSubjects: ['Gardening', 'Herbology', 'Alchemy'],
    grade: 65
  });

const jasmine = new Student({
    name: 'Jasmine',
    location: 'Little Rock',
    age: 22,
    gender: 'female',
    previousBackground: 'dishwasher',
    className: 'FSW Fulltime 4',
    favSubjects: ['Math', 'English', 'Grammer'],
    grade: 100
  });

  //NEW PROJECT MANAGERS MARGO AND CARLOS

  const margo = new ProjectManager({
    name: 'Margo',
    location: 'Eastville',
    age: 36,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Keep on keeping on`,
    gradClassName: `FSW FT1`,
    favInstructor: 'Jane'
  });

const carlos = new ProjectManager({
    name: 'Carlos',
    location: 'Brookton',
    age: 29,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `Hustle till you drop`,
    gradClassName: `FSW PT1`,
    favInstructor: 'Kieran'
  });


  console.log(Kieran.speak())
  console.log(jasmine.speak())
  console.log(jasmine.sprintChallenge('math'))
  console.log(margo.debugsCode(jasmine, 'math'))

  //stretch task with grades 
  Kieran.grade(blake,'math')
  blake.graduate()
  Kieran.grade(jasmine,'math')
  jasmine.graduate()