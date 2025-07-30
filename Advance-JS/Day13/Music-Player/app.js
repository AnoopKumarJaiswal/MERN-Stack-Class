const playlist = [
    {
        name : "Ek Din",
        trakName : "music0",
        img : "img0.png"
    },

    {
        name : "Ishq Bulawa",
        trakName : "music1",
        img : "img1.jpg"
    },

    {
        name : "Phir Bhi tumko Chahunga",
        trakName : "music2",
        img : "img2.jpg"
    },

    {
        name : "Pyar ki Ek .",
        trakName : "music3",
        img : "img3.jpg"
    },

    {
        name : "Saiyanra",
        trakName : "music4",
        img : "img4.jpg"
    },

    {
        name : "Tere Naina aise.",
        trakName : "music5",
        img : "img5.jpg"
    },

    {
        name : "Tum Hi HO",
        trakName : "music6",
        img : "img6.jpg"
    },
]



const button = document.getElementById("btn")

button.addEventListener("click" , () =>{

    
    let currSong = playlist[0]
    let currPlayingSong = new Audio(`./Media/${currSong.trakName}.mp3`)
    currPlayingSong.play()
})