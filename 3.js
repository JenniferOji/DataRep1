let Tasks = [];

/*number of items in array 
Tasks.length;
Tasks.forEach((Tasks) => {
    console.log(Tasks);

})*/

//an function to add to the task array
let addTask = (task)=>{
    Tasks.push(task);
    //indicating the task has been added to the array
    console.log(task + " has been added to the task array");
    //returning the lenght of the task array
    console.log(Tasks.length);
}




//calling the add task function
addTask("Amy");
//deleting
//Tasks.splice(index,1);