// this should override all links that go out of the iframe (into a blank)
// by Martin
setTimeout(function() {
    $.each($('a[target="_blank"]'), function(data) {
        $(this).on('click', function(e) {
            e.preventDefault();
            window.location.href = $(this).attr('href');
            return false;
        });
    });
}, 500);


// alert('Cusom JS has been loaded')
