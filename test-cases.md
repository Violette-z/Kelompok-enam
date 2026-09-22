# Testing

## Test Case 1: Perjalanan Sekali Jalan (Kondisi Normal)
**Input:**  
- Jenis Perjalanan = 1 (Sekali Jalan)
- Jarak Perjalanan = 100 km
- Efisiensi Bahan Bakar = 10 km/liter
- Harga Bahan Bakar = Rp 15.000 / liter

**Expected Output:**  
- Total Jarak Perjalanan : 100.00 km
- Konsumsi Bahan Bakar  : 10.00 liter
- Total Biaya Bahan Bakar : Rp 150000.00

**Actual Output:**  
- Total Jarak Perjalanan : 100.00 km
- Konsumsi Bahan Bakar  : 10.00 liter
- Total Biaya Bahan Bakar : Rp 150000.00

**Status:** PASS

---

## Test Case 2: Perjalanan Pulang-Pergi (PP)
**Input:**  
- Jenis Perjalanan = 2 (Pulang-Pergi)
- Jarak Perjalanan = 150 km
- Efisiensi Bahan Bakar = 12 km/liter
- Harga Bahan Bakar = Rp 13.000 / liter

**Expected Output:**  
- Total Jarak Perjalanan : 300.00 km
- Konsumsi Bahan Bakar  : 25.00 liter
- Total Biaya Bahan Bakar : Rp 325000.00

**Actual Output:**  
- Total Jarak Perjalanan : 300.00 km
- Konsumsi Bahan Bakar  : 25.00 liter
- Total Biaya Bahan Bakar : Rp 325000.00

**Status:** PASS

---

## Test Case 3: Perulangan Program (Ulangi Perhitungan)
**Input:**  
- Apakah Anda ingin menghitung perjalanan lain? = YES

**Expected Output:**  
Program kembali menampilkan menu utama dan meminta input jenis perjalanan.

**Actual Output:**  
Program kembali menampilkan menu utama dan meminta input jenis perjalanan.

**Status:** PASS

---

## Test Case 4: Keluar dari Program
**Input:**  
- Apakah Anda ingin menghitung perjalanan lain? = NO

**Expected Output:**  
Pesan "Terima kasih telah menggunakan Travel Cost Calculator!" dan program selesai.

**Actual Output:**  
Pesan "Terima kasih telah menggunakan Travel Cost Calculator!" dan program selesai.

**Status:** PASS
