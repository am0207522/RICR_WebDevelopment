const country1    = document.getElementById('country1');
const country2    = document.getElementById('country2');
const flag1       = document.getElementById('flag1');
const flag2       = document.getElementById('flag2');
const orgAmount   = document.getElementById('orgAmount');
const btnConvert  = document.getElementById('btnConvert');
const btnSwap     = document.getElementById('btnSwap');
const btnText     = document.getElementById('btnText');
const newAmount   = document.getElementById('newAmount');
const rateInfo    = document.getElementById('rateInfo');
const resultBox   = document.getElementById('resultBox');
const errorSelect = document.getElementById('errorSelect');
const errorAmount = document.getElementById('errorAmount');

function flagURL(countryCode) {
  return `https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`;
}

function updateFlag(selectEl, imgEl) {
  const val = selectEl.value;
  if (!val) { imgEl.src = ''; return; }
  imgEl.src = flagURL(val.split(',')[1]);
}

function setError(el, msg) {
  el.innerHTML = msg ? `<i class="bi bi-exclamation-circle-fill"></i> ${msg}` : '';
}

function clearResult() {
  resultBox.classList.add('d-none');
  newAmount.textContent = '';
  rateInfo.textContent  = '';
}

function showResult(converted, rate, from, to) {
  newAmount.textContent = `${converted.toFixed(2)} ${to.toUpperCase()}`;
  rateInfo.textContent  = `1 ${from.toUpperCase()} = ${rate.toFixed(4)} ${to.toUpperCase()}`;
  resultBox.classList.remove('d-none');
}

async function loadCountries() {
  try {
    const res  = await fetch('sample.json');
    const data = await res.json();

    const seen   = new Set();
    const unique = data.filter(item => {
      if (!item.Currency_Code) return false;
      const key = `${item.Currency_Code},${item.Country_Code}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    unique.sort((a, b) => a.Country_Name.localeCompare(b.Country_Name));

    unique.forEach(item => {
      const value = `${item.Currency_Code},${item.Country_Code}`;
      const label = `${item.Country_Name} — ${item.Currency_Code.toUpperCase()}`;
      [country1, country2].forEach(sel => {
        const opt = document.createElement('option');
        opt.value = value;
        opt.textContent = label;
        sel.appendChild(opt);
      });
    });

    // Default: USD → INR
    const from = unique.find(c => c.Currency_Code === 'usd');
    const to   = unique.find(c => c.Currency_Code === 'inr');
    if (from) { country1.value = `${from.Currency_Code},${from.Country_Code}`; updateFlag(country1, flag1); }
    if (to)   { country2.value = `${to.Currency_Code},${to.Country_Code}`;     updateFlag(country2, flag2); }

  } catch (err) {
    setError(errorSelect, 'Country list load nahi hui — Live Server use karo.');
    console.error(err);
  }
}

country1.addEventListener('change', () => { updateFlag(country1, flag1); setError(errorSelect, ''); });
country2.addEventListener('change', () => { updateFlag(country2, flag2); setError(errorSelect, ''); });
orgAmount.addEventListener('input',  () => setError(errorAmount, ''));

btnSwap.addEventListener('click', () => {
  const tmp = country1.value;
  country1.value = country2.value;
  country2.value = tmp;
  updateFlag(country1, flag1);
  updateFlag(country2, flag2);
  if (orgAmount.value) convertCurrency();
});

btnConvert.addEventListener('click', convertCurrency);

async function convertCurrency() {
  let valid = true;

  if (!country1.value) {
    setError(errorSelect, "Please select a 'From' country."); valid = false;
  } else if (!country2.value) {
    setError(errorSelect, "Please select a 'To' country."); valid = false;
  } else {
    setError(errorSelect, '');
  }

  const raw = orgAmount.value.trim();
  if (!raw) {
    setError(errorAmount, 'Please enter an amount.'); valid = false;
  } else if (Number(raw) <= 0) {
    setError(errorAmount, 'Amount must be greater than zero.'); valid = false;
  } else {
    setError(errorAmount, '');
  }

  if (!valid) return;

  const amount       = parseFloat(raw);
  const fromCurrency = country1.value.split(',')[0];
  const toCurrency   = country2.value.split(',')[0];

  if (fromCurrency === toCurrency) { showResult(amount, 1, fromCurrency, toCurrency); return; }

  clearResult();
  btnConvert.disabled = true;
  btnText.textContent = 'Loading…';

  try {
    const url  = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`;
    const res  = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const rate = data[fromCurrency][toCurrency];
    if (rate === undefined) throw new Error('Rate not found');
    showResult(amount * rate, rate, fromCurrency, toCurrency);
  } catch (err) {
    setError(errorSelect, 'Something went wrong. Please try again.');
    console.error(err);
  } finally {
    btnConvert.disabled = false;
    btnText.textContent = 'Convert';
  }
}

loadCountries();











// async function loadCountries() {
//   const response = await fetch("codes.json");
//   const data = await response.json();

//   for (let item of data) {
//     if (!item.Currency_Code) continue;

//     const value = item.Currency_Code + "," + item.Country_Code;
//     const option1 = new Option(item.Country_Name, value);
//     const option2 = new Option(item.Country_Name, value);

//     document.getElementById("country1").appendChild(option1);
//     document.getElementById("country2").appendChild(option2);
//   }
// }

// async function convertCurrency() {
//   const fromValue = document.getElementById("country1").value;
//   const toValue = document.getElementById("country2").value;
//   const amount = document.getElementById("amount").value;

//   const fromCode = fromValue.split(",")[0];
//   const toCode = toValue.split(",")[0];

//   const response = await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/" + fromCode + ".json");
//   const data = await response.json();

//   const rate = data[fromCode][toCode];
//   const result = amount * rate;

//   document.getElementById("result").innerText = result.toFixed(2) + " " + toCode.toUpperCase();
// }

// loadCountries();




//   {"Country_Name": "United States", "Currency_Code": "usd", "Country_Code": "US"},
//   {"Country_Name": "India", "Currency_Code": "inr", "Country_Code": "IN"},
//   {"Country_Name": "Euro Zone", "Currency_Code": "eur", "Country_Code": "EU"},
//   {"Country_Name": "United Kingdom", "Currency_Code": "gbp", "Country_Code": "GB"},
//   {"Country_Name": "Japan", "Currency_Code": "jpy", "Country_Code": "JP"},
//   {"Country_Name": "Canada", "Currency_Code": "cad", "Country_Code": "CA"},
//   {"Country_Name": "Australia", "Currency_Code": "aud", "Country_Code": "AU"},
//   {"Country_Name": "China", "Currency_Code": "cny", "Country_Code": "CN"},
//   {"Country_Name": "UAE", "Currency_Code": "aed", "Country_Code": "AE"},
//   {"Country_Name": "Pakistan", "Currency_Code": "pkr", "Country_Code": "PK"},
//   {"Country_Name": "Saudi Arabia", "Currency_Code": "sar", "Country_Code": "SA"},
//   {"Country_Name": "Singapore", "Currency_Code": "sgd", "Country_Code": "SG"},
//   {"Country_Name": "Switzerland", "Currency_Code": "chf", "Country_Code": "CH"},
//   {"Country_Name": "South Korea", "Currency_Code": "krw", "Country_Code": "KR"},
//   {"Country_Name": "Brazil", "Currency_Code": "brl", "Country_Code": "BR"}
// ]