import { menuArray } from '/js/data.js'

document.addEventListener('click', function(e){
    // let cardId = e.target.id
    if(e.target.id){
        addToCart(e.target.id)
    }
})

let totalPrice = 0
function addToCart(itemId){ 
    const itemObj = menuArray.filter(function(menu){
        return menu.id == itemId
    })[0]
    let sum = ''
    if(itemObj){
        let orderList = '';
        orderList = `
                <div class="product-item">
                    <div class="product-name">
                        <h3>${itemObj.name}</h3>
                        <button id="remove-item">remove</button>
                    </div>
                    <div class="product-pirce">
                        <h3 id="product-price" >${itemObj.price}</h3>
                    </div>
                </div>
        `
        totalPrice += itemObj.price 
        document.getElementById('order-list').innerHTML += orderList   
        getCartTotal(totalPrice)
            
    }  
    
        
}

function getCartTotal(totalPrice){
    let cartTotalHtml = `
        <div class="product-total">
            <h3>Total Price</h3>
            <h3>${totalPrice}</h3>
        </div>
        <div class="complete-order-btn">
            <form action="">
                <button type="submit">Complete order</button>
            </form>
        </div>
    `
    document.getElementById('product-cart-total').innerHTML = cartTotalHtml 
    removeItem()
}

function removeItem(){
   
}



function getMenuList(){
    let menuList = ``
    menuArray.forEach(function(tweet){
        menuList += `
        <div class="products">
            <div class="product-img">
                <img src="${tweet.image}" alt="${tweet.name}">
            </div>
            <div class="product-details">
                <h2>${tweet.name}</h2>
                <p>${tweet.ingredients}</p>
                <h3 class="price">${tweet.price}</h3>
            </div>
            <div class="cart">
                <i data-cart="${tweet.id}" id="${tweet.id}" class="fa-regular fa-plus add-to-card"></i>
            </div>
        </div>
        `
    })
    return menuList
}

function render(){
    document.getElementById('products-list-area').innerHTML = getMenuList()
}

render()
