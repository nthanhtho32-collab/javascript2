/* 
  1. Hàm tự động thêm thuộc tính tabindex cho tất cả hình ảnh khi trang tải xong (onload)
*/
function addTabFocus() {
  console.log("Hàm addTabFocus() đã chạy thành công!");

  // Lấy danh sách các ảnh có class 'preview'
  var images = document.getElementsByClassName("preview");

  // Vòng lặp gán tabindex="0" cho từng ảnh
  for (var i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
    console.log("Đã gán tabindex='0' cho ảnh số " + (i + 1));
  }
}

/* 
  2. Hàm cập nhật hình ảnh trung tâm khi di chuột (onmouseover) hoặc nhấn Tab (onfocus)
*/
function upDate(previewPic) {
  console.log("upDate() kích hoạt cho ảnh:", previewPic.alt);

  var imageDiv = document.getElementById("image");

  // Đổi ảnh nền
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";

  // Đổi đoạn văn bản thành thuộc tính alt của ảnh
  imageDiv.innerHTML = previewPic.alt;
}

/* 
  3. Hàm khôi phục hình ảnh trung tâm khi rời chuột (onmouseout) hoặc rời focus (onblur)
*/
function unDo() {
  console.log("unDo() kích hoạt");

  var imageDiv = document.getElementById("image");

  // Xóa ảnh nền
  imageDiv.style.backgroundImage = "url('')";

  // Khôi phục lại chữ mặc định
  imageDiv.innerHTML = "Hover hoặc Focus (bằng Tab) vào một hình ảnh bên dưới để xem.";
}