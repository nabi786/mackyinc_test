$(document).ready(function () {


    var dropDownMenuParent = document.getElementsByClassName('dropDownMenuParent')
    var navElm = Array.from(dropDownMenuParent);

    // Desktop Menu
    // function DesktopMenuEffect() {
    //     navElm.forEach(function (elm, index) {
    //         elm.addEventListener('mouseover', function () {
    //             $(`.dropDownMenu_${index}`).addClass("animateNav")
    //         })
    //         elm.addEventListener('mouseleave', function () {

    //             $(`.dropDownMenu_${index}`).removeClass("animateNav")

    //             $(`.dropDownMenu_${index}`).addClass("animateionRemoveNav")


    //         })

    //     });

    // }








    // Responsive MENU
    function responsiveMenuEvent() {

        // in responsive when user click on menu button
        $('.resMenu').click(function () {
            $('.navigationMenu2').removeClass('NavMenuSlideToRight')
            $('.navigationMenu2').addClass('NavMenuSlideFromRight')
        })
        $('#closeResNavManuButton').click(function () {

            $('.navigationMenu2').removeClass('NavMenuSlideFromRight')
            $('.navigationMenu2').addClass('NavMenuSlideToRight')
        })


        // drop Down MENU
        navElm.forEach(function (elm, index) {

            $(`.dropDownMenuParentFirstLink_${index}`).click(function () {
                $(`.dropDownMenu_${index}`).toggle("slow")
            })
        })




        // drop down inner Menu
        var dropInnerMenu = document.getElementsByClassName('dropInnerMenu')
        var dropInnerMenu = Array.from(dropInnerMenu);

        dropInnerMenu.forEach(function (elm, index) {

            $(`.dropDownMenuSecondParentFirstLink_${index}`).click(function () {
                $(`.dropInnerMenu_0${index}`).toggleClass('dropInnerMenuFullHeight')
            })

        })




    }

    if (window.innerWidth > 1000) {
        // DesktopMenuEffect()
    } else if (window.innerWidth <= 1000) {
        responsiveMenuEvent()
    }



    // // when resize window
    // window.addEventListener('resize', function(){
    //     if (window.innerWidth > 1000) {
    //         DesktopMenuEffect()
    //     } else if (window.innerWidth <= 1000) {
    //         responsiveMenuEvent()
    //     }

    // });














    // home section 11th slide iumages

    var arr = [
        {
            "img": "public/edited/Untitled-14.jpg",
            "title": "2020 Integrated Annual Report",
            "content": "ACCIONA's Sustainability Master Plan 2025 sets out its goal of both doubling the positive impact of its activities and becoming a recognised leader in the development of basic infrastructure assets with the added value of putting people and the planet at the centre, in short, regenerative infrastructure.",
            "link": "#"
        },
        {
            "img": "public/edited/Untitled-6.jpg",
            "title": "2020 Integrated Annual Report",
            "content": "ACCIONA's Sustainability Master Plan 2025 sets out its goal of both doubling the positive impact of its activities and becoming a recognised leader in the development of basic infrastructure assets with the added value of putting people and the planet at the centre, in short, regenerative infrastructure.",
            "link": "#"
        },
        {
            "img": "public/edited/Untitled-15.jpg",
            "title": "2020 Integrated Annual Report",
            "content": "ACCIONA's Sustainability Master Plan 2025 sets out its goal of both doubling the positive impact of its activities and becoming a recognised leader in the development of basic infrastructure assets with the added value of putting people and the planet at the centre, in short, regenerative infrastructure.",
            "link": "#"
        },

    ]

    var sec11Btn = document.getElementsByClassName('sec11Btn');
    var sec11Btn = Array.from(sec11Btn);

    var slideNabBtn = document.getElementById('slideNabBtn')

    sec11Btn.forEach(function (btn, index) {

        btn.addEventListener('click', function () {

            var html = `
                    <div class="animateContent">
                            <h2 class="section_heading">
                                ${arr[index].title}
                            </h2>
                            <p>
                                ${arr[index].content}
                                <a href="${arr[index].link}">
                                   Read More<span>
                                        <i class="fas fa-external-link-alt"></i>
                                    </span>
                                </a>
                            </p>
                    </div>
                `

            $('#Section_11_contentBox').html(html);


            var imageBox = `<div class="secton_11_Img_Box animateImage" style="background-image: url(${arr[index].img});"></div>`

            $('#sec_11_imageBox').html(imageBox)



            $(".sec11Btn").removeClass("activeBtn");
            btn.classList.add("activeBtn");

        })


    })






    // when user click on any service icon than show image and their detials

    var serviceIcon = document.getElementsByClassName('serviceIcon')
    serviceIcon = Array.from(serviceIcon)
    serviceIcon.forEach(function(item,index){
        item.addEventListener('click',function(){
            var ServiceFixedOuterBox = document.getElementsByClassName('ServiceFixedOuterBox')[index]
            
            ServiceFixedOuterBox.classList.add('ServiceFixedBoxItemDisplay')
            
            
        })
    })

    // close popup
    var closeBtn = document.getElementsByClassName('closeBtn')

    closeBtn = Array.from(closeBtn)
    closeBtn.forEach(function(item,index){
        item.addEventListener('click', function(){

            var ServiceFixedOuterBox = document.getElementsByClassName('ServiceFixedOuterBox')[index]
            ServiceFixedOuterBox.classList.remove('ServiceFixedBoxItemDisplay')

        })
    })
    


})