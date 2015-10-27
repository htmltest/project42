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

        $('.question-radio-item input:checked').parent().addClass('checked');
        $('.question-radio-item').click(function() {
            var curName = $(this).find('input').attr('name');
            $('.question-radio-item input[name="' + curName + '"]').parent().removeClass('checked');
            $(this).addClass('checked');
            $(this).find('input').prop('checked', true).trigger('change');
        });

    });

})(jQuery);