const jobs = [
  { id: 1, company: "Google", position: "Frontend Dev", location: "Remote", type: "Full-time", salary: "$5000", description: "React Developer", status: "all" },
  { id: 2, company: "Amazon", position: "Backend Dev", location: "USA", type: "Full-time", salary: "$6000", description: "Node Developer", status: "all" },
  { id: 3, company: "Meta", position: "UI Designer", location: "Remote", type: "Contract", salary: "$4000", description: "Figma Expert", status: "all" },
  { id: 4, company: "Netflix", position: "QA Engineer", location: "Canada", type: "Full-time", salary: "$4500", description: "Testing Expert", status: "all" },
  { id: 5, company: "Tesla", position: "JS Dev", location: "USA", type: "Full-time", salary: "$5500", description: "Vanilla JS", status: "all" },
  { id: 6, company: "Apple", position: "iOS Dev", location: "USA", type: "Full-time", salary: "$7000", description: "Swift Dev", status: "all" },
  { id: 7, company: "Spotify", position: "React Dev", location: "Remote", type: "Full-time", salary: "$5200", description: "React Expert", status: "all" },
  { id: 8, company: "Microsoft", position: "Cloud Dev", location: "USA", type: "Full-time", salary: "$6500", description: "Azure Expert", status: "all" }
];

let currentTab = "all";

const container = document.getElementById("jobContainer");
const emptyMsg = document.getElementById("emptyMessage");

function renderJobs() {
  container.innerHTML = "";

  const filtered = jobs.filter(job =>
    currentTab === "all" ? true : job.status === currentTab
  );

  document.getElementById("tabCount").innerText = filtered.length;
  document.getElementById("totalCount").innerText = jobs.length;

  if (filtered.length === 0) emptyMsg.classList.remove("hidden");
  else emptyMsg.classList.add("hidden");

  filtered.forEach(job => {
    const card = document.createElement("div");
    card.className = "card bg-base-100 shadow-xl relative transition transform hover:scale-105";

    // Status badge
    let statusBadge = "";
    if (job.status === "interview") statusBadge = `<span class="badge badge-success">Interview</span>`;
    if (job.status === "rejected") statusBadge = `<span class="badge badge-error">Rejected</span>`;

    card.innerHTML = `
      <div class="card-body">
        <div class="flex justify-between items-center">
          <h3 class="card-title text-primary">${job.position}</h3>
          ${statusBadge}
        </div>

        <p class="font-semibold">${job.company}</p>
        <p>${job.location} • ${job.type}</p>
        <p class="font-semibold">${job.salary}</p>
        <p class="text-sm text-gray-500">${job.description}</p>

        <!-- Buttons -->
        <div class="card-actions mt-3">
          <button class="btn btn-accent btn-sm" onclick="setStatus(${job.id}, 'interview')">Interview</button>
          <button class="btn btn-error btn-sm" onclick="setStatus(${job.id}, 'rejected')">Rejected</button>
        </div>

        <!-- Delete Icon top-right (improved) -->
        <button 
          class="btn btn-circle btn-sm btn-ghost absolute top-2 right-2 hover:bg-red-200 transition" 
          onclick="deleteJob(${job.id})"
          title="Delete Job"
        >
          <i class="fas fa-trash text-red-600 text-lg"></i>
        </button>
      </div>
    `;

    container.appendChild(card);
  });

  updateDashboard();
}

function setStatus(id, status) {
  const job = jobs.find(j => j.id === id);
  job.status = status;
  renderJobs();
}

function deleteJob(id) {
  const index = jobs.findIndex(j => j.id === id);
  if (index !== -1) jobs.splice(index, 1);
  renderJobs();
}

function showTab(tab, event) {
  currentTab = tab;
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("tab-active"));
  event.target.classList.add("tab-active");
  renderJobs();
}

function updateDashboard() {
  const interview = jobs.filter(j => j.status === "interview").length;
  const rejected = jobs.filter(j => j.status === "rejected").length;

  document.getElementById("interviewCount").innerText = interview;
  document.getElementById("rejectedCount").innerText = rejected;
}

renderJobs();