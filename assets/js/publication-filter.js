document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("bibsearch");
  if (!searchInput) return;

  const entries = Array.from(document.querySelectorAll(".bibliography > li"));
  const updateResults = () => {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedTypes = Array.from(document.querySelectorAll(".bibsearch-type-filter:checked"), (filter) => filter.value);

    entries.forEach((entry) => {
      const publicationType = entry.querySelector("[data-publication-type]")?.dataset.publicationType;
      const matchesSearch = entry.innerText.toLowerCase().includes(searchTerm);
      const matchesType = selectedTypes.includes(publicationType);
      entry.classList.toggle("unloaded", !matchesSearch || !matchesType);
    });

    document.querySelectorAll("h2.bibliography").forEach((heading) => {
      const bibliography = heading.nextElementSibling;
      const visibleEntries = bibliography?.querySelectorAll(":scope > li:not(.unloaded)").length || 0;
      heading.classList.toggle("unloaded", visibleEntries === 0);
      bibliography?.classList.toggle("unloaded", visibleEntries === 0);
    });
  };

  const updateFromHash = () => {
    searchInput.value = decodeURIComponent(window.location.hash.substring(1));
    updateResults();
  };

  searchInput.addEventListener("input", updateResults);
  document.querySelectorAll(".bibsearch-type-filter").forEach((filter) => filter.addEventListener("change", updateResults));
  window.addEventListener("hashchange", updateFromHash);
  updateFromHash();
});
