function validar() {
    let p1 = document.getElementById("pregunta1").value.trim();
    let p2 = document.getElementById("pregunta2").value.trim();
    let p3 = document.getElementById("pregunta3").value.trim();
    let p4 = document.getElementById("pregunta4").value.trim().toLowerCase();
    let errorMsg = document.getElementById("error-message");

    let respuestasCorrectasP4 = ["cowork", "trabajamos juntos"];

    if (
        p1.toLowerCase() === "yock" &&
        p2 === "22/04/2023" &&
        p3.toLowerCase() === "tambo" &&
        respuestasCorrectasP4.includes(p4)
    ) {
        document.getElementById("form-container").style.display = "none";

        let loader = document.getElementById("loader");
        loader.style.display = "block";
        loader.classList.add("fadeInScale");

        setTimeout(() => {
            loader.style.display = "none";

            let invitation = document.getElementById("invitation");
            invitation.style.display = "block";
            invitation.classList.add("fadeInScale");
        }, 2500);
    } else {
        errorMsg.textContent = "¿No te sabes las respuestas verdad incorrectas mi amor? jaja ❤️";
    }
}
