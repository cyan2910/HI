window.addEventListener('scroll', function () {
    const fadeE = document.querySelectorAll('.fade');
    fadeE.forEach(function (item) {
        const elementTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // 如果元素已经在可视区域内且还没有添加visible类，则添加之
        if (elementTop < windowHeight && !item.classList.contains('visible')) {
            item.classList.add('visible');
        }
    });
});

window.addEventListener('scroll', function () {
    const slideElement= document.querySelectorAll('.slide-from-left');
    slideElement.forEach(function (item) {
        const elementTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // 如果元素已经在可视区域内且还没有添加visible类，则添加之
        if (elementTop < windowHeight && !item.classList.contains('visible')) {
            setTimeout(function() { // 使用setTimeout模拟延迟效果
                item.classList.add('active');
            }, 500); // 延迟时间可根据需求调整
        }
    });
});
