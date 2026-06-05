// ==========================================================================
// 1. CƠ SỞ DỮ LIỆU CHÍNH XÁC - KHÔNG BỊA ĐẶT THÔNG TIN (TRÍCH XUẤT 100% TỪ FILE)
// ==========================================================================

const ACADEMIC_DATA = [
    { stt: 1, name: "Securing the Threads: In-Depth Analysis of IoT Architecture and Threat Mitigation (2025)", type: "Bài báo khoa học", source: "IEEE Xplore / SMART Conference", method: "Phân tích thực nghiệm đa tầng kiến trúc IoT, mô phỏng tấn công DDoS và giải pháp Học máy kết hợp Blockchain.", rank: "Rất cao (A): Xuất bản bởi tổ chức uy tín toàn cầu IEEE, phản ánh xu hướng công nghệ bảo mật mới nhất năm 2025." },
    { stt: 2, name: "IoT Security through ML/DL: Software Engineering Challenges and Directions (2025)", type: "Bài báo khoa học", source: "ICCK Journal of Software Engineering", method: "Nghiên cứu hệ thống (Systematic Review) dữ liệu từ IEEE Xplore giai đoạn 2020-2024, đánh giá giải pháp AI/ML chống xâm nhập.", rank: "Rất cao (A): Nguồn uy tín, có phản biện độc lập khắt khe." },
    { stt: 3, name: "Deeper Insight Into Why Authentication Schemes in IoT Environments Fail to Achieve the Desired Security (Yimin Guo et al., 2024)", type: "Bài báo khoa học", source: "IEEE Transactions on Information Forensics and Security", method: "Phân tích toán học và thực nghiệm các thuật toán xác thực lỗi trên thiết bị IoT đầu cuối.", rank: "Xuất sắc (A+): Tạp chí lõi Q1 chuyên sâu về an toàn thông tin." },
    { stt: 4, name: "A Review of Lightweight IoT Authentication Protocols from Perspective of Costs (I. Cetintav et al., 2025)", type: "Bài báo khoa học", source: "IEEE Access", method: "So sánh hiệu năng phần cứng, chi phí tính toán và mức tiêu thụ năng lượng của các giao thức mã hóa hạng nhẹ.", rank: "Rất cao (A): Chỉ số trích dẫn cao, dữ liệu thực nghiệm chuẩn xác." },
    { stt: 5, name: "Automated IoT Firmware Vulnerability Detection Using Large Language Models (Preprints, 2025)", type: "Bài báo khoa học", source: "MDPI Preprints / OWASP Framework", method: "Thực nghiệm xây dựng pipeline tự động hóa công cụ dịch ngược (Ghidra, EMBA) phối hợp với mô hình ngôn ngữ lớn LLM.", rank: "Cao (B): Tài liệu tiền xuất bản có giá trị công nghệ thực tiễn cao." },
    { stt: 6, name: "Exploring security threats and solutions Techniques for IoT: from vulnerabilities to vigilance (Sahu & Mazumdar, 2024)", type: "Bài báo khoa học", source: "Frontiers in Artificial Intelligence", method: "Khảo sát phân loại tấn công tầng vật lý (Side-channel, phần cứng) và tầng mạng (Sniffing, XSS).", rank: "Rất cao (A): Thuộc danh mục nhà xuất bản Frontiers uy tín thế giới." },
    { stt: 7, name: "A Literature Review on Security in the Internet of Things: Identifying Critical Categories (MDPI, 2025)", type: "Bài báo khoa học", source: "MDPI Computer Sciences", method: "Phân tích thư mục, tổng hợp trắc lượng khoa học các xu hướng tấn công từ năm 2021 đến 2025.", rank: "Rất cao (A): Tổng quan hệ thống dữ liệu toàn diện." },
    { stt: 8, name: "Comprehensive Analysis of IoT Security: Threats, Detection Methods, and Defense Strategies (JIOT, 2024)", type: "Bài báo khoa học", source: "Tech Science Press", method: "Phân tích kiến trúc 3 lớp (Hardware, System, User Layer) và đề xuất hash mật mã để xác thực firmware integrity.", rank: "Rất cao (A): Đóng góp giải pháp cấu trúc hạ tầng mạng an toàn." },
    { stt: 9, name: "Enhancing IoT Security: Predicting Password Vulnerability using Machine Learning (EJECE, 2024)", type: "Bài báo khoa học", source: "European Journal of Electrical Engineering", method: "Sử dụng tập dữ liệu lưu trữ (Archival data) các cuộc tấn công Brute Force để huấn luyện mô hình dự đoán độ yếu mật khẩu.", rank: "Cao (B): Mang tính ứng dụng kỹ thuật cao tại châu Âu." },
    { stt: 10, name: "OWASP IoT Security Testing Guide (2025/2026)", type: "Sách chuyên khảo / Cẩm nang", source: "OWASP Global", method: "Tổng hợp các kịch bản kiểm thử (Test cases) chuẩn quốc tế áp dụng cho phân tích tĩnh và động trên hệ thống IoT.", rank: "Xuất sắc (A+): Tiêu chuẩn công nghiệp thực tế cho mọi kỹ sư bảo mật phần mềm." }
];

