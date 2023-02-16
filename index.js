let input = document.querySelector('.inputText');
let addBtn = document.querySelector('.btn1');
let tasks = document.querySelector('.tasks');



    input.addEventListener('keyup',()=>{
        if(input.value.trim() !=0)
        {
            addBtn.classList.add('active');
        }else {
            addBtn.classList.remove('active');
        }
    });

    addBtn.addEventListener('click',()=>{
        if(input.value.trim() !=0){
            let newItem = document.createElement('div')
            newItem.classList.add('item');
            newItem.innerHTML = `<p>${input.value}</p>
            <div class="item-btn">
                <button class="editbtn">Completed</button>
                <button class="delbtn">delete</button>
            </div>`
            tasks.appendChild(newItem);
            input.value ='';
        }
        else {
            alert("Please Enter a Value");
        }
    })

tasks.addEventListener('click',(e)=>{
    if (e.target.classList.contains('delbtn')){
        e.target.parentElement.parentElement.remove();
    }
})

tasks.addEventListener('click',(e)=>{
    if (e.target.classList.contains('editbtn')){
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})

