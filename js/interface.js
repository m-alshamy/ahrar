// تحديد العناصر من شجرة الوثيقة
const menuBtn = document.getElementById('menuBtn');
const sideNav = document.getElementById('sideNav');
const sideBlack = document.getElementById('sideBlack');
const root = document.querySelector('html')
const modeBtns = document.querySelectorAll('.modeBtn')

// دالة للتبديل بين حالات إظهار وإخفاء القائمة
function toggleSidebar() {
    sideNav.classList.toggle('-translate-x-full');
    sideNav.classList.toggle('translate-x-0');
    sideBlack.classList.toggle('hidden');
}

function toggleMode() {
    root.classList.toggle('dark')
    modeBtns.forEach(btn => btn.classList.toggle('justify-end'))
}


// تشغيل الكود عند تحميل الصفحة
menuBtn.addEventListener('click', toggleSidebar);
sideBlack.addEventListener('click', toggleSidebar);
document.addEventListener("DOMContentLoaded", function() {
  AOS.init({
    // المسافة بالبكسل من العنصر الأصلي لبدء الحركة
    offset: 150, 
    // مدة الحركة بالملي ثانية
    duration: 1000,
    
    delay: 100,
    // تحديد ما إذا كانت الحركة ستحدث مرة واحدة فقط أم في كل مرة يتم التمرير فيها
    once: true 
  });
});