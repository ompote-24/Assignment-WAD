document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("Form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;
        const dob = document.getElementById("dob").value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const phone = document.getElementById("phone").value;
        const course = document.getElementById("course").value;

        if (!fname || !lname || !dob || !gender || !phone || !course) {
            alert('Please fill in all fields');
            return;
        }

        const user = {
            fname: fname,
            lname: lname,
            dob: dob,
            gender: gender,
            phone: phone,
            course: course
        };
        localStorage.setItem("user", JSON.stringify(user));
         window.location.href = "display.html";
    });
});
