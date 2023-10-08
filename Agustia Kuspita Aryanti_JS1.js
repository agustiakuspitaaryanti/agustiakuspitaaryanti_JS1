// Agustia Kuspita Aryanti_Web Development
// Tugas Java Script

// 1. Program Rumah Sakit - Input dengan JavaScript menggunakan IF, ELSE, DAN NESTED IF

var namaPasien = prompt("Masukkan nama pasien:");
var usiaPasien = parseInt(prompt("Masukkan usia pasien:"));
var tekananDarah = parseInt(prompt("Masukkan tekanan darah pasien:"));

function cekTekananDarah(tekanan) {
    if (tekanan < 120) {
        return "Tekanan darah rendah";
    } else if (tekanan >= 120 && tekanan <= 130) {
        return "Tekanan darah normal";
    } else {
        return "Tekanan darah tinggi";
    }
}

function cekStatusKesehatan(usia) {
    if (usia < 5) {
        return "Balita";
    } else if (usia >= 5 && usia < 18) {
        
        if (usia >= 12 && usia <= 17) {
            return "Remaja";
        } else {
            return "Anak-anak";
        }
    } else if (usia >= 18 && usia < 60) {
        return "Dewasa";
    } else {
        return "Lansia";
    }
}

var statusTekananDarah = cekTekananDarah(tekananDarah);

var statusKesehatan = cekStatusKesehatan(usiaPasien);

console.log("Informasi Pasien:");
console.log("Nama: " + namaPasien);
console.log("Usia: " + usiaPasien + " tahun");
console.log("Tekanan Darah: " + tekananDarah);
console.log("\nDiagnosis:");
console.log("Status Tekanan Darah: " + statusTekananDarah);
console.log("Status Kesehatan: " + statusKesehatan);

// Program Penugasan - Nested If

var daftarTugas = [];

var pilihan;

do {
    console.log("\n===== Aplikasi Manajemen Tugas =====");
    console.log("1. Tambah Tugas");
    console.log("2. Lihat Daftar Tugas");
    console.log("3. Hapus Tugas");
    console.log("0. Keluar");

    pilihan = parseInt(prompt("Masukkan pilihan Anda (0-3):"));

    if (pilihan === 1) {
    
        var tugasBaru = prompt("Masukkan nama tugas baru:");
        daftarTugas.push({ nama: tugasBaru, selesai: false });
        console.log("Tugas baru telah ditambahkan: " + tugasBaru);
    } else if (pilihan === 2) {
        
        console.log("Daftar Tugas:");

        if (daftarTugas.length === 0) {
            console.log("Tidak ada tugas saat ini.");
        } else {
            for (var i = 0; i < daftarTugas.length; i++) {
                var status = daftarTugas[i].selesai ? "Selesai" : "Belum Selesai";
                console.log((i + 1) + ". " + daftarTugas[i].nama + " - " + status);
            }
        }
    } else if (pilihan === 3) {
    
        var nomorTugas = parseInt(prompt("Masukkan nomor tugas yang ingin dihapus:")) - 1;

        if (nomorTugas >= 0 && nomorTugas < daftarTugas.length) {
            var namaTugas = daftarTugas[nomorTugas].nama;
            daftarTugas.splice(nomorTugas, 1);
            console.log("Tugas '" + namaTugas + "' telah dihapus.");
        } else {
            console.log("Nomor tugas tidak valid.");
        }
    } else if (pilihan !== 0) {
        console.log("Pilihan tidak valid. Silakan masukkan pilihan yang benar.");
    }
} while (pilihan !== 0);

//Program Angka Ganjil Genap Nested If

var angka1 = parseFloat(prompt("Masukkan angka pertama:"));
var angka2 = parseFloat(prompt("Masukkan angka kedua:"));

