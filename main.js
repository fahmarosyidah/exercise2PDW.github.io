var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  function kirimData() {
    var nama = document.getElementById("nama").value;
    var tamu = document.getElementById("tamu").value;
    var tanggal = document.getElementById("tanggal").value;
    var pesanan = document.querySelector("input[name=pesanan]:checked").value;
    var ruangan = document.getElementById("ruangan").value;
    var pesan = document.getElementById("pesan").value;
  
    alert(
        "Nama: " + nama +
        "\nJumlah Tamu: " + tamu +
        "\nTanggal Reservasi: " + tanggal +
        "\nPaket: " + pesanan +
        "\nRuangan: " + ruangan +
        "\nPesan Khusus: " + pesan
    );
  }