// document.querySelector('#contents_wrapper').classList.add('styletest')
console.log('foreground.js loaded')

var iframe = document.getElementById("ctl00_cphBody_genericIFrame");

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

// if iframe exists:
if (iframe) {
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    console.log("iframe found");




    const mainContainer = iframeDoc.getElementById("divHasAccess")
    // console.log(mainContainer)



    //get div with id="divUserPic" from iframeDoc
    const divUserPic = iframeDoc.getElementById("divUserPic")
    console.log(divUserPic)



    // add position: relative to divUserPic
    divUserPic.style.position = "relative"



    // get img element from divUserPic
    const img = divUserPic.getElementsByTagName("img")[0]
    console.log(img)

    let imgCopy = img.cloneNode(true)
    console.log(imgCopy)

    //change id of imgCopy to "rickrollpic"
    imgCopy.id = "rickrollpic"
    console.log("changed id of imgCopy to rickrollpic")

    //change src of imgCopy to rickroll gif
    imgCopy.src = "https://c.tenor.com/yheo1GGu3FwAAAAd/rick-roll-rick-ashley.gif"
    console.log("changed src of imgCopy to rickroll gif")







// make imgCopy have 0% opacity
    imgCopy.style.opacity = "0"

    //make imgCopy a child of divUserPic
    divUserPic.appendChild(imgCopy)
    console.log("made imgCopy a child of divUserPic")

    // add position: absolute to imgCopy and img
    imgCopy.style.position = "absolute"
    img.style.position = "absolute"

    // set left: 0px to imgCopy and img
    imgCopy.style.left = "0px"
    img.style.left = "0px"

    // add z-index: 10 to imgCopy
    imgCopy.style.zIndex = "10"





    // set transition: opacity 5s eas-in for imgCopy
    imgCopy.style.transition = "opacity 5s ease-in"
    // set -moz-transition: opacity 5s ease-in for imgCopy
    imgCopy.style.MozTransition = "opacity 5s ease-in"
    // set -webkit-transition: opacity 5s ease-in for imgCopy
    imgCopy.style.WebkitTransition = "opacity 5s ease-in"
    // set -o-transition: opacity 5s ease-in for imgCopy
    imgCopy.style.OTransition = "opacity 5s ease-in"

    // over 5 seconds, set opacity to 100%
    setTimeout(function() {
        imgCopy.style.opacity = "1"
        
    }, 10000)




    // get div with class="row" in mainContainer
    const row = mainContainer.getElementsByClassName("row")[0]
    // console.log(row)

    // get div with class="span8" in row
    const span8 = row.getElementsByClassName("span8")[0]
    // console.log(span8)

    // get first table in span8
    const table1 = span8.getElementsByTagName("table")[0]
    console.log(table1)

    // get second row in table1
    const row2 = table1.getElementsByTagName("tr")[1]
    console.log(row2)

    /// get first td in row2
    const td1 = row2.getElementsByTagName("td")[0]



    // get table in td1
    const table2 = td1.getElementsByTagName("table")[0]
    console.log(table2)

    // add margin-left: 10px to table2
    table2.style.marginLeft = "98px"
    
   
    // // add audio element to table2
    // const audio = document.createElement("audio")
    // audio.src = "./audio/rickroll.mp3"
    // audio.controls = true

    let filepath = chrome.runtime.getURL("./audio/rickroll.mp3")
    console.log(filepath)
// create audio element with src = filepath
    const audio = document.createElement("audio")
    audio.controls = true
    audio.id = "rickrollaudio"
    // mute audio
    audio.volume = 1
    //hide audio
    audio.style.display = "none"
   // add source element to audio
    const source = document.createElement("source")
    source.src = filepath
    audio.appendChild(source)


    // add audio to table2
    table2.appendChild(audio)
    console.log("added audio to table2")

    
    // wait 5 seconds and play audio
    setTimeout(function() {
        audio.play()
            // for i in range 0.0 to 1.0 by 0.01
    }, 12000)





    // const audio = document.createElement("audio")
    // audio.src = filepath
    // audio.muted = true
    // audio.autoplay = true
    // audio.loop = true
    // audio.controls = true

    // // audio visibility to hidden
    // // audio.style.visibility = "hidden"

    // td1.appendChild(audio)
    // // play audio
    // // audio is id "audio"from iframeDoc

    // console.log(audio)
    // // audio.play()

    // after 5 seconds, append audio to table2
    // setTimeout(function() {
    //     td1.appendChild(audio)
    // }, 5000)



} else {
    console.log("iframe not found");

}




