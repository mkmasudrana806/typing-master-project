const ClearButton = (status) => {
  const button = document.getElementById('btn-clear-history');
  if(status){
    button.style.display='block';
  }else{
    button.style.display = 'none';
  }
}

// //find histories history length
// const getHistoriesLength = () => {
//   const checkHistoryExit = document.querySelectorAll('#histories .card');
// const length = checkHistoryExit.length;
// return length;
// }

// //this function will call when need to button show and hide
// const buttonManage = () => {
//   const clearHistoryButton = document.getElementById('btn-clear-history');
//   const length = getHistoriesLength();
//   if(length==0){
//     console.log('if block work for none')
//   clearHistoryButton.style.display = 'none';
// }
// else{
//   console.log('else block work for block');
//   clearHistoryButton.style.display = 'block';
// }
// }
// buttonManage();

//by default button will show
// const clearHistoryButton = document.getElementById('btn-clear-history');
// clearHistoryButton.style.display='block';

// //   // after display history 
//   const length = getHistoriesLength();
// const clearHistoryButton = document.getElementById('btn-clear-history');
// if(length==0){
//   console.log('length in the none block', length);
//   clearHistoryButton.style.display = 'none';
// }
// else{
//   console.log('length in the else block', length);
//   clearHistoryButton.style.display = 'block';
// }

// const data = () => {
//   const check = localStorage.getItem('testHistory');
//   const clearHistoryButton = document.getElementById('btn-clear-history');
//   if(check===null){
//     console.log(check);
// clearHistoryButton.style.display='none';
//   }
//   else{
//     console.log(check);
//     clearHistoryButton.style.display='block';
//   }
// }
// data();

// const check = localStorage.getItem('testHistory');
//   const clearHistoryButton = document.getElementById('btn-clear-history');
//   if(check===null){
//     console.log(check);
// clearHistoryButton.style.display='none';
//   }
  // else{
  //   console.log(check);
  //   clearHistoryButton.style.display='block';
  // }
// histories added
const histories = document.getElementById("histories");
function addHistory(questionText, timeTaken, errorCount) {
  const newRow = document.createElement("div");
  newRow.classList.add("card");

  newRow.innerHTML = `
  <h3>${questionText}</h3>
  <div>
  <p>You took: <span class="bold">${timeTaken}</span> seconds</p>
  <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
  </div>
  `;

  histories.appendChild(newRow);

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.push({ questionText, timeTaken, errorCount });
  localStorage.setItem("testHistory", JSON.stringify(previousTests));
  // const clearHistoryButton = document.getElementById('btn-clear-history');
  // clearHistoryButton.style.display= 'block';
  displayHistory();
//   // after display history 
//   const length = getHistoriesLength();
// if(length==0){
//   console.log('length in the none block', length);
//   clearHistoryButton.style.display = 'none';
// }
// else{
//   console.log('length in the else block', length);
//   clearHistoryButton.style.display = 'block';
// }

}

function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    newRow.classList.add("card");

    newRow.innerHTML = `
  <h3>${test.questionText}</h3>
  <p>You took: <span class="bold">${test.timeTaken}</span> seconds</p>
    <p>You made <span class="bold red">${test.errorCount}</span> mistakes</p>
  `;

    histories.appendChild(newRow);
  });
}


// clear histy button will delete the all histories
document.getElementById('btn-clear-history').addEventListener('click', function(){
  const historiesDiv = document.getElementById('histories');
  historiesDiv.textContent='';
 localStorage.clear();
 const clearButton = document.getElementById('btn-clear-history');
 clearButton.style.display='none';
})



