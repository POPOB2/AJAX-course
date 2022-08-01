// 香草js==原生(原味)寫法, 不帶任何套件  不帶任何框架


// 因為一直重複, 這裡把原生寫成function, 在其他地方引入
function eventList(events){
    let title=document.querySelector(".title")
    title.innerHTML=events.title
    //console.log(data)
    let ul=document.querySelector('ul')
    let li='';
    // let entrys=events.entry // 這段可以直接寫進下方for條件內, 少宣告一個變數
    for(let i=0;i<events.entry.length;i++){ // 把i<entrys.length替換成 上述的宣告entrys變數內容, 將其作為條件
        li=li+`<li class='card col-3'>
                <div class='card-body'>
                    ${events.entry[i].title}
                <div class="name">${events.entry[i].author.name}</div>
                <div class="summary">${events.entry[i].summary}</div>
            
                </div>
               </li>`;
    }
    ul.innerHTML=li
}


// 看到這裡接下來是看axios.html 檔案-----------------------------------------------------------------------------------------