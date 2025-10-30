
const tabs = document.querySelectorAll('.tabs a');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();
    const targetId = tab.textContent.trim().toLowerCase();

    tabs.forEach(t => t.classList.remove('active'));

    tab.classList.add('active');

    contents.forEach(c => c.classList.remove('active'));

    document.getElementById(targetId).classList.add('active');
  });
});
