// إضافة مكتبة socket.io قبل نهاية الـ body في HTML
<script src="/socket.io/socket.io.js"></script>
<script>
    const socket = io();

    // بعد تسجيل الدخول، أخبر الخادم بالانضمام
    function loginUser(username, gender) {
        currentUsername = username;
        currentGender = gender;

        // إعلام الخادم بانضمام المستخدم
        socket.emit('join', currentUsername);

        // الرموز الأخرى كما هي...
    }

    // وظيفة لإرسال الرسالة
    function sendMessage() {
        const messageInput = document.getElementById('message').value;
        if (messageInput.trim() === '') return;

        // إرسال الرسالة إلى الخادم
        socket.emit('sendMessage', messageInput);
        document.getElementById('message').value = '';
    }

    // استقبال الرسائل الجديدة من الخادم
    socket.on('newMessage', ({ username, message }) => {
        const time = new Date().toLocaleTimeString(); // احصل على الوقت الحالي
        displayMessage(username, message, time); // عرض الرسالة في واجهة المستخدم
    });

    // تحديث قائمة المستخدمين عند تلقي حدث userListUpdated
    socket.on('userListUpdated', (users) => {
        usersInChat = users; // تحديث قائمة المستخدمين في الدردشة
        updateUserList(); // إعادة عرض القائمة
    });
</script>