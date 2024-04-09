// Selecting the necessary DOM elements
const input = document.getElementById("inp");
const qrcodeContainer = document.getElementById("qrcode-container");
const qrimg = document.getElementById("qrimg");
const btn = document.getElementById("btn");
const downloadBtn = document.getElementById("download-btn");
const sizeInput = document.getElementById("size");
const sizeInfo = document.getElementById("size-info");
const newBtn = document.getElementById("new-btn");

// Add an event listener to the button that triggers the creation of the QR code
btn.addEventListener("click", () => {
  // Check if the input field has a value
  if (input.value) {
    // If the input field has a value, set the source of the QR code image to a URL that will create the QR code
    // using the input field's value as the data for the QR code. Set the size of the QR code dynamically.
    qrimg.setAttribute(
      "src",
      `https://api.qrserver.com/v1/create-qr-code/?size=${sizeInput.value}x${sizeInput.value}&data=${encodeURIComponent(input.value)}`
    );

    // Show the container element that holds the QR code image by setting its display style to "flex"
    qrcodeContainer.style.display = "flex";

    // Enable the download button
    downloadBtn.disabled = false;
  } else {
    // If the input field does not have a value, show an alert message asking the user to enter text
    alert("Please Enter Text!");

    // Hide the QR code container
    qrcodeContainer.style.display = "none";

    // Disable the download button
    downloadBtn.disabled = true;
  }
});

// Add event listener for download button
downloadBtn.addEventListener("click", () => {
  // Trigger download of the QR code image
  const link = document.createElement('a');
  link.download = 'qrcode.png';
  link.href = qrimg.src;
  link.click();
});

// Add event listener for "Generate Another QR Code" button
newBtn.addEventListener("click", () => {
  // Clear input and hide QR code container
  input.value = "";
  qrcodeContainer.style.display = "none";

  // Disable the download button
  downloadBtn.disabled = true;
});
