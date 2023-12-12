let sol_eth_popup = document.getElementById("full_solana_selector")


let popup = document.getElementById("popup")

function open_popup() {

    /* transition: all 0.3s ease 0s; */

    sol_eth_popup.style = "visibility: hidden; transition: visibility 0.3s ease 0s;"
    popup.style.visibility = "visible"
    popup.style.opacity = 1;
}
solana_connect.addEventListener("click", open_popup)

function close_popup() {
    // document.getElementById("wallet-adapter-modal").classList.toggle("wallet-adapter-modal")
    // document.getElementById("popup").classList.toggle("wallet-adapter-modal")
    let popup = document.getElementById("popup")

    popup.style.visibility = "hidden"

}




function togle_text() {
    console.log("hjdoijgfoi")
    let collapsed_text = document.getElementById("wallet-adapter-modal-collapse")
    let rotate = document.getElementById("rotator")
    let text = document.getElementById("more_opt")


    if (collapsed_text.style.height == "auto") {
        collapsed_text.style.height = "0px"
        collapsed_text.style.overflow = "hidden"
        text.innerHTML = "More options"
        rotate.classList.toggle("wallet-adapter-modal-list-more-icon-rotate")
    } else {
        // await setTimeout(() => {
        //     collapsed_text.style.height = "144px"

        // }, 100)
        collapsed_text.style.height = "auto"
        collapsed_text.style.overflow = "initial"
        text.innerHTML = "Less options"
        rotate.classList.toggle("wallet-adapter-modal-list-more-icon-rotate")
    }

}

function add_elems(el) {
    // el = list where insert => (new Item, Item before which indert)
    console.log("inserting")
    let full_list = document.getElementById("full_list_more")
    let collapsed_div = document.getElementById("wallet-adapter-modal-collapse")

    for (let i = 0; i < el.length; i++){
        let element_to_insert = document.getElementById(el[i])
        let dateSpan = document.createElement('span')
        dateSpan.innerHTML = "Detected";
        element_to_insert.lastChild.appendChild(dateSpan);
        full_list.insertBefore(element_to_insert, collapsed_div);

    }
}


add_elems(getProvList())

function getProvList() {
    let providers = []
    if ('phantom' in window) {
        providers.push("Phantom")
    }
    if ('solflare' in window) {
        providers.push("Solflare")
    }
    if ('slope' in window) {
        providers.push("Slope")
    }
    // if ('sollet' in window) {
    //     providers.push("Sollet")
    //
    // }
    return providers
}



function open_sol_slector() {
    console.log("sd;kf;dlkm")

    sol_eth_popup.style = "visibility: visible; width: 100%; opacity: 1;"
}



let btn = {
            hover: function (event) {
                event.currentTarget.style = "background-color: rgb(68, 141, 236)";
            },
            out: function (event) {
                event.currentTarget.style = "background-color: rgb(64, 65, 68)";
            }

        }


let elements = document.getElementsByClassName("SignInButton_walletRow__9udxA")


for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("mouseover", btn.hover, false);
    elements[i].addEventListener("mouseout", btn.out, false);
}



function hui() {
    console.log("shfdbvjshafbvjlshfbvlfsjvd huuiiiii")
    sol_eth_popup.style = "visibility: hidden; width: 100%"

}
window.onclick = function (e) {
    
let overlay = document.getElementsByClassName("wallet-adapter-modal-overlay")[0]
    console.log("sdfjbnlkdjsfnvslksjn")
    if (e.target == sol_eth_popup) {
        console.log("doing close")
        sol_eth_popup.style = "visibility: hidden; width: 100%; opacity: 0;"
    } 
    else if (e.target == overlay) {
        console.log("second hui")
        popup.style.visibility = "hidden"
        popup.style.opacity = 0;      
    } else if (e.target == document.getElementById("segodnya")) {
        console.log("doing close 3.0")
        sol_eth_popup.style = "visibility: hidden; width: 100%; opacity: 0;"
    }
  
}
