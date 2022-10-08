// console.log("Hello World!")
// import settings from './example.json' assert {type: 'json'};
// console.log(settings);
CurrVersion = "Pre-Alpha 1.1.2"
Booted = false

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

/* Once of the most important functions */
function NullCheck(value) {
    return value === undefined || value === null;
}

function NoCheck(value) {
    return value === null || value === undefined; value === false;
}
 function $Fullscreen() {
    if (!document.fullscreenElement &&    // alternative standard method
    !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
     if (document.documentElement.requestFullscreen) {
       document.documentElement.requestFullscreen();
     } else if (document.documentElement.mozRequestFullScreen) {
       document.documentElement.mozRequestFullScreen();
     } else if (document.documentElement.webkitRequestFullscreen) {
       document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
     }
   } else {
      if (document.cancelFullScreen) {
         document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
         document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
   }
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
// function $FC(callback) {
//     try{ 
//         callback()
//       } catch(error){ 
//         $MessageBox(3, error) 
//       } 
// }        // Currently in alpha
async function $MoveTo(params){
    var pleft = params.left
    var ptop = params.top
    if (params.iterations) {
        var piterations = params.iterations
    } else {
        var piterations = 1
    }
    if (params.easing) {
        var peasing = params.easing
    } else {
        var peasing = "linear"
    }
    if (params.element !== undefined && params.element !== null) {
        const Element = params.element
        Element.animate([
            // keyframes
            { top:ptop, left:pleft }
          ], {
            // timing options
            duration: params.duration,
            iterations: piterations,
            easing: peasing
          });
          setTimeout(() => {
            Element.style.top = ptop
            Element.style.left = pleft
          }, params.duration);
          
    }
}
// End Functions needed

function $PlaySound(sound) {
    var sound = document.getElementById(sound).cloneNode(true)
    sound.play();
}


setTimeout(async function(){
    await sleep(5000)
    if (document.getElementById("bootscreen")) {
        if (document.getElementById("bootscreen").style.visibility !== "hidden") {
            document.getElementById("bootscreen").style.visibility = "hidden" // Never remove it for some reasons
            $PlaySound("Startup")
            Booted = true
        }
    }   
    // Little beta/alpha info:
    setTimeout(() => {
        $Notify("The website is still in alpha/beta stat", "<img src='C/System33/Icons/WinRedkyExclusif/info.png' width='12.5'> Information") 
    }, 5000);
}, 1)
setInterval(function () {    $( ".window" ).draggable({scroll: false, handle: ".title-bar", containment: ".Desktop"}); }, 10000);
setInterval(()=>{$(".resizable").resizable({minWidth:165,minHeight:50,handles:"e, s, n, w, se, sw, ne, nw"})},1e10);
setInterval(function () {    $( ".shortcut" ).draggable({   containment: ".Desktop"}); }, 10000);

document.onkeydown = function(e) {
    var evtobj = window.event? event : e
    if (evtobj.keyCode == 85 && evtobj.ctrlKey && evtobj.shiftKey) {if (Booted === false) {Booted = true; document.querySelector("#bootscreen").style.visibility = "hidden"; document.querySelector("#startupscreen1").style.display = "none"; document.querySelector("#startupscreen2").style.display = "none";}};
};


async function SystemFunction(Identifiant) {

    if (Identifiant == 1) {
        console.log("Version: "+CurrVersion);
    }

    if (Identifiant == 2) {
        var Window = $MakeWindow("250px", "150px", "run", "Run", true, false, false, true, true, false, "75px", "calc(80% - 50px)")
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
        Icon.src = "C/System33/Icons/WinRedkyExclusif/info.png"
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
            if (Input.value === "butterfly") {$Exe("butterflymenu")}
            else if (Input.value === "wbrowser" & Input.value === "!websitebrowser") {$Exe("websitebrowser")}
            else {
            $Exe(Input.value)}
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
            document.location.href = "C/System33/Others/rsod.html"
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


function $Reboot() {
    document.location.reload(true)
}

function $Shutdown() {
    document.querySelector(".Desktop").style.visibility = "hidden";
    document.querySelector(".Taskbar").style.visibility = "hidden";
    document.querySelector(".StartMenu").style.visibility = "hidden";
    const windows = document.querySelectorAll('.window').forEach(window => {
        window.remove()
    })
    //
    $PlaySound("Shutdown")
    setTimeout(() => {
        document.querySelector(".bootscreen").style.visibility = "visible"
    }, 4150);
}

async function $Exe(App) {
    if (App == 1) {
        const Window = $MakeWindow("400px", "300px", "Notepad", "CreditNotepad", true, true, true, false, true, true) //-- After
        const WindowBody = Window.querySelector(".window-body")
        WindowBody.style.height = "calc(100% - 40px)"
        Window.style.backgroundColor = "white"
        const iframe = document.createElement("iframe")
        iframe.style.width = "100%"
        iframe.style.height = "100%"
        iframe.src = "C/Programs/credits.html"
        iframe.style.border = "none"
        iframe.innerHTML = "Browser not compatible." // Used when browser doesn't own iframe
        WindowBody.appendChild(iframe)
        AddElementToBody(Window)
        //CreateIFrameWindow("400px", "300px", "Notepad", "CreditNotepad", true, false, false, false, "C/Programs/credits.html", false, false) //-- Before
    } else
    if (App == 5) {
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
    RWindowBodyIFrame.src = "C/Programs/colorpicker.html"
    RWindowBodyIFrame.height = "100%"
    RWindowBodyIFrame.width = "100%"
    } else
    // if (App.toLowerCase() == 'clock') {
    //     if (document.getElementById("Clock") === null) {
    //         CreateIFrameWindow("300px", "300px", "Clock", "ClockWindow", true, false, false, false, "C/Programs/clock.html", false, false)
    //     }
    // }
    if (App.toLowerCase() == 'terminal') {
        const Termapp = $MakeWindow("350px", "275px", "terminalwindow", "Command Prompt", true, true, true, false, true)
        const Termbody = Termapp.getElementsByClassName("window-body")[0]
        const Terminal = document.createElement("div")
        Termbody.appendChild(Terminal)
        RandomId = Math.floor(Math.random() * RandomInt(1,10000)); // he need to get an ID to have multiple windows
        Termbody.style.setProperty("height", "calc(100% - 30px)")
        Termbody.style.setProperty("width", "calc(100% - 5px)")
        Terminal.id = "dosterm"+RandomId
        Terminal.style.left = "-10px"
        Terminal.style.top = "-10px"
        Termapp.style.backgroundColor = "black"
        var __EVAL = (s) => eval(`void (__EVAL = ${__EVAL}); ${s}`);
        $(function() {
            $('#dosterm'+RandomId).terminal(function(command, term) {
                if (command.substring(0,4) == 'help') {
                    this.echo("Available commands:")
                    this.echo("help: shows a list of command")
                    this.echo("exit: leave the console")
                    this.echo("echo: type a message that the command will show")
                    this.echo("demo: a little demo of what the terminal can do")
                    this.echo("")
                } else if (command.substring(0,4) == 'exit') {
                    Termapp.remove()
                } else if (command.substring(0,4) === 'echo' && command.indexOf("o ", 3) == 3) {
                    this.echo(command.slice(5));
                } else if (command === "demo") {
                    this.exec([
                        'echo hello world!',
                        'for (let index = 0; index < 10; index++) {setTimeout(() => {$Notify("world!", "Hello")}, index*500)}',
                        '$MessageBox(3, "Error (sorry)")',
                        'RandomInt(1, 20)',
                        '$Exe("butterfly")',
                        '$Shortcut("Terminal", "C/System33/Icons/Apps/Terminal.svg", "50%", "50%", function(shortcut){$MessageBox(3, "Error: File Corrupted"); shortcut.remove()})',
                    ], {typing: true, delay: 15});
                } else if (command === "disablehist") {
                    term.history().disable()
                } else if (command === "enablehist") {
                    term.history().enable()
                } else if (command === "cleathist") {
                    term.history().set()
                } else {
                if (command !== '') {
                    try {
                        var result = __EVAL(command);
                        if (result !== undefined) {
                            this.echo(new String(result));
                        }
                    } catch(e) {
                        this.error(new String(e));
                    }
                } else {
                     {
                        
                    }
                }
            }
            }, {
                greetings: "Hello world! \n type help to get a list of current commands",  
                name: 'dos',
                height: 300,
                prompt: '>'
            },
                     $("#dosterm").css({
            "--color": "black",
            "--background": "white",
            "--animation": "terminal-bar",
        }));
         })
         setInterval(() => {
            Terminal.style.height = "100%"
         }, 20);
         
        AddElementToBody(Termapp)
    } else
    if (App.toLowerCase() == 'websitebrowser') {
            const WBrowser = $MakeWindow("1025px", "600px", "WebsiteBrowser", "Website Browser", true, true, true, false, true)
            WBrowser.style.left = "25%"
            WBrowser.style.top = "25%"
            const BrowserBody = WBrowser.querySelector(".window-body")
            BrowserBody.style.setProperty("height", "calc(100% - 45px)")
            const WBrowserIFrame = document.createElement("iframe")
            WBrowserIFrame.src = "https://archive.org/" // Can't do better
            WBrowserIFrame.height = "100%";
            WBrowserIFrame.width = "100%";
            WBrowserIFrame.style.overflow = "auto";
            const WBrowserSearchBar = document.createElement("input");
            WBrowserSearchBar.setAttribute("type", "text");
            WBrowserSearchBar.size = 182.5;
            BrowserBody.appendChild(WBrowserSearchBar);
            const WBrowserSearchButton = document.createElement("button");
            WBrowserSearchButton.textContent = "Search";
            WBrowserIFrame.type = "search"
            BrowserBody.appendChild(WBrowserSearchButton);
            BrowserBody.appendChild(WBrowserIFrame);
            AddElementToBody(WBrowser)
            WBrowserSearchButton.onclick = function(){
            var input = WBrowserSearchBar.value
            console.log(input)
            if(input.match(/\bhttp(.)*/)) {
                WBrowserIFrame.src = input;
            } else {
                input = "http://" + input;
                WBrowserIFrame.src = input;
            }   
            
            
        }
    } else
    if (App.toLowerCase() == 'butterflymenu') {
        if (document.getElementById("ButterflyMenu") === null) {
            var Window = $MakeWindow("250px", "100px", "ButterflyMenu", "Butterfly", true, false, false, true, true)
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
                        $Exe("butterfly")
                        Window.remove()
                      }
                } else {
                    $MessageBox(1, "Incorrect Number: the number is too small or to big")
                }

            }
            WindowBody.appendChild(Button1);
            AddElementToBody(Window)
        }
    } else
    if (App.toLowerCase() == 'butterfly') {
        function MoveButterfly(Left, Top) {
            $MoveTo({
                element: butterflydiv,
                top: Left,
                left: Top,
                duration: RandomInt(1500,2500),
                easing: "ease-in-out"
            })// After
        }

        const butterflydiv = document.createElement("div")
        const butterfly = document.createElement("object")
        butterfly.type = "image/svg+xml"
        butterfly.data = "C/System33/Images/Vectors/ABF.svg"
        butterfly.className = "Butterfly"
        butterflydiv.id = "ButterflyCore"
        butterfly.id = "Butterflyi"
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
        document.querySelector(".Desktop").appendChild(butterflydiv)
        await sleep(1000)
        butterflydiv.style.left = '50%'
        butterflydiv.style.zIndex = "-9999"
        butterflydiv.style.top = '50%'
        butterflydiv.className = "butterfly"
        await sleep(2500)
        var repeatnum = RandomInt(1000,10000)/RandomInt(100,1000)
        var done = 0
        setIntervalX(function () {
            //console.log(done)
            if (done + 1 === repeatnum) {
                butterfly.setAttribute("flying", "false")
            } else {
                done = done + 1
                // butterflydiv.style.transform = 'translate('+RandomInt(-999, 999)+'%,'+RandomInt(-500, 500)+'%)'; // Before
                MoveButterfly(RandomInt(-1,100)+"%", RandomInt(-1,100)+"%")
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
        butterflydiv.remove()
    } else
    if (App.toLowerCase() == "prank1") {
        for (let i = 0; i < 12; i++) {
            setTimeout(function(){AddElementToBody($MakeWindow("250px", null, null, "Error", true, false, false, false, true, RandomInt(10,90)+"%", RandomInt(10,90)))},i*100*i/10) // After
            // CreateWindow("250px", "PrankError", "Error", true, false, false, false, "This is a spam error", "error", (Math.round(Math.random()) * 2.5 - 2)*(Math.random()*300) +"px", (Math.round(Math.random()) * 2.1 - 1)*(Math.random()*300) +"px", "Close", 1, null, 0, null, 0, true) // Before
            
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
function CreateWindow(Width, Id, Title, HasCloseButton, HasMinimizeButton, HasMaximizeButton, HasHelpButton, BodyText, MessageIcon, MarginLeft, MarginTop, Button1, Button1Function, Button2, Button2Function, Button3, Button3Function, $PlaySound) {
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
            RWindowBodyIcon.src = "C/System33/Icons/WinRedkyExclusif/error.png"
            RWindowBodyIcon.alt = "Error"
            console.error(BodyText);
        }
        if (MessageIcon === "information") {
            RWindowBodyIcon.src = "C/System33/Icons/WinRedkyExclusif/info.png"
            RWindowBodyIcon.alt = "Information"
            console.log(BodyText)
        }
        if (MessageIcon === "question") {
            RWindowBodyIcon.src = "C/System33/Icons/WinRedkyExclusif/question.png"
            RWindowBodyIcon.alt = "Question"
            console.log(BodyText)
        }
        if (MessageIcon === "warning") {
            RWindowBodyIcon.src = "C/System33/Icons/WinRedkyExclusif/warning.png"
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
    if ($PlaySound === true) {
        if (MessageIcon == "error") {
            var sound = document.getElementById("CriticalError").cloneNode(true)
            sound.play();
        } else if (MessageIcon == "information") {
            var sound = document.getElementById("Exclamation").cloneNode(true)
            sound.play();
        } else if (MessageIcon == "question") {
            var sound = document.getElementById("Exclamation").cloneNode(true)
            sound.play();
        } else if (MessageIcon == "warning") {
            var sound = document.getElementById("Error").cloneNode(true)
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
    var Window = $MakeWindow("250px", "100px", null, "MessageBox", true, false, false, false, true, false,"50%", '50%')
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
        WindowIcon.src = "C/System33/Icons/WinRedkyExclusif/info.png"
        WindowIcon.alt = "Information"
        console.log(Text);
    }
    if (Id === 2) {
        WindowIcon.src = "C/System33/Icons/WinRedkyExclusif/question.png"
        WindowIcon.alt = "Question"
        console.log(Text);
    }
    if (Id === 3) {
        WindowIcon.src = "C/System33/Icons/WinRedkyExclusif/error.png"
        WindowIcon.alt = "Error"
        console.error(Text);
    }
    if (Id === 4) {
        WindowIcon.src = "C/System33/Icons/WinRedkyExclusif/warning.png"
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
    document.body.appendChild(Window)
    if (Id == 1) {
       $PlaySound("Exclamation")
    } else if (Id == 2) {
        $PlaySound("Exclamation")
    } else if (Id == 3) {
        $PlaySound("CriticalError")
    } else if (Id == 4) {
        $PlaySound("Error")
    }
    document.body.appendChild(Window)
    //return Window // Later 0.0
}

// Make Window (Used for advanced windows making)
function $MakeWindow(Width, Height, Id, Title, HasCloseButton, HasMinimizeButton, HasMaximizeButton, HasHelpButton, Draggable, Resizable, Left, Top) {
    const RWindow = document.createElement("div") // Window Tab
    RWindow.className = 'window centerxy'
    RWindow.style.width = Width
    RWindow.style.height = Height
    RWindow.id = Id
    RWindow.style.position = "absolute" 
    if (Draggable !== false && Draggable == null) {
        RWindow.className = RWindow.className + " drag"           
    }
    if (Resizable !== false && Resizable == null) {
        RWindow.className = RWindow.className + " resize"           
    }
    if (Left !== false || Left !== null) {
        RWindow.style.left=Left;            
    }
    if (Top !== false || Top !== null) {
        RWindow.style.top=Top;            
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
        WinX1 = Width
        WinY1 = Height
        if (Left !== null) {
            WinX2 = Left;            
        } else {
            WinX2 = "50%"
        }
        if (Top !== null) {
            WinY2 = Top;            
        } else {
            WinY2 = "50%"
        }
        var WinF = false
        RWindowMaximizeButton.onclick = async function() {
            if (WinF == false) {
                WinF = true
                WinX1 = RWindow.style.width
                WinY1 = RWindow.style.height
                WinX2 = RWindow.style.left
                WinY2 = RWindow.style.top
                if (Draggable == true) {
                    $( RWindow ).draggable("disable")
                }
                if (Resizable == true) {
                    $( RWindow ).resizable("disable")
                }
                RWindow.style.width = "100%"
                RWindow.style.height = "calc(100% - 35px)"
                RWindow.style.left = "50px"
                RWindow.style.top = "47.5px"
            } else {
                WinF = false
                if (Draggable == true) {
                    $( RWindow ).draggable("enable")
                }
                if (Resizable == true) {
                    $( RWindow ).resizable("enable")
                }
                RWindow.style.width = WinX1
                RWindow.style.height = WinY1
                RWindow.style.left = WinX2
                RWindow.style.top = WinY2
            }
        }
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
    if (Draggable === true) {
        $( RWindow ).draggable({
            scroll: false,
            handle: ".title-bar",
            containment: ".Desktop"
        }); 
    }
    if (Resizable === true) {
        $( RWindow ).resizable({
            minWidth: 200,
            minHeight: 50,
            zIndex: 5,
            handles: "e, s, n, w, se, sw, ne, nw"
          });
    }

    AddElementToBody(RWindow)
    return RWindow
}

// Notify (in a ballon of course)
function $Notify(Text, Title) {
    const ballon = document.createElement("div") // Ballon tip
    ballon.className = "notif-bubble"
    if (!NullCheck(Title)) {
        const TitleT = document.createElement("p") // Title
        TitleT.innerHTML = Title.toString()
        TitleT.style.marginLeft = "10px"
        TitleT.style.padding  = "5px 0px 1px 0px"
        TitleT.style.fontWeight = "bold"
        ballon.appendChild(TitleT)
    }
    const ballonX = document.createElement("img") // Close button
    ballonX.src = "C/System33/Icons/Others/ballonx.jpg"
    ballonX.className = "notif-bubble-close"
    ballonX.style.position = "absolute"
    ballonX.style.top = "5px"
    ballonX.style.right = "5px"
    ballon.appendChild(ballonX)
    const ballonM = document.createElement("p") // Inner Message
    ballonM.innerHTML = Text.toString()
    ballonM.style.padding  = "0px 0px 10px 0px"
    ballonM.style.marginLeft = "15px"
    ballonM.style.marginTop = "-10px"
    ballon.appendChild(ballonM)
    const ballonT = document.createElement("div") // Ballon tip bottom
    ballonT.className = "notif-bubble-bottom"
    ballon.appendChild(ballonT)
    const ballonTO = document.createElement("div") // Ballon tip bottom outline
    ballonTO.className = "notif-bubble-bottom-outline"
    ballonT.appendChild(ballonTO)
    document.body.querySelector(".Notifications").appendChild(ballon)
    $PlaySound("Ballon")
    debounce = true
    ballonX.onclick = async function(){
        if (debounce) {
            debounce = false
            ballon.style.removeProperty("animation")
            setTimeout(async function(){
                ballon.animate([
                // keyframes
                { opacity: '1' },
                { opacity: '0' }
              ], {
                // timing options
                duration: 450,
                iterations: 1
              });
            await sleep(450)
            ballon.remove()})
        }
    }
    if (!NullCheck(Title) && !NullCheck(Text)) {
        lengthDelay = (((Title.toString().length)+(Text.toString().length))*10)
    } else {
        lengthDelay = 0
    }
    setTimeout(async function(){
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
    ballon.remove()}, 4500+lengthDelay)
}

// Create shortcut
function $Shortcut(Name, Image, Left, Top, Function) {
    const shortcut = document.createElement("div")
    const name = Name
    shortcut.id = "appicon"
    shortcut.className = name.replace(/[^a-zA-Z ]/g,"")+ " shortcut"
    if (Left !== false || Left !== null) {
        shortcut.style.left = Left 
    } else {
        shortcut.style.left = "150px"
    }
    if (Top !== false || Top !== null) {
        shortcut.style.top = Top 
    } else {
        shortcut.style.top = "150px"
    }
    const shortcuticon = document.createElement("img")
    shortcuticon.src = Image
    shortcuticon.alt = Name
    shortcuticon.style.height = "25px"
    shortcuticon.style.width = "30px"
    shortcuticon.style.marginLeft = "auto"
    shortcuticon.style.marginRight = "auto"
    shortcuticon.style.display = "block"
    shortcut.appendChild(shortcuticon)
    const shortcutname = document.createElement("p")
    shortcutname.style.color = "white"
    shortcutname.style.fontSize = "9px"
    shortcutname.style.paddingTop = "0%"
    shortcutname.style.textAlign = "center"
    shortcutname.innerHTML = name.replace('*."/\[]:;|,',"")
    shortcut.appendChild(shortcutname)
    shortcut.onclick = function () {
        shortcut.focus();
    };
    shortcut.tabIndex = 0
    // Hardest part
    if (!NoCheck(Function)) {
        if (typeof Function === "function") {
            $(shortcut)
            .dblclick(function(){
              Function(shortcut)
            })
            .doubletap(function() {
              Function(shortcut)
            });
        }
    }

    document.querySelector(".Desktop").appendChild(shortcut)
    return shortcut
}


// Finish

//console.log("System 33 Ready!")
