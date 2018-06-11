$(document).ready(()=> {
    let target = $('#dynamicLoad')

    $("a").click( (event) => {
        //Prevent Links From going places
            event.preventDefault();
        //Simple Ajax Page Loader
            let $this = $(event.target),
                page  = $this.attr('href'),
                title = $this.text()
        //Simple URL Fixer
            if (page == '/index') page = '/';
            target.load(page + ' #dynamicLoad>*')
        //Make For Usefull URLS
            window.history.pushState('', title , page);
    });
})