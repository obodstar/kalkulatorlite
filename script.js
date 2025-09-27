const resultField = document.getElementById('result');

// Menambahkan nilai ke input
function appendValue(value) {
    resultField.value += value;
}

// Menghapus semua input
function clearResult() {
    resultField.value = '';
}

// Menghitung hasil
function calculateResult() {
    try {
        resultField.value = eval(resultField.value); // Gunakan eval dengan hati-hati
    } catch (error) {
        resultField.value = 'Error';
    }
}

