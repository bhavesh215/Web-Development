// Factory Function 
function createCourse(l,s,cn){
    return {
        lectures:l,
        section:s,
        title: cn,
        notes:{
            introduction:'Welcome to '+  cn+' Course'
        },
        enroll() {
            console.log("You are successfully enrolled to our " + cn+' course');
        }
    }
}

// Constructor Function
function Course(title,price){
    this.title = title,
    this.price = price,
    this.enroll = function(){
        console.log('You are succesfully enrolled to our '+this.title+' Course which is worth of Rs '+this.price);
    }
}

const course = new Course('Full Stack Mern Development',450);
course.enroll()


// Difference between Factory Function and Constructor Function 

/* Factory function and Constructor Function both are the ways of making a Javascript Object But there are some difference between these two functions
1. Factory Function me function ke naam me dusre function ki tarah camel case naming use krte hai jbki constructor Function me function name Pascal case me hoga 
2. Factory wale way me normal function code likha jayega jbki constructor wale way me this keyword ke saath code hoga 
3. Factory wale way me function call krte waqt normal call hoga jbki constructor function me function call me new keyword ka use hoga

*/
