



    let myNodelist = document.getElementsByTagName("LI");
    let i;
    for(i = 0; i < myNodelist.length; i++){
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }


    //close button

    let close = document.getElementsByClassName("close");
    for(i = 0; i < close.length; i++){
        close[i].onclick = function(){
            let div = this.parentElement;
            div.style.display="none";
        }
    }


    //add checked

    let list = document.querySelector('ul');
    list.addEventListener('click', function(ev){
        if(ev.target.tagName === 'LI'){
            ev.target.classList.toggle('checked');
        }
    }, false);
 
    //adds new element

    function newElement(){
        let li = document.createElement("li");
        let inputValue = document.getElementById("taskInput").value;
        let t = document.createTextNode(inputValue);
        li.appendChild(t);
        if(inputValue === ''){
            alert("You must write something to add!");
        } else{
            document.getElementById('taskList').appendChild(li);
        }
        document.getElementById('taskInput').value = "";

        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);


        for(i = 0; i < close.length; i++){
            close[i].onclick = function(){
                let div = this.parentElement;
                div.style.display="none";
            }
        }
    }



