(() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-log-in-open]"),
      closeMenuBtn: document.querySelector("[data-log-in-close]"),
      menu: document.querySelector("[data-log-in]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleModal);
    refs.closeMenuBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.menu.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();