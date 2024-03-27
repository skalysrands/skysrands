const form = document.querySelector("form");

const showError = (field, errorText) => {
  field.classList.add("error");
  const errorElement = document.createElement("small");
  errorElement.classList.add("error-text");
  errorElement.innerText = errorText;
  field.closest(".form-group").appendChild(errorElement);
}

const clearError = (field) => {
  field.classList.remove("error");
  const errorText = field.closest(".form-group").querySelector(".error-text");
  if (errorText) {
    errorText.remove();
  }
}

const handleFormData = (e) => {
  e.preventDefault();

  const NameInput = document.getElementById("Name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const productSelect = document.querySelector("#product"); // Corrigido
  const consultantSelect = document.querySelector("#consultant"); // Corrigido
  const lgpdCompliantInput = document.getElementById("lgpdCompliant");

  const Name = NameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const product = productSelect.value;
  const consultant = consultantSelect.value;
  const lgpdCompliant = lgpdCompliantInput.checked;

  const emailPattern = /^[^ ]+@(?!yahoo\.combr$|naopossui\.com\.br|o2\.net\.br|hortmail\.com|email\.com|email\.com\.br|outllook\.com|iclod\.com|htmail\.com|hottmail\.com|gmail\.bom|gmail\.comd|3enet\.com\.br|homail\.com|yhaoo\.com\.combr|hotmail\.combr|nao\.com|gemail\.com|88gmail\.com|outloock\.com|gm\.com|hotmail\.co\.uk|yhoo\.com\.br|yaol\.com\.br|naopossuo\.com\.br|xxxxx\.com\.br|xxx\.com\.br|nao\.com\.br|201127\.hotmail\.com|gmail\.comj|gamail\.com|gail\.com|yahoo\.combr|icluod\.com|hotrmail\.com|1986icloud\.com|hotmail\.it|hotmail\.comotmail\.com|3hagro\.com\.br|613gmail\.com|gnail)[^ ]+\.[a-z]{2,3}$/;
  const phonePattern = /^(?!^(\d)\1+$)\(\d{2}\) \d{5}-\d{4}$/;

  document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
  document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

  let hasError = false;

  if (Name === "") {
    showError(NameInput, "Digite o seu nome");
    hasError = true;
  } else {
    clearError(NameInput);
  }

  if (!emailPattern.test(email)) {
    showError(emailInput, "Insira um e-mail válido");
    hasError = true;
  } else {
    clearError(emailInput);
  }

  if (!phonePattern.test(phone)) {
    showError(phoneInput, "Insira um telefone válido");
    hasError = true;
  } else {
    clearError(phoneInput);
  }

  if (product === "") {
    showError(productSelect, "Selecione um produto");
    hasError = true;
  } else {
    clearError(productSelect);
  }

  if (consultant === "") {
    showError(consultantSelect, "Selecione um consultor");
    hasError = true;
  } else {
    clearError(consultantSelect);
  }

  if (!lgpdCompliant) {
    showError(lgpdCompliantInput.parentElement, "É necessário concordar com a Política de Privacidade");
    hasError = true;
  } else {
    clearError(lgpdCompliantInput.parentElement);
  }

  if (!hasError) {
    form.submit();
  }
}

form.addEventListener("submit", handleFormData);