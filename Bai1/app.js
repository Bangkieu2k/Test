const n = document.getElementById("n");
const b = document.getElementById("b");
const tong = document.getElementById("tong");
const kq = document.getElementById("kq");

tong.onclick = function () {
  let tong = 0;
  for (let i = 2; i <= b.value; i++) {
    let m = 1;
    for (j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        m = 0;
      }
    }
    if (m == 1) {
      tong = tong + i;
    }
  }
  kq.innerHTML = tong;
};
