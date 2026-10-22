
var members = [
    { id: 1001, name: "Aarav Sharma", email: "aarav@example.com", points: 24500 },//fake fata
  ];
  var nextId = 1004;

  // removes < and > so nobody can put html in the inputs
  function cleanText(text) {
    return text.replace(/</g, "").replace(/>/g, "").trim();
  }

  function getTier(points) {
    if (points >= 20000) {
      return "Platinum";
    } else if (points >= 5000) {
      return "Gold";
    } else {
      return "Silver";
    }
  }

  function showMembers() {
    var search = cleanText(document.getElementById("search-input").value).toLowerCase();
    var body = document.getElementById("table-body");
    var html = "";
    var count = 0;

    for (var i = 0; i < members.length; i++) {
      if (members[i].name.toLowerCase().indexOf(search) !== -1) {
        html = html + "<tr><td>" + members[i].id + "</td><td>" + members[i].name + "</td><td>" + getTier(members[i].points) + "</td><td>" + members[i].points + "</td></tr>";
        count = count + 1;
      }
    }

    body.innerHTML = html;
    document.getElementById("loading").style.display = "none";

    // if nothing found show the empty message
    if (count === 0) {
      document.getElementById("empty").style.display = "block";
      document.getElementById("table").style.display = "none";
    } else {
      document.getElementById("empty").style.display = "none";
      document.getElementById("table").style.display = "table";
    }
  }

  // setTimeout pretends the internet is slow so the loading text shows
  setTimeout(showMembers, 1500);

  document.getElementById("search-input").addEventListener("input", showMembers);

  // puts the red border + message on a box, or removes it if message is empty
  function setError(inputId, errorId, message) {
    document.getElementById(errorId).textContent = message;
    if (message === "") {
      document.getElementById(inputId).removeAttribute("aria-invalid");
    } else {
      document.getElementById(inputId).setAttribute("aria-invalid", "true");
    }
  }

  document.getElementById("add-button").addEventListener("click", function () {
    var name = cleanText(document.getElementById("name-input").value);
    var email = cleanText(document.getElementById("email-input").value);
    var points = cleanText(document.getElementById("points-input").value);
    var allGood = true;

    document.getElementById("message").textContent = "";

    if (name.length < 2) {
      setError("name-input", "name-error", "Please enter a name (at least 2 letters)");
      allGood = false;
    } else {
      setError("name-input", "name-error", "");
    }

    // simple email check, needs an @ and a dot
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
      setError("email-input", "email-error", "Please enter a valid email");
      allGood = false;
    } else {
      setError("email-input", "email-error", "");
    }

    if (points === "" || isNaN(points) || Number(points) < 0) {
      setError("points-input", "points-error", "Points must be a number, 0 or more");
      allGood = false;
    } else {
      setError("points-input", "points-error", "");
    }

    // dont add anything if a box is wrong
    if (allGood === false) {
      return;
    }

    members.push({ id: nextId, name: name, email: email, points: Number(points) });
    nextId = nextId + 1;

    document.getElementById("name-input").value = "";
    document.getElementById("email-input").value = "";
    document.getElementById("points-input").value = "";
    document.getElementById("message").textContent = name + " was added!";
    showMembers();

    // fake analytics
    console.log("[Analytics] User interacted with End-to-End Frequent Flyer Portal");
  });