const PROMPT_TASK_1 = {
    headers: ["Tiêu chí đánh giá", "Kết quả từ Prompt Cơ bản", "Kết quả từ Prompt Cải tiến", "Kết quả từ Prompt Nâng cao"],
    rows: [
        ["Nội dung hiển thị", "Trả về định nghĩa mang tính từ điển, nặng lý thuyết, liệt kê chung chung các thuật toán như RSA, ECC.", "Có bố cục rõ ràng theo yêu cầu. Chia tách phần định nghĩa và ví dụ riêng biệt, dễ đọc hơn.", "Rất cuốn hút. Phép ẩn dụ 'hộp thư ven đường' giúp hiểu ngay lập tức bản chất toán học phức tạp mà không bị ngợp."],
        ["Độ chính xác & Phù hợp", "Đúng nhưng khô khan, dễ khiến người học mau quên.", "Tốt, đáp ứng vừa đủ nhu cầu tra cứu thông tin nhanh.", "Xuất sắc. Đánh trúng tâm lý sinh viên mới học, giải thích rõ luồng đi của dữ liệu theo từng bước."]
    ]
};

const PROMPT_TASK_2 = {
    headers: ["Tiêu chí đánh giá", "Kết quả từ Prompt Cơ bản", "Kết quả từ Prompt Cải tiến", "Kết quả từ Prompt Nâng cao"],
    rows: [
        ["Nội dung hiển thị", "Sinh ra các câu hỏi quá dễ, định dạng lộn xộn, không có đáp án hoặc đáp án lồng thẳng vào câu hỏi làm mất tính năng ôn tập.", "Có 5 câu trắc nghiệm kèm đáp án ở cuối, nhưng các câu hỏi có độ khó tương đương nhau, chưa bao phủ hết các chế độ.", "Hoàn hảo. Bảng hiển thị rất sạch sẽ. Phần 'Giải thích chi tiết' phân tích kỹ tại sao chọn đáp án đó dựa trên sơ đồ mạch điện kéo lên/kéo xuống."],
        ["Độ chính xác & Phù hợp", "Thấp, không dùng để kiểm tra kiến thức sâu được.", "Trung bình, đạt yêu cầu bài tập cơ bản.", "Cao nhất. Phân loại rõ ràng từ nhận biết đến vận dụng, có thể dùng trực tiếp để ôn thi."]
    ]
};

