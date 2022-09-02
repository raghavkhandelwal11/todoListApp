let cardList = [];
let n = 0;
let element0 = document.getElementsByClassName("cards")[0];
let add = document.querySelector('#add');
let cl = document.querySelector("#close");
let sep1;


function addCard() {
    document.getElementsByClassName("in")[0].style.display = "inline-block";
    document.getElementsByClassName('blurrr')[0].style.filter = "blur(5px)";
};

add.addEventListener('click', (e) => {
    e.preventDefault();

    let txt1 = document.querySelector("#t1").value;

    if(txt1 == null) {
        return;
    }

    document.getElementsByClassName("default")[0].style.display = "none";
    document.getElementsByClassName("default")[1].style.display = "none"; 

    
    n++
    let temp = "a" + n;
    let obj = {
        count: temp,
        id: Date.now().toString(),
        title: txt1,
        items: []
    }
    cardList.push(obj);

    render(obj);

    document.getElementsByClassName("in")[0].style.display = "none";
    document.getElementsByClassName('blurrr')[0].style.filter = "blur(0px)";
    
});


function render(x) {
    let element1 = document.createElement('div');
    element1.classList.add("card");

    element1.innerHTML = `
    <h3 href="" class="red1 size2"><a href="./thirdPage.html">${x.title}</a></h3>
    <div class="sep" id="${x.id}">
        <hr>
    <br>
    <p class="red1 size1"><del>sample</del></p>
    </div>
    <a href="" id="${x.count}"><img src="./cross.png" alt="can't load" id="bt1"></a> 
    <a href="" ><span class="material-symbols-outlined" id="bt2">
        delete
    </span></a>
    `;

    

    element0.appendChild(element1);

    
    let edit = document.getElementById(x.count);
        edit.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementsByClassName("in1")[0].style.display = "inline-block";
            document.getElementsByClassName('blurrr')[0].style.filter = "blur(5px)";

            let add1 = document.querySelector('#add1');            
           

        })


        add1.addEventListener('click', (w) => {
            w.preventDefault();
            let txt2 = document.getElementById('t2').value;
            let ele2 = document.createElement("p");
            ele2.classList.add("red1", "size1");
            ele2.innerHTML = `<del>${txt2}</del>`;
            
            document.getElementById(x.id).appendChild(ele2);

            document.getElementsByClassName("in1")[0].style.display = "none";
            document.getElementsByClassName('blurrr')[0].style.filter = "blur(0px)";



        });

} 



function cls() {
    document.getElementsByClassName("in")[0].style.display = "none";
    document.getElementsByClassName('blurrr')[0].style.filter = "blur(0px)";
};

function cls1() {
    document.getElementsByClassName("in1")[0].style.display = "none";
    document.getElementsByClassName('blurrr')[0].style.filter = "blur(0px)";
};


