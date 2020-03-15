// Switch between pages HOME/ABOUT/CONTACTS

function mainMenuAbout() {
  document.getElementById("events-001").style.display = "none";
  document.getElementById("about-001").style.display = "block";
  document.getElementById("about-002").style.display = "block";
  document.getElementById("contacts-001").style.display = "none";
  document.getElementById("menu-home").classList.remove("menu_selected")
  document.getElementById("menu-about").classList.add("menu_selected")
  document.getElementById("menu-contacts").classList.remove("menu_selected")
}

function mainMenuHome() {
  document.getElementById("about-001").style.display = "none";
  document.getElementById("about-002").style.display = "none";
  document.getElementById("contacts-001").style.display = "none";
  document.getElementById("events-001").style.display = "block";
  document.getElementById("menu-home").classList.add("menu_selected")
  document.getElementById("menu-about").classList.remove("menu_selected")
  document.getElementById("menu-contacts").classList.remove("menu_selected")
}

function mainMenuContacts() {
  document.getElementById("about-001").style.display = "none";
  document.getElementById("about-002").style.display = "none";
  document.getElementById("contacts-001").style.display = "block";
  document.getElementById("events-001").style.display = "none";
  document.getElementById("menu-home").classList.remove("menu_selected")
  document.getElementById("menu-about").classList.remove("menu_selected")
  document.getElementById("menu-contacts").classList.add("menu_selected")
}