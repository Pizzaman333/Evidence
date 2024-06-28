(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-call-open]"),
      closeModalBtn: document.querySelector("[data-call-close]"),
      modal: document.querySelector("[data-call]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();