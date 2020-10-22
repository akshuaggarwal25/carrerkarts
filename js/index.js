function functioncall(){
    namefun();
    emailfun();
    mobilefun();
    cocofun();

    if(namefun() && emailfun() && mobilefun() && cocofun()){
        return true;
    }else{
        return false;
    }
}

//Name start

function namefun(){
    var name=document.getElementById('name').value;
    var nameRegex= /^[a-zA-Z0-9  ]{3,25}$/;

    if(name == ""){
        document.getElementById('nameerror').innerHTML="<font color='red'>Name is mandatory<br></font>";
        return false;
    }else{
        if(nameRegex.test(name)){
            document.getElementById('nameerror').innerHTML="<font color='green'>It's a valid <br> </font>";

        }else{
            document.getElementById('nameerror').innerHTML="<font color='red'>Username is not valid <br> </font>";
            return false;
        }
    }
    if(name.length<3 || name.length>25){
        document.getElementById('nameerror').innerHTML="<font color='red'>Plese input between 3 to 25 <br> </font>";
        return false;
    }
};

//Name ended

//Email start
function emailfun(){
    var email = document.getElementById('email').value;
    //var emailRegex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var emailRegex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(email == ""){
        document.getElementById('emailerror').innerHTML="<font color='red'>Please enter Email <br> </font>";
        return false;
    }else{
        if(emailRegex.test(email)){
            document.getElementById('emailerror').innerHTML="<font color='green'>It's valid <br> </font>";
        }else{
            document.getElementById('emailerror').innerHTML="<font color='red'>Email is invalid <br> </font>";
            return false;
        }
    }
};
//Email ended

//Number start
function mobilefun(){
    var mobile = document.getElementById('mobile').value;
    var mobileRegex=/^\d{10}$/;

    if(mobile == ""){
        document.getElementById('mobileerror').innerHTML="<font color='red'>Please enter Mobile No <br> </font>";
        return false;
    }else{
        if(mobileRegex.test(mobile)){
            document.getElementById('mobileerror').innerHTML="<font color='green'>It's valid <br> </font>";
        }else{
            document.getElementById('mobileerror').innerHTML="<font color='red'>Mobile is not valid <br> </font>";
            return false;
        }
    }
    if(mobile.length<10 || mobile.length>10){
        document.getElementById('mobileerror').innerHTML="<font color='red'>Please enter only 10 digits number <br> </font>";
        return false;
    } 
};
//Number ended


//College/Course start

function cocofun(){
    var coco=document.getElementById('coco').value;
    var cocoRegex= /^[a-zA-Z   ]{3,35}$/;

    if(coco == ""){
        document.getElementById('cocoerror').innerHTML="<font color='red'>This field is mandatory<br></font>";
        return false;
    }else{
        if(cocoRegex.test(coco)){
            document.getElementById('cocoerror').innerHTML="<font color='green'>It's a valid <br> </font>";
        }else{
            document.getElementById('cocoerror').innerHTML="<font color='red'>It is not valid <br> </font>";
            return false;
        }
    }
    if(coco.length<3 || coco.length>25){
        document.getElementById('cocoerror').innerHTML="<font color='red'>Plese input between 3 to 35 <br> </font>";
        return false;
    }
};

//College/Course ended