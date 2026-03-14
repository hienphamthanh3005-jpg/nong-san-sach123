// Data chi tiết sản phẩm (Giả lập)
const productDetailsData = {
    "1": {
        name: "Combo Gia Đình 'An Nhiên'",
        price: "350.000đ",
        image: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=600&auto=format&fit=crop",
        description: "Bữa cơm gia đình ấm cúng và an toàn tuyệt đối với Combo 'An Nhiên'. Tuyển chọn các loại rau củ quả tươi sạch, canh tác hữu cơ theo mùa.",
        items: [
            "2kg Rau ăn lá (Cải, Muống, Mồng Tơi...)",
            "1kg Củ quả (Cà Rốt, Khoai Tây, Bí Đỏ...)",
            "500g Quả ăn (Cà Chua, Dưa Leo...)",
            "Sơ chế sạch sẽ, giao hàng trong ngày"
        ]
    },
    "2": {
        name: "Combo Ăn Dặm 'Bé Khỏe'",
        price: "220.000đ",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop",
        description: "Nguồn dinh dưỡng an toàn và tự nhiên nhất cho bé yêu bắt đầu hành trình ăn dặm. Cam kết 100% hữu cơ, không biến đổi gen.",
        items: [
            "1 hộp Cháo hạt hữu cơ chuẩn EU",
            "500g Rau củ ăn dặm (Bí ngòi, Khoai lang...)",
            "2 loại Quả chín tự nhiên (Chuối, Bơ...)",
            "Cẩm nang hướng dẫn chế biến"
        ]
    }
};

// ... [Giữ nguyên JS Smooth Scroll cũ] ...

// XỬ LÝ LOGIC MODAL (MỚI THÊM)

const modal = document.getElementById("productModal");
const closeModalBtn = document.querySelector(".close-modal");
const modalDetailsContainer = document.getElementById("modalProductDetails");

// Hàm hiển thị Modal
function showModal(productId) {
    const data = productDetailsData[productId];
    if (data) {
        // Tạo nội dung HTML cho chi tiết sản phẩm
        let itemsHtml = data.items.map(item => `<li>${item}</li>`).join('');
        let modalContent = `
            <img src="${data.image}" alt="${data.name}">
            <div class="modal-info-text">
                <h2>${data.name}</h2>
                <p class="price">${data.price}</p>
                <p><strong>Mô tả:</strong> ${data.description}</p>
                <p><strong>Combo bao gồm:</strong></p>
                <ul>${itemsHtml}</ul>
                <button class="cta-button">Thêm Vào Giỏ Hàng</button>
            </div>
        `;
        // Chèn nội dung vào container
        modalDetailsContainer.innerHTML = modalContent;
        modal.style.display = "block"; // Hiển thị Modal
    }
}

// Thêm Event Listener cho tất cả thẻ Sản phẩm và Nút xem chi tiết
document.querySelectorAll('.product-card').forEach(card => {
    const productId = card.getAttribute('data-product');
    
    // Khi click vào thẻ sản phẩm
    card.addEventListener('click', (e) => {
        // Chỉ hiện modal nếu không click vào nút CTA bên trong thẻ (tránh trùng sự kiện)
        if (!e.target.classList.contains('view-details')) {
             showModal(productId);
        }
    });

    // Khi click vào nút "Xem Chi Tiết"
    const viewBtn = card.querySelector('.view-details');
    if (viewBtn) {
        viewBtn.addEventListener('click', () => {
             showModal(productId);
        });
    }
});

// Hàm ẩn Modal
function hideModal() {
    modal.style.display = "none";
}

// Ẩn khi click vào dấu X
closeModalBtn.addEventListener('click', hideModal);

// Ẩn khi click ra ngoài vùng Modal
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        hideModal();
    }
});

// Ẩn khi nhấn phím Escape
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        hideModal();
    }
});

// ... [Giữ nguyên JS Reveal on Scroll cũ] ...