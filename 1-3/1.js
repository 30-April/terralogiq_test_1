const fizzBuzz = (arr) => {
    const ans = []
    for (let i = 0; i < arr.length; i++){
        if(arr[i] % 15 === 0 ){
            ans.push("FizzBuzz")
        } else if(arr[i] % 3 === 0){
            ans.push("Fizz")
        } else if(arr[i] % 5 === 0){
            ans.push("Buzz")
        } else {
            ans.push(arr[i])
        }
    };

    console.log(ans)
}

fizzBuzz([1,2,3,4,5,6,7,8,9,10,15,30,60])