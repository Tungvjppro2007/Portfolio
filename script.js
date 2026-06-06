// DỮ LIỆU ĐƯỢC TRÍCH XUẤT CHÍNH XÁC TỪ FILE MẪU (KHÔNG TỰ BỊA)

// Dữ liệu Bài 2: Tìm kiếm học thuật
const scholarData = [
    { stt: 1, name: "Securing the Threads: In-Depth Analysis of IoT Architecture and Threat Mitigation (2025)", type: "Bài báo khoa học", source: "IEEE Xplore / SMART Conference", method: "Phân tích thực nghiệm đa tầng kiến trúc IoT, mô phỏng tấn công DDoS và giải pháp Học máy kết hợp Blockchain.", rate: "Rất cao (A): Xuất bản bởi tổ chức uy tín toàn cầu IEEE, phản ánh xu hướng công nghệ bảo mật mới nhất năm 2025." },
    { stt: 2, name: "IoT Security through ML/DL: Software Engineering Challenges and Directions (2025)", type: "Bài báo khoa học", source: "ICCK Journal of Software Engineering", method: "Nghiên cứu hệ thống (Systematic Review) dữ liệu từ IEEE Xplore giai đoạn 2020–2024, đánh giá giải pháp AI/ML chống xâm nhập.", rate: "Rất cao (A): Phương pháp tổng quan hệ thống chuẩn mực, có dữ liệu đối sánh định lượng rõ ràng." },
    { stt: 3, name: "Deeper Insight Into Why Authentication Schemes in IoT Environments Fail to Achieve the Desired Security (Yimin Guo et al., 2024)", type: "Bài báo khoa học", source: "IEEE Transactions on Information Forensics and Security", method: "Phân tích toán học và thực nghiệm các thuật toán xác thực lỗi trên thiết bị IoT đầu cuối.", rate: "Xuất sắc (A+): Tạp chí thuộc nhóm Q1 ISI (IEEE Transactions), độ kiểm duyệt và độ tin cậy học thuật cao nhất." },
    { stt: 4, name: "A Review of Lightweight IoT Authentication Protocols from Perspective of Costs (I. Cetintav et al., 2025)", type: "Bài báo khoa học", source: "IEEE Access", method: "So sánh hiệu năng phần cứng, chi phí tính toán và mức tiêu thụ năng lượng của các giao thức mã hóa hạng nhẹ.", rate: "Rất cao (A): Đánh giá tối ưu hóa phần cứng sâu sắc, dữ liệu thực tế từ phòng thí nghiệm nhúng." },
    { stt: 5, name: "Automated IoT Firmware Vulnerability Detection Using Large Language Models (Preprints, 2025)", type: "Bài báo khoa học", source: "MDPI Preprints / OWASP Framework", method: "Thực nghiệm xây dựng pipeline tự động hóa công cụ dịch ngược (Ghidra, EMBA) phối hợp với mô hình ngôn ngữ lớn LLM.", rate: "Cao (B): Ý tưởng cực kỳ đột phá và thực tế, tuy nhiên đang ở dạng tiền xuất bản (Preprint) cần đối chiếu thêm." },
    { stt: 6, name: "Exploring security threats and solutions Techniques for IoT: from vulnerabilities to vigilance (Sahu & Mazumdar, 2024)", type: "Bài báo khoa học", source: "Frontiers in Artificial Intelligence", method: "Khảo sát phân loại tấn công tầng vật lý (Side-channel, phần cứng) và tầng mạng (Sniffing, XSS).", rate: "Rất cao (A): Thuộc hệ thống Frontiers uy tín, phân tích chi tiết từ lỗ hổng phần cứng nguyên bản." },
    { stt: 7, name: "A Literature Review on Security in the Internet of Things: Identifying Critical Categories (MDPI, 2025)", type: "Bài báo khoa học", source: "MDPI Computer Sciences", method: "Phân tích thư mục, tổng hợp trắc lượng khoa học các xu hướng tấn công từ năm 2021 đến 2025.", rate: "Rất cao (A): Cung cấp các số liệu thống kê trực quan về tốc độ tăng trưởng thiết bị và các dạng mã độc mới." },
    { stt: 8, name: "Comprehensive Analysis of IoT Security: Threats, Detection Methods, and Defense Strategies (JIOT, 2024)", type: "Bài báo khoa học", source: "Tech Science Press", method: "Phân tích kiến trúc 3 lớp (Hardware, System, User Layer) và đề xuất hash mật mã để xác thực firmware integrity.", rate: "Rất cao (A): Định hướng giải pháp kỹ thuật rất rõ ràng cho lập trình viên hệ thống nhúng." },
    { stt: 9, name: "Enhancing IoT Security: Predicting Password Vulnerability using Machine Learning (EJECE, 2024)", type: "Bài báo khoa học", source: "European Journal of Electrical Engineering", method: "Sử dụng tập dữ liệu lưu trữ (Archival data) các cuộc tấn công Brute Force để huấn luyện mô hình dự đoán độ yếu mật khẩu.", rate: "Cao (B): Phương pháp tiếp cận thực tế nhưng tập dữ liệu đầu vào phụ thuộc nhiều vào lịch sử cũ." },
    { stt: 10, name: "OWASP IoT Security Testing Guide (2025/2026)", type: "Sách chuyên khảo / Cẩm nang chuyên ngành", source: "Open Worldwide Application Security Project (OWASP)", method: "Tổng hợp các kịch bản kiểm thử (Test cases) chuẩn quốc tế áp dụng cho phân tích tĩnh và động trên hệ thống IoT.", rate: "Xuất sắc (A+): Cẩm nang chuẩn công nghiệp (Industry Standard), độ uy tín thực tế tối cao cho mọi kỹ sư bảo mật." }
];

