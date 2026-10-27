const burger = document.querySelector(".burger");
const mnav = document.querySelector("#mnav");
if (burger && mnav) {
  burger.addEventListener("click", () => {
    const open = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!open));
    mnav.hidden = open;
  });
}

const filters = document.querySelector("[data-filters]");
if (filters) {
  const items = [...document.querySelectorAll(".gallery li")];
  filters.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    const value = button.dataset.filter;
    for (const el of filters.querySelectorAll("button")) {
      el.setAttribute("aria-pressed", String(el === button));
    }
    for (const item of items) {
      const show = value === "All" || item.dataset.cat === value;
      item.hidden = !show;
      if (value !== "All") item.removeAttribute("data-wide");
    }
  });
}

const form = document.querySelector("#quote");
if (form) {
  const status = document.querySelector("#form-status");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    if (data.company) {
      status.textContent = "Note received.";
      return;
    }
    const problems = [];
    if ((data.name || "").trim().length < 2) problems.push("Add your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || "")) problems.push("Enter a real email.");
    if ((data.phone || "").replace(/\D/g, "").length < 10) problems.push("Enter a phone number.");
    if ((data.place || "").trim().length < 3) problems.push("Add a city or ZIP.");
    if ((data.message || "").trim().length < 12) problems.push("Say a little about the property.");
    if (problems.length) {
      status.innerHTML = problems.map((p) => `<span class="err">${p}</span>`).join("<br/>");
      return;
    }
    status.textContent = "Sending…";
    try {
      const res = await fetch("https://formsubmit.co/ajax/info@txlandscapeservices.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.name.trim(),
          email: data.email.trim(),
          phone: data.phone.trim(),
          service: data.service,
          location: data.place.trim(),
          message: data.message.trim(),
          _subject: "Website enquiry — Texas Landscape Services",
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error("The form service did not accept the note.");
      form.reset();
      status.textContent =
        "Note received. If this is the first enquiry, FormSubmit will ask the office to confirm info@txlandscapeservices.com before mail is delivered. You can also call 469-455-9733.";
    } catch (err) {
      status.textContent = `${err.message} Email info@txlandscapeservices.com directly.`;
    }
  });
}
