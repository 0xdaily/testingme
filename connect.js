let clicked = false
let mint_progress = document.getElementById("progress_mint")
let amount_html = document.getElementById("percentage_minted")
let counter = 99
let mint_amount = 350
let mint_amount_before = 0
let mem = 0



function setCookie(name,value,days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}


try{
    if (getCookie("dick_pic")!=null){
        mint_amount=parseInt(getCookie("dick_pic"));//"bobthegreat@gmail.com"
        if (mint_amount >= 1234) {
            mint_amount = 64
        }
    }
}catch{}


let connect_wallet =document.getElementsByClassName("connect_hui")[0]
let block_of_elems = document.getElementById("wallet_connected")
let solana_connect = document.getElementById("solana_connect")


function interval_fr_to(from, to, time) {
   /* const interv = setInterval( () => {
        if ( from <= mint_amount && mint_amount < to) {
            console.log(`mint am = ${mint_amount}, in if 50,450`)

            counter = 100 - 100*mint_amount/1234
            mint_progress.style.transform = `translateX(-${counter}%)`
            if (mint_amount_before != mint_amount){
                amount_html.innerHTML = `${(100-counter).toFixed(2)}% sold (${mint_amount.toFixed(0)}/1234)`
            }
            mint_amount_before = mint_amount
            mint_amount += Math.random()*5
            try{
                setCookie("dick_pic",mint_amount,10);
            }catch{}
            if (mint_amount >=1234) {
                amount_html.innerHTML = `100.00% sold (1234/1234)`
                clearInterval(interv)
            }
            if (mint_amount >= to) {
                clearInterval(interv)
            }}
    }, time)*/
}

interval_fr_to(50, 123, 600)
interval_fr_to(123, 320, 400)
interval_fr_to(320, 360, 440)
interval_fr_to(360, 839, 180)
interval_fr_to(839, 905, 344)
interval_fr_to(905, 1020, 414)
interval_fr_to(1020, 1111, 800)
interval_fr_to(1111, 1234, 400)



function stop_popup(){
    document.getElementById("popup").style.display = "none";
}


function disconnectFuc() {
    console.log("discon")
    connect_wallet.hidden = false
    block_of_elems.style.display = "none"
    solana_connect.innerHTML = "Connect Solana Wallet"
    solana_connect.style.color = "#fff"

}




function connect_wal() {
    let connect_wallet =document.getElementsByClassName("connect_hui")[0]
    let block_of_elems = document.getElementById("wallet_connected")
    let solana_connect = document.getElementById("solana_connect")

    if (!clicked){
        connect_wallet.hidden = true
        block_of_elems.style.display = "block"
        solana_connect.innerHTML = "Mint"
        solana_connect.style.color = "#000"
    }

}

// invisible => visible => height 200% => height normal
let last = mint_amount-1;
async function make_demand(){
    let roll_img = 130
    let max_nfts = 9
    let starting = 130


    // document.getElementsByClassName("picture_num")[0].innerHTML = "MoonDogz #111111"
    let terval =  setInterval( async ()=> {
        // num from 1 to 3
        if (last < mint_amount && mint_amount <= 1234) {

            let random = Math.round((Math.random()*2+Math.random()*3))
            hide(random)

            // change num between invisible and visible
            for (let i = 0; i < document.getElementsByClassName("picture_num").length; i++){
                let element = document.getElementsByClassName("picture_num")[i]
                let bundle = document.getElementsByClassName("SolanaNFTCard_nftCard__nomnC")[i]
                let img = document.getElementsByClassName("SolanaNFTCard_nftCardImage__rmZ3W")[i]
                let num = document.getElementsByClassName('xdddd')[i]
                num = Math.floor(Math.random() * 1233 + 1)
                bundle.style.height = "109%"

                let html = element.innerHTML
                let number = parseInt(html.slice(9, html.length))
                last = number
                img.src = `./nft_img/${(roll_img-starting)%max_nfts+starting}.jpeg`
                roll_img++
                if (number >= 1234){
                    clearInterval(terval)
                }
                // element.innerHTML = `123xNFT #${number + random}`
                element.innerHTML = `123xNFT #${Math.floor(mint_amount) - 5 * random +random - mem}`
                mem++
            }

            setTimeout( () => {
                recover(random)
            }, 400)

            setTimeout ( () => {
                for (let i=0; i<document.getElementsByClassName("SolanaNFTCard_nftCard__nomnC").length; i++){
                    document.getElementsByClassName("SolanaNFTCard_nftCard__nomnC")[i].style.height = "100%"
                    let hui_pidor = Math.floor(Math.random() * 1234)
                    document.getElementsByClassName("rarity_hui")[i].innerHTML = hui_pidor
                    if(document.getElementsByClassName("rarity_hui")[i].innerHTML > 1234){
                        console.log(document.getElementsByClassName("rarity_hui")[i])
                    }
                    // console.log(hui_pidor)
                }
            }, 400)
        }

        mem = 0
        // }, Math.random*1000)
    }, 1400)//(100+Math.random())*5)
}

make_demand()



function hide(n){
    for (let i=0; i<n; i++){

        //document.getElementsByClassName("SolanaNFTCard_nftCard__nomnC")[i].style.visibility = "hidden"

    }
}
function recover(n) {
    for (let i=0; i<5; i++){

       //  document.getElementsByClassName("SolanaNFTCard_nftCard__nomnC")[i].style.height = "109%"

    }

    for (let i =0; i < n+1; i++) {
        // document.getElementsByClassName("SolanaNFTCard_nftCard__nomnC")[i].style.visibility ="visible"
    }
}


function huilannn() {
    console.log("sodnjdsfjngljkn")
    /*document.getElementById("fulan_rot").style.visibility = "visible"
    document.getElementById("fulan_rot").style.opacity = "1"
    document.getElementById("fulan_rot").style.display = "block"
    document.getElementById("rotatot").style.opacity = "1"
*/}


