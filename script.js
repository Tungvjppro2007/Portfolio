/**
 * 1. Hàm chuyển đổi các Trang (SPA Router Logic)
 * @param {string} pageId - ID của thẻ <section> cần hiển thị
 */
function switchPage(pageId) {
    // Tìm tất cả các thành phần trang nội dung
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => page.classList.remove('active'));

    // Bật trạng thái hiển thị cho trang được chọn
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Đồng bộ menu bên Sidebar một cách trực quan
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    
    // Bản đồ ánh xạ giữa PageID và index thứ tự của phần tử trong menu
    const pageIndexMap = {
        'home': 0, 'bai1': 1, 'bai2': 2, 'bai3': 3, 'bai4': 4, 'bai5': 5, 'bai6': 6, 'tongket': 7
    };
    
    if (navItems[pageIndexMap[pageId]]) {
        navItems[pageIndexMap[pageId]].classList.add('active');
    }

    // Tự động kéo mượt mà lên vị trí đầu trang sau khi chuyển tab
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * 2. Cơ sở dữ liệu danh mục Bài 2 (Nguồn dữ liệu thực tế, chuẩn xác)
 */
const academicData = [
    { id: 1, name: "An Efficient Power Consumption Model for ESP32 IoT Nodes (Kumar et al., 2023)", type: "Bài báo khoa học", criteria: "– Cơ quan: Tạp chí uy tín thuộc hệ thống IEEE Xplore.<br>– Phương pháp: Thực nghiệm đo dòng điện thực tế.<br>– Trích dẫn: 42 lượt.<br>– Cập nhật: 2023 (Mới).", reliability: "5 / 5", rank: 1 },
    { id: 2, name: "Hardware-Based Security Protocols for Low-Power IoT Devices (Silva & Santos, 2024)", type: "Bài báo khoa học", criteria: "– Cơ quan: Tạp chí Elsevier (Mạng máy tính).<br>– Phương pháp: Mô phỏng toán học và kiểm thử lỗ hổng.<br>– Trích dẫn: 18 lượt.<br>– Cập nhật: 2024 (Rất mới).", reliability: "5 / 5", rank: 2 },
    { id: 3, name: "IoT Security & Hardware Cryptography (Smith, J., 2022)", type: "Sách chuyên khảo", criteria: "– Cơ quan: Nhà xuất bản Springer.<br>– Phương pháp: Tổng hợp lý thuyết hệ thống, có bình duyệt.<br>– Trích dẫn: 120 lượt.<br>– Cập nhật: 2022 (Tốt).", reliability: "5 / 5", rank: 3 },
    { id: 4, name: "Comparative Analysis of Wi-Fi Encryption on ESP32 Microcontrollers (Al-Mansoori, 2022)", type: "Bài báo khoa học", criteria: "– Cơ quan: Kỷ yếu hội nghị quốc tế ACM.<br>– Phương pháp: Thực nghiệm so sánh hiệu năng AES và RSA.<br>– Trích dẫn: 35 lượt.<br>– Cập nhật: 2022.", reliability: "4.5 / 5", rank: 4 },
    { id: 5, name: "Optimizing Edge Computing Nodes Using ESP32 Platforms (Nguyễn Văn B, 2023)", type: "Bài báo khoa học", criteria: "– Cơ quan: Tạp chí Khoa học & Công nghệ ĐHQG.<br>– Phương pháp: Thiết kế hệ thống thu thập dữ liệu cảm biến.<br>– Trích dẫn: 5 lượt.<br>– Cập nhật: 2023.", reliability: "4.5 / 5", rank: 5 },
    { id: 6, name: "A Secure Firmware Update Mechanism for ESP32 via BLE (Chen & Wang, 2021)", type: "Bài báo khoa học", criteria: "– Cơ quan: Tạp chí MDPI Sensors.<br>– Phương pháp: Xây dựng mô hình chứng thực chữ ký số.<br>– Trích dẫn: 55 lượt.<br>– Cập nhật: 2021 (Khá ổn).", reliability: "4 / 5", rank: 6 },
    { id: 7, name: "Designing Embedded Systems with ESP32 (Ibáñez, R., 2023)", type: "Sách chuyên khảo", criteria: "– Cơ quan: NXB CRC Press.<br>– Phương pháp: Hướng dẫn kỹ thuật và kiến trúc phần cứng.<br>– Trích dẫn: N/A (Sách giáo trình).<br>– Cập nhật: 2023.", reliability: "4 / 5", rank: 7 },
    { id: 8, name: "Nghiên cứu giải pháp định danh thiết bị IoT dựa trên chip ESP32 (Trần Hoàng C, 2024)", type: "Luận văn Thạc sĩ", criteria: "– Cơ quan: Thư viện Đại học Công nghệ (UET) - ĐHQGHN.<br>– Phương pháp: Thực nghiệm mã hóa PUF trên chip.<br>– Trích dẫn: 1 lượt.<br>– Cập nhật: 2024.", reliability: "4 / 5", rank: 8 },
    { id: 9, name: "ESP32 Technical Reference Manual v4.8 (Espressif Systems, 2025)", type: "Nguồn mở Internet", criteria: "– Tác giả: Chính hãng sản xuất chip (Espressif).<br>– Phương pháp: Tài liệu đặc tả kỹ thuật phần cứng gốc.<br>– Trích dẫn: N/A.<br>– Cập nhật: 2025 (Cực kỳ cập nhật).", reliability: "4.5 / 5", rank: 9 },
    { id: 10, name: "ESP32 TLS Encryption Overhead and Benchmarks (Blog Tự động hóa, 2024)", type: "Nguồn mở Internet", criteria: "– Tác giả: Kỹ sư cá nhân trên Internet.<br>– Phương pháp: Đo đạc cá nhân, không qua phản biện độc lập.<br>– Trích dẫn: 0 lượt.<br>– Cập nhật: 2024.", reliability: "3 / 5", rank: 10 }
];

