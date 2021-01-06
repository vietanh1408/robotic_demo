// hàm add class
function addClass(classAdd, selector){
    classAdd.classList.add(selector);
}
// hàm remove class
function removeClass(classRemove, selector){
    classRemove.classList.remove(selector);
}


/* --form-- */
// click vào hiện ra item
$(document).ready(function(){
    $('.choose-course').click(function(){
        $('.course-items').toggle();
    });
    $('.choose-address').click(function(){
        $('.address-items').toggle();
    });
    $('.choose-links i').click(function(){
        $('.links-search').toggle();
    });
})

// click ra chỗ khác thì mất
$(document).mouseup(function(e) 
{
    var container = $(".course-items");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
    }
});
$(document).mouseup(function(e) 
{
    var container = $(".address-items");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
    }
});
$(document).mouseup(function(e) 
{
    var container = $(".links-search");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
    }
});
// chọn khóa học

var showCourseChoosed = document.querySelector('.choose-course p');
var courseItem = document.querySelectorAll('.course-items ul li');
for(var i = 0; i < courseItem.length; i++){
    courseItem[i].addEventListener('click', function(){
        showCourseChoosed.innerText = this.innerText;
    })
}

var showAddressChoosed = document.querySelector('.choose-address p');
var addressItem = document.querySelectorAll('.address-items ul li');
for(var i = 0; i < addressItem.length; i++){
    addressItem[i].addEventListener('click', function(){
        showAddressChoosed.innerText = this.innerText;
    })
}

var showLinkChoosed = document.querySelector('.choose-links h3');
var linkItem = document.querySelectorAll('.links-search ul li');
for(var i = 0; i < linkItem.length; i++){
    linkItem[i].addEventListener('click', function(){
        showLinkChoosed.innerText = this.innerText;
    })
}


// hàm lọc kết quả

var inputFilterCourse = document.getElementById('find-course');
function onFilter(){
    var filter = inputFilterCourse.value.toUpperCase();
    var courseList = document.querySelector('.course-items ul');
    var li = courseList.getElementsByTagName('li');
    if(!filter){
        courseList.style.display = 'block';
    }else{
        for(var i = 0; i < li.length; i++){
            var a = li[i].getElementsByTagName('span')[0];
            if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
                courseList.style.display = 'block';
               li[i].style.display = '';
            }else{
               li[i].style.display = 'none';
            }
        }
    }
}
inputFilterCourse.addEventListener('keyup', onFilter);

var inputFilterAddress = document.getElementById('find-address');
function onFilterAddress(){
    var filter = inputFilterAddress.value.toUpperCase();
    var addressList = document.querySelector('.address-items ul');
    var li = addressList.getElementsByTagName('li');
    if(!filter){
        addressList.style.display = 'block';
    }else{
        for(var i = 0; i < li.length; i++){
            var a = li[i].getElementsByTagName('span')[0];
            if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
                addressList.style.display = 'block';
                li[i].style.display = '';
            }else{
                li[i].style.display = 'none';
            }
        }
    }
}
inputFilterAddress.addEventListener('keyup', onFilterAddress);


var inputLinkSearch = document.querySelector('.links-search input');
function onFilterLink(){
    var filter = inputLinkSearch.value.toUpperCase();
    var addressList = document.querySelector('.links-search ul');
    var li = addressList.getElementsByTagName('li');
    if(!filter){
        addressList.style.display = 'block';
    }else{
        for(var i = 0; i < li.length; i++){
            var a = li[i].getElementsByTagName('span')[0];
            if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
                addressList.style.display = 'block';
                li[i].style.display = '';
            }else{
                li[i].style.display = 'none';
            }
        }
    }
}
inputLinkSearch.addEventListener('keyup', onFilterLink);

