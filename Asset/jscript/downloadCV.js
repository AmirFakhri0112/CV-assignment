const downloadBtn = document.querySelector(".downloadbtn");

downloadBtn.addEventListener("click" , () =>{
    print();
})

function darkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}