console.log("Hello World!")

// Functions needed
function sleep(ms) {    // Remember, use it only in async functions
    return new Promise(res => setTimeout(res, ms));
  }
function wait(seconds) {  // Used for normal waiting
    const date = Date.now();
    let currentDate = null;
    var milliseconds = seconds*1000
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
//

setTimeout(function(){
    var element = document.getElementById("bootscreen")
    if(typeof(element) != 'undefined' && element != null){
        var sound = document.getElementById("StartupSound").cloneNode(true)
        sound.play();
    }
}, 5000)

setInterval(function () {$( ".window" ).draggable();}, 1000);

function SystemFunction(Identifiant) {

    if (Identifiant == 1) {
        console.log("Version: Pre-Alpha 1.0.5");
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
        async function reboot() {
            CreateWindow("200px", "Restating Windows", "WRestart", false, false, false, false, " Restarting Windows Redkydudash", "information", false, false, null, 0, null, 0, false)
            await sleep(500);
            document.location.reload(true)
        }
        reboot()
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
            const RWindow = document.createElement("div") // Window Tab
    RWindow.className = 'window'
    RWindow.style.width = "200px"
    RWindow.style.height = "200px"
    RWindow.id = "ColorPickerApp"
    RWindow.style.position = "absolute"         
    const RWindowTitleBar = document.createElement("div") // Window Title
    RWindowTitleBar.className = "title-bar"
    RWindow.appendChild(RWindowTitleBar)
    const RWindowTitleText = document.createElement("div")
    RWindowTitleText.insertAdjacentText("afterbegin", "Color Picker")
    RWindowTitleText.className = "title-bar-text"
    RWindowTitleBar.appendChild(RWindowTitleText)
    const RWindowTitleControls = document.createElement("div")
    RWindowTitleControls.className = "title-bar-controls"
    RWindowTitleBar.appendChild(RWindowTitleControls)
        const RWindowHelpButton = document.createElement("button")
        RWindowHelpButton.ariaLabel = "Help"
        RWindowTitleControls.appendChild(RWindowHelpButton)
        const RWindowCloseButton = document.createElement("button")
        RWindowCloseButton.ariaLabel = "Close"
        RWindowTitleControls.appendChild(RWindowCloseButton)
        RWindowCloseButton.onclick = function(){RWindow.remove()}
    const RWindowBody = document.createElement("div")
    RWindowBody.className = "window-body"
    RWindowBody.style.height = "80%"
    RWindow.appendChild(RWindowBody)
    const RWindowBodyIFrame = document.createElement("iframe")
    RWindowBody.appendChild(RWindowBodyIFrame)
    //dragElement(RWindow)
    document.body.appendChild(RWindow)
    RWindowBodyIFrame.src = "C/Assets/Programs/colorpicker.html"
    RWindowBodyIFrame.height = "100%"
    RWindowBodyIFrame.width = "100%"
        }
    }
    if (App === 'clock') {
        if (document.getElementById("Clock") === null) {
            CreateIFrameWindow("300px", "300px", "Clock", "ClockWindow", true, false, false, false, "C/Assets/Programs/clock.html", false, false)
        }
    }
    if (App === 'websitebrowser') {
        if (document.getElementById("WebsiteBrowser") === null) {
            const RWindow = document.createElement("div") // Window Tab
            RWindow.className = 'window'
            RWindow.style.width = "1025px"
            RWindow.style.height = "600px"
            RWindow.id = "WebsiteBrowser"
            RWindow.style.position = "absolute"         
            const RWindowTitleBar = document.createElement("div") // Window Title
            RWindowTitleBar.className = "title-bar"
            RWindow.appendChild(RWindowTitleBar)
            const RWindowTitleText = document.createElement("div")
            RWindowTitleText.insertAdjacentText("afterbegin", "Website Browser")
            RWindowTitleText.className = "title-bar-text"
            RWindowTitleBar.appendChild(RWindowTitleText)
            const RWindowTitleControls = document.createElement("div")
            RWindowTitleControls.className = "title-bar-controls"
            RWindowTitleBar.appendChild(RWindowTitleControls)
                // const RWindowHelpButton = document.createElement("button")
                // RWindowHelpButton.ariaLabel = "Help"
                // RWindowTitleControls.appendChild(RWindowHelpButton)
                // const RWindowMinimizeButton = document.createElement("button")
                // RWindowMinimizeButton.ariaLabel = "Minimize"
                // RWindowTitleControls.appendChild(RWindowMinimizeButton)
                // const RWindowMaximizeButton = document.createElement("button")
                // RWindowMaximizeButton.ariaLabel = "Maximize"
                // RWindowTitleControls.appendChild(RWindowMaximizeButton)
                const RWindowCloseButton = document.createElement("button")
                RWindowCloseButton.ariaLabel = "Close"
                RWindowTitleControls.appendChild(RWindowCloseButton)
                RWindowCloseButton.onclick = function(){RWindow.remove()}
            const RWindowBody = document.createElement("div")
            RWindowBody.className = "window-body"
            RWindowBody.style.height = "88%"
            RWindow.appendChild(RWindowBody)
            const RWindowBodyIFrame = document.createElement("iframe")
            //dragElement(RWindow)
            document.body.appendChild(RWindow)
            RWindowBodyIFrame.src = "https://www.dogpile.com/"
            RWindowBodyIFrame.height = "100%";
            RWindowBodyIFrame.width = "1000";
            RWindowBodyIFrame.style.overflow = "auto";
            const RWindowBodyIFrameSearchBar = document.createElement("input");
            RWindowBodyIFrameSearchBar.setAttribute("type", "text");
            RWindowBodyIFrameSearchBar.size = 182.5;
            RWindowBody.appendChild(RWindowBodyIFrameSearchBar);
            const RWindowBodyIFrameSearchBarButton = document.createElement("button");
            RWindowBodyIFrameSearchBarButton.textContent = "Search";
            RWindowBody.appendChild(RWindowBodyIFrameSearchBarButton);
            RWindowBody.appendChild(RWindowBodyIFrame);
            RWindowBodyIFrameSearchBarButton.onclick = function(){
            var input = RWindowBodyIFrameSearchBar.value
            
            if(input.match(/\bhttp(.)*/)) {
                RWindowBodyIFrame.src = input;
            } else {
                input = "http://" + input;
                RWindowBodyIFrame.src = input;
            }   
            }
        }
    }
    if (App === "Prank1") {
        for (let i = 0; i < 12; i++) {
            setTimeout(function(){CreateWindow("250px", "PrankError", "Error", true, false, false, false, "This is a spam error", "error", (Math.round(Math.random()) * 2.5 - 2)*(Math.random()*300) +"px", (Math.round(Math.random()) * 2.1 - 1)*(Math.random()*300) +"px", "Close", 1, null, 0, true)},i*100*i/10)
        }
    }
}

function Execute(Progarm){
    if (Progarm == "CloseAllWindows") {
        CreateWindow("350px", "CloseAllWindowsWindow", "Close all windows", true, false, false, false, "Are you shure?", "question", false, false, "Yes", 10, "No", 1, true)
    }
}

// Create a window
function CreateWindow(Width, Id, Title, HasCloseButton, HasMinimizeButton, HasMaximizeButton, HasHelpButton, BodyText, MessageIcon, MarginLeft, MarginTop, Button1, Button1Function, Button2, Button2Function, PlaySound) {
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
    if (Button2 !== null) {
        const RWindowBodyButton2 = document.createElement("button")
        RWindowBodyButton2.textContent = Button2
        RWindowBodyButton2.style.marginLeft = "5%"
        if (Button2Function === 1) {
            RWindowBodyButton2.onclick = function(){RWindow.remove()}
        } else if (Button2Function === 10) {
            RWindowBodyButton2.onclick = function(){RWindow.remove()
                const windows = document.querySelectorAll('.window')
                windows.forEach(window => {
                    window.remove()
                })}
            
        }

        RWindowBody.appendChild(RWindowBodyButton2)
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
    RWindowBody.style.height = "85%"
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