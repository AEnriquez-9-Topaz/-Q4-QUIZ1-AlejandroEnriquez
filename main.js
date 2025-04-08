function CheckBMI(W,H) {

	var W = document.getElementById('Weight').value;	
	var H = document.getElementById('Height').value;
	// This is the the entire, rounded equation for BMI, just in one line
	var BMI = Math.round(W/(Math.pow(H,2)));

	if (BMI>35){window.alert("You are extremely obese: Your BMI is " + BMI)}
	else if (BMI>29.9){window.alert("You are obese: Your BMI is " + BMI)}
	else if (BMI>24.9){window.alert("You are overweight: Your BMI is " + BMI)}
	else if (BMI>18.4){window.alert("You are average weight: Your BMI is " + BMI)}
	else {window.alert("You are underweight: Your BMI is " + BMI)}
		}	
 

						
