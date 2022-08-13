var resume=[{"Name":"Iswarya A",
             "qualification":"B.E Computer Science Engineering",
             "email":"aishwariyaanandhan@gmail.com",
             "Gender": "Female",
             "DOB": "22.12.1996",
             "College":"V.R.S. College of Engineering and Technology",
             "Martial Status": "Married",
             "Experience":"Fresher",
             "Address":"Chennai",
             "CGPA": "8",
             "Domain":"MERN Full stack development",
             "Hobbies":"Hand Crafting,Designing dress"}];

console.log(resume); // Resume Data in Object Format

resume.forEach(function() 
{
    console.log(JSON.stringify(resume)); // Resume Data in JSON Format
});