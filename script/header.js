// hieu ung cuon chuot fixed nav bar

$(window).scroll(function(){
    var y = pageYOffset;
    if(y>=47.2){
        $('.navbar').addClass('navbar-fixed');
        $('.navbar').css({
            'height': '60px',
            'transition': '0.2s'
        })
        $('.navbar-brand img').css({
            'height': '30px'
        })
        $('.nav-link').css({
            'font-size': '0.8em',
            'padding-left': '2.7em'
        })
    }else{
        $('.navbar').removeClass('navbar-fixed');
        $('.navbar').css({
            'height': '84px',
            'transition': '0.2s'
        })
        $('.navbar-brand img').css({
            'height': '40px'
        })
        $('.nav-link').css({
            'font-size': '0.9em',
            'padding-left': '2.9em'
        })
    }
    
})
// hàm click hiện menu
var navBar = document.querySelector('#navbarNav');
var modal = document.querySelector('#modal');
function showMenu(){
    addClass(navBar, 'showMenu');
    addClass(modal, 'display');
}
//hàm click modal ẩn menu
modal.onclick = function() {
    removeClass(modal, 'display');
    removeClass(navBar, 'showMenu');
}



// hàm click hiện menu-list
var plusIcon = document.querySelectorAll('.plus-item');
var menuList = document.querySelectorAll('.nav-item ul');
for(var i = 0; i < plusIcon.length; i++){
    plusIcon[i].onclick = function(){
        var menuListId = this.getAttribute('data-id');
        var y = document.getElementById(menuListId);
        y.classList.toggle('display');
    }
}
