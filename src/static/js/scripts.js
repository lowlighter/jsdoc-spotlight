$(function () {
    //Actualisation du menu
        let page = $("main > header > h1").text() ;
        let id = `#menu-${page}` ;
        $(id).addClass("selected") ;

    //Ajout des membres dans le menu
        let ul = $("<ul>").addClass("shortcuts").insertAfter(id)
        $(".members[id]").each(function () {
            let i = $(this).attr("id")
            let text = (i == `member-${page}`) ? 'constructor<span class="mt-indicator">()</span>' : i.replace("member-", "")+($(this).children("header").attr("class") == "function" ? '<span class="mt-indicator">()</span>' : "")
            $("<li>").append($("<a>").attr("href", `#${i}`).html(text)).appendTo(ul)
        }) ;

    //Adding links
        $("aside li a").each(function () { $(this).parent().click(() => { window.location.replace($(this).attr("href")) }) })
    //Responsive menu
        $("aside > header").click(function () { $("aside").toggleClass("extended") })

    //
        if (/[^/]+$/i.test(window.location.href)) { $("pre:has(code)").wrap("<div class='card examples'></div>") }
})
