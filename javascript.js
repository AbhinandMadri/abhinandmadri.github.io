var tablinks = document.getElementsByClassName("tablinks")
var tabcontents = document.getElementsByClassName("tabcontents")

function opentab(tabname) {
    for(tablinks of tablinks){
        tablink.classList.remove("acl");
    }
    for(tabcontenty of tabcontents){
        tabcontents.classList.remove("acl");
    }
    event.currentTarget.classList.add("acl")
    document.getElementById(tabname).classList.add("act");
}