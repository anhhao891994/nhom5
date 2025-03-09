
        // Danh sách sản phẩm
        const products = {
            // thêm ảnh cây cảnh
            "cây cảnh": [
                { name: "Cây Trầu Bà", price: "75,000 ₫", image: "hinh_anh/cay_canh/caycanh_1.jpg" },
                { name: "Cây Tài Lộc", price: "200,000 ₫", image: "hinh_anh/cay_canh/caycanh_2.jpg" },
                { name: "Cây Phát Tài", price: "150,000 ₫", image: "hinh_anh/cay_canh/caycanh_3.jpg" },
                { name: "Cây Kim Tiền", price: "120,000 ₫", image: "hinh_anh/cay_canh/caycanh_4.jpg" },
                { name: "Cây Lưỡi Hổ", price: "180,000 ₫", image: "hinh_anh/cay_canh/caycanh_5.jpg" },
                { name: "Cây Lan Ý", price: "80,000 ₫", image: "hinh_anh/cay_canh/caycanh_6.jpg" },
                { name: "Cây Vạn Niên Thanh", price: "190,000 ₫", image: "hinh_anh/cay_canh/caycanh_7.jpg" },
                { name: "Cây Vạn Lộc", price: "150,000 ₫", image: "hinh_anh/cay_canh/caycanh_8.jpg" },
                { name: "Cây Hồng Môn", price: "70,000 ₫", image: "hinh_anh/cay_canh/caycanh_9.jpg" },
                { name: "Cây Phú Quý", price: "110.000 ₫", image: "hinh_anh/cay_canh/caycanh_10.jpg" },
                { name: "Cây Kim Ngân", price: "120,000 ₫", image: "hinh_anh/cay_canh/caycanh_11.jpg" },
                { name: "Cây hạnh Phúc", price: "350,000 ₫", image: "hinh_anh/cay_canh/caycanh_12.jpg" },
                { name: "Cây Sen Đá", price: "40,000 ₫", image: "hinh_anh/cay_canh/caycanh_13.jpg" },
                { name: "Cây Thiên Tuế", price: "450,000 ₫", image: "hinh_anh/cay_canh/caycanh_14.jpg" },
            ],
            // thêm ảnh hoa
            "hoa": [
                { name: "Hoa Giấy", price: "120,000 ₫", image: "hinh_anh/hoa/hoa_1.jpg" },
                { name: "Hoa Lan", price: "270,000 ₫", image: "hinh_anh/hoa/hoa_2.jpg" },
                { name: "Hoa Ly", price: "162,000 ₫", image: "hinh_anh/hoa/hoa_3.jpg" },
                { name: "Hoa Tulip", price: "90,000 ₫", image: "hinh_anh/hoa/hoa_4.jpg" },
                { name: "Hoa Hồng", price: "132,000 ₫", image: "hinh_anh/hoa/hoa_5.jpg" },
                { name: "Hoa Cúc", price: "50,000 ₫", image: "hinh_anh/hoa/hoa_6.jpg" },
                { name: "Hoa Mẫu Đơn", price: "39,000 ₫", image: "hinh_anh/hoa/hoa_7.jpg" },
                { name: "Hoa Lưu Ly", price: "45,000 ₫", image: "hinh_anh/hoa/hoa_8.jpg" },
                { name: "Hoa Tuyết Mai", price: "200,000 ₫", image: "hinh_anh/hoa/hoa_9.jpg" },
                { name: "Hoa Thuỷ Tiên", price: "60,000 ₫", image: "hinh_anh/hoa/hoa_10.jpg" },
                { name: "Hoa Thiên Điểu", price: "120,000 ₫", image: "hinh_anh/hoa/hoa_11.jpg" },
                { name: "Hoa Phi Yến", price: "80,000 ₫", image: "hinh_anh/hoa/hoa_12.jpg" },
            ]
        };

        function showProducts(category) {
            const productGallery = document.getElementById("product-gallery");
            const categoryTitle = document.getElementById("category-title");

            productGallery.innerHTML = ""; // Xóa thư viện cũ
            categoryTitle.textContent = "Danh mục: " + category.replace(" ", " ").toUpperCase();

            if (products[category]) {
                products[category].forEach(product => {
                    productGallery.innerHTML += `
                        <div class="gallery-item" onclick="showLightbox('${product.image}')">
                            <img src="${product.image}" alt="${product.name}">
                            <div class="info">
                                <p>${product.name}</p>
                                <p>${product.price}</p>
                            </div>
                        </div>
                    `;
                });
            } else {
                productGallery.innerHTML = "<p>Không có sản phẩm nào!</p>";
            }
        }

        // Hiển thị ảnh lớn khi click vào sản phẩm
        function showLightbox(imageSrc) {
            document.getElementById("lightbox-img").src = imageSrc;
            document.getElementById("lightbox").style.display = "flex";
        }

        // Đóng lightbox khi click ra ngoài
        document.getElementById("lightbox").addEventListener("click", function (e) {
            if (e.target === this) {
                this.style.display = "none";
            }
        });
        // chạy sline ảnh
        const images = [
            "hinh_anh/about/about_1.jpg",
            "hinh_anh/about/about_2.jpg",
            "hinh_anh/about/about_3.jpg",
            "hinh_anh/about/about_4.jpg",
            "hinh_anh/about/about_5.jpg",
            "hinh_anh/about/about_6.jpg",
            "hinh_anh/about/about_7.jpg",
          ];
          let index = 0;
          function changeImage() {
              index = (index + 1) % images.length;
              document.getElementById("slideshow").src = images[index];
          }
          setInterval(changeImage, 3000); // Thay đổi ảnh mỗi 3 giây
           // Lấy tên người dùng từ localStorage
        //    hiện thị xin chào ở đầu trang
        const username = localStorage.getItem("username");
        // Nếu tên người dùng tồn tại, hiển thị thông điệp chào mừng
        if (username) {
            document.getElementById("user").innerText = username;
            document.getElementById("welcomeMessage").style.display = "block";
        }
        // đăng xuất
        document.getElementById('logoutButton').addEventListener('click', function() {
            // Xóa thông tin xác thực của người dùng (ví dụ: token đăng nhập, cookie)
            localStorage.removeItem('authToken'); // Ví dụ: nếu bạn lưu token trong localStorage
            // Chuyển hướng người dùng đến trang đăng nhập hoặc trang chủ
            window.location.href = 'login.html'; // Điều chỉnh URL theo trang bạn muốn điều hướng đến
        });
        
        