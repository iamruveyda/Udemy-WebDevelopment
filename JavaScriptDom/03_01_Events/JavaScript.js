// Event Listeners

const btn = document.querySelector("#btnDeleteAll");
const btn2 = document.querySelector("#btnAddNewTask");

btn.addEventListener("click", function (e) {

    let val;

    val = e;

    val = e.target;
    val = e.target.id;
    val = e.target.classList;
    val = e.type;

    console.log(val);

    e.preventDefault();

});


    /*
    
preventDefault(): iptal edilebilirse olayı iptal eder, yani olaya ait varsayılan eylem gerçekleşmeyecektir.

Örneğin, bu şu durumlarda yararlı olabilir:
Bir "Gönder" düğmesine tıklayarak form göndermesini engelleyin

Bir bağlantıya tıklayarak bağlantının URL'yi izlemesini engelleyin*/




// btn.addEventListener('click',btnClick);
// btn.addEventListener('click',btnClick2);
// btn2.addEventListener('click',btnClick);

// function btnClick(){
//     console.log('btn clicked');
// }

// function btnClick2(){
//     console.log('btn 2 clicked');
// }