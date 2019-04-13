
var typed = new Typed('#holla', {
    strings:['Hallo World', "My Name Dafi", "Nice To Meet You"],
    typeSpeed: 90,
    startDelay: 10,
    loop:true,
    backSpeed:90,
    showCursor:true,
    cursorChar:"▋",
    preStringTyped: function(pos, self) {
        console.log("preStringType" );
     },
     onStringTyped: function(arrayPos, self){
        console.log("onStringTyped \n"+ self.strings);
     },
})

var subTitle = new Typed('#sub-title', {
    strings:['Software Developer', "Outdoor Life", "Software Developer | Outdoor Life"],
    typeSpeed: 90,
    startDelay: 10,
    loop:false,
    backSpeed:90,
    showCursor:true,
    cursorChar:"▋",
    preStringTyped: function(pos, self) {
        console.log("preStringType" );
     },
     onStringTyped: function(arrayPos, self){
        console.log("onStringTyped \n"+ self.strings);
     },
})
