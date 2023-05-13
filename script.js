const actionButton = document.getElementById("action-button");
const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popup-message");
const closeButton = document.getElementById("close-button");

actionButton.addEventListener("click", function() {
	popupMessage.innerHTML = "¡AVISO!: Al activar la grabación, se enviará tu ubicación en tiempo real a las autoridades. ¿Estás seguro de querer continuar?";
	overlay.style.display = "block";
});

closeButton.addEventListener("click", function() {
	overlay.style.display = "none";
});

window.addEventListener("click", function(event) {
	if (event.target === overlay) {
		overlay.style.display = "none";
	}
});

/* 		REGISTRAR */
const wrapper = document.querySelector(".wrapper"),
                    signupHeader = document.querySelector(".signup header"),
                    loginHeader = document.querySelector(".login header");
                loginHeader.addEventListener("click", () => {
                    wrapper.classList.add("active");
                });
                signupHeader.addEventListener("click", () => {
                    wrapper.classList.remove("active");
                });