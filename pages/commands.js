var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;

        setTimeout(() => {
            content.style.padding = "0px";
        }, 180)
    } else {
        content.style.padding = "20px";
        content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}