// Menentukan sifat angka-angka menggunakan nested if
if (!isNaN(angka1) && !isNaN(angka2)) {
    if (angka1 > 0) {
        if (angka2 > 0) {
            console.log("Kedua angka positif.");
        } else if (angka2 < 0) {
            console.log("Angka pertama positif, angka kedua negatif.");
        } else {
            console.log("Angka pertama positif, angka kedua nol.");
        }
    } else if (angka1 < 0) {
        if (angka2 > 0) {
            console.log("Angka pertama negatif, angka kedua positif.");
        } else if (angka2 < 0) {
            console.log("Kedua angka negatif.");
        } else {
            console.log("Angka pertama negatif, angka kedua nol.");
        }
    } else {
        if (angka2 > 0) {
            console.log("Angka pertama nol, angka kedua positif.");
        } else if (angka2 < 0) {
            console.log("Angka pertama nol, angka kedua negatif.");
        } else {
            console.log("Kedua angka nol.");
        }
    }
} else {
    console.log("Masukkan angka yang valid.");
}


// 2.  Program Restoran - Input dengan JavaScript menggunakan SWITCH CASE

var menu = prompt("Silakan pilih menu (1-5):\n1. Nasi Goreng\n2. Mie Goreng\n3. Ayam Goreng\n4. Soto\n5. Es Teh");
var jumlahPesan = parseInt(prompt("Masukkan jumlah pesanan:"));

var hargaNasiGoreng = 15000;
var hargaMieGoreng = 12000;
var hargaAyamGoreng = 20000;
var hargaSoto = 18000;
var hargaEsTeh = 5000;

var totalHarga = 0;

switch (menu) {
    case "1":
        totalHarga = hargaNasiGoreng * jumlahPesan;
        console.log("Anda memesan Nasi Goreng sebanyak " + jumlahPesan + " porsi.");
        break;
    case "2":
        totalHarga = hargaMieGoreng * jumlahPesan;
        console.log("Anda memesan Mie Goreng sebanyak " + jumlahPesan + " porsi.");
        break;
    case "3":
        totalHarga = hargaAyamGoreng * jumlahPesan;
        console.log("Anda memesan Ayam Goreng sebanyak " + jumlahPesan + " porsi.");
        break;
    case "4":
        totalHarga = hargaSoto * jumlahPesan;
        console.log("Anda memesan Soto sebanyak " + jumlahPesan + " porsi.");
        break;
    case "5":
        totalHarga = hargaEsTeh * jumlahPesan;
        console.log("Anda memesan Es Teh sebanyak " + jumlahPesan + " gelas.");
        break;
    default:
        console.log("Maaf, menu yang Anda pilih tidak tersedia.");
        break;
}

console.log("Total Harga: Rp " + totalHarga);

// 3. Program Pemilihan Mata Kuliah - Input dengan JavaScript menggunakan FOR STATEMENT

var mataKuliah = [
    "Matematika Dasar",
    "Pemrograman Dasar",
    "Dasar-dasar Fisika",
    "Dasar-dasar Kimia",
    "Pemrograman Web",
    "Struktur Data",
    "Aljabar Linear",
    "Statistika",
    "Basis Data",
    "Sistem Operasi"
];
var sksMataKuliah = [3, 4, 3, 3, 4, 4, 3, 3, 4, 3];

var jumlahMataKuliah = parseInt(prompt("Masukkan jumlah mata kuliah yang ingin diambil:"));

var totalSKS = 0;

console.log("Daftar Mata Kuliah yang Tersedia:");

for (var i = 0; i < mataKuliah.length; i++) {
    console.log((i + 1) + ". " + mataKuliah[i] + " - SKS: " + sksMataKuliah[i]);
}

for (var j = 0; j < jumlahMataKuliah; j++) {

    var nomorMataKuliah = parseInt(prompt("Pilih nomor mata kuliah untuk semester ini (1-" + mataKuliah.length + "):"));

    if (nomorMataKuliah >= 1 && nomorMataKuliah <= mataKuliah.length) {
        totalSKS += sksMataKuliah[nomorMataKuliah - 1];
        console.log("Pemilihan Mata Kuliah ke-" + (j + 1) + ": " + mataKuliah[nomorMataKuliah - 1]);
    } else {
        console.log("Maaf, nomor mata kuliah tidak valid.");
        j--; 
    }
}

console.log("Total SKS yang diambil: " + totalSKS);
console.log("Selamat belajar!");


// 4. Program Game - Tebak Angka Menggunakan WHILE

var angkaRandom = Math.floor(Math.random() * 10) + 1;

var tebakan;
var kesempatan = 3;

console.log("Selamat datang di permainan tebak angka!");
console.log("Anda memiliki 3 kesempatan.");

