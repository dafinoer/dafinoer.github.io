
//<span>quote from joker</span> ^1000\n `<span>If you’re good at something, never do it for free.</span>` ^1000\n `it’s not about the money, it’s about sending a message.` ^1000\n `<span class="username-name">user@local:~$</span>`
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
    strings:['Software Developer', "Outdoor Life Enthusias", "Software Developer | Outdoor Life Enthusias"],
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
