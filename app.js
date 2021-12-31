        let preguntas_aleatorias = false;
        let mostrar_pantalla_juego_terminado = true;
        let reiniciar_puntos_al_reiniciar_el_juego = true;

        window.onload = function () {
            base_preguntas1 = readText("baseDatos.json");
            interprete_bp1 = JSON.parse(base_preguntas1);
            escogerPreguntaAleatoria();
        }
        
        let pregunta;
        let posibles_respuestas;
        let btn_correspondiente = [
            select_id("btn1"), 
            select_id("btn2"), 
            select_id("btn3"), 
            select_id("btn4")
        ];
        let npreguntas = [];

        let preguntas_hechas = 0;
        let preguntas_correctas = 0;
        let valor = 0;

        

        //Hace aleatorias las preguntas
        function escogerPreguntaAleatoria(){
            let n;
            if (preguntas_aleatorias){
                n = Math.floor(Math.random() * interprete_bp1.length);
            }else {
                n = 0;
            }
        
            while (npreguntas.includes(n)) { //cambié n por n-20
                n++;
                if(n > 25) { // cambié interprete_bp1.length por 5
                    n=0;
                }
                if ( n == 10) {
                    //Iniciar en pregunta 1
                    pregunta = pregunta[0];
                    //Pantalla de juego terminado
                    if( mostrar_pantalla_juego_terminado) {
                        function swal(){
                            swal
                        .fire({
                            title: "Juego finalizado",
                            text:
                            "Puntuación: " + preguntas_correctas + "/" + preguntas_hechas + "   Dinero: " + 
                        + valor
                        });
                        //En esta parte se reinicia el juego
                        preguntas_hechas = 0;
                        preguntas_correctas = 0;
                        valor = 0;
                        return npreguntas = [];
                        }
                        
                    }

                    n++;

                    
                }
            }
            npreguntas.push(n);
            preguntas_hechas++;

            escogerPregunta(n);        
        }

        function escogerPregunta(n) {
            pregunta = interprete_bp1[n];
            select_id("ronda").innerHTML = pregunta.ronda;
            select_id("categoria").innerHTML = pregunta.categoria;
            select_id("pregunta").innerHTML = pregunta.pregunta;
            select_id("numero").innerHTML = n;
            
            let pc = preguntas_correctas;

            //Incrementa puntaje y dinero
            if (preguntas_hechas > 1){
                select_id("puntaje").innerHTML = pc + "/" + (preguntas_hechas - 1);
            }else {
                select_id("puntaje").innerHTML = "";
            }


            
            if(preguntas_hechas > 12 && preguntas_hechas < 20){
                //Iniciar en pregunta 1
                pregunta[10];
                //Función escogerPreguntaAleatoria2
                    function escogerPreguntaAleatoria(){
                        let n;
                        if (preguntas_aleatorias){
                            n = Math.floor(Math.random() * interprete_bp1.length);
                        }else {
                            n = 0;
                        }
                    
            
                        while (npreguntas.includes(n)) { //cambié n por n-20
                            n++;
                            if(n > 12) { // cambié interprete_bp1.length por 5
                                n = 0;
                            }
                            if (pregunta == pregunta[12]) {
                                
                                //Iniciar en pregunta 6
                                npreguntas[10];
                                //Pantalla de juego terminado
                                if( mostrar_pantalla_juego_terminado) {
                                    swal();
                                }
                                //En esta parte se reinicia el juego
                                preguntas_hechas = 0;
                                preguntas_correctas = 0;
                                valor = 0;
                                
                            }
                        }
                        npreguntas.push(n);
                        preguntas_hechas++;
            
                        escogerPregunta(n);        
                    }

                //Pantalla de juego terminado
                
            }

            if (preguntas_correctas > 0){
                select_id("dinero").innerHTML = "$" + (valor += 100);
            }else {
                select_id("dinero").innerHTML = "";
            }

            style("imagen").objectFit = pregunta.objectFit;
            desordenarRespuestas(pregunta);
            if(pregunta.imagen) {
                select_id("imagen").setAttribute("src", pregunta.imagen);
                style("imagen").height = "200px";
                style("imagen").width = "100%";
            } else {
                style("imagen").height = "0px";
                style("imagen").width = "0px";
                setTimeout(() => {
                    select_id("imagen").setAttribute("src", "");
                }, 500);
            }
        }

        
            
        function desordenarRespuestas(pregunta){
            posibles_respuestas = [
                pregunta.respuesta, 
                pregunta.incorrecta1, 
                pregunta.incorrecta2, 
                pregunta.incorrecta3,
            ];
            posibles_respuestas.sort(()=> Math.random()-0.5);

            select_id("btn1").innerHTML = posibles_respuestas[0]
            select_id("btn2").innerHTML = posibles_respuestas[1]
            select_id("btn3").innerHTML = posibles_respuestas[2]
            select_id("btn4").innerHTML = posibles_respuestas[3]
        }

        let suspender_botones = false;

        function oprimir_btn(i){
            if (suspender_botones) {
                return;
            }
            suspender_botones = true;
            if(posibles_respuestas[i] == pregunta.respuesta){
                preguntas_correctas++;
                btn_correspondiente[i].style.background = "yellowgreen"
            }else{
                btn_correspondiente[i].style.background ="red"
                preguntas_hechas = 0;
                preguntas_correctas = 0;
                valor = 0;
                //Iniciar en pregunta 1
                if(npreguntas > 0 && npreguntas < 5){
                    pregunta = pregunta[0];
                    swal();
                }else if(npreguntas >= 5 && npreguntas < 10){
                    pregunta = pregunta[5];
                    swal();
                }else if(npreguntas >= 10 && npreguntas < 15){
                    pregunta = pregunta[10];
                    swal();
                }else if(npreguntas >= 15 && npreguntas < 20){
                    pregunta = pregunta[15];
                    swal();
                }else if(npreguntas >= 20 && npreguntas < 25){
                    pregunta = pregunta[20];
                    swal();
                }
                
                //Alert que finaliza el juego
                swal();
                }
                


            for(let j = 0; j < 4; j++) {
                if(posibles_respuestas[j] == pregunta.respuesta){
                    btn_correspondiente[j].style.background = "yellowgreen";
                    break;
                }
            }
            setTimeout(() => {
                reiniciar();
                suspender_botones = false;
            }, 1500);
        }

        function reiniciar(){
            for (const btn of btn_correspondiente){
                btn.style.background = "white"
            }
            escogerPreguntaAleatoria()
        }

        function select_id(id) {
            return document.getElementById(id)
        }

        function style(id) {
            return select_id(id).style
        }

        function readText(ruta_local) {
            var texto = null;
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", ruta_local, false);
            xmlhttp.send();
            if(xmlhttp.status == 200) {
                texto = xmlhttp.responseText;
            }
            return texto;
        }