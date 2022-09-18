console.log("Hello World!")
// import settings from './example.json' assert {type: 'json'};
// console.log(settings);
CurrVersion = "Pre-Alpha 1.0.9"

// Functions needed
function sleep(ms) {    // Remember, use it only in async functions
    return new Promise(res => setTimeout(res, ms));
}
// async function wait(seconds) {
//     await sleep(seconds*1000)
// }
function RandomInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function color4(r,g,b,a) {  // Who will use it?
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
    a = Math.round(a * 255).toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
    if (a.length == 1)
      a = "0" + a;
  
    return "#" + r + g + b + a;
}
function setIntervalX(callback, delay, repetitions) {   // Faster way to do it
    var x = 0;
    var intervalID = window.setInterval(function () {

       callback();

       if (++x === repetitions) {
           window.clearInterval(intervalID);
       }
    }, delay);
}

function AddElementToBody(element) {    // Faster way to do it
    document.body.appendChild(element)
}

// function AddElementTo(element1, element2) {    // Faster way to do it
//     element1.appendChild(element2)
// }        // He has an unknown problem so for now we can't use it

function AddText(text, tclass, tid) {
    var p = document.createElement("p")
    p.innerHTML = text
    if (tclass !== null) {
        p.classList = tclass
    }
    if (tid !== null) {
        p.id = tid
    }
    return p
}

function AddWhiteText(text, tclass, tid) {
    var p = document.createElement("p")
    p.innerHTML = text
    if (tclass !== null) {
        p.classList = tclass
    }
    if (tid !== null) {
        p.id = tid
    }
    p.style.color = "white"
    return p
}
/**
 * Toggle fullscreen function who work with webkit and firefox.
 * @function toggleFullscreen
 * @param {Object} event
 */
 function $fullscreen(event) {
    var element = document.body;
  
      if (event instanceof HTMLElement) {
          element = event;
      }
  
      var isFullscreen = document.webkitIsFullScreen || document.mozFullScreen || false;
  
      element.requestFullScreen = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || function () { return false; };
      document.cancelFullScreen = document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || function () { return false; };
  
      isFullscreen ? document.cancelFullScreen() : element.requestFullScreen();
  }
  function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
// End Functions needed


setTimeout(function(){
    var element = document.getElementById("bootscreen")
    if(typeof(element) != 'undefined' && element != null){
        var sound = document.getElementById("StartupSound").cloneNode(true)
        sound.play();
    }
    // Little beta/alpha info:
    setTimeout(() => {
        $Notify("Information","The website is still in alpha/beta stat") 
    }, 5000);
}, 5000)
setInterval(function () {$( ".window" ).draggable();}, 1000);

async function SystemFunction(Identifiant) {

    if (Identifiant == 1) {
        console.log("Version: "+CurrVersion);
    }

    if (Identifiant == 2) {
        var Window = $MakeWindow("250px", "150px", "run", "Run", true, false, false, true, "-47.5%", "5%")
        var WindowBody = Window.querySelector(".window-body")
        var WindowHelp = Window.querySelector('[aria-label="Help"]')
        WindowHelp.setAttribute("enabled", "true")
        WindowHelp.onclick = async function(){
            if (WindowHelp.getAttribute("enabled") == "true") {
                WindowHelp.setAttribute("enabled", "false")
                $MessageBox(2, "Type the name of a know program and it will be executed. some programs can be executed in different way: \n Website Browser: wbrowser")
                await sleep(2000)
                WindowHelp.setAttribute("enabled", "true")
            } else {

            }
        }
        const Icon = document.createElement("img")
        Icon.style.float = "left"
        Icon.draggable = false
        Icon.src = "C/Assets/System33/Icons/WinRedkyExclusif/info.png"
        Icon.alt = "Information"
        WindowBody.appendChild(Icon)
        var Text = AddText("Type the name of a program or a application, and Windows Redkydudash will open it for you.")
        WindowBody.appendChild(Text)
        var Input = document.createElement("input")
        Input.type = "url"
        Input.size = "40"
        WindowBody.appendChild(Input)
        const WindowButton = document.createElement("button")
        WindowButton.textContent = "OK"
        WindowButton.style.marginLeft = "15.5%"
        WindowButton.onclick = function(){
            //console.log(Input.value)
            if (Input.value === "butterfly") {OpenApp("butterflymenu")}
            else if (Input.value === "wbrowser" & Input.value === "!websitebrowser") {OpenApp("websitebrowser")}

            else {
            OpenApp(Input.value)}
            Window.remove()}
        WindowBody.appendChild(document.createElement("br"))
        WindowBody.appendChild(WindowButton)
        const WindowButton2 = document.createElement("button")
        WindowButton2.textContent = "Cancel"
        WindowButton2.style.marginLeft = "5%"
        WindowButton2.onclick = function(){Window.remove()}
        WindowBody.appendChild(WindowButton2)
        AddElementToBody(Window)
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
            CreateWindow("200px", "Restating Windows", "WRestart", false, false, false, false, " Restarting Windows Redkydudash", "information", false, false, null, 0, null, 0, null, 0, false)
            await sleep(500);
            document.location.reload(true)
        }
        reboot()
    }

}

