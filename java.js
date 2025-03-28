let titulo = "Vale do Anahangabaú: História do Local";
        let indice = 0;

        function rolarTitulo() {
            // Define o título exibido como uma parte do texto original
            document.title = titulo.substring(indice) + " | " + titulo.substring(0, indice);
            indice = (indice + 1) % titulo.length; // Avança o índice, reiniciando ao final
        }

        // Atualiza o título a cada intervalo de tempo
        setInterval(rolarTitulo, 600); 