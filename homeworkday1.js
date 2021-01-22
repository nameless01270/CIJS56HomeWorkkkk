// bài 1 (3đ). Nhập từ bàn phím 1 dãy số, mỗi số cách nhau bởi dấu ",". Tìm và in ra những số nguyên tố có trong dãy số đó
//     VD: Input: 2, 9, 4, 5, 7
//         Output: 2, 5, 7
function findPrimeNumber(a) {
    if (a <= 1){
        return false;
    }
    else{
        for(let i = 2; i <= Math.floor(Math.sqrt(a)); i++){
            if (a % i === 0){
                return false;
            }
            else {
                return true;
            }
        }
    }
}
const array = [1,2,3,5,6,7,8,9,11,13,16,19,23];
console.log("Prime number: ");
for (let i = 0; i < array.length; i++){
    if (findPrimeNumber(array[i])){
        console.log(array[i]);
    }
}

// bài 2 (5đ). Điểm tổng kết (ĐTK) của môn "Lập trình hướng đối tượng" được tính bằng trọng số
//     0.4 * (Điểm thành phần) + 0.6 * (Điểm cuối kì)
//     Nếu ĐTK >= 8.0 --> đạt A
//         7.0 <= ĐTK < 8.0 --> đạt B
//         6.0 <= ĐTK < 7.0 --> đạt C
//         4.0 <= ĐTK < 6.0 --> đạt D
//         ĐTK < 4.0 --> đạt F (trượt)
//     Hãy viết 1 chương trình để nhập điểm (điểm TP và điểm CK) cho n sinh viên (n > 2) và xác định:
//         + Chọn bất kì 1 sinh viên, tính xác suất để sinh viên đó đạt B 😀
//         + Số sinh viên đạt A
//         + Số sinh viên bị trượt
function tinhDTK(a,b) {
    let c = 0.4*a + 0.6*b;
    return c;
}
let n = prompt("Nhap so sinh vien : ");
let list = [];
let rankA = 0;
let rankB = 0;
let rankF = 0;

for (let i = 0; i < n; i++){
    let a = prompt("Diem thanh phan cua sinh vien "+(i+1)+" la : ");
    let b = prompt("Diem cuoi ki cua sinh vien "+(i+1)+" la : ");
    list.push(tinhDTK(a,b));
    if (tinhDTK(a,b) >= 8){
        rankA += 1;
        return "A";
    }
    if (tinhDTK(a,b) >= 7 && tinhDTK(a,b) < 8){
        rankB += 1; 
        return "B";
    }
    if (tinhDTK(a,b) >= 6 && tinhDTK(a,b) < 7) return "C";
    if (tinhDTK(a,b) >= 4 && tinhDTK(a,b) < 6) return "D";
    if (tinhDTK(a,b) < 4){
        rankF += 1;
        return "F(truot)"
    }
}
console.log(list);
console.log("So sinh vien dat A la: "+rankA);
console.log("So sinh vien dat F(truot) la: "+rankF);
console.log("Xac xuat de 1 sinh vien dat B la: "+((rankB/n)*100)+"%");

