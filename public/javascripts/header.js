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
        cart_sidebar.toggleClass('active');
    })

    // login sidebar anim
    const login_sidebar_toggle = $('.login-sidebar-toggle');
    const login_sidebar = $('.login-sidebar-wrapper');
    const login_sidebar_close = $('#login-sidebar-close');

    login_sidebar_toggle.click(() => {
        login_sidebar.addClass('active');
    })

    login_sidebar_close.click(() => {
        login_sidebar.removeClass('active');
    })

})