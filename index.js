// ====== FADE-IN ON SCROLL WITH STAGGERED ANIMATION ======
document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with the class 'card'
  const cards = document.querySelectorAll(".card");

  // Intersection Observer options: when 15% of the card is visible, trigger the callback
  const appearOptions = {
    threshold: 0.15, // 15% visibility threshold
    rootMargin: "0px 0px -50px 0px",
  };

  // Create the Intersection Observer
  const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    // Filter entries that are intersecting (visible)
    const visibleEntries = entries.filter((entry) => entry.isIntersecting);
    // Sort by DOM order to ensure correct sequence
    visibleEntries.sort((a, b) => {
      return (
        Array.from(cards).indexOf(a.target) -
        Array.from(cards).indexOf(b.target)
      );
    });
    // Loop through each visible card
    visibleEntries.forEach((entry, i) => {
      // Add a staggered delay based on the card's order
      setTimeout(() => {
        entry.target.classList.add("appear"); // Add the 'appear' class to trigger animation
        observer.unobserve(entry.target); // Stop observing this card
      }, i * 200); // 200ms delay between each card
    });
  }, appearOptions);

  // Observe each card for scroll-in-view
  cards.forEach((card) => {
    appearOnScroll.observe(card);
  });
});

//pop up
document.querySelectorAll(".openpop").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("modal").style.display = "flex";
  });
});

let closepop = document.getElementById("closepop");
let submitpop = document.getElementById("submitpop");

// Validate form input on submit

submitpop.addEventListener("click", function (event) {
  let fullname = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  if (fullname === "") {
    alert("Enter your name");
    fullname.focus();
    event.preventDefault;
  } else if (email === "") {
    alert("Enter your email");
    email.focus();
    event.preventDefault;
  } else {
    let fulname = document.getElementById("name").value;
    let emil = document.getElementById("email").value;
    alert(
      `congrats ${fulname} you have successfully booked with us, we'll reach out to you through email on ${emil}`
    );
    let fullname = (document.getElementById("name").value = "");
    let email = (document.getElementById("email").value = "");
  }
});

closepop.addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});

// login and sign up page
// let popup = document.getElementById("popup");
// let hide = document.getElementById("hide");

// function openPopup() {
//   let fullname = document.getElementById("regname").value;
//   let email = document.getElementById("regemail").value;
//   let password = document.getElementById("regpass").value;

//   if (fullname === "") {
//     alert("Enter your Full Name");
//   } else if (email === "") {
//     alert("Enter your Email address");
//   } else if (password === "") {
//     alert("Enter your password");
//   } else {
//     popup.classList.add("visible");
//     hide.classList.add("remove");
//     let fullname = (document.getElementById("regname").value = "");
//     let email = (document.getElementById("regemail").value = "");
//     let password = (document.getElementById("regpass").value = "");
//   }
// }
// function closePopup() {
//   popup.classList.remove("visible");
//   hide.classList.remove("remove");
// }
