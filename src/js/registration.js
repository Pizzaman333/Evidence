(() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-register-open]"),
      closeMenuBtn: document.querySelector("[data-register-close]"),
      menu: document.querySelector("[data-register]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleModal);
    refs.closeMenuBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.menu.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();