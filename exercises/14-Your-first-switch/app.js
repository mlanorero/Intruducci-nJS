function getColor(colorname)
{   
	switch(colorname.toLocaleLowerCase()){
        //Add more options here
        case 0:
            colorname = 'red';
            return true;
            break;
        case 1:
            colorname = 'green';
            return true;
            break;
        case 2:
            colorname = 'blue';
            return true;
            break;
	    default :
	    	return false;//returns false because the user picked an unavailable color
	    break;               
    }
    return colorname;
}

var colorname = prompt('What color do you want?');
var isAvailable = getColor(colorname);
if(isAvailable === true ) { 
    console.log('Good news! That color is available');
}
else  {
console.log('We are sorry, that color is not available');
}