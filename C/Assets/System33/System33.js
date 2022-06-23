console.log("Hello World!")
setTimeout(function(){
    var sound = document.getElementById("StartupSound").cloneNode(true)
    sound.play();
}, 5000)


function SystemFunction(Identifiant) {

    if (Identifiant == 1) {
        console.log("Version: Pre-Alpha 1.0.4");
    }

    if (Identifiant == 10) {
        const StartMenu = document.getElementById("StartMenu")
        if (StartMenu.style.visibility === "hidden") {
            StartMenu.style.visibility = "visible"
            //console.log("Opened Start Menu") //Was used for testing
        } else {
            StartMenu.style.visibility = "Hidden"
            //console.log("Closed Start Menu") //Was used for testing
        }
        
        
    }
    if (Identifiant == 11) {
        CreateWindow("250px", "Restating Windows", "WRestart", false, false, false, false, " Restarting Windows Redkydudash", "information", false, false, null, 1, false)
        setTimeout(function(){document.location.reload(true)}, 500)
    }
}

// window.addEventListener('click', function(e){   
//     if (document.getElementById('StartButton').contains(e.target)){
//         const StartMenu = document.getElementById("StartMenu")
//         StartMenu.style.visibility = "visible"
//         //console.log("Opened Start Menu") //Was used for testing
//     } else{
//         const StartMenu = document.getElementById("StartMenu")
//         StartMenu.style.visibility = "Hidden"
//         //console.log("Closed Start Menu") //Was used for testing
//     }
//   });

function OpenApp(App) {
    if (App === 1) {
        if (document.getElementById("CreditNotepad") === null) {
            CreateIFrameWindow("400px", "300px", "Notepad", "CreditNotepad", true, false, false, false, "C/Assets/Programs/credits.html", false, false)
        }
    }
    if (App === 5) {
        if (document.getElementById("ColorPicker") === null) {
            CreateIFrameWindow("200px", "200px", "Color Picker", "ColorPicker", true, false, false, true, "C/Assets/Programs/colorpicker.html", false, false)
        }
    }
    if (App === "Prank1") {
        for (let i = 0; i < 12; i++) {
            setTimeout(function(){CreateWindow("250px", "PrankError", "Error", true, false, false, false, "This is a spam error", "error", (Math.round(Math.random()) * 2.5 - 2)*(Math.random()*300) +"px", (Math.round(Math.random()) * 2.1 - 1)*(Math.random()*300) +"px", "Close", 1, true)},i*100*i/10)
        }
    }
}

function Execute(Progarm){
    if (Progarm == "CloseAllWindows") {
        CreateWindow("350px", "CloseAllWindowsWindow", "Close all windows", true, false, false, false, "Are you shure?", "question", false, false, "Yes", 10, true)
    }
}

// Create a window
function CreateWindow(Width, Id, Title, HasCloseButton, HasMinimizeButton, HasMaximizeButton, HasHelpButton, BodyText, MessageIcon, MarginLeft, MarginTop, Button1, Button1Function, PlaySound) {
    const RWindow = document.createElement("div") // Window Tab
    RWindow.className = 'window centerxy'
    RWindow.style.width = Width
    RWindow.id = Id
    RWindow.style.position = "absolute"         
    if (MarginTop !== false || MarginTop !== null) {
        RWindow.style.marginTop=MarginTop;            
    }
    if (MarginLeft !== false || MarginLeft !== null) {
        RWindow.style.marginLeft=MarginLeft;            
    }      
    const RWindowTitleBar = document.createElement("div") // Window Title
    RWindowTitleBar.className = "title-bar"
    RWindow.appendChild(RWindowTitleBar)
    const RWindowTitleText = document.createElement("div")
    RWindowTitleText.insertAdjacentText("afterbegin", Title)
    RWindowTitleText.className = "title-bar-text"
    RWindowTitleBar.appendChild(RWindowTitleText)
    const RWindowTitleControls = document.createElement("div")
    RWindowTitleControls.className = "title-bar-controls"
    RWindowTitleBar.appendChild(RWindowTitleControls)
    if (HasHelpButton == true) {
        const RWindowHelpButton = document.createElement("button")
        RWindowHelpButton.ariaLabel = "Help"
        RWindowTitleControls.appendChild(RWindowHelpButton)
    }
    if (HasMinimizeButton == true) {
        const RWindowMinimizeButton = document.createElement("button")
        RWindowMinimizeButton.ariaLabel = "Minimize"
        RWindowTitleControls.appendChild(RWindowMinimizeButton)
    }
    if (HasMaximizeButton == true) {
        const RWindowMaximizeButton = document.createElement("button")
        RWindowMaximizeButton.ariaLabel = "Maximize"
        RWindowTitleControls.appendChild(RWindowMaximizeButton)
    }
    if (HasCloseButton == true) {
        const RWindowCloseButton = document.createElement("button")
        RWindowCloseButton.ariaLabel = "Close"
        RWindowTitleControls.appendChild(RWindowCloseButton)
        RWindowCloseButton.onclick = function(){RWindow.remove()}
    }
    const RWindowBody = document.createElement("div")
    RWindowBody.className = "window-body"
    RWindow.appendChild(RWindowBody)
    if (MessageIcon !== null) {
        const RWindowBodyIcon = document.createElement("img")
        RWindowBodyIcon.style.float = "left"
        RWindowBodyIcon.draggable = false
        if (MessageIcon === "error") {
            RWindowBodyIcon.src = "C/Assets/System33/Icons/WinRedkyExclusif/error.png"
            RWindowBodyIcon.alt = "Error"
            console.error(BodyText);
        }
        if (MessageIcon === "information") {
            RWindowBodyIcon.src = "C/Assets/System33/Icons/WinRedkyExclusif/info.png"
            RWindowBodyIcon.alt = "Information"
        }
        if (MessageIcon === "question") {
            RWindowBodyIcon.src = "C/Assets/System33/Icons/WinRedkyExclusif/question.png"
            RWindowBodyIcon.alt = "Question"
        }
        if (MessageIcon === "warning") {
            RWindowBodyIcon.src = "C/Assets/System33/Icons/WinRedkyExclusif/warning.png"
            RWindowBodyIcon.alt = "Warning"
            console.warn(BodyText)
        }
        
        RWindowBody.appendChild(RWindowBodyIcon)
    }
    const RWindowBodyText = document.createElement("p")
    RWindowBodyText.textContent = BodyText
    RWindowBody.appendChild(RWindowBodyText)
    if (Button1 !== null) {
        const RWindowBodyButton1 = document.createElement("button")
        RWindowBodyButton1.textContent = Button1
        RWindowBodyButton1.style.marginLeft = "25%"
        if (Button1Function === 1) {
            RWindowBodyButton1.onclick = function(){RWindow.remove()}
        } else if (Button1Function === 10) {
            RWindowBodyButton1.onclick = function(){RWindow.remove()
                const windows = document.querySelectorAll('.window')
                windows.forEach(window => {
                    window.remove()
                })}
            
        }

        RWindowBody.appendChild(RWindowBodyButton1)
    }
    //dragElement(RWindow)
    document.body.appendChild(RWindow)
    if (PlaySound === true) {
        if (MessageIcon == "error") {
            var sound = document.getElementById("CritialErrorSound").cloneNode(true)
            sound.play();
        } else if (MessageIcon == "information") {
            var sound = document.getElementById("ExclamationSound").cloneNode(true)
            sound.play();
        } else if (MessageIcon == "question") {
            var sound = document.getElementById("ExclamationSound").cloneNode(true)
            sound.play();
        } else if (MessageIcon == "warning") {
            var sound = document.getElementById("ErrorSound").cloneNode(true)
            sound.play();
        }
    }
}

