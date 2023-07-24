

        
        function validateInputs() {
            const dobDate = document.getElementById('dob-date').value;
            const dob_Date = document.getElementById('dob-date');
            const dobMonth = document.getElementById('dob-month').value;
            const dob_Month = document.getElementById('dob-month');
            const dobYear = document.getElementById('dob-year').value;
            const dob_Year = document.getElementById('dob-year');
            const today = new Date();
            const dayValue = parseInt(dobDate);
            const monthValue = parseInt(dobMonth);
            const yearValue = parseInt(dobYear);
        
            let hasError = false;
        
            // Check if day, month, and year are empty or exceed their respective limits
            if (dob_Date.value.trim() === '' || dayValue < 1 || dayValue > 31) {
                dob_Date.classList.add('invalid');
                hasError = true;
            } else {
                dob_Date.classList.remove('invalid');
                hasError = false;
            }
        
            if (dob_Month.value.trim() === ''|| monthValue < 1 || monthValue > 12) {
                dob_Month.classList.add('invalid');
                hasError = true;
            } else {
                dob_Month.classList.remove('invalid');
                hasError = false;
            }
        
            if (dob_Year.value.trim() === '' || yearValue < 1900 || yearValue > today.getFullYear()) {
                dob_Year.classList.add('invalid');
                hasError = true;
            } else {
                dob_Year.classList.remove('invalid');
                hasError = false;
            }
        
            return !hasError;
        }
        


        function calculateAge() {
            const dobDate = document.getElementById('dob-date').value;
        
        const dobMonth = document.getElementById('dob-month').value;
        
        const dobYear = document.getElementById('dob-year').value;
        
        const today = new Date();

        let d2=today.getDate();
        let m2=today.getMonth()+1;
        let y2=today.getFullYear();


            if(validateInputs()){

                const dob = new Date(`${dobMonth}-${dobDate}-${dobYear}`);

                let d1=dob.getDate();
                let m1=dob.getMonth()+1;
                let y1=dob.getFullYear();

                let d3,m3,y3;
                y3=y2-y1;

                if(m2>=m1){
                    m3=m2-m1;
                }else{
                    y3--;
                    m3=12+m2-m1;
                }

                if(d2>=d1){
                    d3=d2-d1;
                }else{
                    m3--;
                    d3=getDaysInMonth(y1,m1)+d2-d1;
                }
                if(m3<0){
                    m3=11;
                    y3--;
                }

                if(d3<10){
                    d3='0'+d3;
                }
                if(m3<10){
                    m3='0'+m3;
                }
            
                const year = document.getElementById('age-result-year');
                year.textContent=y3;
                const month = document.getElementById('age-result-month');
                month.textContent=m3;
                const day = document.getElementById('age-result-day');
                day.textContent=d3;

            }else{
                console.log(err)
            }

            
        }


        
       function getDaysInMonth(year,month){
        return new Date(year,month,0).getDate();
       }