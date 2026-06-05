// DỮ LIỆU CHÍNH XÁC NGUỒN HỌC THUẬT (BÀI 2)
const academicData = [
    { id: 1, title: "Securing the Threads: In-Depth Analysis of IoT Architecture and Threat Mitigation (2025)", type: "Bài báo khoa học", publisher: "IEEE Xplore / SMART Conference", method: "Phân tích thực nghiệm đa tầng kiến trúc IoT, mô phỏng tấn công DDoS và giải pháp Học máy kết hợp Blockchain.", rate: "Rất cao (A)" },
    { id: 2, title: "IoT Security through ML/DL: Software Engineering Challenges and Directions (2025)", type: "Bài báo khoa học", publisher: "ICCK Journal of Software Engineering", method: "Nghiên cứu hệ thống (Systematic Review) dữ liệu từ IEEE Xplore giai đoạn 2020–2024, đánh giá giải pháp AI/ML chống xâm nhập.", rate: "Rất cao (A)" },
    { id: 3, title: "Deeper Insight Into Why Authentication Schemes in IoT Environments Fail to Achieve the Desired Security (Yimin Guo et al., 2024)", type: "Bài báo khoa học", publisher: "IEEE Transactions on Information Forensics and Security", method: "Phân tích toán học và thực nghiệm các thuật toán xác thực lỗi trên thiết bị IoT đầu cuối.", rate: "Xuất sắc (A+)" },
    { id: 4, title: "A Review of Lightweight IoT Authentication Protocols from Perspective of Costs (I. Cetintav et al., 2025)", type: "Bài báo khoa học", publisher: "IEEE Access", method: "So sánh hiệu năng phần cứng, chi phí tính toán và mức tiêu thụ năng lượng của các giao thức mã hóa hạng nhẹ.", rate: "Rất cao (A)" },
    { id: 5, title: "Automated IoT Firmware Vulnerability Detection Using Large Language Models (Preprints, 2025)", type: "Bài báo khoa học", publisher: "MDPI Preprints / OWASP Framework", method: "Thực nghiệm xây dựng pipeline tự động hóa công cụ dịch ngược (Ghidra, EMBA) phối hợp với mô hình ngôn ngữ lớn LLM.", rate: "Cao (B)" },
    { id: 6, title: "Exploring security threats and solutions Techniques for IoT: from vulnerabilities to vigilance (Sahu & Mazumdar, 2024)", type: "Bài báo khoa học", publisher: "Frontiers in Artificial Intelligence", method: "Khảo sát phân loại tấn công tầng vật lý (Side-channel, phần cứng) và tầng mạng (Sniffing, XSS).", rate: "Rất cao (A)" },
    { id: 7, title: "A Literature Review on Security in the Internet of Things: Identifying Critical Categories (MDPI, 2025)", type: "Bài báo khoa học", publisher: "MDPI Computer Sciences", method: "Phân tích thư mục, tổng hợp trắc lượng khoa học các xu hướng tấn công từ năm 2021 đến 2025.", rate: "Rất cao (A)" },
    { id: 8, title: "Comprehensive Analysis of IoT Security: Threats, Detection Methods, and Defense Strategies (JIOT, 2024)", type: "Bài báo khoa học", publisher: "Tech Science Press", method: "Phân tích kiến trúc 3 lớp (Hardware, System, User Layer) và đề xuất hash mật mã để xác thực firmware integrity.", rate: "Rất cao (A)" },
    { id: 9, title: "Enhancing IoT Security: Predicting Password Vulnerability using Machine Learning (EJECE, 2024)", type: "Bài báo khoa học", publisher: "European Journal of Electrical Engineering", method: "Sử dụng tập dữ liệu lưu trữ (Archival data) các cuộc tấn công Brute Force để huấn luyện mô hình dự đoán độ yếu mật khẩu.", rate: "Cao (B)" },
    { id: 10, title: "OWASP IoT Security Testing Guide (2025/2026)", type: "Sách chuyên khảo / Cẩm nang", publisher: "OWASP", method: "Tổng hợp các kịch bản kiểm thử (Test cases) chuẩn quốc tế áp dụng cho phân tích tĩnh và động trên hệ thống IoT.", rate: "Xuất sắc (A+)" }
];

