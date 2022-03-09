function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if(hasDrivingLiscence)
    {
        if(isTired==false&&isSober==true)
        {
            return "You can drive"

        }
        else if(isTired==true)
        {
            return "You shouldn't drive"
        }
        else{
            return "You shouldn't drive"
        }

    }
    else{
        return "You cannot drive"
    }
}

module.exports = CanDrive;

/*```bash
Input - false, false, true
Output - "You cannot drive"

Input - true, false, true
Output - "You can drive"

Input - true, true, false
Output - "You shouldn't drive" ```*/