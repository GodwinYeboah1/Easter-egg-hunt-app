$(document).ready(function(){
    $('.close-btn').click(function(){
        console.log("Close the Info box");
        $(this).hide();
    });


    $('.egg-link').click(function(){
        console.log("wassup yall");
        let str = "Click to win !!";
        let result = str.link("http://virtualcommunities.naccho.org/lhitsandbox/agenda");
        document.getElementById("egg-link").innerHTML = result;
        console.log("Object: ", result);
    });
});