// DỮ LIỆU SO SÁNH KỸ NGHỆ PROMPT (BÀI 3)
const promptTask1 = {
    headers: ["Tiêu chí", "Kết quả từ Prompt Cơ bản", "Kết quả từ Prompt Cải tiến", "Kết quả từ Prompt Nâng cao"],
    rows: [
        ["Nội dung hiển thị", "Trả về định nghĩa mang tính từ điển, nặng lý thuyết, liệt kê chung chung các thuật toán như RSA, ECC.", "Có bố cục rõ ràng theo yêu cầu. Chia tách phần định nghĩa và ví dụ riêng biệt, dễ đọc hơn.", "Rất cuốn hút. Phép ẩn dụ \"hộp thư ven đường\" giúp hiểu ngay lập tức bản chất toán học phức tạp mà không bị ngợp."],
        ["Độ chính xác & Phù hợp", "Đúng nhưng khô khan, dễ khiến người học mau quên.", "Tốt, đáp ứng vừa đủ nhu cầu tra cứu thông tin nhanh.", "Xuất sắc. Đánh trúng tâm lý sinh viên mới học, giải thích rõ luồng đi của dữ liệu theo từng bước."]
    ]
};

const promptTask2 = {
    headers: ["Tiêu chí", "Kết quả từ Prompt Cơ bản", "Kết quả từ Prompt Cải tiến", "Kết quả từ Prompt Nâng cao"],
    rows: [
        ["Nội dung hiển thị", "Sinh ra các câu hỏi quá dễ, định dạng lộn xộn, không có đáp án hoặc đáp án lồng thẳng vào câu hỏi làm mất tính năng ôn tập.", "Có 5 câu trắc nghiệm kèm đáp án ở cuối, nhưng các câu hỏi có độ khó tương đương nhau, chưa bao phủ hết các chế độ.", "Hoàn hảo. Bảng hiển thị rất sạch sẽ. Phần 'Giải thích chi tiết' phân tích kỹ tại sao chọn đáp án đó dựa trên sơ đồ mạch điện kéo lên/kéo xuống."],
        ["Độ chính xác & Phù hợp", "Thấp, không dùng để kiểm tra kiến thức sâu được.", "Trung bình, đạt yêu cầu bài tập cơ bản.", "Cao nhất. Phân loại rõ ràng từ nhận biết đến vận dụng, có thể dùng trực tiếp để ôn thi."]
    ]
};

// DỮ LIỆU QUẢN LÝ NHÓM (BÀI 4)
const trelloData = [
    { list: "Backlog (Ý tưởng / Chuẩn bị)", cards: " Nghiên cứu tài liệu API<br> Thiết kế sơ đồ kiến trúc hệ thống", member: "Cả nhóm", label: "<span class='badge high'>Khó / Nghiên cứu</span>", date: "05/06/2026" },
    { list: "To Do (Cần làm)", cards: " Thiết kế giao diện giao diện Front-end<br> Viết báo cáo phân tích chương 1 & 2", member: "Nguyễn Văn A", label: "<span class='badge med'>Trung bình</span>", date: "08/06/2026" },
    { list: "In Progress (Đang làm)", cards: " Cấu hình mạch vi điều khiển ESP32<br> Lập trình chức năng phân quyền cơ sở dữ liệu", member: "Trần Văn B", label: "<span class='badge high'>Ưu tiên cao</span>", date: "06/06/2026" },
    { list: "Testing / Review (Kiểm thử)", cards: " Đánh giá hiệu năng và đo dòng tiêu thụ năng lượng", member: "Lê Thị C", label: "<span class='badge low'>Kiểm thử</span>", date: "04/06/2026" },
    { list: "Done (Đã hoàn thành)", cards: " Khởi tạo repository trên GitHub<br> Viết slide thuyết trình tổng quan bài tập", member: "Cả nhóm", label: "<span class='badge low'>Hoàn thành</span>", date: "02/06/2026" }
];

