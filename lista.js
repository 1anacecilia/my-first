<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <title>Añadir y eliminar elementos li de una lista desordenada (ul) con javascript</title>
        <style>
            li span {
                color:#fff;
                border:1px solid #ccc;
                background-color:#808080;
                margin-right:10px;
                padding: 0 2px;
                border-radius:4px;
                -moz-border-radius:4px;
                -webkit-border-radius:4px;
                -o-border-radius:4px;
                border-radius:4px;
                font-weight:bold;
                font-size:0.8em;
                cursor:pointer;
            }
        </style>
 
        <script>
        // http://www.lawebdelprogramador.com
 
        /**
         * Funcion que añade un <li> dentro del <ul>
         */
        function add_li()
        {
            var nuevoLi=document.getElementById("nuevo_li").value;
            if(nuevoLi.length>0)
            {
                if(find_li(nuevoLi))
                {
                    var li=document.createElement('li');
                    li.id=nuevoLi;
                    li.innerHTML="<span onclick='eliminar(this)'>X</span>"+nuevoLi;
                    document.getElementById("listaDesordenada").appendChild(li);
                }
            }
            return false;
        }
 
        /**
         * Funcion que busca si existe ya el <li> dentrol del <ul>
         * Devuelve true si no existe.
         */
        function find_li(contenido)
        {
            var el = document.getElementById("listaDesordenada").getElementsByTagName("li");
            for (var i=0; i<el.length; i++)
            {
                if(el[i].innerHTML==contenido)
                    return false;
            }
            return true;
        }
 
        /**
         * Funcion para eliminar los elementos
         * Tiene que recibir el elemento pulsado
         */
        function eliminar(elemento)
        {
            var id=elemento.parentNode.getAttribute("id");
            node=document.getElementById(id);
            node.parentNode.removeChild(node);
        }
    </script>
    </head>
 
    <body>
        <h1>Añadir y eliminar elementos li de una lista desordenada ul con javascript</h1>
        <p>
            <form>
                <input type="text" id="nuevo_li">
                <br><input type="submit" onclick="return add_li()" value="añadir li">
            </form>
        </p>
        <ul id="listaDesordenada">
        </ul>
    </body>
</html>
