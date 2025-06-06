function goto(){
    const yes = document.getElementById("class").value;

    const pages = {
        class1: "class1.html",
        class2: "class2.html",
        class3: "class3.html",
        class4: "class4.html",
        class5: "class5.html",
        class6: "class6.html",
        class7: "class7.html",
        class8: "class8.html",
    }
    if(pages[yes]){
        window.location.href = pages[yes];
        return false;
    }
    else{
         alert("Please select a valid class.");
        return false;
    }



}