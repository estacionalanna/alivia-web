/* Alivia web: cuadro que invita a descargar la app.

   =====================================================================
   CUANDO TENGAS EL LINK DE DESCARGA, EDITÁ SOLO ESTA LÍNEA:
   pegá el enlace de Google Play entre las comillas. Por ejemplo:
   const URL_DESCARGA = "https://play.google.com/store/apps/details?id=com.alannasoft.alivia";
   Mientras esté vacío, los botones piden que te avisen por correo.
   Cuando lo completes, todos los botones pasan a decir "Descargar la app"
   y los textos de "está en desarrollo" desaparecen solos.
   ===================================================================== */
const URL_DESCARGA = "";

(function () {
  "use strict";

  var raiz = document.documentElement;
  var dialogo = document.getElementById("invitacion");

  // Si el navegador es muy viejo y no tiene <dialog>, la página queda como una
  // página informativa normal: sin botones de "Verlo en la app".
  if (!dialogo || typeof dialogo.showModal !== "function") {
    return;
  }
  raiz.classList.add("js");

  var hayLink = /^https:\/\//.test(URL_DESCARGA);

  document.querySelectorAll("[data-descarga]").forEach(function (a) {
    if (hayLink) {
      a.href = URL_DESCARGA;
      a.textContent = "Descargar la app";
    }
  });
  document.querySelectorAll("[data-sin-link]").forEach(function (e) {
    e.hidden = hayLink;
  });
  document.querySelectorAll("[data-con-link]").forEach(function (e) {
    e.hidden = !hayLink;
  });

  var etiqueta = document.getElementById("invitacion-etiqueta");
  var titulo = document.getElementById("invitacion-titulo");
  var detalle = document.getElementById("invitacion-detalle");
  var ayuda = document.getElementById("invitacion-ayuda");
  var botonPaciente = document.getElementById("invitacion-paciente");
  var botonPsicologo = document.getElementById("invitacion-psicologo");

  function abrir(origen) {
    var esPsicologo = origen.getAttribute("data-publico") === "psicologo";
    etiqueta.textContent = esPsicologo ? "Para psicólogos, en la app" : "Se hace dentro de la app";
    titulo.textContent = origen.getAttribute("data-invitar");
    detalle.textContent = origen.getAttribute("data-detalle") || "";
    ayuda.hidden = !origen.hasAttribute("data-ayuda");
    botonPaciente.hidden = esPsicologo;
    botonPsicologo.hidden = !esPsicologo;
    raiz.classList.add("modal-abierto");
    dialogo.showModal();
  }

  // Un clic en cualquier cosa marcada con data-invitar abre el cuadro,
  // salvo que el clic sea sobre un enlace (por ejemplo, el 155).
  document.addEventListener("click", function (e) {
    if (e.target.closest("a")) {
      return;
    }
    var origen = e.target.closest("[data-invitar]");
    if (origen) {
      abrir(origen);
    }
  });

  dialogo.querySelectorAll("[data-cerrar]").forEach(function (b) {
    b.addEventListener("click", function () {
      dialogo.close();
    });
  });

  // Clic en el fondo oscuro cierra el cuadro.
  dialogo.addEventListener("click", function (e) {
    if (e.target === dialogo) {
      dialogo.close();
    }
  });

  dialogo.addEventListener("close", function () {
    raiz.classList.remove("modal-abierto");
  });
})();
