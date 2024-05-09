$(document).ready(() => {

    // admin sidebar effect
    $('#admin-sidebar-toggle').click(() => {
        $('#admin-sidebar').removeClass('admin-sidebar-hidden');
        $('#admin-sidebar').addClass('admin-sidebar-show');
    })

    $('#admin-sidebar-close').click(() => {
        $('#admin-sidebar').removeClass('admin-sidebar-show');
        $('#admin-sidebar').addClass('admin-sidebar-hidden');
    })
})