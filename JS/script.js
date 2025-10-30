// تحميل النافبار من ملف خارجي
fetch('modules/nav.html')
    .then(res => res.text()).then(data => {
        // document.getElementById('navbar').innerHTML = data;
        document.getElementsByTagName("nav")[0].innerHTML = data;
        let currentPage = document.getElementsByTagName("nav")[0].classList[0];
        // let currentPage = "home";
        let link = document.querySelector(`[data-page="${currentPage}"]`);
        if (link) {link.classList.add("active");}
    });

// تحميل النافبار من ملف خارجي
document.body.appendChild(document.createElement("footer"));
fetch('modules/footer.html').then(res => res.text()).then(data => {document.getElementsByTagName('footer')[0].innerHTML = data;});

function goFun(idSection) {
  setTimeout(() => {
  window.location.hash = idSection;
  }, 500);
}
