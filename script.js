let powers = [0, 0, 0, 0, 0, 0];
let ccs = [0, 0, 0, 0, 0, 0];

function updatePowerDisplay(index) {
    document.getElementById(`power${index}`).textContent = powers[index - 1];
}
function updateCritDisplay(index) {
    document.getElementById(`crit${index}`).textContent = ccs[index - 1];
}

function personaRide() {
    // ตรวจสอบว่าปุ่มถูกกดแล้วหรือยัง
    const button = document.getElementById('persona-ride');
    if (!button.classList.contains('clicked')) {
        // เพิ่ม power1, power2, และ power3 ทีละ 10,000 หน่วย
        powers[0] += 10000;
        powers[1] += 10000;
        powers[2] += 10000;

        // อัพเดทค่าแสดงผล
        updatePowerDisplay(1);
        updatePowerDisplay(2);
        updatePowerDisplay(3);

        // เปลี่ยนสีปุ่มค้างไว้
        button.classList.add('clicked');
    }
}

function increasePower(index) {
    powers[index - 1] += 1000;
    updatePowerDisplay(index);
}

function decreasePower(index) {
    powers[index - 1] -= 1000;
    updatePowerDisplay(index);
}

function Powerin5000(index) {
    powers[index - 1] += 5000;
    updatePowerDisplay(index);
}

function Powerde5000(index) {
    powers[index - 1] -= 5000;
    updatePowerDisplay(index);
}

function Powerin10000(index) {
    powers[index - 1] += 10000;
    updatePowerDisplay(index);
}

function Powerde10000(index) {
    powers[index - 1] -= 10000;
    updatePowerDisplay(index);
}

function overPower(index) {
    powers[index - 1] += 1000000000000;
    updatePowerDisplay(index);
}

function cct(index) {
    ccs[index - 1] += 1;
    updateCritDisplay(index)
}

function re() {
    location.reload();
}