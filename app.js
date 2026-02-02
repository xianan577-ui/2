// 启动页处理
setTimeout(() => {
    document.getElementById('splash').style.display = 'none';
    document.getElementById('main-app').style.display = 'block';
}, 2000);

// 导航切换
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const view = item.dataset.view;
        
        // 隐藏所有视图
        document.querySelectorAll('.view').forEach(v => {
            v.style.display = 'none';
        });
        
        // 显示目标视图
        document.getElementById(`${view}-view`).style.display = 'block';
        
        // 更新活动状态
        document.querySelectorAll('.nav-item').forEach(nav => {
            nav.classList.remove('active');
        });
        item.classList.add('active');
        
        // 更新标题
        document.getElementById('current-view').textContent = 
            item.querySelector('i').nextSibling.textContent.trim();
        
        // 隐藏侧边栏
        document.querySelector('.sidebar').classList.remove('show');
    });
});

// 菜单切换
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('show');
});

// 简单的聊天功能
document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
    const input = document.getElementById('message-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    // 添加用户消息
    addMessage(message, 'user');
    input.value = '';
    
    // 模拟AI回复
    setTimeout(() => {
        const replies = [
            '你好！我是你的AI助手。',
            '有什么我可以帮助你的吗？',
            '很有趣的话题！',
            '请继续说吧。'
        ];
        const reply = replies[Math.floor(Math.random() * replies.length)];
        addMessage(reply, 'ai');
    }, 1000);
}

function addMessage(text, sender) {
    const messagesContainer = document.querySelector('.messages-container');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.textContent = text;
    
    messageDiv.appendChild(bubble);
    messagesContainer.appendChild(messageDiv);
    
    // 滚动到底部
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
