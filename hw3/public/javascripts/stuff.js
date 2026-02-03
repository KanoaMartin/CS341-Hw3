$(document).ready(function(){

				//code to switch month based on button
				$('#Jan').click(function(){
					document.getElementById("dropbtn").textContent = this.value;
				});
				$('#Feb').click(function(){
					document.getElementById("dropbtn").textContent = this.value;
				});

				$('#Mar').click(function(){
					document.getElementById("dropbtn").textContent = this.value;
				});
				$('#Apr').click(function(){
					document.getElementById("dropbtn").textContent = this.value;
				});
				$('#May').click(function(){
					document.getElementById("dropbtn").textContent = this.value;
				});
				$('#Jun').click(function(){
					document.getElementById("dropbtn").textContent = this.value;
				});
				$('#Jul').click(function(){
					document.getElementById("dropbtn").textContent = this.value;
				});
				$('#Aug').click(function(){
					document.getElementById("dropbtn").textContent = this.value;
				});
				$('#Sep').click(function(){
					document.getElementById("dropbtn").textContent = this.value;
				});
				$('#Oct').click(function(){
					document.getElementById("dropbtn").textContent = this.value;
				});
				$('#Nov').click(function(){
					document.getElementById("dropbtn").textContent = this.value;
				});
				$('#Dec').click(function(){
					document.getElementById("dropbtn").textContent = this.value;
				});


				//when submit is clicked
				$('#submit').click(function(){

					//hide all inputs
					$(document.getElementById("h3")).hide();
					$(document.getElementById("submit")).hide();
					$(document.getElementById("options")).hide();
					$(document.getElementById("notebox")).hide();

					//store inputs in variables
					var selectedTopping = document.getElementById("topping").value;
					var selectedQuantity = document.getElementById("quantity").value;
					var notesText = document.getElementById("notes").value;

					//set spans to inputs
					document.getElementById('topResult').textContent = selectedTopping;

					document.getElementById('quanResult').textContent = selectedQuantity;

					document.getElementById('noteResult').textContent = notesText;
					
					//check if notes contains vegan
					if(notesText.toLowerCase().indexOf("vegan") != -1){
						alert("Cheesecake contains cheese, which is not vegan!")
					}

					//show results of order
					$('#results').show();

				});


			}); 