const KANBAN_DATA = [
    { list: "Backlog (Ý tưởng / Chuẩn bị)", cards: "- Nghiên cứu tài liệu API<br>- Thiết kế sơ đồ kiến trúc hệ thống", member: "Cả nhóm", label: "Khó / Nghiên cứu", date: "05/06/2026", badgeClass: "status-high" },
    { list: "To Do (Cần làm)", cards: "- Thiết kế giao diện giao diện Front-end<br>- Viết báo cáo phân tích chương 1 & 2", member: "Nguyễn Văn A", label: "Trung bình", date: "08/06/2026", badgeClass: "status-med" },
    { list: "In Progress (Đang làm)", cards: "- Cấu hình mạch vi điều khiển ESP32<br>- Lập trình chức năng phân quyền cơ sở dữ liệu", member: "Trần Văn B", label: "Ưu tiên cao", date: "06/06/2026", badgeClass: "status-high" },
    { list: "Testing / Review (Kiểm thử)", cards: "- Đánh giá hiệu năng và đo dòng tiêu thụ năng lượng", member: "Lê Thị C", label: "Kiểm thử", date: "04/06/2026", badgeClass: "status-med" },
    { list: "Done (Đã hoàn thành)", cards: "- Khởi tạo repository trên GitHub<br>- Viết slide thuyết trình tổng quan bài tập", member: "Cả nhóm", label: "Hoàn thành", date: "02/06/2026", badgeClass: "status-low" }
];

const PRINCIPLES_DATA = [
    { title: "Khai báo minh bạch", desc: "Luôn nêu rõ công cụ AI nào đã được sử dụng và mức độ đóng góp của nó trong sản phẩm." },
    { title: "Fact-checking độc lập", desc: "Mọi thông tin cốt lõi, số liệu từ AI đều bắt buộc phải được đối chiếu lại bằng tài liệu chính thống." },
    { title: "Bảo mật thông tin", desc: "Tuyệt đối không tải lên các dữ liệu cá nhân, mã nguồn mật hoặc tài sản trí tuệ chưa công bố." },
    { title: "Chịu trách nhiệm cuối cùng", desc: "Sản phẩm đầu ra thuộc về cá nhân sinh viên, AI chỉ đóng vai trò hỗ trợ tăng tốc tiến trình." },
    { title: "Tư duy phản biện chủ động", desc: "Sử dụng AI để gợi mở góc nhìn đa chiều, không sao chép nguyên bản một cách thụ động." },
    { title: "Học hỏi liên tục", desc: "Cập nhật các mô hình công nghệ, phương thức đặt câu lệnh mới để tối ưu hóa quy trình nghiên cứu." }
];

// ==========================================================================
// 2. LOGIC ĐIỀU HƯỚNG SINGLE PAGE APPLICATION (SPA) & DI ĐỘNG (MOBILE NAVIGATION)
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    
    // Khởi tạo các phần tử DOM điều hướng
    const navButtons = document.querySelectorAll(".nav-btn");
    const sections = document.querySelectorAll(".portfolio-section");
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");

    // Xử lý chuyển trang mượt mà
    navButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = button.getAttribute("data-target");

            // Đổi trạng thái nút bấm active trên sidebar
            navButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Hiển thị màn hình nội dung tương ứng
            sections.forEach(sec => {
                sec.classList.remove("active");
                if (sec.id === targetId) {
                    sec.classList.add("active");
                }
            });

            // Nếu đang chạy trên màn hình điện thoại di động, tự động đóng menu sau khi chọn trang xong
            if (sidebar.classList.contains("mobile-open")) {
                sidebar.classList.remove("mobile-open");
                menuToggle.classList.remove("open");
            }

            // Tự động cuộn mượt lên trên cùng màn hình khi đổi trang
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });

    // Mở/Đóng menu nhanh trên điện thoại di động (Hamburger click)
    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("mobile-open");
        menuToggle.classList.toggle("open");
    });

    // ==========================================================================
    // 3. KHỞI TẠO VÀ CHÈN DỮ LIỆU TỰ ĐỘNG VÀO CÁC BẢNG (DATA GRID RENDERING)
    // ==========================================================================

    // Nạp bảng học thuật Bài 2
    renderAcademicTable();

    // Nạp các bảng Kỹ nghệ Prompt Bài 3
    renderPromptTable("promptTable1", PROMPT_TASK_1);
    renderPromptTable("promptTable2", PROMPT_TASK_2);

    // Nạp bảng Kanban quản lý nhóm Bài 4
    renderKanbanTable();

    // Nạp grid 6 nguyên tắc làm việc với AI Bài 6
    renderPrinciplesGrid();
});

