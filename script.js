// Add JavaScript code for your web site here and call it from index.html.
const main = document.body
const switch_button = document.getElementById("DM")

const switch_mode = () =>{
    if(switch_button.innerText=="Dark Mode"){
    main.style.background = 'black';
    main.style.color = 'white'
    switch_button.innerText="Light Mode";
    // Explicitly set the button styles to make sure the border doesn't disappear
    switch_button.style.border = "2px double greenyellow";  // Ensure border stays visible in light mode
    switch_button.style.outline = "none";  // Remove any default outline
    switch_button.style.backgroundColor = "white";  // Ensure no conflicting background
    switch_button.style.color = "black";  // Set button text color for light mode
}else if(switch_button.innerText=="Light Mode"){
    main.style.background = 'lightgreen';
    main.style.color = 'black'
    switch_button.innerText="Dark Mode";
    switch_button.style.border = "2px double greenyellow";  // Ensure border stays visible in dark mode
    switch_button.style.outline = "none";  // Remove any default outline
    switch_button.style.backgroundColor = "white";  // Ensure no conflicting background
    switch_button.style.color = "black";  // Set button text color for dark mode
}
}
switch_button.addEventListener("click",switch_mode);
// Add your query for the sign now button here
const signNowButton = document.getElementById("sign-now-button");

const addSignature = (person) => {
    // Write your code to manipulate the DOM here
   const new_count = document.getElementById("counter")
   const Nsig = document.getElementById("yoursig");
   Nsig.textContent = `🖊️ ${person.name} from ${person.hometown} supports this.`
   count = count + 1;
    new_count.textContent= `🖊️ ${count} people have signed this petition and support this cause.`
}

let count = 3;
// Add a click event listener to the sign now button here
// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form

const validateForm = () => {

    let containsErrors = false;
    var petitionInputs = document.getElementById("sign-petition").elements;

    let person={
        name: petitionInputs[0].value,
        hometown: petitionInputs[1].value,
        email: petitionInputs[2].value
    }
    // TODO: Validate the value of each input
    if(person.name.length < 2){
        containsErrors=true;
        petitionInputs[0].classList.add('error');
    }
    else{
        petitionInputs[0].classList.remove('error')
    }

    if(person.hometown.length < 2){
        containsErrors=true;
        petitionInputs[1].classList.add('error');
    }
    else{
        petitionInputs[1].classList.remove('error')
    }
    if(person.email.length < 2){
        containsErrors=true;
        petitionInputs[2].classList.add('error');
    }
    else{
        petitionInputs[2].classList.remove('error')
    }
    
    // TODO: Call addSignature() and clear fields if no errors
    if(containsErrors==false){
        addSignature(person);
        toggleModal(person)
        
        containsErrors = false;
    }
    
    
  
  
  
    
  
  }
  
  signNowButton.addEventListener('click', validateForm);
  let animation = {
    revealDistance: 150,
    initialOpacity:0,
    transitionDelay:0,
    transitionDuration:'2s',
    transitionProperty:'all',
    transitionTimingFunction:'ease',
  }
  let revealableContainers = document.querySelectorAll(".revealable")
  const reveal = () =>{
    for(i = 0 ;i<revealableContainers.length;i++){
        let windowHeight = window.innerHeight;
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
        if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
            /* add the active class to the revealableContainer's classlist */
            revealableContainers[i].classList.add('active');
            
        } 
        else {
            /* remove the active class to the revealableContainer's classlist */
            revealableContainers[i].classList.remove('active');
    }       
          }
  }
  window.addEventListener('scroll',reveal)
  reveal();
  const toggleModal=(person)=>{
    
    modal=document.getElementById("thanks-modal")
    modalContent = document.getElementById("thanks-modal-content")
    modal.style.display = "flex";
    modalContent.textContent = `Thank you ${person.name}!${person.hometown} representative!`
    setTimeout(() => {
        modal.style.display = "none";
        clearInterval(intervalid)
      }, 4000)
    intervalid = setInterval(ScaleImage,500)
  }
  ScaleFactor =1
  modalImage = document.getElementById('popup')
  ScaleImage=()=>{
    if(ScaleFactor==1){
        ScaleFactor=0.8
    }
    else{
        ScaleFactor=1
    }
    modalImage.style.transform = `scale(${ScaleFactor})`
  }