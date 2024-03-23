function hasOddNumber(arr)  {
    return arr.some(function(val)  {
        return (val % 2) !== 0
    })
}
function hasAZero(num)  {
    const numberString = num.toString()
    const numberArray = numberString.split('')
    return numberArray.some(function(val)   {
        return val === '0'
    })
}
function hasOnlyOddNumbers(arr)  {
    return arr.every(function(val)  {
        return (val % 2) !== 0
    })
}
function hasNoDuplicates(arr)   {   
    return arr.every(function(val, inx)   {
        return arr.indexOf(val)    === arr.lastIndexOf(val)
    }   
    )
}
function hasCertainKey(arr, key)    {
    return arr.every(function(val)  {
        return val.hasOwnProperty(key)
    })
}
function hasCertainValue(arr, key, value)   {
    return arr.every(function(val)  {
        return val[key]  === value
})
}