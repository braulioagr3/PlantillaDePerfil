$(document).ready
(
    function()
    {
        $('.secciones article').hide(); //Se ocultan todos los articulos
        $('.secciones article:first').show(); //Se muestra el primer articulo
        $('ul.button li a').click//Se manda llamar al evento en caso de que se de click a un elemento de la lista
        (
            function()
            {
                var activeTab;
                $('.secciones article').hide();//Se ocultan todos los articulos
                activeTab = $(this).attr('href');//Se obtiene el id al que esta referenciado
                $(activeTab).show();//Se muestra el articulo al cual se hace referencia        
                return false;
            }
        );
    }
);