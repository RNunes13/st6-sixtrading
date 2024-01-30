export default function Accordion() {
  const accordion = document.querySelectorAll(".accordion-item");

  const accordionVisibleClass = "accordion-active";

  const accordionHandleClick = (e) => {
    let target;

    if (e.target.tagName !== 'BUTTON') {
      target = e.target.closest('button').parentNode
    } else {
      target = e.target.parentNode;
    };

    const alreadyHasActive = target.classList.contains(
      accordionVisibleClass
    );

    if (alreadyHasActive) {
      target.classList.remove(accordionVisibleClass);
    } else {
      accordion.forEach((acc) => {
        acc.classList.remove(accordionVisibleClass);
      });

      target.classList.add(accordionVisibleClass);
    }
  };

  accordion.forEach((accItem) => {
    accItem
      .querySelector("button")
      .addEventListener("click", accordionHandleClick);
  });
}
