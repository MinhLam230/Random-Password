// Lấy phần tử có ID "password" (là nơi hiển thị mật khẩu)
const passwordBox = document.getElementById("password");
// Thiết lập độ dài mong muốn của mật khẩu
const lenght = 12;
// Các ký tự có thể sử dụng trong mật khẩu
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789"
const symbol = "@#$%^&*()_+~|}{[]></-=";
// Kết hợp tất cả các tập ký tự thành một mật khẩu
const allChars = upperCase + lowerCase + number + symbol;
// Hàm để tạo mật khẩu ngẫu nhiên
function createPassword(){
   let password = "";
   // Đảm bảo ít nhất một ký tự từ mỗi tập ký tự được bao gồm  
   password += upperCase [Math.floor(Math.random() * upperCase.length)];
   password += lowerCase [Math.floor(Math.random() * lowerCase.length)];
   password += number [Math.floor(Math.random() * number.length)];
   password += symbol [Math.floor(Math.random() * symbol.length)];
   // Thêm các ký tự ngẫu nhiên từ tập hợp kết hợp cho đến khi đạt đến độ dài mong muốn
   while(lenght > password.length){
       password += allChars [Math.floor(Math.random() *allChars.length)];
   }
   // Hiển thị mật khẩu được tạo trong hộp mật khẩu
   passwordBox.value = password;
}
// Hàm sao chép mật khẩu vào clipboard
function copyPassword(){
   passwordBox.select(); // Chọn mật khẩu trong hộp
   document.execCommand("copy"); // Thực hiện lệnh sao chép
}


