document.addEventListener("DOMContentLoaded", function () {

    const dialog = document.getElementById("infoDialog");

    if (dialog) {
        const openButton = document.createElement("button");

        openButton.textContent = "Open Information";
        openButton.type = "button";

        openButton.addEventListener("click", function () {
            dialog.showModal();
        });

        dialog.parentNode.insertBefore(openButton, dialog);
    }

    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Form submitted successfully!");
        });
    }

});
