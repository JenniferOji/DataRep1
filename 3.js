let Tasks = [];

//3A
//a function to add to the task array
let addTask = (task)=>{
    Tasks.push(task);
    //indicating the task has been added to the array
    console.log("\n" + task + " has been added to the task array");
    //returning the lenght of the task array
    console.log(Tasks.length + " elements in the array");
}


//3B
//a function to list all the elements in the array
let listAllTasks = ()=>{
    console.log("\n");
    Tasks.forEach((element)=>{
        //printing the element to the console
        console.log(element);
    })
}


//3C
//a function to remove from the array
let deleteTask = (task)=>{
    console.log("\n");
    let index = Tasks.indexOf(task)
    if(index>-1){
        //removing the string from the array
        Tasks.splice(index,1);
        //printing to the console indicating it has been removed from the array
        console.log(task + " has been removed from the array")
    }

    else{
        console.log(task + " not found in the array Tasks")
    }

    //returning the number of elements in the array after the removal
    console.log(Tasks.length  + " elements in array");
}


//adding to the task array
addTask("Amy");
addTask("Jenny");
addTask("Wonu");
addTask("Megan");

//calling the function
listAllTasks();

//calling the remove function
deleteTask("Megan");

