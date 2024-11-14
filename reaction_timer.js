var start_time = new Date().getTime();
            function getRandomColor(){
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }
            function move(){
                //console.log(Math.floor(Math.random() * 300));
                document.getElementById("shape").style.left = (Math.random() * 300) + 'px';
                document.getElementById("shape").style.top = (Math.random() * 300) + 'px';
                document.getElementById("shape").style.width = ((Math.random() * 400)+ 100) + 'px';
                document.getElementById("shape").style.height = document.getElementById("shape").style.width;
                document.getElementById("shape").style.display = "block";
                document.getElementById("shape").style.backgroundColor = getRandomColor();
                start_time = new Date().getTime();
            }
            move();
            document.getElementById("shape").onclick = function(){
                document.getElementById("shape").style.display = "none"
                var end_time = new Date().getTime();
                alert((end_time-start_time)/1000);
                move();
            }
            //SLicing
            var text = "Abishiek"
            console.log(text.slice(0,3));
            // convert to upper case
            console.log(text.toUpperCase());
            // convert to lower case
            console.log(text.toLowerCase());
            // Operators - Arithmatic, conditional, assignment, Logical (|| - or, && - and, ! - not)     
            // objects in JS
            var person = {
                name : "Abishiek",
                lastName : " C J",
                age : 50,
                eyecolour : "brown",
                fullName : function(){
                    return this.name + this.lastName;
                }
            }
            // retrive values
            console.log(person["name"]);
            console.log(person.fullName());
            // call back function - a function that calls back itself in case of execution of an event
            document.getElementById("event_listener").addEventListener('click', function(event){
                alert("button clicked");
            })
            // when jQuery is used through google api, then it will not work in offline cases
            if(jQuery == "undefined"){
                alert("jQuery undefined");
            }else {
                alert("jQuery defined");
            }
