export default () => {
    const view = `
      
       <img id ="logo-home" src="/src/img/logo-BluePink.png" alt="logo">
       
       <div class="homeContainer-desktop">
        <img id ="main-img" src="/src/img/doggie.gif" alt="dog-friend">
        </div>
        <div class="homeContainer-mobile">   
        <button id="start" class="appStartbtn btn">Ingresar</button>
         <img id="mobileMain-img" src= "/src/img/Home-mobile.svg">
         </div> `;

    const nav = document.getElementById("headerNav")
    nav.style.display = "block";

    const divElement = document.createElement(`div`);
    divElement.innerHTML = view;

    const buttonStartApp = divElement.querySelector("#start")
    buttonStartApp.addEventListener("click",userLoginAccount)
   
    function userLoginAccount(){
        window.location.hash = "#/login";
    }

    return divElement;
}