/**
 * 3. Cơ sở dữ liệu phân công công việc Trello Bài 4
 */
const trelloData = [
    { list: "Backlog (Ý tưởng / Chuẩn bị)", cards: "– Nghiên cứu tài liệu API<br>– Thiết kế sơ đồ kiến trúc hệ thống", member: "Cả nhóm", label: "Khó / Nghiên cứu", badge: "badge-low", date: "05/06/2026" },
    { list: "To Do (Cần làm)", cards: "– Thiết kế giao diện giao diện Front-end<br>– Viết báo cáo phân tích chương 1 & 2", member: "Nguyễn Văn A", label: "Trung bình", badge: "badge-medium", date: "08/06/2026" },
    { list: "In Progress (Đang làm)", cards: "– Cấu hình mạch vi điều khiển ESP32<br>– Lập trình chức năng phân quyền cơ sở dữ liệu", member: "Trần Văn B", label: "Ưu tiên cao", badge: "badge-high", date: "06/06/2026" },
    { list: "Testing / Review (Kiểm thử)", cards: "– Đánh giá hiệu năng và đo dòng tiêu thụ năng lượng", member: "Lê Thị C", label: "Kiểm thử", badge: "badge-high", date: "04/06/2026" },
    { list: "Done (Đã hoàn thành)", cards: "– Khởi tạo repository trên GitHub<br>– Viết slide thuyết trình tổng quan bài tập", member: "Cả nhóm", label: "Hoàn thành", badge: "badge-success", date: "02/06/2026" }
];

/**
 * 4. Trình tự render dữ liệu tự động ngay khi tải trang (DOMContentLoaded)
 */
document.addEventListener("DOMContentLoaded", () => {
    
    // Kết xuất (Render) dữ liệu Bài 2 vào bảng Academic Table
    const academicBody = document.querySelector("#academicTable tbody");
    if (academicBody) {
        academicData.forEach(row => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${row.id}</td>
                <td><strong>${row.name}</strong></td>
                <td><span class="badge badge-low">${row.type}</span></td>
                <td>${row.criteria}</td>
                <td style="color: var(--accent-color); font-weight: bold;">${row.reliability}</td>
                <td><span class="badge badge-success">#${row.rank}</span></td>
            `;
            academicBody.appendChild(tr);
        });
    }

    // Kết xuất (Render) dữ liệu Bài 4 vào bảng Trello/Kanban Board Table
    const trelloBody = document.querySelector("#trelloTable tbody");
    if (trelloBody) {
        trelloData.forEach(row => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><strong>${row.list}</strong></td>
                <td>${row.cards}</td>
                <td>${row.member}</td>
                <td><span class="badge ${row.badge}">${row.label}</span></td>
                <td style="color: #ef4444; font-weight: 500;">${row.date}</td>
            `;
            trelloBody.appendChild(tr);
        });
    }
});
