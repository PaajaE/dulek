function nextReference(arrowId, isDesktop) {
  const newRefId = isDesktop
    ? arrowId.replace("arrow_", "")
    : arrowId.replace("arrow_mobile_", "");
  const references = document.querySelectorAll(".reference-container");
  references.forEach((ref) => {
    if (ref.id === newRefId) {
      ref.classList.remove("hidden");
    } else {
      ref.classList.add("hidden");
    }
  });
}

let prevScrollpos = 0;
window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-20%";
  }
  prevScrollpos = currentScrollPos;
};

function toggleMenu() {
  var x = document.getElementsByTagName("nav");
  if (x[0].style.display === "block") {
    x[0].style.display = "none";
    document.getElementById("menuCloseIcon").style.display = "none";
    document.getElementById("menuOpenIcon").style.display = "block";
    document.body.style.overflow = "auto";
  } else {
    x[0].style.display = "block";
    document.body.style.overflow = "hidden";
    document.getElementById("menuCloseIcon").style.display = "block";
    document.getElementById("menuOpenIcon").style.display = "none";
  }
}

var getWindowSize = (function () {
  var docEl = document.documentElement,
    IS_BODY_ACTING_ROOT = docEl && docEl.clientHeight === 0;

  // Used to feature test Opera returning wrong values
  // for documentElement.clientHeight.
  function isDocumentElementHeightOff() {
    var d = document,
      div = d.createElement("div");
    div.style.height = "2500px";
    d.body.insertBefore(div, d.body.firstChild);
    var r = d.documentElement.clientHeight > 2400;
    d.body.removeChild(div);
    return r;
  }

  if (typeof document.clientWidth == "number") {
    return function () {
      return { width: document.clientWidth, height: document.clientHeight };
    };
  } else if (IS_BODY_ACTING_ROOT || isDocumentElementHeightOff()) {
    var b = document.body;
    return function () {
      return { width: b.clientWidth, height: b.clientHeight };
    };
  } else {
    return function () {
      return { width: docEl.clientWidth, height: docEl.clientHeight };
    };
  }
})();

function hideMenu() {
  var width = getWindowSize().width;
  if (width < 768) {
    toggleMenu();
  }
}
