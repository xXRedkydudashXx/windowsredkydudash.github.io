// console.log("Hello World!")
// import settings from './example.json' assert {type: 'json'};
// console.log(settings);
CurrVersion = "Pre-Alpha 1.0.4"
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
const toBool = (stringValue) => {
    switch(stringValue?.toLowerCase()?.trim()){
        case "true": 
        case "yes": 
        case "1": 
          return true;

        case "false": 
        case "no": 
        case "0": 
        case null: 
        case undefined:
          return false;

        default: 
          return JSON.parse(stringValue);
    }
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
function $File(data) {
    return new Blob([data], { type: "text/plain" });
  }
  
  function $Download(content, fileName) {
    const a = document.createElement("a");
    const isBlob = content.toString().indexOf("Blob") > -1;
    let url = content;
    if (isBlob) {
      url = window.URL.createObjectURL(content);
    }
    a.href = url;
    a.download = fileName;
    a.click();
    if (isBlob) {
      window.URL.revokeObjectURL(url);
    }
  }
// function $FC(callback) {
//     try{ 
//         callback()
//       } catch(error){ 
//         $MessageBox(3, error) 
//       } 
// }        // Currently in alpha
function $MoveTo(params){
    {
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
        params.element.animate([
            // keyframes
            { top:ptop, left:pleft }
          ], {
            // timing options
            duration: params.duration,
            iterations: piterations,
            easing: peasing
          });
          setTimeout(() => {
            params.element.style.top = ptop
            params.element.style.left = pleft
          }, params.duration);
          
    }
    }
}
function $Audio(sound, pitch = 1, volume = 1){
    var audio = $Kernel.System33.audios[sound].cloneNode()
    audio.pitch = pitch
    audio.playbackRate = pitch
    audio.volume = volume
    document.head.appendChild(audio)
    audio.addEventListener("ended", ()=>{audio.remove()})
    return audio
}
// End Functions needed
var Desktop

setTimeout(() => {  // Next TODO: Fix errors and prevent forgetting (+ clearer code)
    try {
        Desktop = document.querySelector(".Desktop").cloneNode()
    } catch (error) {}
    if (localStorage.LocalDesktop && localStorage.LocalDesktop.includes("div")) {
        if (Desktop) {Desktop.innerHTML = ""}
        Shortcuts = document.createElement("div")
        Shortcuts.id = "shortcuts"
        Shortcuts.appendChild(document.createRange().createContextualFragment(localStorage.LocalDesktop))
        if (Shortcuts) {Desktop.appendChild(Shortcuts)}
    } else {
        Shortcuts = document.querySelector(".Desktop").querySelector("#shortcuts")
        Desktop.appendChild(Shortcuts)
    }
    document.querySelector(".Desktop").remove()
}, 20);

var checkBoot = setInterval(() => {
    if (Booted !== false) {
    document.getElementById("bootscreen").style.visibility = "hidden" // Never remove it for some reasons
    //$Audio("startup").play()
    window.scrollTo(0,0)
    DesktopStorage = setInterval(() => {
        if (Desktop) { localStorage.LocalDesktop = Desktop.querySelector("#shortcuts").innerHTML; }
    }, 10);
    if (Desktop) { document.body.appendChild(Desktop)}
    document.querySelector(".Taskbar").style.visibility = "visible";
    document.querySelector(".StartMenu").style.visibility = "visible";
    // Settings up fuctions:

    // Little beta/alpha info:
    setTimeout(() => {
        $MessageBox({Type:1,Msg:"Welcome to Windows Redkydudash! <br> Current Version: "+CurrVersion,Sound:null, Return: true}).style.minWidth = "250px"
        setTimeout(() => {
            $Notify({Msg:"The website is still in alpha/beta stat", Title:"<img src='C/System33/Icons/System/info.png' width='12.5'> Information", Length:7000})
        }, 4500);
    }, 500);
    clearInterval(checkBoot)
    }
}, 10);

var DesktopStorage
setTimeout(async function(){
    await sleep(5000)
    if (document.getElementById("bootscreen")) {
        if (document.getElementById("bootscreen").style.visibility !== "hidden") {
            Booted = true
            document.dispatchEvent(new CustomEvent("onbooted"))
        }
    }   
}, 1)
setInterval(function () {    $( ".window" ).draggable({scroll: false, handle: ".title-bar", containment: ".Desktop"}); }, 10000);
setInterval(()=>{$(".resizable").resizable({minWidth:165,minHeight:50,handles:"e, s, n, w, se, sw, ne, nw"})},1e10);
setInterval(function () {    $( ".shortcut" ).draggable({   containment: ".Desktop"}); }, 10000);

document.onkeydown = function(e) {
    var evtobj = window.event? event : e
    if (evtobj.keyCode == 85 && evtobj.ctrlKey && evtobj.shiftKey) {if (Booted === false) {Booted = true; document.dispatchEvent(new CustomEvent("onbooted")); document.querySelector("#bootscreen").style.visibility = "hidden"; document.querySelector("#startupscreen1").style.display = "none"; document.querySelector("#startupscreen2").style.display = "none";}}; //Ctrl+Shirt+U
};