async function wrdebug(command, value) {
    if (!command) {
        console.log("Debug what?")
    } else {
        if (command === "crash")  {
            document.location.href = "C/Assets/System33/Others/rsod.html"
        }
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

async function OpenApp(App) {
    if (App === 1) {
        CreateIFrameWindow("400px", "300px", "Notepad", "CreditNotepad", true, false, false, false, "C/Assets/Programs/credits.html", false, false)
    }
    if (App === 5) {
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
    if (App === 'clock') {
        if (document.getElementById("Clock") === null) {
            CreateIFrameWindow("300px", "300px", "Clock", "ClockWindow", true, false, false, false, "C/Assets/Programs/clock.html", false, false)
        }
    }
    if (App === 'websitebrowser') {

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
            RWindowBodyIFrame.src = "https://www.gigablast.com" // Can't do better
            RWindowBodyIFrame.height = "100%";
            RWindowBodyIFrame.width = "1000";
            RWindowBodyIFrame.style.overflow = "auto";
            const RWindowBodyIFrameSearchBar = document.createElement("input");
            RWindowBodyIFrameSearchBar.setAttribute("type", "text");
            RWindowBodyIFrameSearchBar.size = 182.5;
            RWindowBody.appendChild(RWindowBodyIFrameSearchBar);
            const RWindowBodyIFrameSearchBarButton = document.createElement("button");
            RWindowBodyIFrameSearchBarButton.textContent = "Search";
            RWindowBodyIFrameSearchBar.type = "search"
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
    if (App === 'butterflymenu') {
        if (document.getElementById("ButterflyMenu") === null) {
            var Window = $MakeWindow("250px", "100px", "ButterflyMenu", "Butterfly", true, false, false, true)
            var WindowBody = Window.querySelector(".window-body")
            var WindowHelp = Window.querySelector('[aria-label="Help"]')
            WindowHelp.setAttribute("enabled", "true")
            WindowHelp.onclick = async function(){
                if (WindowHelp.getAttribute("enabled") == "true") {
                    WindowHelp.setAttribute("enabled", "false")
                    $MessageBox(2, "Butterfly allows you to create butterflys on the desktop. Thoses butterflys will fly randomly until they leave.")
                    await sleep(2000)
                    WindowHelp.setAttribute("enabled", "true")
                } else {

                }
            }
            var CentralText = AddText("Select the number of butterfly (1-100)")
            CentralText.style.textAlign = "center"
            WindowBody.appendChild(CentralText)
            var Input = document.createElement("input")
            Input.type = "Number"
            Input.min = 1
            Input.max = 100
            Input.size = 100
            WindowBody.appendChild(Input)
            var Button1 = document.createElement("button")
            Button1.textContent = "Spawn the butterflys"
            Button1.onclick = function(){
                if (Input.value !== 0 && Input.value <= 100) {
                    for (let i = 0; i <= Input.value-1; i++) {
                        OpenApp("butterfly")
                        Window.remove()
                      }
                } else {
                    $MessageBox(1, "Incorrect Number: the number is too small or to big")
                }

            }
            WindowBody.appendChild(Button1);
            AddElementToBody(Window)
        }
    }
    if (App === 'butterfly') {
        const butterflydiv = document.createElement("div")
        const butterfly = document.createElement("object")
        butterfly.type = "image/svg+xml"
        butterfly.data = "C/Assets/System33/Images/Vectors/ABF.svg"
        butterfly.className = "Butterfly"
        butterflydiv.id = "ButterflyCore"
        butterfly.id = "Butterfly"
        butterfly.setAttribute("name", "Butterfly")
        butterfly.setAttribute("flying", "true")
        butterfly.style.transform = "scale(0.4)"
        butterflydiv.style.transition =  "transform 1s;"
        butterflydiv.style.height = "113px"
        butterflydiv.style.width = "120px"
        butterflydiv.style.position = "absolute"
        butterflydiv.style.left = "100%"
        butterflydiv.style.top = "-10%"
        butterflydiv.appendChild(butterfly)
        document.body.appendChild(butterflydiv)
        await sleep(1000)
        butterflydiv.style.left = '50%'
        butterflydiv.style.zIndex = "-9999"
        butterflydiv.style.top = '50%'
        butterflydiv.className = "butterfly"
        await sleep(2500)
        var repeatnum = RandomInt(10,60)
        var done = 0
        setIntervalX(function () {
            //console.log(done)
            if (done + 1 === repeatnum) {
                butterfly.setAttribute("flying", "false")
            } else {
                done = done + 1
                butterflydiv.style.transform = 'translate('+RandomInt(-999, 999)+'%,'+RandomInt(-500, 500)+'%)';
            }
        }, RandomInt(20,100)*20, repeatnum);
        do {
            await sleep (10)
        } while (butterfly.getAttribute("flying") === "true")
        butterflydiv.style.transform = 'translate(0%,0%)'
        await sleep(1000)
        butterflydiv.style.left = "100%"
        butterflydiv.style.top = RandomInt(-200,100)+"%"
        await sleep(2000)
        document.body.removeChild(butterflydiv)
    }
    if (App === "Prank1") {
        for (let i = 0; i < 12; i++) {
            setTimeout(function(){CreateWindow("250px", "PrankError", "Error", true, false, false, false, "This is a spam error", "error", (Math.round(Math.random()) * 2.5 - 2)*(Math.random()*300) +"px", (Math.round(Math.random()) * 2.1 - 1)*(Math.random()*300) +"px", "Close", 1, null, 0, null, 0, true)},i*100*i/10)
        }
    }

}

function Execute(Program){
    if (Program == "CloseAllWindows") {
        CreateWindow("350px", "CloseAllWindowsWindow", "Close all windows", true, false, false, false, "Are you shure?", "question", false, false, "Yes", 10, "No", 1, null, 1,true)
    }
}

async function $TaskKill(Program){   // Remove every program (basically element) with a certain class (id next time)
    let accessdeniedclass = ["Desktop", "StartMenu", "window-body", "title-bar", "title-bar-text", "title-bar-controls", "Taskbar", "background1","TaskbarToolbar"]
    let accessdeniedid = ["appicon"]
        if (accessdeniedclass.includes(Program) || accessdeniedid.includes(Program)) {
            $MessageBox(4, "Access Denied")
        } else {
            const windows = document.querySelectorAll('.'+Program)
            windows.forEach(window => {
            window.remove()
        })
    }
}       // Be carefull this can count to the desktop icons and start menu too!

// Create a window
function CreateWindow(Width, Id, Title, HasCloseButton, HasMinimizeButton, HasMaximizeButton, HasHelpButton, BodyText, MessageIcon, MarginLeft, MarginTop, Button1, Button1Function, Button2, Button2Function, Button3, Button3Function, PlaySound) {
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
            console.log(BodyText)
        }
        if (MessageIcon === "question") {
            RWindowBodyIcon.src = "C/Assets/System33/Icons/WinRedkyExclusif/question.png"
            RWindowBodyIcon.alt = "Question"
            console.log(BodyText)
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
    if (Button3 !== null) {
        const RWindowBodyButton3 = document.createElement("button")
        RWindowBodyButton3.textContent = Button3
        if (Button2 !== null) {
            RWindowBodyButton3.style.marginLeft = "5%"
        } else {
            RWindowBodyButton3.style.marginLeft = "10%"
        }
        if (Button3Function === 1) {
            RWindowBodyButton3.onclick = function(){RWindow.remove()}
        } else if (Button3Function === 10) {
            RWindowBodyButton3.onclick = function(){RWindow.remove()
                const windows = document.querySelectorAll('.window')
                windows.forEach(window => {
                    window.remove()
                })}
            
        }

        RWindowBody.appendChild(RWindowBodyButton3)
    }
    if (Button1 !== null) {
        const RWindowBodyButton1 = document.createElement("button")
        RWindowBodyButton1.textContent = Button1
        if (Button3 !== null) {
            RWindowBodyButton1.style.marginLeft = "5%"
        } else {
            RWindowBodyButton1.style.marginLeft = "25%"
        }
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

// Make instant Message Box (with sounds & icons)
function $MessageBox(Id, Text) {
    var Window = $MakeWindow("250px", "100px", "$MessageBox", "$MessageBox", true, false, false, false ,"-5%", '-6%')
    Window.style.removeProperty("height") // Make the thing weird if to many text
    if (Id === 1) {
        Window.querySelector(".title-bar-text").innerHTML = "Message"
    }
    if (Id === 2) {
        Window.querySelector(".title-bar-text").innerHTML = "Information"
    }
    if (Id === 3) {
        Window.querySelector(".title-bar-text").innerHTML = "Error"
    }
    if (Id === 4) {
        Window.querySelector(".title-bar-text").innerHTML = "Warning"
    }
    const WindowIcon = document.createElement("img")
    WindowIcon.style.float = "left"
    WindowIcon.draggable = false
    if (Id === 1) {
        WindowIcon.src = "C/Assets/System33/Icons/WinRedkyExclusif/info.png"
        WindowIcon.alt = "Information"
        console.log(Text);
    }
    if (Id === 2) {
        WindowIcon.src = "C/Assets/System33/Icons/WinRedkyExclusif/question.png"
        WindowIcon.alt = "Question"
        console.log(Text);
    }
    if (Id === 3) {
        WindowIcon.src = "C/Assets/System33/Icons/WinRedkyExclusif/error.png"
        WindowIcon.alt = "Error"
        console.error(Text);
    }
    if (Id === 4) {
        WindowIcon.src = "C/Assets/System33/Icons/WinRedkyExclusif/warning.png"
        WindowIcon.alt = "Warning"
        console.warn(Text)
    }
    
    Window.querySelector(".window-body").appendChild(WindowIcon)
    var CentralText = AddText(Text)
    CentralText.style.marginRight = "10px"
    CentralText.style.fontSize = "10.75px"
    CentralText.style.textAlign = "center"
    Window.querySelector(".window-body").appendChild(CentralText)
    const WindowButton = document.createElement("button")
    WindowButton.textContent = "OK"
    WindowButton.className = "centerx"
    WindowButton.onclick = function(){Window.remove()}
    Window.querySelector(".window-body").appendChild(WindowButton)
    AddElementToBody(Window)
    if (Id == 1) {
       var sound = document.getElementById("ExclamationSound").cloneNode(true)
       sound.play();
    } else if (Id == 2) {
       var sound = document.getElementById("ExclamationSound").cloneNode(true)
       sound.play();
    } else if (Id == 3) {
        var sound = document.getElementById("CritialErrorSound").cloneNode(true)
        sound.play();
    } else if (Id == 4) {
       var sound = document.getElementById("ErrorSound").cloneNode(true)
       sound.play();
    }
}

// Make Window (Used for advanced windows making)
function $MakeWindow(Width, Height, Id, Title, HasCloseButton, HasMinimizeButton, HasMaximizeButton, HasHelpButton, MarginLeft, MarginTop) {
    const RWindow = document.createElement("div") // Window Tab
    RWindow.className = 'window centerxy'
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
    RWindow.appendChild(RWindowBody)
    //dragElement(RWindow)
    return RWindow
}

// Notify (in a ballon of course)
function $Notify(Title, Text) {
    const ballon = document.createElement("div") // ballon tip
    ballon.className = "notif-bubble"
    const TitleT = document.createElement("p") // Title
    TitleT.innerHTML = Title
    TitleT.style.marginLeft = "10px"
    TitleT.style.padding  = "5px"
    TitleT.style.fontWeight = "bold"
    ballon.appendChild(TitleT)
    const BodyText = document.createElement("p") // Title
    BodyText.innerHTML = Text
    BodyText.style.marginLeft = "15px"
    BodyText.style.marginTop = "-10px"
    ballon.appendChild(BodyText)
    const ballonT = document.createElement("div") // ballon tip
    ballonT.className = "notif-bubble-bottom"
    ballon.appendChild(ballonT)
    document.body.querySelector(".Notifications").appendChild(ballon)
    var sound = document.getElementById("BallonSound").cloneNode(true)
    sound.play();
    ballon.ondblclick = async function(){ // Later remplaced by a close button
        ballon.style.removeProperty("animation")
        ballon.animate([
            // keyframes
            { opacity: '1' },
            { opacity: '0' }
          ], {
            // timing options
            duration: 750,
            iterations: 1
          });
        await sleep(750)
        ballon.remove()
    }
    setTimeout(function(){ballon.remove()}, 6000)
}

// Draggable Elements

// Finish

console.log("System 33 Ready!")