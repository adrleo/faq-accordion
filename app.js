const faqs = document.querySelectorAll(".accordion-item");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
