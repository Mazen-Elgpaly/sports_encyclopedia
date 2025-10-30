document.addEventListener("DOMContentLoaded", function () {
    const password = document.getElementById('password');
    const bar = document.getElementById('bar');
    const strengthText = document.getElementById('strength');

    password.addEventListener('input', () => {
        const val = password.value;
        let score = 0;

        if (val.length > 0) score++;
        if (val.length >= 8) score++;
        if (/[A-Z]/.test(val)) score++;
        if (/[0-9]/.test(val)) score++;
        if (/[^A-Za-z0-9]/.test(val)) score++;

        let width = score * 20;
        let color = "#e74c3c";
        let text = "";

        if (score === 0) { width = 0; text = ""; }
        else if (score <= 2) { color = "#e67e22"; text = "Week"; }
        else if (score === 3) { color = "#f1c40f"; text = "Normal"; }
        else if (score === 4) { color = "#2ecc71"; text = "Strong"; }
        else { color = "#27ae60"; text = "Very Strong"; }

        bar.style.width = width + "%";
        bar.style.background = color;
        strengthText.textContent = text;
    });
});