// Hàm tạo bảng học thuật (Bài 2)
function renderAcademicTable() {
    const table = document.getElementById("academicTable");
    let html = `
        <tr>
            <th style="width: 50px;">STT</th>
            <th>Tên tài liệu / Tác giả / Năm</th>
            <th>Loại nguồn</th>
            <th>Cơ quan xuất bản / Nguồn lưu trữ</th>
            <th>Phương pháp nghiên cứu</th>
            <th>Đánh giá độ tin cậy & Xếp hạng</th>
        </tr>
    `;
    ACADEMIC_DATA.forEach(row => {
        html += `
            <tr>
                <td><strong>${row.stt}</strong></td>
                <td><span style="color: #ffffff; font-weight: 500;">${row.name}</span></td>
                <td>${row.type}</td>
                <td>${row.source}</td>
                <td>${row.method}</td>
                <td>${row.rank}</td>
            </tr>
        `;
    });
    table.innerHTML = html;
}

// Hàm dùng chung tạo bảng phân tích câu lệnh (Bài 3)
function renderPromptTable(tableId, dataset) {
    const table = document.getElementById(tableId);
    
    // Khởi tạo hàng tiêu đề bảng
    let headerHtml = "<tr>";
    dataset.headers.forEach(header => {
        headerHtml += `<th>${header}</th>`;
    });
    headerHtml += "</tr>";

    // Khởi tạo các hàng dữ liệu nội dung
    let rowsHtml = "";
    dataset.rows.forEach(row => {
        rowsHtml += "<tr>";
        row.forEach((cellData, index) => {
            if (index === 0) {
                rowsHtml += `<td><strong>${cellData}</strong></td>`;
            } else {
                rowsHtml += `<td>${cellData}</td>`;
            }
        });
        rowsHtml += "</tr>";
    });

    table.innerHTML = headerHtml + rowsHtml;
}

// Hàm tạo bảng Kanban quản lý nhóm (Bài 4)
function renderKanbanTable() {
    const table = document.getElementById("kanbanTable");
    let html = `
        <tr>
            <th>Danh mục (List)</th>
            <th>Nội dung công việc (Cards)</th>
            <th>Thành viên phụ trách</th>
            <th>Nhãn phân loại (Labels)</th>
            <th>Hạn chót (Due Date)</th>
        </tr>
    `;
    KANBAN_DATA.forEach(row => {
        html += `
            <tr>
                <td><strong>${row.list}</strong></td>
                <td style="color: #e5e7eb;">${row.cards}</td>
                <td>${row.member}</td>
                <td><span class="badge ${row.badgeClass}">${row.label}</span></td>
                <td><code style="color: #00f2fe; font-family: monospace;">${row.date}</code></td>
            </tr>
        `;
    });
    table.innerHTML = html;
}

// Hàm tạo lưới 6 nguyên tắc cốt lõi (Bài 6)
function renderPrinciplesGrid() {
    const grid = document.getElementById("principlesGrid");
    let html = "";
    PRINCIPLES_DATA.forEach((item, index) => {
        html += `
            <div class="principle-card">
                <div class="principle-header">
                    <div class="principle-idx">${index + 1}</div>
                    <h4 class="principle-title">${item.title}</h4>
                </div>
                <p class="principle-desc">${item.desc}</p>
            </div>
        `;
    });
    grid.innerHTML = html;
}
