var ul = document.getElementById('ulKegiatan');
var add = document.getElementById('add');
var text = document.getElementById('inputText');

// tambah list baru setelah klik tombol "tambahkan"
add.addEventListener('click', function() {
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(text.value));
  ul.appendChild(li);
  text.value = '';
});

// coret list saat "li" tersebut diklik
ul.addEventListener('click', function(liSekarang) {
  if (liSekarang.target.tagName === 'LI') {
    liSekarang.target.classList.toggle('coret');
  }
});
