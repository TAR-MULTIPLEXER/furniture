// more details
function showdetails(name, details,price) {
    var modal = document.getElementById("modal");
   // document.getElementById("modalimage").src = image;
    document.getElementById("modalname").innerHTML = name;
    document.getElementById("modaldetails").innerHTML = details;
    document.getElementById("modalprice").innerHTML=price;
    modal.style.display = "block";
  }
  function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  //choosing categories from the nav
  function showCategoryItems(category) {
    var allItems = document.querySelectorAll('.container img');
    allItems.forEach(item => {
      if (item.id === category) {
        item.style.display = 'block';
      } 
      else {
        item.style.display = 'none';
      }
    });
  }
  //search fiter 
  function filterItems() {
    var input, filter, container, items, item, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    container = document.querySelector('.container');
    items = container.getElementsByTagName('img');
    for (i = 0; i < items.length; i++) {
      item = items[i];
      txtValue = item.id;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    }
  }
  //cart
  let cartItems = [];
  let total=0;
  function toggleCart() {
    var cart = document.getElementById('cart');
    if (cart.style.display === 'none') {
      cart.style.display = 'block';
    } else {
      cart.style.display = 'none';
    }
  }
  function closecart(){
    var cart=document.getElementById('cart');
    if(cart.style.display==='block'){
        cart.style.display='none';
    }else{
        cart.style.display='block';
    }
  }

  function addToCart(item, price) {
    var table = document.getElementById('cartTable');
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = item;
    cell2.innerHTML = price;
    cell3.innerHTML = '<i onclick="removeItem(this)" class="fa-solid fa-circle-xmark fa-xl" style="color:red;"></i>';

    cartItems.push({ item: item, price: parseFloat(price) });
    total += parseFloat(price);
    updateCartCount();
    updateTotal();
  }

  function removeItem(row) {
    var i = row.parentNode.parentNode.rowIndex;
    var price = parseFloat(cartItems[i - 1].price);
    total -= price;
    document.getElementById('cartTable').deleteRow(i);
    cartItems.splice(i - 1, 1);
    updateCartCount();
    updateTotal();
  }

  function clearCart() {
    document.getElementById('cartTable').innerHTML = '<tr><th>Item</th><th>Price</th><th>Action</th></tr>';
    cartItems = [];
    total = 0;
    updateCartCount();
    updateTotal();
  }

  function updateCartCount() {
    var cartCount = document.getElementById('cartCount');
    cartCount.textContent = cartItems.length;
  }

  function updateTotal() {
    var totalElement = document.getElementById('total');
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
  }
  var mymap = L.map('mapid').setView([33.36597275420392, 35.43658446255666], 17);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(mymap);
  // the location of me 
  var marker = L.marker([33.365972754, 35.4355844]).addTo(mymap);
  marker.bindPopup("<b>Hello!</b><br>This is Abdullah Pizza.").openPopup();