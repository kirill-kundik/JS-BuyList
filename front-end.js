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
        $('.input').val('');
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

        var isBought = false;

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
            item.find('.quantity-counter').fadeOut(animation_time, function () {

                item.find('.quantity-counter').html(quantity);
                item.find('.quantity-counter').fadeIn(animation_time);

            });

            preview.find('.cirrcle-counter').fadeOut(animation_time, function () {

                preview.find('.cirrcle-counter').html(quantity);
                preview.find('.cirrcle-counter').fadeIn(animation_time);

            });

            if (quantity == 2) {

                item.find('#minus').css('background-color', 'red');
                item.find('#minus').active(function () {

                    item.find('#minus').css('background-color', '#ca553f');

                });
                item.find('#minus').hover(function () {

                    item.find('#minus').css('background-color', '#ff6149');

                });

            }

        });

        item.find('#minus').click(function () {

            if (quantity > 1) {

                quantity--;
                item.find('.quantity-counter').fadeOut(animation_time, function () {

                    item.find('.quantity-counter').html(quantity);
                    item.find('.quantity-counter').fadeIn(animation_time);

                });

                preview.find('.cirrcle-counter').fadeOut(animation_time, function () {

                    preview.find('.cirrcle-counter').html(quantity);
                    preview.find('.cirrcle-counter').fadeIn(animation_time);

                });

            }

            if (quantity == 1) {

                item.find('#minus').css('background-color', '#ff6149');
                item.find('#minus').active(function () {

                    item.find('#minus').css('background-color', '#ff6149');

                });

            }

        });
        item.find('.bought').click(function () {

            isBought = !isBought;

            item.fadeOut(animation_time, function () {

                if (isBought) {

                    item.find('.plus').hide();
                    item.find('.minus').hide();
                    item.find('.delete-button').hide();
                    item.find('.bought').text('Не куплено');
                    item.find('.bought').attr('data-tooltip', 'Видалити з куплено');

                    item.fadeOut(animation_time, function () {

                        item.find('.name').css('text-decoration', 'line-through');
                        preview.hide().appendTo(products_holder_bought).fadeIn(animation_time);

                    });

                    preview.find('.label').css('text-decoration', 'line-through');

                }
                else {

                    item.find('.plus').show();
                    item.find('.minus').show();
                    item.find('.delete-button').show();
                    item.find('.bought').text('Куплено');
                    item.find('.bought').attr('data-tooltip', 'Додати до куплено');

                    item.fadeOut(animation_time, function () {

                        item.find('.name').css('text-decoration', 'none');
                        preview.hide().appendTo(products_holder_left).fadeIn(animation_time);

                    });

                    preview.find('.label').css('text-decoration', 'none');

                }

                item.fadeIn(animation_time);

            });

        });

        item.hide().prependTo(list).slideDown(animation_time);
        preview.hide().appendTo(products_holder_left).fadeIn(animation_time);

    }

    $('.input').keypress(function (e) {
        if (e.which === 13) {

            add_item($('.input').val());
            $('.input').val('');
            return false;

        }
    });

    add_item('Помідори');
    add_item('Паштет');
    add_item('LKNM Production');

});
