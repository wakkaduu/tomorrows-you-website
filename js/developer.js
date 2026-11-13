/** Bind developer credits to the shared verified identity. Static links work without JS. */
document.addEventListener("DOMContentLoaded", () => {
  const developer = window.DEVELOPER_CONFIG;
  if (!developer) return;
  document.querySelectorAll("[data-developer-link]").forEach(link => {
    link.href = developer.githubUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    if (!link.hasAttribute("data-developer-label")) link.textContent = developer.handle;
  });
  document.querySelectorAll("[data-developer-repository]").forEach(link => {
    link.href = developer.gameRepositoryUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
  document.querySelectorAll("[data-developer-handle]").forEach(el => el.textContent = developer.handle);
  document.querySelectorAll("[data-developer-role]").forEach(el => el.textContent = developer.role);
});
