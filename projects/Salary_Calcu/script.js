document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault();
    const basicSalary =document.getElementById("basicSalary").value;
    const har=basicSalary*0.2;
    const da=basicSalary *0.8;
    const grossSalery=Number(basicSalary)+ Number(har)+Number(da);
    document.getElementById("basicSalary").value="";

    document.getElementById("Bs").innerText=basicSalary +" ₹";
    document.getElementById("Har").innerText=basicSalary*0.2 +" ₹";
    document.getElementById("Da").innerText=basicSalary *0.8 +" ₹";
    document.getElementById("Gs").innerText=grossSalery +" ₹";


});