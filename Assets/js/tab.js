function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();



  
  function openForm(evt, cityName) {
    var i, bookOption, bookTextOption, packageOption;
    bookOption = document.getElementsByClassName("b-tab");
    for (i = 0; i < bookOption.length; i++) {
      bookOption[i].style.display = "none";
    }
    bookTextOption = document.getElementsByClassName("book-search-form");
    for (i = 0; i < bookTextOption.length; i++) {
      bookTextOption[i].style.display = "none";
    }
    packageOption = document.getElementsByClassName("package-option");
    for (i = 0; i < packageOption.length; i++) {
      packageOption[i].className = packageOption[i].className.replace(" package-active", "");
    }
    document.getElementById(cityName).style.display = "block";
    document.getElementById(cityName+"-form").style.display = "block";

    evt.currentTarget.className += " package-active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultfOpen").click();
