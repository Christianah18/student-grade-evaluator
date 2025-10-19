function submitButton() {
    let python = Number(document.getElementById ('python').value);
    let robotics = Number(document.getElementById ('robotics').value);
    let computer = Number(document.getElementById ('computer').value);
    let maths = Number(document.getElementById ('maths').value);
    let chemistry = Number(document.getElementById ('chemistry').value);
    let english = Number(document.getElementById ('english').value);


    //  so as to  notify the users on what to do
    
    
    if (
        python < 0 || python > 100 ||
        python == 0 || python == ""||

        robotics < 0 || robotics > 100 ||
        robotics == 0 || robotics == "" ||

        computer < 0 || computer > 100 ||
        computer == 0 || computer == "" ||

        maths < 0 || maths > 100 ||
        maths == 0 || maths == "" ||

        chemistry < 0 || chemistry > 100 ||
        chemistry == 0 || chemistry == "" ||

        english < 0 || english > 100 ||
        english == 0 || english == "" 
    ) {
        alert('Invalid answer. Please enter number between 1 and 100.');
        return;

    }




    // how to get the average score
    
    let total = python + robotics + computer + maths + chemistry + english;
    let average = total/6;
    let grade = "";



    if (average < 0 || average > 100) {
    } else if(average >= 70 && average <= 100){
        grade = 'A';
    } else if(average >= 60 && average <= 69){
        grade = 'B';
    } else if(average >= 50 && average <= 59){
        grade = 'C';
    } else if(average >= 45 && average <= 49){
        grade = 'D';
    } else if(average >= 40 && average <= 44){
        grade = 'E';
    } else{
        grade = 'F';
    }

    document.getElementById("total").value = total.toFixed(2);
    document.getElementById("average").value = average.toFixed(2);
    document.getElementById("grade").value = grade;

}


