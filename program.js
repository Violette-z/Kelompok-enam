let jarak;
let efisiensiBBM;
let hargaBBM;
let totalJarak;
let konsumsiBBM;
let totalBiaya;
let jenisPerjalanan;
let ulangi;
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const inputPertanyaan = (pertanyaan) => {
    return new Promise((resolve) => {
        rl.question(pertanyaan, (jawaban) => {
            resolve(jawaban);
        });
    });
};
const travelCostCalculator = async () => {

    do {
        console.log("\n=== TRAVEL COST CALCULATOR ===");
        console.log("Masukkan jenis perjalanan:");
        console.log("1. Sekali Jalan");
        console.log("2. Pulang-Pergi");

        jenisPerjalanan = parseInt(
            await inputPertanyaan("Pilihan Anda: ")
        );
      
        jarak = parseFloat(
            await inputPertanyaan("Masukkan jarak perjalanan (km): ")
        );

        efisiensiBBM = parseFloat(
            await inputPertanyaan(
                "Masukkan efisiensi bahan bakar (km/liter): "
            )
        );

        hargaBBM = parseFloat(
            await inputPertanyaan(
                "Masukkan harga bahan bakar per liter (Rp): "
            )
        );
      
        if (jenisPerjalanan === 2) {
            totalJarak = jarak * 2;
        } else {
            totalJarak = jarak;
        }
      
        konsumsiBBM = totalJarak / efisiensiBBM;
        totalBiaya = konsumsiBBM * hargaBBM;

        console.log("----------------------------------------");
        console.log("HASIL PERHITUNGAN BIAYA PERJALANAN");
        console.log("----------------------------------------");

        console.log(
            "Total Jarak Perjalanan : " +
            totalJarak.toFixed(2) +
            " km"
        );

        console.log(
            "Konsumsi Bahan Bakar  : " +
            konsumsiBBM.toFixed(2) +
            " liter"
        );

        console.log(
            "Total Biaya Bahan Bakar : Rp " +
            totalBiaya.toFixed(2)
        );

        console.log("----------------------------------------");

        ulangi = (
            await inputPertanyaan(
                "Apakah Anda ingin menghitung perjalanan lain? (YES or NO): "
            )
        ).toUpperCase();
    } while (ulangi === "YES");
    console.log(
        "\nTerima kasih telah menggunakan Travel Cost Calculator!"
    );

    rl.close();
};
travelCostCalculator();
