setTimeout(() => {

    $(document).ready(function () {
        console.log("ready!");
        $('.tabs .tab').click(function () {
            $(this).parent().find('.tab').removeClass('active')
            $(this).addClass('active')
        })

        $('.service-detail-item').click(function () {
            $('.service-detail-item').removeClass('active')
            $(this).addClass('active')
        })

        $('.custom-form .input input').focusin(function () {
            $(this).parent().find('label').addClass('active');
        })


        $('.custom-form .input input').focusout(function () {
            if ($(this).val().length <= 0) {
                $(this).parent().find('label').removeClass('active');
            } else {
                $(this).parent().find('label').addClass('active');
            }
        });

        $('.menu-mobile').click(function () {
            $('.menu-sider').toggle()
        })

        $('.menu-sider').click(function (e) {
            if (e.target !== this)
                return;

            $('.menu-sider').toggle()
        });

    })
}, 2000)