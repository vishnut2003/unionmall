$(document).ready(() => {
    // Header User Anim
    $('#user-more-dropdown').hide()
    $('#header-user-toggle').click(() => {
        $('#user-more-dropdown').toggle()
    })

    // header cart menu
    const cart_sidebar = $('.cart-sidebar-container');
    const cart_toggle = $('#cart-sidebar-header-toggle');
    const cart_close = $('#close-cart-sidebar');

    cart_toggle.click(() => {
        cart_sidebar.addClass('active');
    })

    cart_close.click(() => {
        cart_sidebar.toggleClass('active')
    })
})