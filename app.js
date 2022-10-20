let stateSwitch = false;

let switchMode = () => {
    let element = document.body;
    let icon = document.getElementById('darkmode-btn');
    
    element.classList.toggle("dark-mode");

    stateSwitch
    ? (icon.innerHTML = "dark_mode", stateSwitch = false)
    : (icon.innerHTML = "light_mode", stateSwitch = true)
}