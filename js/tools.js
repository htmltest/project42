(function($) {

    $(document).ready(function() {

        $('select').chosen({disable_search: true});

        $('form').submit(function(e) {
            var valid = true;
            $('select').each(function() {
                if ($(this).val() == '') {
                    valid = false;
                }
            });
            if (!valid) {
                alert('Нужно ответить на все вопросы');
                e.preventDefault();
            }
        });

    });

})(jQuery);