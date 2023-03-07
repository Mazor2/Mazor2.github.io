
// 情報の取り
document.querySelector("#button").addEventListener('click', function(){
    datos();
});
function datos(){
    let value5 = generateRandomIntegerInRange(1, 3);
    
    let url = 'https://randomuser.me/api/';
    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
    api.onreadystatechange = function(){
        if(this.status === 200 && this.readyState == 4){
            let datoss = JSON.parse(this.responseText);
            //console.log(datoss);
            document.getElementById("Face").textContent ='facebook.com/user/'+ datoss['results']['0']['name']['first']+datoss['results']['0']['name']['last'];
            document.getElementById("insta").textContent ='instagram.com/'+ datoss['results']['0']['name']['first']+datoss['results']['0']['name']['last'];
            document.getElementById("picture").src = datoss['results']['0']['picture']['large'];
            document.getElementById("pname").textContent =datoss['results']['0']['name']['first']+' '+datoss['results']['0']['name']['last'];
            document.getElementById("ptelefono").textContent =datoss['results']['0']['phone'];
            document.getElementById("pemail").textContent = datoss['results']['0']['email'];
            document.getElementById("pdireccion").textContent = datoss['results']['0']['location']['country'];
            
            switch(value5){
                case 1:
                    document.getElementById("fl").textContent = 'Inglés';
                    document.getElementById("sl").textContent = 'Portugués';
                    document.getElementById("rem").textContent = 'McDonalds';
                    document.getElementById("pro").textContent = 'Programador';
                    document.getElementById("work").textContent = 'Desarrollador(Python)';
                    document.getElementById("awork").textContent = '2016-2020';
                    document.getElementById("lwork").textContent = 'Spain';
                    document.getElementById("uni").textContent = 'Universidad de Madrid';
                    document.getElementById("auni").textContent = '2002-2009';
                    document.getElementById("luni").textContent = 'Spain';
                break;
                case 2:
                    document.getElementById("fl").textContent = 'Español';
                    document.getElementById("sl").textContent = 'Japonés';
                    document.getElementById("rem").textContent = 'Chevrolet';
                    document.getElementById("pro").textContent = 'Arquitecto';
                    document.getElementById("work").textContent = 'Chevrolet';
                    document.getElementById("awork").textContent = '2013-2017';
                    document.getElementById("lwork").textContent = 'Uruguay';
                    document.getElementById("uni").textContent = 'Universidad de Montevideo';
                    document.getElementById("auni").textContent = '1998-2004';
                    document.getElementById("luni").textContent = 'Uruguay';
                break;
                case 3:
                    document.getElementById("fl").textContent = 'Árabe';
                    document.getElementById("sl").textContent = 'Ruso';
                    document.getElementById("rem").textContent = 'Mizuki';
                    document.getElementById("pro").textContent = 'Chef';
                    document.getElementById("work").textContent = 'Cocinero';
                    document.getElementById("awork").textContent = '2014-2015';
                    document.getElementById("lwork").textContent = 'Japan';
                    document.getElementById("uni").textContent = 'Universidad de Kyoto';
                    document.getElementById("auni").textContent = '2007-20010';
                    document.getElementById("luni").textContent = 'Japan';
                break;
            }
           

        }
    }
    //参考の仕事
    let url2 = 'https://randomuser.me/api/';
    const api2 = new XMLHttpRequest();
    api2.open('GET', url, true);
    api2.send();
    api2.onreadystatechange = function(){
        if(this.status === 200 && this.readyState == 4){
            let datoss2 = JSON.parse(this.responseText);

            document.getElementById("rname").textContent =datoss2['results']['0']['name']['first']+' '+datoss2['results']['0']['name']['last'];
            document.getElementById("rphone").textContent = datoss2['results']['0']['phone'];
            document.getElementById("rcorreo").textContent =  'E: '+datoss2['results']['0']['email'];
            
           

        }
    }

    
}
//
function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

