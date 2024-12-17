function validateUsername(username) {
    if (username.length === 0) {
        return { valid: false, message: "الاسم لا يمكن أن يكون فارغًا." };
    } else if (username.length < 3) {
        return { valid: false, message: "يجب أن يكون الاسم ثلاثة أحرف على الأقل." };
    }
    return { valid: true, message: "" };
}

function showError(message) {
    document.getElementById('error-message').innerText = message;
}