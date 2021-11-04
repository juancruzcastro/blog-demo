$(document).ready(function(){

    // Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        caption: true,
        slideWidth: 1200,
        responsive: true
    });

    // Posts
    var posts = [
        {
            title: 'Prueba de título 1',
            date: 'Publicado el día '+moment().date()+' de '+moment().format("MMM")+' del '+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil, itaque ut nemo natus corrupti, minima aliquam debitis quae sint quisquam! Possimus, explicabo distinctio eos sint accusantium voluptates nesciunt ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illum molestias facere autem, minus saepe blanditiis dolorum laboriosam doloremque alias adipisci nulla non iure neque culpa, doloribus odit? Amet, impedit!'
        },
        {
            title: 'Prueba de título 2',
            date: 'Publicado el día '+moment().date()+' de '+moment().format("MMM")+' del '+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil, itaque ut nemo natus corrupti, minima aliquam debitis quae sint quisquam! Possimus, explicabo distinctio eos sint accusantium voluptates nesciunt ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illum molestias facere autem, minus saepe blanditiis dolorum laboriosam doloremque alias adipisci nulla non iure neque culpa, doloribus odit? Amet, impedit!'
        },
        {
            title: 'Prueba de título 3',
            date: 'Publicado el día '+moment().date()+' de '+moment().format("MMM")+' del '+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil, itaque ut nemo natus corrupti, minima aliquam debitis quae sint quisquam! Possimus, explicabo distinctio eos sint accusantium voluptates nesciunt ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illum molestias facere autem, minus saepe blanditiis dolorum laboriosam doloremque alias adipisci nulla non iure neque culpa, doloribus odit? Amet, impedit!'
        },
        {
            title: 'Prueba de título 4',
            date: 'Publicado el día '+moment().date()+' de '+moment().format("MMM")+' del '+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil, itaque ut nemo natus corrupti, minima aliquam debitis quae sint quisquam! Possimus, explicabo distinctio eos sint accusantium voluptates nesciunt ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illum molestias facere autem, minus saepe blanditiis dolorum laboriosam doloremque alias adipisci nulla non iure neque culpa, doloribus odit? Amet, impedit!'
        },
        {
            title: 'Prueba de título 5',
            date: 'Publicado el día '+moment().date()+' de '+moment().format("MMM")+' del '+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil, itaque ut nemo natus corrupti, minima aliquam debitis quae sint quisquam! Possimus, explicabo distinctio eos sint accusantium voluptates nesciunt ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illum molestias facere autem, minus saepe blanditiis dolorum laboriosam doloremque alias adipisci nulla non iure neque culpa, doloribus odit? Amet, impedit!'
        },
        {
            title: 'Prueba de título 6',
            date: 'Publicado el día '+moment().date()+' de '+moment().format("MMM")+' del '+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nihil, itaque ut nemo natus corrupti, minima aliquam debitis quae sint quisquam! Possimus, explicabo distinctio eos sint accusantium voluptates nesciunt ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illum molestias facere autem, minus saepe blanditiis dolorum laboriosam doloremque alias adipisci nulla non iure neque culpa, doloribus odit? Amet, impedit!'
        }
    ];

    posts.forEach((item) => {
        var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button-more">Leer más</a>
                </article>`;

        $('#posts').append(post);
    });

    //Selector de temas
    var theme = $('#theme');

    $('#to-green').click(function(){
        theme.attr('href', "css/green.css");
    })

    $('#to-red').click(function(){
        theme.attr('href', "css/red.css");
    })

    $('#to-blue').click(function(){
        theme.attr('href', "css/blue.css");
    })

});