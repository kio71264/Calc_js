
let date = new Date()
let days=[];
let titleName;
let startTime;
let endTime;
let descrip;
var val1;
var val2;
var val3;
var val4;
let calendar = ()=>{
    document.querySelector(".date").innerHTML=date.toDateString();
    //to dis month
    let month = ["January","Febuary","March","April","May","June","July","August",
    "September","October","November","December"]
    document.querySelector(".mnth").innerHTML=month[date.getMonth()];
    //TO DISP YEAR
    document.querySelector(".yr").innerHTML=date.getUTCFullYear();
    let lastDyPrvMnth = new Date(date.getFullYear(),date.getMonth(),0).getDate()
    //to place the current month 1st date on correct weekday 
    let monthdays =document.querySelector(".day");
    date.setDate(1);
    let firstDay = date.getDay();
    
    for(let j=firstDay;j>1;j-- ){
        days.push(`<div class="lastMnDt task">${lastDyPrvMnth-j+2}</div>`) 
    }
    // to disp current mnth days
    let getNoOfDays = new Date(date.getFullYear(),date.getMonth()+1,0).getDate()
    for(let i=1 ; i<=getNoOfDays; i++){
        if(i===new Date().getDate()){
            days.push(`<div id="addEv" class="today task">${i}</div>`)
        }
        else{
            days.push(`<div class="task">${i}</div>`)
        }
    }
    let lastDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDay()
    var nxtDays = 7-lastDay;
    
    for(let k=1;k<=nxtDays;k++){
        days.push(`<div class="nxtMnDt task">${k}</div>`)
       monthdays.innerHTML=days
    }

}
//up arrow
document.querySelector(".up").addEventListener('click',function()
{
    date.setMonth(date.getMonth()-1);
    days=[];
    calendar();
})

//down-arrow
document.querySelector(".down").addEventListener('click',()=>
{
    date.setMonth(date.getMonth()+1);
    days=[];
    calendar();
})

calendar();

//add event
let modal = document.getElementById("myModal");
document.querySelector("#event").addEventListener('click',(btn)=>{
 
   btn = document.getElementById("event");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
      modal.style.display = "block";
    }
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
})
//save button
function saveTask(){
  startTime = document.getElementById("ip2").value
  titleName = document.getElementById("ip1").value
  endTime = document.getElementById("ip3").value
  descrip = document.getElementById("ip4").value
document.getElementById("disTask").innerHTML =`<i class="far fa-clock text-warning"></i>  ${startTime} [${titleName}] <br><i class="fas fa-align-left text-info"></i>  ${descrip}`
modal.style.display = "none";
}
//discard button
function discardModal(){
  modal.style.display = "none";
}

//EDIT disabled box
let editModal;
document.querySelector("#disTask").addEventListener('click',(e)=>{
  var xx=  `<div class="head" id="kio">
  <span class="close">&times;</span>
</div>
<div class="center">
  <input type="text" class="py-2" readonly  id="disabled" value="${titleName}"/> 
  <div class="my-2">
      <i class="fas fa-user-clock"></i>
      <input type="time" readonly id="disabled" value="${startTime}"> to
      <input type="time" class="mx-2" readonly id="disabled" value="${endTime}">     
  </div>
  <div class="my-2 py-2">
      <i class="fas fa-align-left"></i>
      <input type="text" readonly id="disabled" value="${descrip}">
  </div>
</div>
<div class="foot px-2">
  <button type="button" id="write" onclick="editBox()" class="btn btn-warning">edit</button>
  <button type="button" class="btn btn-danger" onclick="deleteTask()">Delete</button>    
</div>`

  editModal = document.getElementById("Modal2");
    e = document.getElementById('disTask')
      var spanEle = document.getElementsByClassName("close")[0];
      e.onclick = function() {
        editModal.style.display = "block";
        editModal.innerHTML=xx
      }
      spanEle.onclick = function() {
        editModal.style.display = "none";
      }

})
//delete button
function deleteTask(){
  document.getElementById("disTask").innerHTML=""
  editModal.style.display = "none";
}

///edit enabled box
function editBox(){
    var x =
    `<div class="head">
    <span class="close">&times;</span>
    </div>
    <div class="center ">
        <div class="sty">
            <i class="fas fa-plus-circle"></i>
            <input type="text" class="py-2" id="enabled  data1" value=""/> 
        </div>
        <div class="sty">
            <i class="fas fa-user-clock"></i>
            <input type="time"  id="enabled data2" value=""> 
            <input type="time"  id="enabled data3"  value="">     
        </div>
        <div class="sty">
            <i class="fas fa-align-left"></i>
            <input type="text"  id="enabled  data4" value="">
        </div>
  </div>
  <div class="foot">
    <button type="button" id="update" onclick="updateTask()" class="btn btn-success float-end mx-3">Update</button>    
</div>`
 document.getElementById("Modal2").innerHTML=x
}
//update button
function updateTask(){
   val1 = document.querySelector("#enabled\\ \\ data1").value ;
    val2=document.querySelector("#enabled\\ data2").value ;
    val3=document.querySelector("#enabled\\ data3").value;
    val4=document.querySelector("#enabled\\ \\ data4").value ;
   document.getElementById("disTask").innerHTML =`<i class="far fa-clock text-warning"></i>  ${val2} ${val1} <br> <i class="fas fa-align-left text-info"></i>  ${val4}`
   editModal.style.display = "none";
}