// Dữ liệu Bài 4: Hợp tác nhóm (Trello Board)
const trelloData = [
    { list: "Backlog (Ý tưởng / Chuẩn bị)", card: "- Nghiên cứu tài liệu API<br>- Thiết kế sơ đồ kiến trúc hệ thống", member: "Cả nhóm", label: "Khó / Nghiên cứu", due: "05/05/2026" },
    { list: "To Do (Cần làm)", card: "- Thiết kế giao diện giao diện Front-end<br>- Viết báo cáo phân tích chương 1 & 2", member: "Nguyễn Chí Tùng", label: "Trung bình", due: "08/05/2026" },
    { list: "In Progress (Đang làm)", card: "- Cấu hình mạch vi điều khiển ESP32<br>- Lập trình chức năng phân quyền cơ sở dữ liệu", member: "Nguyễn Thành Công", label: "Ưu tiên cao", due: "16/05/2026" },
    { list: "Testing / Review (Kiểm thử)", card: "- Đánh giá hiệu năng và đo dòng tiêu thụ năng lượng", member: "Nguyễn Đức Việt", label: "Kiểm thử", due: "01/06/2026" },
    { list: "Done (Đã hoàn thành)", card: "- Khởi tạo repository trên GitHub<br>- Viết slide thuyết trình tổng quan bài tập", member: "Cả nhóm", label: "Hoàn thành", due: "03/06/2026" }
];

// Khởi chạy khi DOM sẵn sàng
document.addEventListener("DOMContentLoaded", () => {
    renderTables();
    setupSPA();
    setupAccordion();
    setupMobileMenu();
});

// Hàm Render bảng tự động để giữ code HTML sạch sẽ, dễ bảo trì
function renderTables() {
    const scholarBody = document.getElementById("scholarTableBody");
    scholarBody.innerHTML = scholarData.map(item => `
        <tr>
            <td>${item.stt}</td>
            <td style="color: #fff; font-weight: 500;">${item.name}</td>
            <td><span class="highlight-text">${item.type}</span></td>
            <td><code>${item.source}</code></td>
            <td>${item.method}</td>
            <td style="border-left: 2px solid var(--neon-blue);">${item.rate}</td>
        </tr>
    `).join('');

    const trelloBody = document.getElementById("trelloTableBody");
    trelloBody.innerHTML = trelloData.map(item => `
        <tr>
            <td style="font-family: 'Orbitron', sans-serif; color: var(--neon-blue); font-weight:bold;">${item.list}</td>
            <td>${item.card}</td>
            <td>${item.member}</td>
            <td><code>${item.label}</code></td>
            <td style="color: var(--neon-pink); font-family: 'Share Tech Mono', monospace;">${item.due}</td>
        </tr>
    `).join('');
}

// Xử lý cơ chế Single Page Application (SPA) ẩn/hiện trang mượt mà
function setupSPA() {
    const navItems = document.querySelectorAll(".nav-item");
    const sections = document.querySelectorAll(".portfolio-section");

    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            
            // Xóa class active cũ của navbar
            navItems.forEach(nav => nav.classList.remove("active"));
            item.classList.add("active");

            // Chuyển trang bằng cách ẩn/hiện section tương ứng
            const target = item.getAttribute("data-target");
            sections.forEach(sec => {
                sec.classList.remove("active");
                if(sec.id === target) {
                    sec.classList.add("active");
                }
            });

            // Đóng menu trên mobile sau khi click chọn trang
            document.getElementById("navLinks").classList.remove("show");
        });
    });
}

// Cơ chế đóng mở accordion ẩn nội dung prompt nâng cao (giúp giao diện gọn gàng)
function setupAccordion() {
    const acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}

// Menu đóng/mở cho thiết bị di động (Tương thích Responsive)
function setupMobileMenu() {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}
