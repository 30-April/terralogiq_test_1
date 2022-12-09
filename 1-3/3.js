const isDuplicate = (arr) => {
    const duplicateVal = [...new Set(arr.filter((a,index) => arr.indexOf(a) !== index))]
    console.log(`${duplicateVal.length} data duplicate`)
}

isDuplicate([1,2,3,4,2,5,4,4,9,8,5])