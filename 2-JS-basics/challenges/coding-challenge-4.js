/*****************************
 * CODING CHALLENGE 4
 */

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. 
Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. 
Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. 
Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

var mark = {
  fullName: "Mark X",
  mass: 80,
  height: 1.8,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

var jhon = {
  fullName: "Jhon K",
  mass: 75,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

if (jhon.calcBMI() > mark.calcBMI()) {
  console.log(jhon.fullName + " has a higger bmi of " + jhon.bmi);
} else if (mark.bmi > jhon.bmi) {
  console.log(mark.fullName + " has a higger bmi of " + mark.bmi);
} else {
  console.log(
    mark.fullName + " and " + jhon.fullName + " has the same bmi: " + mark.bmi
  );
}
