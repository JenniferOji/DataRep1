//and array of numbers(ages)
const ages = [25, 31, 42, 77];

//every time i write item i have access to each element in the arry
let d = ages.map((item)=>{
    //if the number is under 70 multiply it by 2
    if(item < 70){
        return item * 2;
    }
    //if it is not, leave it as it is
    else{
        return item;
    }
});

console.log(d);
