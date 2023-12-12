var n;
var i;
var j;
n = prompt(`nhập số ký tự bạn muốn :`);
if (n > 10) {
  alert("lỗi");
} else {
  for (i = 1; i <= n; i++) {
    document.write(`<br>`);
    for (j = 1; j <= i; j++) {
      document.write(`*`);
    }
  }
}