async function SystemFunction(Identifiant) {

    if (Identifiant == 1) {
        console.log("Version: "+CurrVersion);
    }

    if (Identifiant == 2) {
        var Window = $MakeWindow({Width:"250px", Height:"150px", Id:"run", Title:"Run", CloseButton: true, MinimizeButton: false, MaximizeButton: false, HelpButton: true, Resizable: false, Left:15, Top:80, Return: true})
        var WindowBody = Window.querySelector(".window-body")
        var WindowHelp = Window.querySelector('[aria-label="Help"]')
        WindowHelp.setAttribute("enabled", "true")
        WindowHelp.onclick = async function(){
            if (WindowHelp.getAttribute("enabled") == "true") {
                WindowHelp.setAttribute("enabled", "false")
                $MessageBox({Type: 1, Msg: "Type the name of a know program and it will be executed. some programs can be executed in different way: \n <br> Website Browser: wbrowser"})
                await sleep(2000)
                WindowHelp.setAttribute("enabled", "true")
            } else {

            }
        }
        const Icon = document.createElement("img")
        Icon.style.float = "left"
        Icon.draggable = false
        Icon.src = "C/System33/Icons/System/info.png"
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
        if (command.name === "crash")  {
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
    window.location.href = window.location.protocol + "//" + window.location.host + window.location.pathname 
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
    $Audio("shutdown").play()
    setTimeout(() => {
        document.querySelector(".bootscreen").style.visibility = "visible"
        document.querySelector(".bootscreen").style.backgroundColor = color4(0,0,0,1)
        document.querySelector(".bootscreen").appendChild(document.createRange().createContextualFragment("<div style='display: table;width: 100%;height: "+window.innerHeight+"px;text-align:center;'><p style='display:table-cell;vertical-align:middle;color: "+color4(255,255,255,1)+"'>It's now safe to close your webpage</p></div>"))
    }, 4150);
}

async function $Exe(App) {
    if (App == 1) {
        const Window = $MakeWindow({Width:"400px", Height:"300px", Id:"Notepad", Title:"CreditNotepad", MinimizeButton:true, MaximizeButton:true, HelpButton:false, Return: true}) //-- After
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
    if (App.toLowerCase() == 'notepad') {
        const Window = $MakeWindow({Width:"400px", Height:"300px", Id:"Notepad", Title:"Notepad", MinimizeButton:true, MaximizeButton:true, HelpButton:false, Return: true}) //-- After
        const WindowBody = Window.querySelector(".window-body")
        WindowBody.style.height = "calc(100% - 27.5px)"
        WindowBody.style.width = "calc(100% - 6px)"
        WindowBody.style.marginLeft = "3px"
        const StatueBar = document.createElement("div")
        StatueBar.style.position = "absolute"
        StatueBar.style.top = "28px"
        StatueBar.style.width = "calc(100% - 6px)"
        StatueBar.style.height = "20px"
        WindowBody.appendChild(StatueBar)
        const textarea = document.createElement("textarea")
        textarea.style.width = "100%"
        textarea.style.height = "calc(100% - 20px)"
        textarea.style.backgroundColor = "white"
        textarea.style.marginTop = "10px"
        textarea.style.borderStyle = "inset"
        textarea.style.resize = "none"
        textarea.style.fontSize = "15px"
        WindowBody.appendChild(textarea)
        const SaveFileButton = document.createElement("button")
        SaveFileButton.style.width = "100px"
        SaveFileButton.style.minHeight = "calc(100% - 2px)"
        SaveFileButton.innerHTML = "Save as .txt file"
        SaveFileButton.onclick = function(){
            $Download($File(textarea.value), "NewFile.txt")
        }
        StatueBar.appendChild(SaveFileButton)
        AddElementToBody(Window)
    } else
    if (App.toLowerCase() == 'terminal') {
        const Termapp = $MakeWindow({Width:"350px", Height:"275px", Id:"terminalwindow", Title:"Command Prompt", MaximizeButton: true, MinimizeButton: true, HelpButton: false, Return: true})
        RandomId = Math.floor(Math.random()*20000); // he need to get an ID to have multiple windows, for some reasons
        const Termbody = Termapp.getElementsByClassName("window-body")[0]
        const Terminal = document.createElement("div")
        Termbody.appendChild(Terminal)
        Termbody.style.setProperty("height", "calc(100% - 30px)")
        Termbody.style.setProperty("width", "calc(100% - 5px)")
        Terminal.id = "dosterm"+RandomId
        Terminal.style.left = "-10px"
        Terminal.style.top = "-10px"
        Termapp.style.backgroundColor = "black"
        $(function() {
            var animation = false;
            var timer;
            var prompt;
            var string;
            $('#dosterm'+RandomId).terminal(function(command, term) {
                var __EVAL = (s) => eval(`void (__EVAL = ${__EVAL}); ${s}`);
                // Functions
                this.window = Termapp
                this.id = RandomId
                this.version = CurrVersion
                terminal = this
                this.warn = (msg) => {return this.echo("[[;yellow;]"+msg)}
                this.exit = () => {Termapp.remove()}
                this.beep = (freq=750, duration=100, type="sine") => {
                    const context = new AudioContext()
                    const oscillator = context.createOscillator()
                    oscillator.type = type;
                    oscillator.frequency.setValueAtTime(freq, context.currentTime); // value in hertz
                    oscillator.connect(context.destination);
                    oscillator.start();
                    oscillator.stop(duration/1000)
                }
                this.progressbar = (size, speed) => {
                    function progress(percent, width) {
                        var size = Math.round(width*percent/100);
                        var left = '', taken = '', i;
                        for (i=size; i--;) {
                            taken += '=';
                        }
                        if (taken.length > 0) {
                            taken = taken.replace(/=$/, '>');
                        }
                        for (i=width-size; i--;) {
                            left += ' ';
                        }
                        return '[' + taken + left + '] ' + percent + '%';
                    }
                    var i = 0, speed = speed || 100;
                    prompt = terminal.get_prompt();
                    string = progress(0, size);
                    terminal.set_prompt(progress);
                    animation = true;
                    return (function loop() {
                        string = progress(i++, size);
                        terminal.set_prompt(string);
                        if (i < 100) {
                            timer = setTimeout(loop, speed/2);
                        } else {
                            terminal.echo(progress(i, size) + ' [[b;green;]OK]')
                                .set_prompt(prompt);
                            animation = false
                            return true
                        }
                    })();
                }
                // End of functions
                if ($.terminal.parse_command(command).name == 'help') {
                    this.echo("Available commands:")
                    this.echo("help: shows a list of command")
                    this.echo("id: the current id of the terminal")
                    this.echo("exit: leave the console")
                    this.echo("echo: type a message that the command will show")
                    this.echo("demo: a little demo of what the terminal can do")
                    this.echo("ver: return the current version of Windows Redkydudash")
                    this.echo("")
                } else if ($.terminal.parse_command(command).name == 'exit') {
                    this.exit()
                } else if ($.terminal.parse_command(command).name === 'echo') {
                    this.echo($.terminal.parse_command(command).args[1]);
                } else if ($.terminal.parse_command(command).name == 'id') {
                    this.echo("ID N°"+this.id)
                } else if ($.terminal.parse_command(command).name == 'ver') {
                    this.echo("Version "+this.version)
                } else if ($.terminal.parse_command(command).name === "demo") {
                    this.exec([
                        'echo hello world!',
                        'for (let index = 0; index < 10; index++) {setTimeout(() => {$Notify({Msg:"world!", Title:"Hello"})}, index*500)}',
                        '$MessageBox({Type:3, Msg:"Error (sorry)"})',
                        //'this.progressbar(RandomInt(1, 20), 50)',
                        '$Exe("butterfly")',
                        '$Shortcut("Terminal", "C/System33/Icons/Apps/Terminal.svg", "50%", "50%", function(){$MessageBox({Type:3, Msg: "Error: Corrupted File"}); document.querySelector("div[name=\\"Terminal\\"]").remove()})',
                        
                    ], {typing: true, delay: 15});
                } else if ($.terminal.parse_command(command).name === "disablehist") {
                    term.history().disable()
                } else if ($.terminal.parse_command(command).name === "enablehist") {
                    term.history().enable()
                } else if ($.terminal.parse_command(command).name === "clearthist") {
                    term.history().set()
                } else if ($.terminal.parse_command(command).name === "reboot") {
                    $Reboot()
                } else if ($.terminal.parse_command(command).name === "shutdown") {
                    Termapp.remove()
                    $Shutdown()
                } else {
                if (command !== '') {
                    try {
                        var result = __EVAL(command);   //"term = $('#dosterm'+"+RandomId+").terminal();"
                        if (result !== undefined) {
                            this.echo(new String(result));
                        }
                    } catch(e) {
                        this.error(new String(e));
                    }
                }
            }
            }, {
                greetings: "Hello world! \n type help to get a list of current commands",  
                name: 'dos',
                height: 300,
                prompt: '>',
                keydown: function(e, term) {
                    if (animation) {
                        if (e.which == 68 && e.ctrlKey) { // CTRL+D
                            clearTimeout(timer);
                            animation = false;
                            term.echo(string + ' [[b;red;]FAIL]')
                                .set_prompt(prompt);
                        }
                        return false;
                    }
                }
            },
                     $("#dosterm").css({
            "--color": "black",
            "--background": "white",
            "--animation": "terminal-bar",
        }));
         })
         setInterval(() => {
            Terminal.style.height = "100%"
         }, 9); // Reduces everytime
         
        AddElementToBody(Termapp)
    } else
    if (App.toLowerCase() == 'websitebrowser') {
            const WBrowser = $MakeWindow({Width:"1025px", Height:"600px", Id:"WebsiteBrowser", Title:"Website Browser", MaximizeButton: true, MinimizeButton: true, Return:true})
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
            WBrowserSearchBar.style = "width:calc(100% - 75px)";
            BrowserBody.appendChild(WBrowserSearchBar);
            const WBrowserSearchButton = document.createElement("button");
            WBrowserSearchButton.textContent = "Search";
            WBrowserIFrame.type = "search"
            BrowserBody.appendChild(WBrowserSearchButton);
            BrowserBody.appendChild(WBrowserIFrame);
            AddElementToBody(WBrowser)
            WBrowserSearchButton.onclick = function(){
            var input = WBrowserSearchBar.value
            // console.log(input)
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
            var Window = $MakeWindow({Width:"250px", Height:"100px", Id:"ButterflyMenu", Title:"Butterfly", MaximizeButton: false, MinimizeButton: false, HelpButton: true, Return: true})
            var WindowBody = Window.querySelector(".window-body")
            var WindowHelp = Window.querySelector('[aria-label="Help"]')
            WindowHelp.setAttribute("enabled", "true")
            WindowHelp.onclick = async function(){
                if (WindowHelp.getAttribute("enabled") == "true") {
                    WindowHelp.setAttribute("enabled", "false")
                    $MessageBox({Type:2, Msg:"Butterfly allows you to create butterflys on the desktop. Thoses butterflys will fly randomly until they leave."})
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
                    $MessageBox({Type:1, Msg:"Incorrect Number: the number is too small or to big (Max 100)"})
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
            setTimeout(function(){},i*100*i/10)
            AddElementToBody($MakeWindow("250px", null, null, "Error", true, false, false, false, true, RandomInt(10,90)+"%", RandomInt(10,90))) // Before 2
            // CreateWindow("250px", "PrankError", "Error", true, false, false, false, "This is a spam error", "error", (Math.round(Math.random()) * 2.5 - 2)*(Math.random()*300) +"px", (Math.round(Math.random()) * 2.1 - 1)*(Math.random()*300) +"px", "Close", 1, null, 0, null, 0, true) // Before 1
            
        }
    }
}

//import * as $ from "../../C/System33/Libraries/jquery-3.6.1.min.js";

// Open notepad from a file name then content
function $Edit(Name="NewFile.txt", Content="") {
    const Window = $MakeWindow({Width:"400px", Height:"300px", Id:"Notepad", Title:"Notepad", MinimizeButton:true, MaximizeButton:true, HelpButton:false, Return: true})
        const WindowBody = Window.querySelector(".window-body")
        WindowBody.style.height = "calc(100% - 27.5px)"
        WindowBody.style.width = "calc(100% - 6px)"
        WindowBody.style.marginLeft = "3px"
        const StatueBar = document.createElement("div")
        StatueBar.style.position = "absolute"
        StatueBar.style.top = "28px"
        StatueBar.style.width = "calc(100% - 6px)"
        StatueBar.style.height = "20px"
        WindowBody.appendChild(StatueBar)
        const textarea = document.createElement("textarea")
        textarea.style.width = "100%"
        textarea.style.height = "calc(100% - 20px)"
        textarea.style.backgroundColor = "white"
        textarea.style.marginTop = "10px"
        textarea.style.borderStyle = "inset"
        textarea.style.resize = "none"
        textarea.style.fontSize = "15px"
        WindowBody.appendChild(textarea)
        const filename = document.createElement("input")
        filename.type = "text"
        filename.style.width = "100px"
        filename.style.height = "calc(100% - 1px)"
        filename.value = Name
        StatueBar.appendChild(filename)
        const NewFileButton = document.createElement("button")
        NewFileButton.style.minHeight = "calc(100% - 2px)"
        NewFileButton.innerHTML = "New file"
        NewFileButton.onclick = function(){
            function clearFile() {
                Name="NewFile.txt"
                textarea.value=""
                filename.value=Name
                Content=textarea.value
            }
            if (textarea.value == "") {
                clearFile()
            } else {
                $MessageBox({Type:4, Msg:"Do you wanna save the data of your file?", Button3:"Yes", Button1:"No", Button2:"Cancel", OnButton3:()=>{SaveFileButton.click(); clearFile()},OnButton1:()=>{clearFile()},Focus:0})
            }
        }
        const OpenFileButton = document.createElement("button")
        OpenFileButton.style.width = "30px"
        OpenFileButton.style.minHeight = "calc(100% - 2px)"
        OpenFileButton.innerHTML = "Open file"
        OpenFileButton.onclick = function(){
            var input = document.createElement('input');
            input.type = 'file';
            input.click();
            var Wait = setInterval(() => {
                if (input.files[0]) {
                    const Reader = new FileReader()
                    Reader.onload =(ev)=>{
                        textarea.value = ev.target.result
                    }
                    Reader.readAsText(input.files[0])
                    Name = input.files[0].name
                    filename.value = Name
                    Content = textarea.value
                    clearInterval(Wait)
                    return
                }
            }, 10);
        }
        const SaveFileButton = document.createElement("button")
        SaveFileButton.style.width = "50px"
        SaveFileButton.style.minHeight = "calc(100% - 2px)"
        SaveFileButton.innerHTML = "Save file"
        SaveFileButton.onclick = function(){
            Content = textarea.value
            File = new Blob([Content])
            Name = filename.value
            $Download(File, Name)
        }
        StatueBar.appendChild(NewFileButton)
        StatueBar.appendChild(OpenFileButton)
        StatueBar.appendChild(SaveFileButton)
        AddElementToBody(Window)
        textarea.innerText = Content 
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

// Generates a window object (that can be customized)
function $MakeWindow({Width = 'auto', Height = 'auto', Id = null, Class = null, Title = "Window", CloseButton = true, MinimizeButton = true, MaximizeButton = true, HelpButton = false, Draggable = true, Resizable = true, Left = 50, Top = 50, OnClose = null, Url = null, innerHTML = null, DisableClose = false, DisableMaximize = false, Return = false}) {    //, Left = document.body.getBoundingClientRect().width+"px", Top = document.body.getBoundingClientRect().height+"px",
    const RWindow = document.createElement("div") // Window Tab
    RWindow.className = 'window'
    RWindow.style.width = Width
    RWindow.style.height = Height
    if (!NoCheck(Id)) {
        RWindow.id = Id      
    }
    if (!NoCheck(Id)) {
        RWindow.className = RWindow.className + " "  + Class
    }
    RWindow.style.position = "absolute"
    RWindow.style.margin = "auto"
    if (Draggable !== false && Draggable == null) {
        RWindow.className = RWindow.className + " drag"           
    }
    if (Resizable !== false && Resizable == null) {
        RWindow.className = RWindow.className + " resize"           
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
    if (HelpButton) {
        const RWindowHelpButton = document.createElement("button")
        RWindowHelpButton.ariaLabel = "Help"
        RWindowTitleControls.appendChild(RWindowHelpButton)
        if (HelpButton) {
            RWindowHelpButton.onclick = async function() {
                $MessageBox({Type:1,Msg:HelpButton,Sound:null})
            }
        }
    }
    if (MinimizeButton == true || CloseButton == null) {
        const RWindowMinimizeButton = document.createElement("button")
        RWindowMinimizeButton.ariaLabel = "Minimize"
        RWindowTitleControls.appendChild(RWindowMinimizeButton)
    }
    if (MaximizeButton == true || CloseButton == null) {
        const RWindowMaximizeButton = document.createElement("button")
        RWindowMaximizeButton.ariaLabel = "Maximize"
        RWindowTitleControls.appendChild(RWindowMaximizeButton)
        if (DisableMaximize) {
            //RWindowMaximizeButton.classList.add("disable")
            RWindowMaximizeButton.disabled = true
        } else {
            var WinX1 = Width
            var WinY1 = Height
            if (Left !== null) {
                var WinX2 = Left;            
            } else {
                WinX2 = "0"
            }
            if (Top !== null) {
                var WinY2 = Top;            
            } else {
                WinY2 = "0"
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
                    RWindow.style.left = 0
                    RWindow.style.top = 0
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
    }
    if (CloseButton == true || CloseButton == null) {
        const RWindowCloseButton = document.createElement("button")
        RWindowCloseButton.ariaLabel = "Close"
        RWindowTitleControls.appendChild(RWindowCloseButton)
        if (DisableClose) {
            RWindowCloseButton.classList.add("disable")
        } else {
        if (!NoCheck(OnClose)) {
            RWindowCloseButton.onclick = function(){OnClose(RWindow); RWindow.remove()}
        } else {
        RWindowCloseButton.onclick = function(){RWindow.remove()}}
        }
    }
    const RWindowBody = document.createElement("div")
    RWindowBody.className = "window-body"
    RWindow.appendChild(RWindowBody)
    if (!NoCheck(innerHTML)) {
        RWindowBody.innerHTML = innerHTML
    } else
    if (!NoCheck(Url)) {
        // W.I.P.
    }
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
    if (Left !== false || Left !== null) {
        // console.log(RWindow.offsetWidth)
        RWindow.style.left="calc("+Left+"% - "+(RWindow.offsetWidth/2)+"px)"
    }
    if (Top !== false || Top !== null) {
        // console.log(RWindow.offsetHeight)
        RWindow.style.top="calc("+Top+"% - "+(RWindow.offsetHeight/2)+"px)"
    }
    if (Return) {
        return RWindow
    }
}

///New $Notify Function
function $Notify({Msg = null, Title = null, Length = 5000}) {
    const ballon = document.createElement("div") // Ballon tip
    ballon.className = "notif-bubble"
    ballon.style.minHeight = "45px"
    const TitleT = document.createElement("p") // Title
    if (!NullCheck(Title)) { TitleT.innerHTML = Title.toString() }
    TitleT.style.marginLeft = "10px"
    TitleT.style.padding  = "5px 0px 1px 0px"
    TitleT.style.fontWeight = "bold"
    TitleT.style.minHeight = "19px"
    ballon.appendChild(TitleT)
    const ballonX = document.createElement("span") // Close button
    ballonX.innerText = "×"
    ballonX.className = "notif-bubble-close"
    ballonX.style.position = "absolute"
    ballonX.style.top = "5px"
    ballonX.style.right = "5px"
    ballonX.style.fontFamily = "arial,sans-serif"
    ballonX.style.width = "15px"
    ballonX.style.height = "15px"
    ballon.appendChild(ballonX)
    const ballonM = document.createElement("p") // Inner Message
    ballonM.innerHTML = Msg.toString()
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
    $Audio("ballon").play()
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
    if (!NullCheck(Title) && !NullCheck(Text) && NullCheck(Length)) {
        lengthDelay = (((Title.toString().length)+(Text.toString().length))*2)
    } else {
        lengthDelay = 750
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
    ballon.remove()}, Length+lengthDelay)
}

///New $MessageBox Function
function $MessageBox({Type, Msg, Title = null, Icon = null, Sound = "auto", Left = 50, Top = 50, ShowsMsg = true, Button1 = "Ok", Button2 = null, Button3 = null, OnButton1 = null, OnButton2 = null, OnButton3 = null, Help = null, OnX = null, OnClose = null, Focus = 1, Return = false}) {
    if (Help) {helpbutton = true} else {helpbutton = null}
    var Window = $MakeWindow({Width: 'auto', Height: 'auto', Title: Title, MinimizeButton: false, MaximizeButton: false, HelpButton: helpbutton, Draggable: true, Resizable: false, Left: Left, Top: Top, OnClose: OnX||OnClose, Return:true})
    Window.style.removeProperty("height") // Make the thing weird if to many text
    Window.style.minWidth = "150px"
    if (Type === 1 && Title === null) {
        Window.querySelector(".title-bar-text").innerHTML = "Message"
    } else {Window.querySelector(".title-bar-text").innerHTML = Title}
    if (Type === 2 && Title === null) {
        Window.querySelector(".title-bar-text").innerHTML = "Information"
    }
    if (Type === 3 && Title === null) {
        Window.querySelector(".title-bar-text").innerHTML = "Error"
    }
    if (Type === 4 && Title === null) {
        Window.querySelector(".title-bar-text").innerHTML = "Warning"
    }
    const WindowIcon = document.createElement("img")
    WindowIcon.style.float = "left"
    WindowIcon.draggable = false
    WindowIcon.style.width = "34px"
    if (Icon == 'auto' || Icon !== undefined) {
        if (Type === 1) {
            WindowIcon.src = "C/System33/Icons/System/info.png"
            WindowIcon.alt = "Information"
            //console.log(Msg);
        }
        if (Type === 2) {
            WindowIcon.src = "C/System33/Icons/System/question.png"
            WindowIcon.alt = "Question"
            //console.log(Msg);
        }
        if (Type === 3) {
            WindowIcon.src = "C/System33/Icons/System/error.png"
            WindowIcon.alt = "Error"
            if(ShowsMsg === true) {console.error(Msg);}
        }
        if (Type === 4) {
            WindowIcon.src = "C/System33/Icons/System/warning.png"
            WindowIcon.alt = "Warning"
            if(ShowsMsg === true) {console.warn(Msg);}
        }
    } else {
        WindowIcon.src = Icon
    }
    
    Window.querySelector(".window-body").appendChild(WindowIcon)
    var CentralText = AddText(Msg)
    CentralText.style.marginRight = "10px"
    CentralText.style.fontSize = "10.75px"
    CentralText.style.textAlign = "center"
    Window.querySelector(".window-body").appendChild(CentralText)
    const WindowButtonSection = document.createElement("section")
    WindowButtonSection.className = "field-row"
    WindowButtonSection.style.justifyContent = "center"
    if (Button3 != null) {
        const WindowButton3 = document.createElement("button")
        WindowButton3.textContent = Button3
        WindowButton3.setAttribute('num', 3)
        WindowButton3.onclick = function(){
            if (!NullCheck(OnButton3)) {
                OnButton3(Window)
                Window.remove()
            } else
            if (!NullCheck(OnClose)) {
                OnClose(Window)
                Window.remove()
            } else {Window.remove()}
        }
        WindowButtonSection.appendChild(WindowButton3)
    }
    const WindowButton1 = document.createElement("button")
    WindowButton1.textContent = Button1
    WindowButton1.setAttribute('num', 1)
    WindowButton1.onclick = function(){
        if (!NullCheck(OnButton1)) {
            OnButton1(Window)
            Window.remove()
        } else
        if (!NullCheck(OnClose)) {
            OnClose(Window)
            Window.remove()
        } else {Window.remove()}
    }
    WindowButtonSection.appendChild(WindowButton1)
    if (Button2 != null) {
        const WindowButton2 = document.createElement("button")
        WindowButton2.textContent = Button2
        WindowButton2.setAttribute('num', 2)
        WindowButton2.onclick = function(){
            if (!NullCheck(OnButton2)) {
                OnButton2(Window)
                Window.remove()
            } else
            if (!NullCheck(OnClose)) {
                OnClose(Window)
                Window.remove()
            } else {Window.remove()}
        }
        WindowButtonSection.appendChild(WindowButton2)
    }
    
    //Window.querySelector("[aria-label=\"Close\"]").removeAttribute("onclick");
    Window.querySelector("[aria-label=\"Close\"]").onclick = function(){
        if (!NullCheck(OnX)) {
            OnX(Window)
            Window.remove()
        } else
        if (!NullCheck(OnClose)) {
            OnClose(Window)
            Window.remove()
        } else Window.remove()
    }
    Window.querySelector(".window-body").appendChild(WindowButtonSection)
    document.body.appendChild(Window)
    if (Sound == "auto" || Sound === undefined) {
        if (Type == 1) {
            $Audio("exclamation").play()
         } else if (Type == 2) {
             $Audio("ding").play()
         } else if (Type == 3) {
             $Audio("criticalError").play()
         } else if (Type == 4) {
             $Audio("error").play()
         }
    } else {
        if (Sound !== null) {
            $Audio(Sound).play()
        }
        
    }
    if (Help) {Window.querySelector("[aria-label=\"Help\"]").onclick = Help}
    document.body.appendChild(Window)
    if(Focus >= 1 && Focus <= 3){
        var Button = Window.querySelector('[num="'+Focus+'"]')
        Button.focus()
        Window.querySelector(".window-body").onclick = () => {Button.focus()}
    }
    if (Return) {
        return Window
    }
}

// Create shortcut
function $Shortcut(Name, Image, Left, Top, Function, Disable = false) {
    const shortcut = document.createElement("div")
    const name = Name
    shortcut.id = "appicon"
    shortcut.className = name.replace(/[^a-zA-Z ]/g,"")+ " shortcut"
    shortcut.setAttribute("name", Name)
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
            var functionText = function(){
                return Function.toString()
            }();
            var shortcut2 = Name
            scriptt = document.createElement("script")
            scriptt.text = `
            $("."+document.currentScript.parentNode.className[0])
            .dblclick(function(shortcut){
                f = `+functionText+`
                f()
            })
            .doubletap(function(shortcut){
                f = `+functionText+`
                f()
            });`
            shortcut.appendChild(scriptt)
        }
    }
    if (!Disable) {
        document.querySelector(".Desktop").querySelector("#shortcuts").appendChild(shortcut)
    }
    return shortcut
}

function $Prompt(Text, Callback, Help = null) {
    const Prompt = $MakeWindow({Width: '300px', Height: '100px', Title: "Prompt", MinimizeButton: false, MaximizeButton: false, HelpButton: Help, Draggable: true, Resizable: false, Return: true})
    const WindowButtonSection = document.createElement("section")
    WindowButtonSection.className = "field-row"
    WindowButtonSection.style = `text-align: justify; /* For Edge */
    -moz-text-align-last: center; /* For Firefox prior 58.0 */
    text-align-last: center;`
    const WindowButton2 = document.createElement("button")
    WindowButton2.textContent = "Cancel"
    WindowButton2.onclick = function(){
        Prompt.remove()
    }
    const PromptBox = document.createElement("input")
    const WindowButton1 = document.createElement("button")
    WindowButton1.textContent = "OK"
    WindowButton1.onclick = function(){
        Prompt.remove(); if (PromptBox.value.length > 0) {
        Callback(PromptBox.value) }
    }
    WindowButtonSection.appendChild(PromptBox)
    WindowButtonSection.appendChild(document.createElement("br"))
    WindowButtonSection.appendChild(WindowButton2)
    WindowButtonSection.appendChild(WindowButton1)
    Prompt.querySelector(".window-body").appendChild(WindowButtonSection)
}

function $ResetData() { // Dangerous Function
    var MsgBox = $MessageBox({Type:4,Title:"Warning",Msg:"Are you shure you want to erase all of your data? <br> This data will not be recover again.",ShowsMsg:false,Button1:"Yes",Button2:"No",Focus:2,OnButton1:()=>{
        clearInterval(DesktopStorage)
        localStorage.clear()
        $Reboot()
    }})
}

// var afterBoot = setInterval(() => {
//     if (Booted) {
//         const Apps = {
//             "Credits.txt": $Shortcut("Credits.txt", "C/System33/Icons/System/text-file.png", "0xp", "0xp", () => {$Exe("1")}, true)
//         }
//         function $InsertApp(Name) {
//             if (!document.querySelector("#shortcuts").querySelector("#"+Name)) {
//                 document.querySelector(".Desktop").querySelector("#shortcuts").appendChild(Apps[Name])
//             }
//         }
    
//         $InsertApp("Credits.txt")
//         clearInterval(afterBoot)
//     }
// }, 10);

{
   async function contextMenu() {   // Context Menu (Coming soon...)
    const ContextMenu = document.createRange().createContextualFragment(`<div id="shortcutcontextMenu" class="shortcutcontext-menu"style="display:none">
                            <style type="text/css">
                                .shortcutcontext-menu {
                                    position: absolute;
                                    text-align: center;
                                    background: white;
                                    border: 1px solid black;
                                    z-index: 100;
                                }

                                .shortcutcontext-menu ul {
                                    padding: 0px;
                                    margin: 0px;
                                    min-width: 150px;
                                    list-style: none;
                                }

                                .shortcutcontext-menu ul li {
                                    padding-bottom: 7px;
                                    padding-top: 7px;
                                    border-bottom: 1px solid;
                                }

                                .shortcutcontext-menu ul li:last-child {
                                    border-bottom: none
                                }

                                .shortcutcontext-menu ul li a {
                                    text-decoration: none;
                                    color: black;
                                }

                                .shortcutcontext-menu ul li:hover {
                                    background: white;
                                }
                            </style>
                            <ul link>
                                <li id="newShortcut"><a>Create Shortcut</a></li>
                            </ul>
                        </div>`).querySelector("div")
    while (!document.querySelector(".Desktop")) await sleep(10)
    document.querySelector(".Desktop").addEventListener("contextmenu", (e) => {
        e.preventDefault();
        document.onclick = () => {ContextMenu.style.display = 'none'};
        document.oncontextmenu = () => {ContextMenu.style.display = 'block';
        ContextMenu.style.left = e.pageX + "px";
        ContextMenu.style.top = e.pageY + "px";};
    })
    document.body.appendChild(ContextMenu)
    ContextMenu.querySelector("#newShortcut").onclick = () => {
        const Name = prompt("Shortcut Name (Important")
        const Image = prompt("Shortcut Image")
        const Function = prompt("Shortcut Function")
        const Program = `$Shortcut("`+Name+`","`+Image+`","50%","50%",(() => {
            `+Function+`
          }));`
        eval(Program)
    }
}
contextMenu()
};

// Kernel
const $Kernel = {
    System33: {        // System33 Functions (moved here in 1.0.5)
        newForm: $MakeWindow,
        msgBox: $MessageBox,
        newNotif: $Notify,
        run: $Exe,
        newFile: $File,
        audios: {
            "main": 'C/System33/Sounds/',
            "criticalError": new Audio('C/System33/Sounds/criticalerror.wav'),
            "error": new Audio('C/System33/Sounds/error.wav'),
            "exclamation": new Audio('C/System33/Sounds/exclamation.wav'),
            "startup": new Audio('C/System33/Sounds/betastartup.wav'),      //Currently in Beta
            "shutdown": new Audio('C/System33/Sounds/betashutdown.wav'),        //Currently in Beta
            "ballon": new Audio('C/System33/Sounds/ballon.wav'),
            "ding1": new Audio('C/System33/Sounds/ding1.wav'),
            "ding2": new Audio('C/System33/Sounds/ding2.wav'),
            "reversedCritital": new Audio('C/System33/Sounds/reversedcritital.wav'),
            "classicerror": new Audio('C/System33/Sounds/classicerror.mp3'),        //The only MP3 (for now)
        }
    },
    softcode: {        // System/Apps Functions
        apps: {}
    },
    hardcode: {        // Advanced Functions
        toggleFullscreen: $Fullscreen,
        crash: (code)=>{ "Crash the website with 'on-purpose muted sounds' and return stopcode as a search url (RSOD Coming soon)";
            "use strict"
            if (!code) {code = "UNIDENTIFIED_INTENTIONAL_CRASH"}
            //var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?stopCode='+code.toString()+'';
            //window.history.pushState({path:newurl},'',newurl);
            var noise = new Audio('C/System33/Sounds/alphacrash.wav')
            noise.volume = 0.75
            noise.play()
            function muteMe(elem) {elem.muted = false;elem.pause();}// Try to mute all video and audio elements on the page
            function mutePage() {
                var elems = document.querySelectorAll("video, audio");

                [].forEach.call(elems, function(elem) { muteMe(elem); });
            }
            mutePage()
            eval("[...Array(2**32-1)]")
        }
    }
}

// Finish

//console.log("System 33 Ready!")
