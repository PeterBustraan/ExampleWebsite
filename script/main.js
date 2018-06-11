$(document).ready(()=> {
    let target = $('#dynamicLoad')

    $("a").click( (event) => {
        //Prevent Links From going places
            event.preventDefault();
        //Simple Ajax Page Loader
            let $this = $(event.target),
                page  = $this.attr('href')
            console.log(page)
            target.load(page + ' #dynamicLoad>*')
    });
})