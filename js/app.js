// let contacts = false;
// let messages = false;
// let calls = false;
// let dataPlan = false;

// contacts
function closeContacts() {
  document.getElementById("contacts").classList.add("hidden");
}
function openContacts() {
  document.getElementById("contacts").classList.remove("hidden");
}

// apps
function closeApps() {
  document.getElementById("apps").classList.add("hidden");
}
function openApps() {
  document.getElementById("apps").classList.remove("hidden");
}

// home
function closeHome() {
  document.getElementById("home-screen").classList.add("hidden");
}
function openHome() {
  document.getElementById("home-screen").classList.remove("hidden");
}

// messages
function closeMessages() {
  document.getElementById("messages").classList.add("hidden");
}
function openMessages() {
  document.getElementById("messages").classList.remove("hidden");
}

// calls
function closeCalls() {
  document.getElementById("calls").classList.add("hidden");
}
function openCalls() {
  document.getElementById("calls").classList.remove("hidden");
}

// data plan
function closeDataPlan() {
  document.getElementById("data-plan").classList.add("hidden");
}
function openDataPlan() {
  document.getElementById("data-plan").classList.remove("hidden");
}

document.addEventListener("click", (e) => {
  console.log(e.target.id);
  switch (e.target.id) {
    case "home-app-contacts":
      openContacts();
      closeApps();
      closeHome();
      closeMessages();
      closeCalls();
      closeDataPlan();
      break;

    case "home-app-apps":
      closeContacts();
      openApps();
      closeHome();
      closeMessages();
      closeCalls();
      closeDataPlan();
      break;

    case "home-app-messages":
      closeContacts();
      closeApps();
      closeHome();
      openMessages();
      closeCalls();
      closeDataPlan();

      break;
    case "home-app-calls":
      closeContacts();
      closeApps();
      closeHome();
      closeMessages();
      openCalls();
      closeDataPlan();

      break;

    case "home-app-data-plan":
      closeContacts();
      closeApps();
      closeHome();
      closeMessages();
      closeCalls();
      openDataPlan();

      break;
    case "nav-btn-close-all":
      closeContacts();
      closeApps();
      openHome();
      closeMessages();
      closeCalls();
      closeDataPlan();

      break;

    default:
      break;
  }
});
