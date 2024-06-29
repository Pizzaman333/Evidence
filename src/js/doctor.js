(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-doctor-open]"),
      closeModalBtn: document.querySelector("[data-doctor-close]"),
      modal: document.querySelector("[data-doctor]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();