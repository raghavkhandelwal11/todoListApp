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
    let col1 = temp + 1;
    let col2 = temp + 2;
    let col3 = temp + 3;
    let col4 = temp + 4;
    let obj = {
        count: temp,
        id: Date.now().toString(),
        title: txt1,
        popId1: col1,
        popId2: col2,
        popId3: col3,
        popId4: col4,
        items: []
    }
    cardList.push(obj);

    render(obj);

    document.getElementsByClassName("in")[0].style.display = "none";
    document.getElementsByClassName('blurrr')[0].style.filter = "blur(0px)";
    
});


function render(x) {
    let element1 = document.createElement('div');
    element1.classList.add("card", x.popId3);

    element1.innerHTML = `
    <h3 href="" class="red1 size2"><a href="./thirdPage.html">${x.title}</a></h3>
    <div class="sep" id="${x.id}">
        <hr>
    
    </div>
    <div class="set456">
    <a href="" id="${x.count}"><img src="./cross.png" alt="can't load" id="bt1"></a> 
    <a href="" class="${x.popId4}")"><span class="material-symbols-outlined" id="bt2">
        delete
    </span></a>
    </div>
    `;

    

    element0.appendChild(element1);

    let button1 = document.createElement('div');
    button1.classList.add('in1', x.popId1);
    // button1.setAttribute('id', x.popId1);
    button1.style.display = "none";

    button1.innerHTML = `
        <label for="t2" class="l1">Add New Item</label> <br> <br>
            
        <input type="text" class="inp1 ${x.popId1}">
        
        <button type="submit" class="b1" name="submit" value="submit" id="${x.popId2}">Add</button>
        <button id="b3" class="b1 ${x.popId1}" name = "submit" >Close</button>
    `;

    document.getElementsByClassName("pop")[0].appendChild(button1);

    let sel = document.getElementById(x.popId2);

    sel.addEventListener('click', (q) => {
        q.preventDefault();
        let txt2 = document.getElementsByClassName(x.popId1)[1].value;
        let com = x.id+txt2;
        x.items.push(com);
            let ele2 = document.createElement("p");
            ele2.classList.add("red1", "size1");
            ele2.innerHTML = `
            <span class="${com}">
            ${txt2}
            </span>
            <button class="set321" id="${com}">Mark done</button>
            `;

            
            
            document.getElementById(x.id).appendChild(ele2);

            let item = document.getElementById(com);
            let com1 = "#" + com;
            $(com1).click(function() {
                document.getElementsByClassName(com)[0].style.textDecoration = "line-through";
            })

            document.getElementsByClassName(x.popId1)[0].style.display = "none";
            document.getElementsByClassName('blurrr')[0].style.filter = "blur(0px)";
    });


    
    let edit = document.getElementById(x.count);
    edit.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementsByClassName(x.popId1)[0].style.display = "inline-block";
            document.getElementsByClassName('blurrr')[0].style.filter = "blur(5px)";  

    });

    let del = document.getElementsByClassName(x.popId4)[0];

    del.addEventListener('click', (r) => {
        r.preventDefault();
        document.getElementsByClassName(x.popId3)[0].remove();
        document.getElementsByClassName(x.popId1)[0].remove();
    })

    let cls3 = document.getElementsByClassName(x.popId1)[2];
    
    cls3.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementsByClassName(x.popId1)[0].style.display = "none";
        document.getElementsByClassName('blurrr')[0].style.filter = "blur(0px)";
    })


} 



function cls() {
    document.getElementsByClassName("in")[0].style.display = "none";
    document.getElementsByClassName('blurrr')[0].style.filter = "blur(0px)";
};

function cls1() {
    document.getElementsByClassName("in1")[0].style.display = "none";
    document.getElementsByClassName('blurrr')[0].style.filter = "blur(0px)";
};

// function del(ob) {
//     document.getElementsByClassName(x.popId3)[0].remove();
//     document.getElementsByClassName(x.popId1)[0].remove();
// }




