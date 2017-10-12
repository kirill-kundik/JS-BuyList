// console.log('starting script...');

$(document).ready(function () {

    console.log('starting script...');

    var item_template = $('#product-template').html();
    var preview_template = $('.preview-template').html();
    var list = $('.items-list');
    var products_holder_left = $('.products-holder');
    var products_holder_bought = $('.items-bought');

    $('.add').click(function () {

        add_item($('.input').val());
        console.log('clicked');

    });

    function add_item(name) {

        if (name.valueOf() == ' ' || name == null || name.valueOf() == '') {

            alert("В поле назви товару ви нічого не ввели!");
            return;

        }

        var item = $(item_template);
        var preview = $(preview_template);

        var animation_time = 200;
        var quantity = 1;

        item.find('.name').text(name);
        preview.find('.label').text(name);

        item.find('.delete-button').click(function () {

            item.slideUp(animation_time, function () {
                item.remove();
            });
            preview.fadeOut(animation_time, function () {
                preview.remove();
            });

        });

        item.find('#plus').click(function () {

            quantity++;
            update_quantity();

        });

        item.find('#minus').click(function () {

            if (quantity > 1) {

                quantity--;
                update_quantity();

            }

        });

        function update_quantity() {

            var quantity_count = item.find('.quantity-count');
            quantity_count.fadeOut(animation_time, function () {

                quantity_count.html(quantity);
                quantity_count.fadeIn(animation_time, function () {

                });
            });

            preview.find('.cirrcle-counter').html(quantity);
            console.log(quantity);

        }

        item.hide().prependTo(list).slideDown(animation_time);
        preview.hide().appendTo(products_holder_left).fadeIn(animation_time);

    }

    add_item('Помідори');
    add_item('Паштет');
    add_item('LKNM Production');

});
