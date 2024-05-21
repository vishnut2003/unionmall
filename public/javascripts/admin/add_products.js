$(document).ready(() => {

    // add tags to place
    $('#tag-field-btn').click(() => {
        tag = $('#add-tag-field').val()
        if(tag != '') {
            $('#tag-show-list').append(`<li>${tag}</li>`)
        }
    })

    // Submit the form action
    $('#add-product-form').on('submit', (e) => {
        e.preventDefault()
        const formData = {}

        // save product title
        formData.title = $('#product-title').val()

        // save product description same as html
        const description = $('#text-area-desc').find('.fr-view').html()
        formData.description = description

        // save all selected categories as array
        const categoryElement = $('#add-product-form :input[name="catgory"]')
        const categories = []
        for (let i = 0; i < categoryElement.length; i++) {
            if(categoryElement[i].checked) categories.push(categoryElement[i].defaultValue)
        }
        formData.categories = categories

        // save all tags as array
        const tagListElements = $('#tag-show-list > li');
        const tags = [];
        for (let i = 0; i < tagListElements.length; i++) {
            tags.push(tagListElements[i].innerText)
        }
        formData.tags = tags

        console.log(formData)
    })
})