function CreateObject(arr) {
    // Write your code here
    const dum={}
    for(let i=0;i<arr.length;i++)
    {
        dum[arr[i]]=arr[i+1]
        i=i+1

    }
    return dum
}

module.exports = CreateObject;
