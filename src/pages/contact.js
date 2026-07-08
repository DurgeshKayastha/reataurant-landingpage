export function showContact() {
  const content = document.querySelector("#content");

  const heading = document.createElement("h1");
  heading.textContent = "Contact Us";

  // address details
  const addressHeading = document.createElement("h2");
  addressHeading.textContent = "Visit Us";

  const addressText = document.createElement("p");
  addressText.textContent = "123 Flavor Street, Nashik, Maharashtra";

  // contact details
  const infoHeading = document.createElement("h2");
  infoHeading.textContent = "Reach Us";

  const phoneText = document.createElement("p");
  phoneText.textContent = "Phone: +91 12345 67890";

  const emailText = document.createElement("p");
  emailText.textContent = "Email: hello@bellavista.com";

  // Open section
  const hoursHeading = document.createElement("h2");
  hoursHeading.textContent = "Hours";

  const hoursList = document.createElement("ul");
  const hours = [
    "Mon - Fri: 11am - 10pm",
    "Sat - Sun: 10am - 11pm"
  ];

  hours.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    hoursList.appendChild(li);
  });

 
  content.appendChild(heading);
  content.appendChild(addressHeading);
  content.appendChild(addressText);
  content.appendChild(infoHeading);
  content.appendChild(phoneText);
  content.appendChild(emailText);
  content.appendChild(hoursHeading);
  content.appendChild(hoursList);
}
