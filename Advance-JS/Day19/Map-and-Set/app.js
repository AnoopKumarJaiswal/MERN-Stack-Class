let set = new  Set()


set.add(2)
set.add(5)
set.add(1)
set.add(0)
console.log(set);



set.delete(1)
console.log(set);



console.log(set.has(5));
console.log(set.has(3));



function checkDuplicate(arr)
{
    let set = new Set()
    
    for(let item of arr)
    {
        if(set.has(item))
        {
            return true
        }
        set.add(item)
    }
    return false
}


let ans = checkDuplicate([1,3,4,5,6,7])
console.log(ans);




