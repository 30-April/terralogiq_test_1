const palindrome = (arr) => {
    const ans = []
    arr.map((val) => {
        ans.push(val.split("").reverse().join("") === val ? true : false)
    })
    console.log(ans)
}

palindrome(["kodok", "kadal", "112", "lool"])