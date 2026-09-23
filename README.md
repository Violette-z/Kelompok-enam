# Mini Programming project

## 1. Group Information
**Class:** B<br>
**Group:** 6

### Group Members
| 1 | Diaz Firansyah | 2610312044 | Project Coordinator |<br>
| 2 | Sheryl Dara Desfaini | 2610312054 | Algorithm |<br>
| 3 | Muhammad Ridho Asy-syamil | 2610312065 | Flowchart |<br>
| 4 | Athwia Neira Anargya M | 2610312057 | JavaScript |<br>
| 5 | Frederick Clarence | 2610312053 | Testing & Documentation |

---

## 2. Project Title

Travel Cost Calculator

---

## 3. Project Description

This program is a simple calculator to calculate how much cost that we should spend on each trip, by considering the travel distance, fuel efficiency, and fuel prices.

---

## 4. Objectives

This project is designed to apply the following programming concepts :

- Variables
- Data types
- Operators
- Conditional statements
- Loops
- Algorithms
- JavaScript

---

## 5. Input

The program receives:

- The user's travel distance
- The fuel efficiency in km/L
- The fuel prices

---

## 6. Process

1. Output: "Masukkan jenis perjalanan"<br>
   Input:
   - If "1. Sekali Jalan" → The program will count totalJarak "Jarak"
   - If "2. Pulang-Pergi" → The program will count totalJarak "Jarak*2"

2. Output: "Masukkan jarak perjalanan (km)"<br>
   input: Jarak

3. Output: "Masukkan efisiensi bahan bakar (km/liter)"<br>
   Input: EfisiensiBBM

4. Output: "Masukkan harga bahan bakar per liter (Rp)"<br>
   Input: hargaBBM

   *Operator Aritmatika untuk menghitung konsumsi BBM dan total biaya<br>
   KonsumsiBBM ← totalJarak / efisiensiBBM<br>
   TotalBiaya  ← konsumsiBBM * hargaBBM

5. Output hasil perhitungan:
   "HASIL PERHITUNGAN BIAYA PERJALANAN"<br>
   "Total Jarak Perjalanan : ", totalJarak, " km"<br>
   "Konsumsi Bahan Bakar : ", konsumsiBBM, " liter"<br>
   "Total Biaya Bahan Bakar: Rp ", totalBiaya<br>

6. Output: "Apakah Anda ingin menghitung perjalanan lain? (YES or NO)"<br>
   input:
   - If "YES" → The program will bring you back to "Masukan jenis perjalanan".
   - If "NO"  → The program will end.

---

## 7. Output

The program displays:

- The travel distance total
- The fuel consumption
- The result of travel cost

---

## 8. Algorithm

The algorithm used in the program is described in:

[pseudocode.txt](pseudocode.txt)

---

## 9. Flowchart

The flowchart is created using Flowgorithm.

File:

[flowchart.fprg](flowchart.fprg)<br>
[flowchart.png](flowchart.png)


---

## 10. JavaScript Implementation

The JavaScript implementation of the program is available in:

[program.js](program.js)

---

## 11. Testing

The program is tested using several test scenarios.

Testing documentation:

[test-cases.md](test-cases.md)
