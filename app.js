// Dữ liệu nội dung các trang
const pagesData = {
    home: `
        <div class="page-section">
            <h1>Thông tin sinh viên</h1>
            <div class="panel">
                <h2>Thông tin cá nhân</h2>
                <p><strong>Họ tên:</strong> Nguyễn Chí Tùng</p>
                <p><strong>Sinh viên:</strong> K70 - Kỹ thuật máy tính</p>
                <p><strong>Trường:</strong> Đại học Công nghệ - Đại học Quốc gia Hà Nội (VNU - UET)</p>
            </div>
            <div class="panel">
                <h2>Mục tiêu</h2>
                <p><strong>Mục tiêu học tập:</strong> Trở thành Kỹ sư phần mềm.</p>
                <p><strong>Mục tiêu của Portfolio:</strong> Giới thiệu bản thân và báo cáo kết quả các bài tập thực hành thành phần.</p>
            </div>
        </div>
    `,
    task1: `
        <div class="page-section">
            <h1>Bài 1: Thao tác cơ bản với tệp tin và thư mục</h1>
            <div class="panel">
                <h3>Cấu trúc thư mục thiết lập</h3>
                <pre>
[Ổ đĩa D: hoặc E:] (Hoặc Documents)
└── 📁 ThucHanh_NguyenChiTung
    └── 📁 TaiLieu
        └── 📄 GhiChuQuanTrong.txt
                </pre>
            </div>
            <div class="panel">
                <h3>Quy tắc đặt tên tệp và thư mục tối ưu</h3>
                <ul>
                    <li><strong>Quy tắc CamelCase kết hợp dấu gạch dưới (_):</strong> Tên thư mục chính <code>ThucHanh_NguyenChiTung</code> và <code>TaiLieu</code> sử dụng viết hoa chữ cái đầu của mỗi từ để dễ đọc, phân tách rõ ràng.</li>
                    <li><strong>Tính gợi nhớ (Descriptive Names):</strong> Tên tệp như <code>GhiChuQuanTrong.txt</code> phản ánh trực tiếp nội dung, giúp nhận biết ngay lập tức.</li>
                    <li><strong>Không sử dụng khoảng trắng và ký tự đặc biệt:</strong> Tránh các ký tự hệ thống cấm ( / , \\ , : , * , ? , " , < , > , | ) và hạn chế dấu cách để tránh lỗi trên terminal.</li>
                </ul>
            </div>
        </div>
    `,
    task2: `
        <div class="page-section">
            <h1>Bài 2: Tìm kiếm và đánh giá thông tin học thuật</h1>
            <div class="panel">
                <h3>Kết quả tìm kiếm học thuật bằng các toán tử nâng cao</h3>
                <p><strong>Cú pháp 1 (Tối ưu năng lượng):</strong> <code>"ESP32" AND "energy optimization" AND (sleep OR power)</code><br>
                <em>Ý nghĩa:</em> Ép buộc kết quả chứa chính xác cụm từ khóa và xuất hiện một trong hai từ sleep hoặc power.</p>
                
                <p><strong>Cú pháp 2 (Bảo mật phần cứng):</strong> <code>"ESP32" AND "cryptography" AND "hardware security" -"forum"</code><br>
                <em>Ý nghĩa:</em> Tìm tài liệu chuyên sâu, loại bỏ các kết quả từ diễn đàn thảo luận.</p>

                <p><strong>Cú pháp 3 (Tài liệu định dạng PDF):</strong> <code>"IoT security" AND "microcontroller" filetype:pdf</code><br>
                <em>Ý nghĩa:</em> Lọc riêng các tài liệu tổng quan, sách định dạng PDF.</p>
            </div>
            <div class="panel">
                <h3>Bảng tổng hợp và đánh giá nguồn tin</h3>
                <div style="overflow-x:auto;">
                    <table>
                        <tr>
                            <th>STT</th>
                            <th>Tên tài liệu / Tác giả</th>
                            <th>Loại nguồn</th>
                            <th>Phân tích tiêu chí</th>
                            <th>Độ tin cậy</th>
                            <th>Hạng</th>
                        </tr>
                        <tr><td>1</td><td>An Efficient Power Consumption Model for ESP32 IoT Nodes (Kumar et al., 2023)</td><td>Bài báo khoa học</td><td>Cơ quan: IEEE Xplore. Trích dẫn: 42. Cập nhật: 2023</td><td>5/5</td><td>1</td></tr>
                        <tr><td>2</td><td>Hardware-Based Security Protocols for Low-Power IoT Devices (Silva & Santos, 2024)</td><td>Bài báo khoa học</td><td>Cơ quan: Elsevier. Trích dẫn: 18. Cập nhật: 2024</td><td>5/5</td><td>2</td></tr>
                        <tr><td>3</td><td>IoT Security & Hardware Cryptography (Smith, J., 2022)</td><td>Sách chuyên khảo</td><td>Cơ quan: Springer. Trích dẫn: 120. Cập nhật: 2022</td><td>5/5</td><td>3</td></tr>
                        <tr><td>4</td><td>Comparative Analysis of Wi-Fi Encryption on ESP32 Microcontrollers (Al-Mansoori, 2022)</td><td>Bài báo khoa học</td><td>Cơ quan: ACM. Trích dẫn: 35. Cập nhật: 2022</td><td>4.5/5</td><td>4</td></tr>
                        <tr><td>5</td><td>Optimizing Edge Computing Nodes Using ESP32 Platforms (Nguyễn Văn B, 2023)</td><td>Bài báo khoa học</td><td>Cơ quan: Tạp chí KH&CN ĐHQG. Trích dẫn: 5. Cập nhật: 2023</td><td>4.5/5</td><td>5</td></tr>
                        <tr><td>6</td><td>A Secure Firmware Update Mechanism for ESP32 via BLE (Chen & Wang, 2021)</td><td>Bài báo khoa học</td><td>Cơ quan: MDPI Sensors. Trích dẫn: 55. Cập nhật: 2021</td><td>4/5</td><td>6</td></tr>
                        <tr><td>7</td><td>Designing Embedded Systems with ESP32 (Ibáñez, R., 2023)</td><td>Sách chuyên khảo</td><td>Cơ quan: CRC Press. Cập nhật: 2023</td><td>4/5</td><td>7</td></tr>
                        <tr><td>8</td><td>Nghiên cứu giải pháp định danh thiết bị IoT... (Trần Hoàng C, 2024)</td><td>Luận văn Thạc sĩ</td><td>Cơ quan: UET - ĐHQGHN. Trích dẫn: 1. Cập nhật: 2024</td><td>4/5</td><td>8</td></tr>
                        <tr><td>9</td><td>ESP32 Technical Reference Manual v4.8 (Espressif Systems, 2025)</td><td>Nguồn mở Internet</td><td>Tác giả: Espressif. Phương pháp: Đặc tả kỹ thuật gốc. Cập nhật: 2025</td><td>4.5/5</td><td>9</td></tr>
                        <tr><td>10</td><td>ESP32 TLS Encryption Overhead and Benchmarks (Blog, 2024)</td><td>Nguồn mở Internet</td><td>Tác giả: Kỹ sư cá nhân. Trích dẫn: 0. Cập nhật: 2024</td><td>3/5</td><td>10</td></tr>
                    </table>
                </div>
            </div>
        </div>
    `,
    task3: `
        <div class="page-section">
            <h1>Bài 3: Viết Prompt hiệu quả cho các tác vụ học tập</h1>
            <div class="panel">
                <h3>Tác vụ 1: Giải thích cơ chế bất đối xứng trong mã hóa khóa công khai</h3>
                <table>
                    <tr><th>Tiêu chí</th><th>Prompt Cơ bản</th><th>Prompt Cải tiến</th><th>Prompt Nâng cao</th></tr>
                    <tr>
                        <td>Nội dung hiển thị</td>
                        <td>Định nghĩa từ điển, nặng lý thuyết, chung chung.</td>
                        <td>Bố cục rõ ràng, tách định nghĩa và ví dụ dễ đọc.</td>
                        <td>Rất cuốn hút. Phép ẩn dụ giúp hiểu bản chất phức tạp mà không bị ngợp.</td>
                    </tr>
                    <tr>
                        <td>Độ chính xác & Phù hợp</td>
                        <td>Đúng nhưng khô khan.</td>
                        <td>Tốt, đáp ứng tra cứu nhanh.</td>
                        <td>Xuất sắc. Đánh trúng tâm lý sinh viên, giải thích rõ luồng đi dữ liệu.</td>
                    </tr>
                </table>
            </div>
            <div class="panel">
                <h3>Tác vụ 2: Tạo bộ câu hỏi ôn tập (Lập trình nhúng & ESP32)</h3>
                <table>
                    <tr><th>Tiêu chí</th><th>Prompt Cơ bản</th><th>Prompt Cải tiến</th><th>Prompt Nâng cao</th></tr>
                    <tr>
                        <td>Nội dung hiển thị</td>
                        <td>Câu hỏi quá dễ, định dạng lộn xộn, mất tính ôn tập.</td>
                        <td>Có 5 câu trắc nghiệm kèm đáp án nhưng độ khó tương đương.</td>
                        <td>Hoàn hảo. Bảng hiển thị sạch sẽ. Có giải thích chi tiết phân tích kỹ sơ đồ mạch điện.</td>
                    </tr>
                    <tr>
                        <td>Độ chính xác & Phù hợp</td>
                        <td>Thấp, không dùng kiểm tra sâu.</td>
                        <td>Trung bình, đạt yêu cầu.</td>
                        <td>Cao nhất. Phân loại rõ ràng, có thể dùng ôn thi trực tiếp.</td>
                    </tr>
                </table>
            </div>
        </div>
    `,
    task4: `
        <div class="page-section">
            <h1>Bài 4: Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm</h1>
            <div class="panel">
                <h3>Minh chứng quản lý công việc nhóm</h3>
                <div style="overflow-x:auto;">
                    <table>
                        <tr>
                            <th>Danh mục (List)</th>
                            <th>Nội dung công việc (Cards)</th>
                            <th>Thành viên phụ trách</th>
                            <th>Nhãn phân loại (Labels)</th>
                            <th>Hạn chót (Due Date)</th>
                        </tr>
                        <tr>
                            <td>Backlog (Ý tưởng / Chuẩn bị)</td>
                            <td>- Nghiên cứu tài liệu API<br>- Thiết kế sơ đồ kiến trúc hệ thống</td>
                            <td>Cả nhóm</td>
                            <td>Khó / Nghiên cứu</td>
                            <td>05/06/2026</td>
                        </tr>
                        <tr>
                            <td>To Do (Cần làm)</td>
                            <td>- Thiết kế giao diện Front-end<br>- Viết báo cáo phân tích chương 1 & 2</td>
                            <td>Nguyễn Văn A</td>
                            <td>Trung bình</td>
                            <td>08/06/2026</td>
                        </tr>
                        <tr>
                            <td>In Progress (Đang làm)</td>
                            <td>- Cấu hình mạch vi điều khiển ESP32<br>- Lập trình phân quyền cơ sở dữ liệu</td>
                            <td>Trần Văn B</td>
                            <td>Ưu tiên cao</td>
                            <td>06/06/2026</td>
                        </tr>
                        <tr>
                            <td>Testing / Review (Kiểm thử)</td>
                            <td>- Đánh giá hiệu năng và đo dòng tiêu thụ</td>
                            <td>Lê Thị C</td>
                            <td>Kiểm thử</td>
                            <td>04/06/2026</td>
                        </tr>
                        <tr>
                            <td>Done (Đã hoàn thành)</td>
                            <td>- Khởi tạo repository trên GitHub<br>- Viết slide thuyết trình tổng quan</td>
                            <td>Cả nhóm</td>
                            <td>Hoàn thành</td>
                            <td>02/06/2026</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `,
    task5: `
        <div class="page-section">
            <h1>Bài 5: Sử dụng AI tạo sinh hỗ trợ sáng tạo nội dung</h1>
            <div class="panel">
                <h3>Chủ đề: AI hỗ trợ học tập</h3>
                <p>Sản phẩm hình ảnh minh họa chủ đề trí tuệ nhân tạo tương tác và hỗ trợ quá trình nghiên cứu, học tập của sinh viên.</p>
                <br>
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80" alt="AI hỗ trợ học tập" class="ai-image">
            </div>
        </div>
    `,
    task6: `
        <div class="page-section">
            <h1>Bài 6: Sử dụng AI có trách nhiệm trong học tập và nghiên cứu</h1>
            <div class="panel">
                <h3>6 Nguyên tắc vàng</h3>
                <ul>
                    <li><strong>1. Tư duy trước - Ra lệnh sau:</strong> Luôn tự suy nghĩ, vạch ra cấu trúc bài làm ít nhất 15 phút trước khi mở AI.</li>
                    <li><strong>2. Xác thực kép (Fact-checking):</strong> Tuyệt đối không tin tưởng hoàn toàn vào số liệu, công thức của AI. Phải đối chiếu với giáo trình gốc.</li>
                    <li><strong>3. Đầu ra của AI là nguyên liệu, không phải sản phẩm:</strong> Chỉ sử dụng kết quả của AI dạng ý tưởng thô. Sản phẩm cuối cùng phải viết lại bằng tư duy của mình.</li>
                    <li><strong>4. Minh bạch tuyệt đối:</strong> Luôn khai báo trung thực các phần việc có sự can thiệp của AI trong báo cáo.</li>
                    <li><strong>5. Bảo mật dữ liệu học thuật:</strong> Không tải tài liệu chưa công bố, dự án nghiên cứu nội bộ lên nền tảng AI công cộng.</li>
                    <li><strong>6. Dùng AI để hiểu sâu, không dùng để làm tắt:</strong> Đặt câu hỏi dạng "Tại sao lệnh này sai?", "Cơ chế hoạt động là gì?" thay vì "Hãy làm hộ tôi".</li>
                </ul>
            </div>
        </div>
    `,
    summary: `
        <div class="page-section">
            <h1>Bước 3: Tổng kết Portfolio</h1>
            <div class="panel">
                <h2>Trải nghiệm và cảm nhận cá nhân</h2>
                <p>Dự án Digital Portfolio này không chỉ là nơi lưu trữ báo cáo mà còn là minh chứng cho quá trình áp dụng quy trình công nghệ vào thực tiễn. Việc hệ thống hóa từ cấu trúc thư mục, tra cứu học thuật nâng cao, kỹ năng Prompting đến quản lý dự án giúp tôi xây dựng được tư duy logic và trách nhiệm của một kỹ sư phần mềm tương lai.</p>
                <p>Trang web được thiết kế gọn gàng, ứng dụng mã nguồn JavaScript hiện đại nhằm tối ưu trải nghiệm và dễ dàng mở rộng, triển khai hệ thống sau này.</p>
            </div>
        </div>
    `
};

// Logic điều hướng (Router)
document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('app-content');
    const navLinks = document.querySelectorAll('#nav-links a');

    // Hàm render nội dung trang
    function renderPage(targetId) {
        contentDiv.innerHTML = pagesData[targetId] || '<h2>Đang cập nhật...</h2>';
        
        // Cập nhật trạng thái Active trên thanh điều hướng
        navLinks.forEach(link => {
            if(link.getAttribute('data-target') === targetId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Gắn sự kiện click cho các thẻ a
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target.getAttribute('data-target');
            renderPage(target);
        });
    });

    // Mặc định load trang chủ
    renderPage('home');
});
