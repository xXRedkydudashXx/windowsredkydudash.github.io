console.log("Hello World!")

function SystemFunction(Identifiant) {
    if (Identifiant == 10) {
        const StartMenu = document.getElementById("StartMenu");
        if (StartMenu.style.visibility === "hidden") {
            StartMenu.style.visibility = "visible";
            //console.log("Opened Start Menu"); //Was used for testing
        } else {
            StartMenu.style.visibility = "Hidden";
            //console.log("Closed Start Menu"); //Was used for testing
        }
        
        
    }
}

function OpenApp(App) {
    if (App === 1) {
        const CreditWindow = document.createElement("div"); // Window
        CreditWindow.className = "window";
        CreditWindow.style.width = "250px";
        CreditWindow.style.marginLeft= "auto";
        CreditWindow.style.marginRight= "auto";
        document.body.appendChild(CreditWindow)
        const CreditWindowTitle = document.createElement("div"); // Title
        CreditWindowTitle.className = "title-bar";
        CreditWindow.appendChild(CreditWindowTitle)
        const CreditWindowTitleText = document.createElement("div"); // Title's Texts
        CreditWindowTitleText.className = "title-bar-text";
        CreditWindowTitleText.insertAdjacentText("afterbegin", "Hello");
        CreditWindowTitle.appendChild(CreditWindowTitleText)
        CreditWindow.appendChild(CreditWindowTitle)
        const CreditWindowTitleControls = document.createElement("div"); // Title's Controls
        CreditWindowTitle.appendChild(CreditWindowTitleControls)
        const CreditWindowTitleControl1 = document.createElement("button"); // Title's Control 1
        CreditWindowTitleControl1.ariaLabel = "Minimize";
        CreditWindowTitleControls.appendChild(CreditWindowTitleControl1)
        const CreditWindowTitleControl2 = document.createElement("button"); // Title's Control 2
        CreditWindowTitleControl2.ariaLabel = "Maximize";
        CreditWindowTitleControls.appendChild(CreditWindowTitleControl2)
        const CreditWindowTitleControl3 = document.createElement("button"); // Title's Control 3
        CreditWindowTitleControl3.ariaLabel = "Close";
        CreditWindowTitleControls.appendChild(CreditWindowTitleControl3)
    }
}