function formatNum(n) {
  return n.toLocaleString("en-IN", { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

function calculateBill() {
  const input = document.getElementById("kmInput").value.trim();
  const errorMsg = document.getElementById("errorMsg");
  const resultBox = document.getElementById("resultBox");
  const totalBillEl = document.getElementById("totalBill");
  const breakdownEl = document.getElementById("breakdown");

  errorMsg.classList.add("d-none");
  resultBox.classList.add("d-none");
  breakdownEl.innerHTML = "";

  if (input === "" || isNaN(input)) {
    errorMsg.classList.remove("d-none");
    return;
  }

  const km = parseFloat(input);

  if (km < 0) { errorMsg.classList.remove("d-none");
    return;
  }

  const card = [
    { limit: 10,  rate: 11, label: "First 10 km" },
    { limit: 40,  rate: 10, label: "Next 40 km (11–50)" },
    { limit: 50,  rate: 9,  label: "Next 50 km (51–100)" },
    { limit: Infinity, rate: 8, label: "Above 100 km" }
  ];

  let remaining = km;
  let total = 0;
  let breakdownHTML = "";

  const cardLimits = [10, 40, 50, Infinity];

  for (let i = 0; i < card.length; i++) {
    if (remaining <= 0) break;

    const cardKm = Math.min(remaining, cardLimits[i]);
    const cardCost = Km * card[i].rate;
    total += cardCost;
    remaining -= cardKm;

    breakdownHTML += `
      <div class="breakdown-row d-flex justify-content-between align-items-center px-3 py-2 mb-2 rounded">
        <span class="small text-muted">${card[i].label}</span>
        <span class="small fw-semibold">
          ${formatNum(cardKm)} km × Rs.${card[i].rate} = 
          <span class="text-success">Rs.${formatNum(cardCost)}</span>
        </span>
      </div>
    `;
  }
  totalBillEl.textContent = "Rs. " + formatNum(total);
  breakdownEl.innerHTML = breakdownHTML;
  resultBox.classList.remove("d-none");
}