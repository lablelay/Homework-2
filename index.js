function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง PCVC ย่อมาจาก Prachinburi Commercial Vocational College";
        result.style.color = 'blue';
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
    }

    function Answer(answer) {
        const result = document.getElementById('result');
        if (answer === 'a') {
            result.textContent = "ถูกต้อง Fan Page PCVC คือ PanichPrachin";
            result.style.color = 'blue';
        } else {
            result.textContent = "Incorrect! Try again.";
            result.style.color = 'red';
        }
        }