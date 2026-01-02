 
        function sort(event) {
            event.preventDefault();
            
            const num1 = parseFloat(document.getElementById("num1").value);
            const num2 = parseFloat(document.getElementById("num2").value);
            const num3 = parseFloat(document.getElementById("num3").value);
            const order = document.getElementById("sortOrder").value;



            let number = [num1, num2, num3];
            if (order === "ascending") {
                number.sort((x, y) => x - y);
            }
            else if (order === "descending") {
                number.sort((x, y) => y - x);

            } else {
                return;
            }





            document.getElementById("resultNumber").innerHTML = `Sorted Numbers: ${number}`;
        }



        function clearFields() {
            document.getElementById('num1').value = '';
            document.getElementById('num2').value = '';
            document.getElementById('num3').value = '';
            document.getElementById('resultNumber').innerHTML = " ";
        }
