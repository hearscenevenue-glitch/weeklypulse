const quotes = [
  "You got this.",
  "Keep going.",
  "Every day is a fresh start.",
  "Believe in yourself.",
  "Small steps lead to big results."
];

export function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// All amounts in cents to avoid floating-point errors
export function calculateTip(billCents, tipPercent) {
  if (billCents < 0) throw new Error('Bill amount cannot be negative');
  if (tipPercent < 0) throw new Error('Tip percent cannot be negative');
  return Math.round(billCents * (tipPercent / 100));
}

export function splitBill(billCents, tipCents, numPeople) {
  if (numPeople < 1) throw new Error('Number of people must be at least 1');
  const totalCents = billCents + tipCents;
  return Math.ceil(totalCents / numPeople);
}
