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

addTask("Amy");
addTask("Jenny");


let listAllTasks = ()=>{
    Tasks.forEach((element)=>{
        console.log(element);
    })
}

listAllTasks();


//calling the add task function
//deleting
//Tasks.splice(index,1);