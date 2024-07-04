
    var tablinks = document.getElementsByClassName("story");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
      for(tablink of tablinks){
        tablink.classList.remove("activelink");
      }
      for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("activelink");
      document.getElementById(tabname).classList.add("active-tab");
    }
  

 