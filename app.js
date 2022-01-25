const click = document.querySelector('#click');
const dev_area = document.querySelector('.dev_area');


click.addEventListener('click', function(){
    
    let name = document.querySelector('input[name="name"]');
    let gender = document.querySelector('input[name="gender"]:checked');
    let skill = document.querySelectorAll('input[name="skill"]:checked');
    let photo = document.querySelector('input[name="photo"]');
    let phone = document.querySelector('input[name="phone"]');

    let skill_arr=[];
    for( let i=0; i < skill.length; i++){
        skill_arr.push(skill[i].value);
    }

    let data_arr;
    if( dataGet('devs')){
        data_arr = dataGet('devs');
    }else{
        data_arr = [];
    }

    data_arr.push({
        name    : name.value,
        gender  : gender.value,
        skill   : skill_arr,
        photo   : photo.value,
        phone   : phone.value
    });

    dataSend('devs', data_arr);

    
       

    allData();

    name.value = '';
    photo.value = '';
    phone.value = '';
    

    

});

allData();
function allData(){
    let all_data = dataGet('devs');
    let data = '';

    all_data.map( d => {

        let lists = '';
        d.skill.map(li => {
            lists += '<li>' + li + '</li>'
        });

        data += `
        <div class="devbox">
            <img src="${d.photo}" alt="Photo">

            <h2 style="text-align: center;">${d.name}</h2>
            <p style="margin: 5px 0px;"> <b>Gender : </b>${d.gender}</p>
            <h4 style="margin: 5px 0px;">Skills :</h4>
            <ul style="margin: 5px 0px;">
                ${lists}
            </ul>

            <p style="margin: px 0px;"> <b>Phone : </b>${d.phone}</p>

        </div>
    `;
    });

    dev_area.innerHTML = data;


}




