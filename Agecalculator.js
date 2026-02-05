function calc(){
    let dob = document.getElementById("dob").value;
    let res = document.getElementById("result")
    console.log(dob);
    let birth = new Date(dob)
    let today = new Date()

    let years = today.getFullYear() - birth.getFullYear()
    let months = today.getMonth() - birth.getMonth()
    if(months < 0){
        years --;
        months += 12
    }

    if(years <= 1){
        res.innerText = `your age is : ${years} year ${months} months`
    }else{
        res.innerText = `your age is : ${years} years ${months} months`
    }
    

}