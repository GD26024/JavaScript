function getEven(arr) {
    /* 
        Return an array containing only even numbers as a result
        Example
            Input: [1,4,5,77,8,90]
            Output: [4,8,90]

        Write you code below
    */
   const dum=arr.filter(Check_even)
   function Check_even(item)
   {
       return item%2===0
   }
   return dum

}

function multiplyByN(arr, n) {
    /* l
        Return an array whose elements are multiplied by n
        Example
            Input: [1,3,4,55], 3
            Output: [3,9,13,165]
        Write you code below
    */
   let dum=[]
   for(let i=0;i<arr.length;i++)
   {
       dum.push(arr[i]*n)
   }
  return dum
}

function removeNthElement(arr, n) {
    /*
        Return the array with the element present at index n removed
        Example
            Input: [1,3,4,6,7] 3
            Output: [1,3,4,7]
        Write you code below
    */
   for(let i=0;i<arr.length;i++)
   {
       if(arr[i]==n)
       {
        arr.splice(i, 1); 
       }
   }
   return arr
}

module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}