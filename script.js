// Optional: Add functionality to change the fact dynamically
const facts = [
    "I’m learning to play the guitar in my free time.",
    "I love hiking and have traveled to five national parks.",
    "I once baked a 3-tiered cake for a family gathering!",
    "I speak three languages fluently."
];

const factBox = document.getElementById("fun-fact");
const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factBox.textContent = randomFact;
});