// KHỞI TẠO VÀ RENDER DỮ LIỆU KHI TRANG WEB TẢI XONG
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Hệ thống xử lý chuyển trang mượt mà (SPA Routing)
    const navButtons = document.querySelectorAll(".nav-btn");
    const sections = document.querySelectorAll(".portfolio-section");

    navButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = button.getAttribute("data-target");

            // Cập nhật trạng thái Active trên Menu
            navButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Hiển thị Section tương ứng
            sections.forEach(section => {
                section.classList.remove("active");
                if(section.id === targetId) {
                    section.classList.add("active");
                }
            });
        });
    });

    // 2. Render Bảng học thuật Bài 2
    const tableAcademic = document.getElementById("table-academic");
    let academicHtml = `
        <tr>
            <th>STT</th>
            <th>Tên tài liệu / Tác giả / Năm</th>
            <th>Loại nguồn</th>
            <th>Cơ quan xuất bản / Lưu trữ</th>
            <th>Phương pháp nghiên cứu</th>
            <th>Độ tin cậy & Xếp hạng</th>
        </tr>
    `;
    academicData.forEach(item => {
        academicHtml += `
            <tr>
                <td>${item.id}</td>
                <td><strong>${item.title}</strong></td>
                <td>${item.type}</td>
                <td>${item.publisher}</td>
                <td>${item.method}</td>
                <td><span class="badge ${item.rate.includes('A') ? 'high' : 'med'}">${item.rate}</span></td>
            </tr>
        `;
    });
    tableAcademic.innerHTML = academicHtml;

    // 3. Render Bảng Kỹ nghệ Prompt Bài 3 - Tác vụ 1
    renderPromptTable("table-prompt1", promptTask1);
    // Render Bảng Kỹ nghệ Prompt Bài 3 - Tác vụ 2
    renderPromptTable("table-prompt2", promptTask2);

    // 4. Render Bảng quản lý nhóm Kanban Bài 4
    const tableTrello = document.getElementById("table-trello");
    let trelloHtml = `
        <tr>
            <th>Danh mục (List)</th>
            <th>Nội dung công việc (Cards)</th>
            <th>Thành viên phụ trách</th>
            <th>Nhãn phân loại (Labels)</th>
            <th>Hạn chót (Due Date)</th>
        </tr>
    `;
    trelloData.forEach(row => {
        trelloHtml += `
            <tr>
                <td><strong>${row.list}</strong></td>
                <td>${row.cards}</td>
                <td>${row.member}</td>
                <td>${row.label}</td>
                <td><code>${row.date}</code></td>
            </tr>
        `;
    });
    tableTrello.innerHTML = trelloHtml;
});

// Hàm bổ trợ render dữ liệu Prompt bảng nâng cao
function renderPromptTable(elementId, dataObj) {
    const tableEl = document.getElementById(elementId);
    let headerHtml = "<tr>";
    dataObj.headers.forEach(h => { headerHtml += `<th>${h}</th>`; });
    headerHtml += "</tr>";

    let rowsHtml = "";
    dataObj.rows.forEach(row => {
        rowsHtml += "<tr>";
        row.forEach((cell, idx) => {
            if(idx === 0) {
                rowsHtml += `<td><strong>${cell}</strong></td>`;
            } else {
                rowsHtml += `<td>${cell}</td>`;
            }
        });
        rowsHtml += "</tr>";
    });
    tableEl.innerHTML = headerHtml + rowsHtml;
}
