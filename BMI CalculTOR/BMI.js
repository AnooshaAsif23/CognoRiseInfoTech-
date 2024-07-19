function selectGender(gender) {
    document.getElementById('male').checked = (gender === 'male');
    document.getElementById('female').checked = (gender === 'female');
    
    document.getElementById('maleOption').classList.toggle('selected', gender === 'male');
    document.getElementById('femaleOption').classList.toggle('selected', gender === 'female');
}

function calculateBMI() {
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    if (!age || !gender || !height || !weight) {
        alert('Please fill out all fields.');
        return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    let bmiStatus;
    if (bmi < 18.5) {
        bmiStatus = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiStatus = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiStatus = "Overweight";
    } else {
        bmiStatus = "Obesity";
    }

    document.getElementById('result').innerHTML = `Your BMI is ${bmi.toFixed(2)} (${bmiStatus})`;
}
