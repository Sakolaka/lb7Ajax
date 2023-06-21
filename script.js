let ajax = new XMLHttpRequest();
        
        function getgroups() {
            let Group = document.getElementById("Group").value;
            ajax.onreadystatechange = load1;
            
            ajax.open("GET", "getgroups.php?Group=" + Group);
            ajax.send();
        }
        
        function load1() {
            if (ajax.readyState === 4 && ajax.status === 200) {
                document.getElementById("tabl1").innerHTML = ajax.responseText;
            }
        }
        function getteacher() {
            let Teacher = document.getElementById("Teacher").value;

            ajax.onreadystatechange = load2;
            ajax.open("GET", "getteacher.php?name=" + Teacher);
            ajax.send();
        }
        
        function load2() {
            if (ajax.readyState === 4 && ajax.status === 200) {
                let res2 = JSON.parse(ajax.responseText);
                let res21 = "";
                for (let i = 0; i < res2.length; i++) {
                    console.dir(res2[i]);
                    let week_day = res2[i].week_day;
                    let lesson_number = res2[i].lesson_number;
                    let auditorium = res2[i].auditorium;
                    let disciple = res2[i].disciple;
                    let type = res2[i].type;
                    res21 += "<br><b> День: </b>" + week_day + "<b> Пара: </b>" + lesson_number + "<b> Аудитория: </b>" + auditorium + "<b> Предмет: </b>" + disciple + "<b> Вид занятий: </b>" + type + "<br>";
                }
                document.getElementById("Result2").innerHTML = res21;
            }
        }
        function getauditorium(url, callback, format) {
    const ajax3 = new XMLHttpRequest();
    ajax3.onreadystatechange = function() {
        if (ajax3.readyState === 4 && ajax3.status === 200) {
            if (format === 'xml') {
                console.log("xml");
                callback(ajax3.responseXML);
            }           
        }
    };
    ajax3.open('GET', url);
    ajax3.send();   
}

function getAuditoriumforLessons() {
    const auditorium = document.getElementById('Auditorium').value;
    getauditorium('getauditorium.php?auditorium=' + auditorium, 
    function(response) {
        console.log(response);

        const auditoriums = response.getElementsByTagName('auditorium');
        let tableRows = '';

        for (let i = 0; i < auditoriums.length; i++) {
            const week_day  = auditoriums[i].getElementsByTagName('week_day')[0].textContent;
            const lesson_number = auditoriums[i].getElementsByTagName('lesson_number')[0].textContent;
            const disciple = auditoriums[i].getElementsByTagName('disciple')[0].textContent;
            const type = auditoriums[i].getElementsByTagName('type')[0].textContent;
            tableRows += `<tr><td>День</td><td>Пара</td><td>Предмет</td><td>Вид занятия</td></tr>`;
            tableRows += `<tr><td>${week_day}</td><td>${lesson_number}</td><td>${disciple}</td><td>${type}</td></tr>`;
        }

        document.getElementById('res3').innerHTML = tableRows;
    },
    'xml');
}