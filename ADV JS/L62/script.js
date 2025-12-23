/*
Introduction to error handling
types of errors in js:syntax errors,runtime errors,logical errors
syntax error:code me likhte waqt format me galti krdi
runtime error:code chalate waqt error ana
logical eroor:code ko kuch krna chahiye tha par wo kar kuch aur raha hai
*/
try{
    let a=14;
    console.log(a.age.first);
}
catch(err){
    //understanding 'message','name','stack' in error
    console.error('age doesnt exists.',err);
    console.log(err.message);
    console.log(err.name);
    console.log(err.stack);
}
finally{
    console.log("finally block");
}
//how to throw errors in js
//throw new Error('something went worng');
try{
    let a=12;
    console.log(a.name.first);
    
}
catch(err){
    console.log(new Error("Something went wrong"));
}