// Create IFrame Window
function CreateIFrameWindow(Width, Height, Title, Id, HasCloseButton, HasMinimizeButton, HasMaximizeButton, HasHelpButton, IFrame, MarginLeft, MarginTop) {
    const RWindow = document.createElement("div") // Window Tab
    RWindow.className = 'window'
    RWindow.style.width = Width
    RWindow.style.height = Height
    RWindow.id = Id
    RWindow.style.position = "absolute"         
    if (MarginTop !== false || MarginTop !== null) {
        RWindow.style.marginTop=MarginTop;            
    }
    if (MarginLeft !== false || MarginLeft !== null) {
        RWindow.style.marginLeft=MarginLeft;            
    }      
    const RWindowTitleBar = document.createElement("div") // Window Title
    RWindowTitleBar.className = "title-bar"
    RWindow.appendChild(RWindowTitleBar)
    const RWindowTitleText = document.createElement("div")
    RWindowTitleText.insertAdjacentText("afterbegin", Title)
    RWindowTitleText.className = "title-bar-text"
    RWindowTitleBar.appendChild(RWindowTitleText)
    const RWindowTitleControls = document.createElement("div")
    RWindowTitleControls.className = "title-bar-controls"
    RWindowTitleBar.appendChild(RWindowTitleControls)
    if (HasHelpButton == true) {
        const RWindowHelpButton = document.createElement("button")
        RWindowHelpButton.ariaLabel = "Help"
        RWindowTitleControls.appendChild(RWindowHelpButton)
    }
    if (HasMinimizeButton == true) {
        const RWindowMinimizeButton = document.createElement("button")
        RWindowMinimizeButton.ariaLabel = "Minimize"
        RWindowTitleControls.appendChild(RWindowMinimizeButton)
    }
    if (HasMaximizeButton == true) {
        const RWindowMaximizeButton = document.createElement("button")
        RWindowMaximizeButton.ariaLabel = "Maximize"
        RWindowTitleControls.appendChild(RWindowMaximizeButton)
    }
    if (HasCloseButton == true) {
        const RWindowCloseButton = document.createElement("button")
        RWindowCloseButton.ariaLabel = "Close"
        RWindowTitleControls.appendChild(RWindowCloseButton)
        RWindowCloseButton.onclick = function(){RWindow.remove()}
    }
    const RWindowBody = document.createElement("div")
    RWindowBody.className = "window-body"
    RWindowBody.style.height = Height-(Height/2)+"px"
    RWindow.appendChild(RWindowBody)
    const RWindowBodyIFrame = document.createElement("iframe")
    RWindowBody.appendChild(RWindowBodyIFrame)
    //dragElement(RWindow)
    document.body.appendChild(RWindow)
    RWindowBodyIFrame.src = IFrame
    RWindowBodyIFrame.height = "100%"
    RWindowBodyIFrame.width = "100%"

}

// Draggable Elements

// Finish

console.log("System 33 Ready!")