var name_of_the_Student_array = [];

function submit() {
    var name_1 = document.getElementById("student_input_1").value; 
    var name_2 = document.getElementById("student_input_2").value;
    var name_3 = document.getElementById("student_input_3").value;
    var name_4 = document.getElementById("student_input_4").value;

    name_of_the_Student_array.push(name_1);
    name_of_the_Student_array.push(name_2);
    name_of_the_Student_array.push(name_3);
    name_of_the_Student_array.push(name_4);

    console.log(name_of_the_Student_array);
    document.getElementById("output").innerHTML = name_of_the_Student_array;
    document.getElementById("button_submit").style.display = "none";
    document.getElementById("button_sort").style.display = "inline-block";
}
function sorting() {
    name_of_the_Student_array.sort();
    console.log(name_of_the_Student_array);
    document.getElementById("output").innerHTML = name_of_the_Student_array;
}