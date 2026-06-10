const images = document.querySelectorAll('.picture img');
let currentIndex = 0;

function changeImage() {
    // Ẩn ảnh hiện tại
    images[currentIndex].classList.remove('active');
    
    // Tăng chỉ số để chuyển sang ảnh tiếp theo
    currentIndex = (currentIndex + 1) % images.length;
    
    // Hiện ảnh mới
    images[currentIndex].classList.add('active');
}

// Chuyển ảnh mỗi 3 giây
setInterval(changeImage, 500);