while (kesempatan > 0) {
    tebakan = parseInt(prompt("Tebak angka (1-10):"));

    if (tebakan === angkaRandom) {
        console.log("Selamat, tebakan Anda benar!");
        break;
    } else {
        console.log("Tebakan Anda salah. Sisa kesempatan: " + (kesempatan - 1));
    }

    kesempatan--;
}

if (kesempatan === 0) {
    console.log("Maaf, Anda kehabisan kesempatan. Angka yang benar adalah " + angkaRandom);
}

// Program simulasi permainan kuis sederhana dengan DO-WHILE

var pertanyaan1 = "Apa ibukota Indonesia?\n(a) Jakarta\n(b) Bandung\n(c) Surabaya";
var jawabanBenar1 = "a";

var pertanyaan2 = "Berapakah hasil dari 4 + 5?\n(a) 8\n(b) 9\n(c) 10";
var jawabanBenar2 = "b";

var pertanyaan3 = "Siapakah presiden Indonesia saat ini?\n(a) Joko Widodo\n(b) Susilo Bambang Yudhoyono\n(c) Megawati Soekarnoputri";
var jawabanBenar3 = "a";

var jumlahPertanyaan = 3;
var jawabanBenar = 0;
var pertanyaan, jawaban;

var counter = 0;

do {
    switch (counter) {
        case 0:
            pertanyaan = pertanyaan1;
            jawaban = jawabanBenar1;
            break;
        case 1:
            pertanyaan = pertanyaan2;
            jawaban = jawabanBenar2;
            break;
        case 2:
            pertanyaan = pertanyaan3;
            jawaban = jawabanBenar3;
            break;
        default:
            break;
    }

    var jawabanPengguna = prompt(pertanyaan);

    if (jawabanPengguna.toLowerCase() === jawaban) {
        console.log("Jawaban Anda benar!");
        jawabanBenar++;
    } else {
        console.log("Jawaban Anda salah. Jawaban yang benar adalah: " + jawaban);
    }

    counter++;
} while (counter < jumlahPertanyaan);

console.log("Permainan selesai. Anda berhasil menjawab " + jawabanBenar + " dari " + jumlahPertanyaan + " pertanyaan dengan benar.");


// 5. Program Manajemen Tugas - Menggunakan FUNCTION

var daftarTugas = [];

function tambahTugas() {
    var tugasBaru = prompt("Masukkan nama tugas baru:");
    daftarTugas.push({ nama: tugasBaru, selesai: false });
    console.log("Tugas baru telah ditambahkan: " + tugasBaru);
}

function lihatDaftarTugas() {
    console.log("Daftar Tugas:");

    if (daftarTugas.length === 0) {
        console.log("Tidak ada tugas saat ini.");
    } else {
        for (var i = 0; i < daftarTugas.length; i++) {
            var status = daftarTugas[i].selesai ? "Selesai" : "Belum Selesai";
            console.log((i + 1) + ". " + daftarTugas[i].nama + " - " + status);
        }
    }
}

function selesaikanTugas() {
    var nomorTugas = parseInt(prompt("Masukkan nomor tugas yang ingin diselesaikan:")) - 1;

    if (nomorTugas >= 0 && nomorTugas < daftarTugas.length) {
        daftarTugas[nomorTugas].selesai = true;
        console.log("Tugas '" + daftarTugas[nomorTugas].nama + "' telah diselesaikan.");
    } else {
        console.log("Nomor tugas tidak valid.");
    }
}

var pilihan;

do {
    console.log("\n===== Aplikasi Manajemen Tugas =====");
    console.log("1. Tambah Tugas");
    console.log("2. Lihat Daftar Tugas");
    console.log("3. Selesaikan Tugas");
    console.log("0. Keluar");

    pilihan = parseInt(prompt("Masukkan pilihan Anda (0-3):"));

    switch (pilihan) {
        case 1:
            tambahTugas();
            break;
        case 2:
            lihatDaftarTugas();
            break;
        case 3:
            selesaikanTugas();
            break;
        case 0:
            console.log("Terima kasih telah menggunakan aplikasi!");
            break;
        default:
            console.log("Pilihan tidak valid. Silakan masukkan pilihan yang benar.");
    }
} while (pilihan !== 0);
