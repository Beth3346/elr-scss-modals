"use-strict";

(() => {
  const buttons = document.getElementsByClassName("js-show-alert");
  const modals = document.getElementsByClassName("modal-alert");
  const dialogs = document.getElementsByTagName("dialog");

  for (const dialog of dialogs) {
    dialog.addEventListener("click", () => {
      dialog.setAttribute("open", false);
    });
    dialog.addEventListener("keyup", e => {
      console.log(e.keyCode);
      if (e.keyCode == "27") {
        dialog.setAttribute("open", false);
      }
    });
  }

  for (const button of buttons) {
    button.addEventListener("click", e => {
      const alertId = button.attributes["data-alertid"].nodeValue;
      const dialog = document.getElementById(alertId);

      dialog.setAttribute("open", true);
    });
  }

  for (const modal of modals) {
    modal.addEventListener("click", e => {
      e.stopPropagation();
    });
    const buttonConfirm = modal.getElementsByClassName("js-button-confirm")[0];
    const buttonCancel = modal.getElementsByClassName("js-button-cancel")[0];

    console.log({ buttonConfirm });

    if (buttonConfirm) {
      buttonConfirm.addEventListener("click", () => {
        const alertId = buttonConfirm.attributes["data-alertid"].nodeValue;
        const dialog = document.getElementById(alertId);

        console.log("confirm action");
        dialog.setAttribute("open", false);
      });
    }

    if (buttonCancel) {
      buttonCancel.addEventListener("click", () => {
        const alertId = buttonCancel.attributes["data-alertid"].nodeValue;
        const dialog = document.getElementById(alertId);

        console.log("cancel action");
        dialog.setAttribute("open", false);
      });
    }
  }
})();
