let balance = 0;

// Show only selected section
function showSection(sectionId) {
    let sections = document.querySelectorAll('.page-section');
    sections.forEach(s => s.classList.add('hidden'));

    document.getElementById(sectionId).classList.remove('hidden');
}

// Deposit
function depositMoney() {
    let amount = parseFloat(document.getElementById("depositAmount").value);

    if (amount > 0) {
        balance += amount;
        alert("₹" + amount + " deposited successfully!");
        updateBalance();
    } else {
        alert("Invalid amount!");
    }
}

// Withdraw
function withdrawMoney() {
    let amount = parseFloat(document.getElementById("withdrawAmount").value);

    if (amount > balance) {
        alert("Insufficient balance!");
    } else if (amount <= 0) {
        alert("Invalid amount!");
    } else {
        balance -= amount;
        alert("₹" + amount + " withdrawn successfully!");
        updateBalance();
    }
}

// Update balance on screen
function updateBalance() {
    document.getElementById("balanceDisplay").innerText = "Your balance: ₹" + balance;
}
