const dhikrs = [
    "سبحان الله",
    "الحمد لله",
    "الله أكبر",
    "لا إله إلا الله",
    "استغفر الله",
    "الحمد لله رب العالمين",
    "اللهم صل على محمد وعلى آله وصحبه أجمعين",
    // يمكنك إضافة المزيد من الأذكار هنا
];

function getRandomDhikr() {
    const randomIndex = Math.floor(Math.random() * dhikrs.length);
    return dhikrs[randomIndex];
}

// وظيفة لإدخال الذكر في حقل النص
function insertDhikr() {
    const textInput = document.getElementById('textInput');
    textInput.value += getRandomDhikr() + ' '; // إضافة الذكر إلى النص
    textInput.focus(); // تركيز المؤشر في حقل النص
}