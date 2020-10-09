function pointTo(anchor)
{
    window.location.href = anchor;
}

window.onload = (event) =>
{
    if (window.innerWidth < 768) 
    {
        return;
    }

    navbar = document.getElementsByClassName("navbar")[0];
    navbar.style.display = "none";
}

$(window).scroll(() => 
{
    hideOnTop("navbar");
});

function hideOnTop(className)
{
    if (window.innerWidth < 768) 
    {
        return;
    }

    var scroll = $(window).scrollTop();
    navbar = document.getElementsByClassName(className)[0];
    if (scroll > window.innerHeight - (window.innerHeight * 0.5))
    {
        navbar.style.display = "block";
    }
    else
    {
        navbar.style.display = "none";
    }
}