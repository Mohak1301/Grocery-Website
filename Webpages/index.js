$(document).ready(function(){
    $(".add_to_cart").click(function(){
        var card = $(this).closest('.card');
        var name = card.find('.card-title').text();
        var price = card.find('.card-text').text();
        var img = card.find('img').attr('src');
        var y = {
            'name': name,
            'price': price,
            'img': img
        };
        var items = localStorage.getItem('items');
        var item = items ? JSON.parse(items) : [];
        item.push(JSON.stringify(y));
        localStorage.setItem('items', JSON.stringify(item));
        alert("Added to cart successfully");
    })
})
