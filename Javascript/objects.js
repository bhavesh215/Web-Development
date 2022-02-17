// Simple Variables
let lectures= 10;
let section =3;
let title='Javascript';


// JS Objects is used to store many variable and functions in one variable
// Variables are called property of object
// Functions are called here methods
const  course={
    lectures: 10,
    section: 3,
    title: 'Javascript',
    notes: {
        introduction: 'Welcome to JS Course'
    },
    enroll() {
        console.log("You are successfully enrolled");    
    }
}

// Agr const ko simple variable declaration me use krenge to wahaan variable immutable ho jayega jbki yhi const ko object me use krenge to woh mutable hoga jaise niche ek example me ham object me nyi property add krenge with value woh bhi at run time

course.price = 'Rs 100'
