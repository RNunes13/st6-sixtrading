export default function Accordion() {
  // accordion

  const accordion = document.querySelectorAll(".accordion-item");

  const accordionVisibleClass = "accordion-active";

  const accordionHandleClick = (e) => {
    const alreadyHasActive = e.target.parentNode.classList.contains(
      accordionVisibleClass
    );

    if (alreadyHasActive) {
      e.target.parentNode.classList.remove(accordionVisibleClass);
    } else {
      accordion.forEach((acc) => {
        acc.classList.remove(accordionVisibleClass);
      });

      e.target.parentNode.classList.add(accordionVisibleClass);
    }
  };

  accordion.forEach((accItem) => {
    accItem
      .querySelector("button")
      .addEventListener("click", accordionHandleClick);
  });

  // THE PLAN

  // THE PLAN
  const plan_steps = [
    {
      idx: 1,
      title: "Idealização",
      description:
        "Se você não sabe para onde vai, qualquer caminho serve. E você não quer chegar a um destino que lhe traga prejuízos. Você terá de uma vez por todas a direção certa no mercado, o caminho da consistência de lucros e prosperidade.",
    },
    {
      idx: 2,
      title: "Planejamento e estratégia",
      description:
        "Se você falha em planejar, está planejando falhar. Há somente dois tipos de traders no mercado financeiro: os que fazem um bom planejamento e os que perdem dinheiro. Se você não tem um plano, você não tem como executar algo que realmente lhe traga resultados. O ST6 te orienta a fazer um planejamento de elite para Day Trade.",
    },
    {
      idx: 3,
      title: "Controle de Capital",
      description:
        "Se você não tem um bom controle de capital pode perder os ganhos obtidos ao longo do tempo. O ST6 te fornece o passo a passo de como controlar o capital de maneira profissional.",
    },
    {
      idx: 4,
      title: "Mindset",
      description:
        "O ST6 foge do convencional, o nosso treinamento mental é de uma maneira que você jamais viu. Usando as ferramentas disponibilizadas, você vai desenvolver a capacidade de estudar os padrões e hábitos no seu próprio jogo mental e operar de uma forma muito mais lógica.",
    },
    {
      idx: 5,
      title: "Análise Estatística",
      description:
        "Para saber exatamente o que funciona para você, enxergar seus pontos fortes e fracos e assim evoluir rapidamente, é imprescindível fazer uma análise estatística. O ST6 é rigoroso neste ponto.",
    },
    {
      idx: 6,
      title: "Progresso",
      description:
        "Você progride quando descobre como usar o planejamento, jogo mental, controle de capital e a estatística a seu favor — e quanto mais você progride mais você absorve conhecimento de mercado. A partir daí você pode começar a aumentar os lotes e ter resultados sustentáveis.",
    },
  ];

  const tabContainer = document.querySelector("#tabs");
  const mobileTabContainer = document.querySelector("#mobile-tabs");

  const TitlerRefStep = document.querySelector("#title-reference-step");
  const TextRefStep = document.querySelector("#text-reference-step");

  let tabActiveIdx = 1;

  const handleTabToggle = (e) => {
    const selectedIdx = parseInt(
      e.target.closest("button").getAttribute("data-idx"),
      10
    );

    // Remove active class from all tabs
    document.querySelectorAll("#tabs button").forEach((tab) => {
      tab.children[0].classList.add("bg-opacity-10");
      tab.children[0].classList.remove("bg-BLUE_500");
    });

    document.querySelectorAll("#mobile-tabs button").forEach((tab) => {
      tab.children[0].classList.add("bg-opacity-10");
      tab.children[0].classList.remove("bg-BLUE_500");
    });

    // Add active class to the clicked tab
    e.target.closest("button").children[0].classList.add("bg-BLUE_500");
    e.target.closest("button").children[0].classList.remove("bg-opacity-10");

    // Update the active tab index
    tabActiveIdx = selectedIdx;

    const step = plan_steps.find((step) => step.idx === selectedIdx); // Find the corresponding step

    if (step) {
      // Update the tab content
      TitlerRefStep.innerHTML = `${step.title}.`;
      TextRefStep.innerHTML = `${step.description}.`;
      /* tabContentContainer.innerHTML = `
        <span class="font-proximaNova font-semibold text-head40 text-BLUE_500">${step.idx}.</span>
        <h3 class="font-proximaNova font-semibold text-head40 text-white">${step.title}</h3>
        <p class="font-proximaNova font-normal text-head24 text-white">${step.description}</p>
      `; */
    }
  };

  plan_steps.forEach((step) => {
    const tabButton = document.createElement("button");

    tabButton.setAttribute("id", "tab");
    tabButton.setAttribute("class", "flex items-center gap-4 ");
    tabButton.setAttribute("data-idx", step.idx); // Set a data attribute for the index

    tabButton.innerHTML = `
      <div class="pointer-events-none h-[2.5rem] w-[2.5rem] rounded-full bg-BLUE_500  transition-all ${
        tabActiveIdx === step.idx ? "" : "bg-opacity-10"
      } grid place-content-center font-proximaNova font-semibold text-body18 text-white shrink-0">
        ${step.idx}.
      </div>
      <p class="pointer-events-none font-proximaNova font-semibold uppercase text-white text-body14 lg:text-body18">
        ${step.title}
      </p>
    `;

    const tabButtonMobile = tabButton.cloneNode(true);

    tabContainer.appendChild(tabButton);
    mobileTabContainer.appendChild(tabButtonMobile);

    tabButton.addEventListener("click", handleTabToggle);
    tabButtonMobile.addEventListener("click", handleTabToggle);
  });
}
