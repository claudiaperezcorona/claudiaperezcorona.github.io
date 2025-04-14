
let semanaActiva = "";

// Función para generar rutas de video
function get_videos_path(day, videoName) {
    const hostname = window.location.hostname;
    if (hostname.includes('github.io')) {
        // Ruta para GitHub Pages 
        return `https://raw.githubusercontent.com/claudiaperezcorona/claudiaperezcorona.github.io/main/assets/videos/${day}/${videoName}`;
    } else {
        // Ruta para entorno local
        return `./assets/videos/${day}/${videoName}`;
    }
}

// Función para generar rutas de imagenes
function get_image_path(day, imagesName) {
    const hostname = window.location.hostname;
    if (hostname.includes('github.io')) {
        // Ruta para GitHub Pages 
        return `https://raw.githubusercontent.com/claudiaperezcorona/claudiaperezcorona.github.io/main/assets/images/${day}/${imagesName}`;
    } else {
        // Ruta para entorno local
        return `./assets/images/${day}/${imagesName}`;
    }
}

function mostrarDias(semana) {
    semanaActiva = semana;
    document.getElementById("semanas").style.display = "none";
    document.getElementById("dias-semana1").style.display = "none";
    document.getElementById("dias-semana2").style.display = "none";
    document.getElementById("entrenamiento").style.display = "none";

    if (semana === "semana1") {
        document.getElementById("dias-semana1").style.display = "block";
    } else if (semana === "semana2") {
        document.getElementById("dias-semana2").style.display = "block";
    }
}

function mostrarEntrenamiento(dia) {
    const dias = {
        lunes1: {
            titulo: "LUNES - SEMANA 1",
            contenido: `
            <div id="contenido-entrenamiento">
            <!-- Calentamiento -->
            <div class="grupo-muscular calentamiento">
                <h4>CALENTAMIENTO</h4>
                <div class="ejercicio">
                    <input type="checkbox" id="lunes1-ej1" onchange="tacharEjercicio('lunes1-ej1')" />
                    <label for="lunes1-ej1"><strong>Calentamiento Manguito Rotador</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('lunes', 'manguito_rotador.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Series:</strong> 2 series.</p>
                    <p><strong>Reps:</strong> 10 - 15 repeticiones.</p>
                    <p><strong>Descripción:</strong> Activación SIN fatigar</p>
                    <blockquote>
                        “Cuando haces trabajo de <strong>rotación externa</strong> antes de hacer press de banca, calientas el hombro <strong>más eficazmente</strong> y ayudas a <strong>despertar el manguito rotador</strong>, que es muy importante preparar antes de hacer press de banca."
                    </blockquote>
                    <p>
                        <strong>🔎 ¿Por qué?</strong><br />
                        Porque el <strong>manguito rotador</strong> es el encargado de <strong>mantener la cabeza del húmero centrada</strong> en la articulación. Si no está activo, la cabeza del húmero se desplaza y puede causar molestias o lesiones al hacer el press.
                    </p>
                    <p><strong>Clave:</strong> Se hacen solo 1 o 2 series <strong>submáximas</strong> para activarlo sin fatigarlo, porque si se cansa, <strong>no podrá estabilizar</strong> el hombro durante el press.</p>
                </details>
            </div>

            <!-- Pecho -->
            <div class="grupo-muscular pecho">
                <h4>PECHO</h4>
                <div class="ejercicio">
                    <input type="checkbox" id="lunes1-ej2" onchange="tacharEjercicio('lunes1-ej2')" />
                    <label for="lunes1-ej2"><strong>Press Inclinado con Mancuernas (Thumbs Up)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('lunes', 'press_inclinado.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Series:</strong> 3 series.</p>
                    <p><strong>Reps:</strong> 8-10 repeticiones.</p>
                    <p><strong>Zona del Pecho:</strong> Superior</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Pulgares mirando hacia arriba.</li>
                        <li>Acerca los brazos entre sí en la parte alta del movimiento para una mayor contracción muscular.</li>
                    </ul>
                </details>
                <div class="ejercicio">
                    <input type="checkbox" id="lunes1-ej3" onchange="tacharEjercicio('lunes1-ej3')" />
                    <label for="lunes1-ej3"><strong>Press de Cable con Parciales (Cable Crossover)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('lunes', 'cable_crossover.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Series:</strong> 3 series.</p>
                    <p><strong>Reps:</strong> 8-10 + parciales.</p>
                    <p><strong>Zona del Pecho:</strong> Media</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Inclínate adelante al abrir los brazos y atrás cuando los brazos se crucen frente al cuerpo.</li>
                        <li>Esto excluye el trabajo del hombro, colocando énfasis total en el pecho.</li>
                        <li>Realiza repeticiones parciales en la posición más elongada para enfatizar la tensión.</li>
                    </ul>
                </details>
                <div class="ejercicio">
                    <input type="checkbox" id="lunes1-ej4" onchange="tacharEjercicio('lunes1-ej4')" />
                    <label for="lunes1-ej4"><strong>Fondos en Paralelas con Escalera 1.5 Reps (Dip Ladder)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('lunes', 'dip_ladder.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Series:</strong> 1 serie (al fallo).</p>
                    <p><strong>Zona del Pecho:</strong> Inferior</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Baja lentamente hasta una posición cómoda, sin llevar los codos muy atrás del cuerpo.</li>
                        <li>Realiza media repetición, sube, y luego baja completamente; esto cuenta como una repetición.</li>
                        <li>Mantén 1 segundo abajo en la primera repetición, 2 segundos en la segunda, incrementando progresivamente.</li>
                    </ul>
                </details>
                <div class="ejercicio">
                    <input type="checkbox" id="lunes1-ej5" onchange="tacharEjercicio('lunes1-ej5')" />
                    <label for="lunes1-ej5"><strong>Flexiones Déficit 1.5 Rep Pushup Ladder</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('lunes', 'flexiones_deficit.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Series:</strong> 1 serie (al fallo).</p>
                    <p><strong>Zona del Pecho:</strong> Media e inferior</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Coloca las manos sobre plataformas para aumentar el rango de movimiento.</li>
                        <li>Realiza media repetición, sube, luego baja completamente para una repetición.</li>
                        <li>Incrementa el tiempo de pausa en la parte baja (1 segundo en la primera repetición, 2 segundos en la segunda, etc.).</li>
                    </ul>
                </details>
            </div>

            <!-- Hombros -->
            <div class="grupo-muscular hombros">
                <h4>HOMBROS</h4>
                <div class="triserie">
                    <div class="ejercicio">
                        <input type="checkbox" id="lunes1-ej6" onchange="tacharEjercicio('lunes1-ej6')" />
                        <label for="lunes1-ej6"><strong>Press Militar de Pie</strong></label>
                    </div>
                    <div class="ejercicio">
                        <input type="checkbox" id="lunes1-ej7" onchange="tacharEjercicio('lunes1-ej7')" />
                        <label for="lunes1-ej7"><strong>Press Unilateral de Pie</strong></label>
                    </div>
                    <div class="ejercicio">
                        <input type="checkbox" id="lunes1-ej8" onchange="tacharEjercicio('lunes1-ej8')" />
                        <label for="lunes1-ej8"><strong>Push Press con Mancuernas</strong></label>
                    </div>
                    <details>
                        <summary>Detalles de la Triserie</summary>
                        <p><strong>Series:</strong> 3 series (los tres ejercicios seguidos sin descanso)</p>
                        <p><strong>Reps Press Militar:</strong> 10 repeticiones</p>
                        <p><strong>Reps Press Unilateral:</strong> 6 repeticiones</p>
                        <p><strong>Reps Push Press:</strong> 8 repeticiones</p>
                        <p><strong>Video Press Militar de Pie:</strong></p>
                        <video controls width="320" height="240">
                            <source src="${get_videos_path('lunes', 'press_militar_pie.mp4')}" type="video/mp4" />
                            Tu navegador no soporta la reproducción de videos.
                        </video>
                        <p><strong>Ejecución Press Militar:</strong></p>
                        <ul>
                            <li>Usa peso elevado, realiza el press por encima de la cabeza sin respaldo.</li>
                            <li>Mantén control total del movimiento.</li>
                        </ul>
                        <p><strong>Video Press Unilateral de Pie:</strong></p>
                        <video controls width="320" height="240">
                            <source src="${get_videos_path('lunes', 'press_unilateral.mp4')}" type="video/mp4" />
                            Tu navegador no soporta la reproducción de videos.
                        </video>
                        <p><strong>Ejecución Press Unilateral:</strong></p>
                        <ul>
                            <li>Realiza el movimiento alternando cada brazo, mantén el core activado.</li>
                            <li>Mejora equilibrio y trabaja asimetrías.</li>
                        </ul>
                        <p><strong>Video Push Press con Mancuernas:</strong></p>
                        <video controls width="320" height="240">
                            <source src="${get_videos_path('lunes', 'push_press_mancuernas.mp4')}" type="video/mp4" />
                            Tu navegador no soporta la reproducción de videos.
                        </video>
                        <p><strong>Ejecución Push Press:</strong></p>
                        <ul>
                            <li>Usa un ligero impulso de piernas para elevar mancuernas.</li>
                            <li>Aprovecha la explosividad del movimiento para manejar pesos mayores.</li>
                        </ul>
                        <p><strong>Descripción:</strong> Realiza el Press Militar de Pie, seguido inmediatamente por el Press Unilateral de Pie, y termina con el Push Press con Mancuernas. Descansa después de completar los tres ejercicios.</p>
                    </details>
                </div>
            </div>

            <!-- Tríceps -->
            <div class="grupo-muscular triceps">
                <h4><td class="grupo-muscular triceps">
                    <h4>TRÍCEPS</h4>
                    <div class="ejercicio">
                        <input type="checkbox" id="lunes1-ej9" onchange="tacharEjercicio('lunes1-ej9')" />
                        <label for="lunes1-ej9"><strong>Jalón con Rotación para Tríceps (Polea con Barra)</strong></label>
                    </div>
                    <details>
                        <summary>Detalles</summary>
                        <p>Video:</p>
                        <video controls width="320" height="240">
                            <source src="${get_videos_path('lunes', 'jalon_rotacion_triceps.mp4')}" type="video/mp4" />
                            Tu navegador no soporta la reproducción de videos.
                        </video>
                        <p><strong>Series:</strong> 2 series</p>
                        <p><strong>Reps:</strong> 8 repeticiones</p>
                        <p Robin Hood for this particular tale is a bit different from the standard outlaw who stole from the rich and gave to the poor. <strong>Zona del Tríceps:</strong> Cabeza larga (énfasis en contracción y rango extendido)</p>
                        <p><strong>Ejecución:</strong></p>
                        <ul>
                            <li>Desde la posición inicial de un jalón clásico en polea, realiza un movimiento descendente controlado.</li>
                            <li>Al llegar al punto bajo del movimiento, realiza una rotación llevando el brazo hacia atrás del cuerpo, enfatizando la contracción total del tríceps.</li>
                            <li>Esta variación aumenta considerablemente el rango de movimiento y estimula intensamente la cabeza larga del músculo, mejorando tanto la fuerza como el desarrollo estético.</li>
                        </ul>
                    </details>
                </div>
            </div>
        </div>
            `
        },
        martes1: {
            titulo: "MARTES - SEMANA 1",
            contenido: `
                        <div id="contenido-entrenamiento">
                        <!-- Cuádriceps -->
                        <div class="grupo-muscular cuadriceps">
                            <h4>CUÁDRICEPS</h4>
                            <div class="ejercicio">
                                <input type="checkbox" id="martes1-ej1" onchange="tacharEjercicio('martes1-ej1')" />
                                <label for="martes1-ej1"><strong>Sentadilla Búlgara con Mancuerna</strong></label>
                            </div>
                            <details>
                                <summary>Detalles</summary>
                                <p>Video:</p>
                                <video controls width="320" height="240">
                                    <source src="${get_videos_path('martes', 'sentadilla_bulgara.mp4')}" type="video/mp4" />
                                    Tu navegador no soporta la reproducción de videos.
                                </video>
                                <p><strong>Series:</strong> 4 series</p>
                                <p><strong>Reps:</strong> 6 repeticiones por pierna</p>
                                <p><strong>Descripción:</strong> Trabajo unilateral intenso. Mantén el torso levemente inclinado para más glúteo.</p>
                            </details>
                            <div class="ejercicio">
                                <input type="checkbox" id="martes1-ej2" onchange="tacharEjercicio('martes1-ej2')" />
                                <label for="martes1-ej2"><strong>Extensiones de Cuádriceps</strong></label>
                            </div>
                            <details>
                                <summary>Detalles</summary>
                                <p>Video:</p>
                                <video controls width="320" height="240">
                                    <source src="${get_videos_path('martes', 'extensiones_cuadriceps.mp4')}" type="video/mp4" />
                                    Tu navegador no soporta la reproducción de videos.
                                </video>
                                <p><strong>Series:</strong> 4 series</p>
                                <p><strong>Reps:</strong> 10+10 repeticiones</p>
                                <p><strong>Descripción:</strong> 10 reps con puntas hacia afuera, 10 al frente. Enfócate en el tiempo bajo tensión.</p>
                            </details>
                        </div>
                    </div>
                    `
        },
        miercoles1: {
            titulo: "MIÉRCOLES - SEMANA 1",
            contenido: `
                        <div id="contenido-entrenamiento">
                        <!-- Espalda -->
                        <div class="grupo-muscular espalda">
                            <h4>ESPALDA</h4>
                            <div class="ejercicio">
                                <input type="checkbox" id="miercoles1-ej1" onchange="tacharEjercicio('miercoles1-ej1')" />
                                <label for="miercoles1-ej1"><strong>Remo Muerto Explosivo con Barra</strong></label>
                            </div>
                            <details>
                                <summary>Detalles</summary>
                                <p>Video:</p>
                                <video controls width="320" height="240">
                                    <source src="${get_videos_path('miercoles', 'remo_muerto_explosivo.mp4')}" type="video/mp4" />
                                    Tu navegador no soporta la reproducción de videos.
                                </video>
                                <p><strong>Series:</strong> 3 series</p>
                                <p><strong>Reps:</strong> 8-10 repeticiones</p>
                                <p><strong>Descripción:</strong> Desarrolla potencia y explosividad. Refuerza la parte media de la espalda.</p>
                            </details>
                        </div>
                    </div>
                    `
        },
        jueves1: {
            titulo: "JUEVES - SEMANA 1",
            contenido: `
                        <div id="contenido-entrenamiento">
                        <!-- Pecho -->
                        <div class="grupo-muscular pecho">
                            <h4>PECHO</h4>
                            <div class="ejercicio">
                                <input type="checkbox" id="jueves1-ej1" onchange="tacharEjercicio('jueves1-ej1')" />
                                <label for="jueves1-ej1"><strong>Press de Banca Plano con Mancuernas</strong></label>
                            </div>
                            <details>
                                <summary>Detalles</summary>
                                <p>Video:</p>
                                <video controls width="320" height="240">
                                    <source src="${get_videos_path('jueves', 'press_banca_plano.mp4')}" type="video/mp4" />
                                    Tu navegador no soporta la reproducción de videos.
                                </video>
                                <p><strong>Series:</strong> 3 series</p>
                                <p><strong>Reps:</strong> 5-8 repeticiones</p>
                                <p><strong>Descripción:</strong> Enfócate en el pectoral medio. Carga pesada para fuerza y masa muscular.</p>
                            </details>
                        </div>
                    </div>
                    `
        },
        viernes1: {
            titulo: "VIERNES - SEMANA 1",
            contenido: `
                        <div id="contenido-entrenamiento">
                        <!-- Espalda -->
                        <div class="grupo-muscular espalda">
                            <h4>ESPALDA</h4>
                            <div class="ejercicio">
                                <input type="checkbox" id="viernes1-ej1" onchange="tacharEjercicio('viernes1-ej1')" />
                                <label for="viernes1-ej1"><strong>Remo con Barra</strong></label>
                            </div>
                            <details>
                                <summary>Detalles</summary>
                                <p>Video:</p>
                                <video controls width="320" height="240">
                                    <source src="${get_videos_path('viernes', 'remo_con_barra.mp4')}" type="video/mp4" />
                                    Tu navegador no soporta la reproducción de videos.
                                </video>
                                <p><strong>Series:</strong> 1 serie</p>
                                <p><strong>Reps:</strong> 20 repeticiones efectivas</p>
                                <p><strong>Descripción:</strong> Usa impulso desde abajo. Trabaja dorsales, trapecio medio y romboides.</p>
                            </details>
                        </div>
                    </div>
                    `
        },
        lunes2: {
            titulo: "LUNES - SEMANA 2",
            contenido: `
                <div id="contenido-entrenamiento">
                    <!-- Calentamiento -->
                    <div class="grupo-muscular calentamiento">
                        <h4>CALENTAMIENTO</h4>
                        <div class="ejercicio">
                            <input type="checkbox" id="lunes2-ej1" onchange="tacharEjercicio('lunes2-ej1')" />
                            <label for="lunes2-ej1"><strong>Jalón de Escápulas</strong></label>
                        </div>
                        <details>
                            <summary>Detalles</summary>
                            <p>Video:</p>
                            <video controls width="320" height="240">
                                <source src="${get_videos_path('lunes', 'scap_pulldown_primer.mp4')}" type="video/mp4" />
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                            <p><strong>Series:</strong> 1-2 series.</p>
                            <p><strong>Reps:</strong> 10-15 repeticiones (submáximo).</p>
                            <p><strong>Qué parte de la espalda trabaja:</strong> Principalmente la cintura escapular, incluyendo los músculos que controlan el movimiento de los omóplatos y también prepara la articulación del hombro.</p>
                            <p><strong>Cómo se hace el ejercicio:</strong> En una máquina de jalones, con una carga ligera, se realizan una o dos series de 10 a 15 repeticiones de forma submáxima. La primera parte consiste en mantener los codos bloqueados y simplemente jalar la barra hacia abajo unos centímetros, enfocándose en el movimiento de las escápulas. La segunda parte es realizar un jalón de dorsales con rango de movimiento completo, llevando los hombros a una flexión alta y luego en extensión detrás del cuerpo.</p>
                        </details>
                    </div>
        
                    <!-- Espalda -->
                    <div class="grupo-muscular espalda">
                        <h4>ESPALDA</h4>
                        <div class="ejercicio">
                            <input type="checkbox" id="lunes2-ej2" onchange="tacharEjercicio('lunes2-ej2')" />
                            <label for="lunes2-ej2"><strong>Remo Sentado con Cable (codos abiertos)</strong></label>
                        </div>
                        <details>
                            <summary>Detalles</summary>
                            <p>Video:</p>
                            <video controls width="320" height="240">
                                <source src="${get_videos_path('lunes', 'seated_cable_rows(wide).mp4')}" type="video/mp4" />
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                            <p><strong>Series:</strong> 3 series.</p>
                            <p><strong>Reps:</strong> 6-8 repeticiones al fallo.</p>
                            <p><strong>Qué parte de la espalda trabaja:</strong> Principalmente los músculos de la espalda superior y los deltoides posteriores.</p>
                            <p><strong>Cómo se hace el ejercicio:</strong> Siéntate en la máquina de remo con cable y utiliza un agarre que te permita mantener los codos anchos durante el movimiento de remo. Es importante usar suficiente peso para sentir la tensión y realizar las repeticiones lentamente. La serie termina cuando la forma comienza a deteriorarse.</p>
                            <p><strong>Por qué es importante este ejercicio:</strong> Permite trabajar la espalda superior y los deltoides posteriores con una carga significativa, lo cual es importante para estimular su crecimiento. Este ejercicio trabaja los deltoides posteriores de una manera a la que quizás no estén acostumbrados con ejercicios específicos para esa zona.</p>
                        </details>
        
                        <div class="ejercicio">
                            <input type="checkbox" id="lunes2-ej3" onchange="tacharEjercicio('lunes2-ej3')" />
                            <label for="lunes2-ej3"><strong>Jalones de Polea (agarre estrecho)</strong></label>
                        </div>
                        <details>
                            <summary>Detalles</summary>
                            <p>Video:</p>
                            <video controls width="320" height="240">
                                <source src="${get_videos_path('lunes', 'lat_pulldowns(narrow_grip).mp4')}" type="video/mp4" />
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                            <p><strong>Series:</strong> 3 series.</p>
                            <p><strong>Reps:</strong> 10-12 repeticiones + parciales.</p>
                            <p><strong>Qué parte de la espalda trabaja:</strong> Principalmente los dorsales (latissimus dorsi).</p>
                            <p><strong>Cómo se hace el ejercicio:</strong> Utiliza un agarre estrecho en la barra de jalones (se sugiere usar una barra para tríceps) y saca los codos frente al cuerpo para lograr un mayor estiramiento en los dorsales en cada repetición. Realiza dos a tres series hasta el fallo en el rango de 10 a 12 repeticiones. Después de alcanzar el fallo, realiza algunas repeticiones parciales en la parte superior del movimiento (posición de estiramiento) hasta que no puedas hacer más.</p>
                            <p><strong>Por qué es importante este ejercicio:</strong> Al estrechar el agarre, se involucran más los dorsales y se logra un mayor estiramiento de este músculo. Las repeticiones parciales al final de la serie aseguran que se llegue al fallo completo, maximizando el estímulo para el crecimiento.</p>
                        </details>
        
                        <div class="ejercicio">
                            <input type="checkbox" id="lunes2-ej4" onchange="tacharEjercicio('lunes2-ej4')" />
                            <label for="lunes2-ej4"><strong>Jalones con Brazos Rectos</strong></label>
                        </div>
                        <details>
                            <summary>Detalles</summary>
                            <p>Video:</p>
                            <video controls width="320" height="240">
                                <source src="${get_videos_path('lunes', 'straight_arm_pulldowns.mp4')}" type="video/mp4" />
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                            <p><strong>Series:</strong> 2-3 series.</p>
                            <p><strong>Reps:</strong> 8-10 repeticiones + repeticiones solo excéntricas.</p>
                            <p><strong>Cómo se hace el ejercicio:</strong> Empuja los codos hacia abajo manteniendo los brazos rectos, enfocándote en la conexión con el dorsal sin convertirlo en un ejercicio de tríceps. Realiza ocho a diez repeticiones hasta el fallo concéntrico. Luego, haz trampa llevando la barra hacia atrás cerca del cuerpo y utiliza los tríceps para empujar hacia abajo, controlando la fase excéntrica (negativa) solo con los dorsales. Continúa con estas repeticiones excéntricas asistidas hasta llegar al fallo.</p>
                            <p><strong>Por qué es importante este ejercicio:</strong> Es considerado un ejercicio subestimado para la espalda que trabaja la fuerza escapular de manera diferente y permite realizar repeticiones excéntricas adicionales después del fallo concéntrico, lo cual es muy efectivo para la ganancia muscular.</p>
                        </details>
                    </div>
        
                    <!-- Bíceps -->
                    <div class="grupo-muscular biceps">
                        <h4>BÍCEPS</h4>
                        <div class="ejercicio">
                            <input type="checkbox" id="lunes2-ej5" onchange="tacharEjercicio('lunes2-ej5')" />
                            <label for="lunes2-ej5"><strong>Curl con Barra + Parciales</strong></label>
                        </div>
                        <details>
                            <summary>Detalles</summary>
                            <p>Video:</p>
                            <video controls width="320" height="240">
                                <source src="${get_videos_path('lunes', 'Curl_estrict.mp4')}" type="video/mp4" />
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                            <p><strong>Series:</strong> 3 series.</p>
                            <p><strong>Reps:</strong> 6-8 repeticiones (máximo peso) + parciales al fallo.</p>
                            <p><strong>Cómo se hace el ejercicio:</strong> Haz repeticiones pesadas hasta el fallo (6-8 repeticiones). Al fallar, usa otra barra con menos peso y baja lentamente (fase excéntrica) para maximizar la sobrecarga.</p>
                            <p><strong>Claves:</strong> El fallo es solo el inicio; la sobrecarga excéntrica es lo que estimula más el crecimiento.</p>
                        </details>
        
                        <div class="ejercicio">
                            <input type="checkbox" id="lunes2-ej6" onchange="tacharEjercicio('lunes2-ej6')" />
                            <label for="lunes2-ej6"><strong>Curl Martillo Cruzado con Mancuernas (Crossbody Hammer Curl)</strong></label>
                        </div>
                        <details>
                            <summary>Detalles</summary>
                            <p>Video:</p>
                            <video controls width="320" height="240">
                                <source src="${get_videos_path('lunes', 'Hammer Curl.mp4')}" type="video/mp4" />
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                            <p><strong>Series:</strong> 2 series.</p>
                            <p><strong>Reps:</strong> 10-12 repeticiones por brazo (fallo técnico).</p>
                            <p><strong>Cómo se hace el ejercicio:</strong> Lleva la mancuerna cruzada al cuerpo, en posición neutra o pronada, enfocándote en el braquial para dar grosor al brazo.</p>
                        </details>
                    </div>
                </div>
            `
        },
        martes2: {
            titulo: "MARTES - SEMANA 2",
            contenido: `
                <div id="contenido-entrenamiento">
                    <!-- Calentamiento -->
                    <div class="grupo-muscular calentamiento">
                        <h4>CALENTAMIENTO</h4>
                        <div class="ejercicio">
                            <input type="checkbox" id="martes2-ej1" onchange="tacharEjercicio('martes2-ej1')" />
                            <label for="martes2-ej1"><strong>Sentadilla Libre (Pirámide)</strong></label>
                        </div>
                        <details>
                            <summary>Detalles</summary>
                            <p>Video:</p>
                            <video controls width="320" height="240">
                                <source src="${get_videos_path('martes', 'sentadilla_libre.mp4')}" type="video/mp4" />
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                            <p><strong>Series:</strong> 2 series.</p>
                            <p><strong>Reps:</strong> Pirámide - 1ra serie: 15 reps (bajo peso), 12 reps (aumentar peso), 8 reps (aumentar peso); 2da serie: 8 reps, 12 reps, 15 reps (reduciendo peso).</p>
                            <p><strong>Descripción:</strong> Realiza una pirámide ascendente en la primera serie, comenzando con bajo peso y aumentando progresivamente mientras reduces las repeticiones. En la segunda serie, haz una pirámide descendente, comenzando con el peso más alto y reduciéndolo mientras aumentas las repeticiones.</p>
                        </details>
                    </div>
        
                    <!-- Cuádriceps -->
                    <div class="grupo-muscular cuadriceps">
                        <h4>CUÁDRICEPS</h4>
                        <div class="ejercicio">
                            <input type="checkbox" id="martes2-ej2" onchange="tacharEjercicio('martes2-ej2')" />
                            <label for="martes2-ej2"><strong>Extensiones de Cuádriceps (Dropset)</strong></label>
                        </div>
                        <details>
                            <summary>Detalles</summary>
                            <p>Video:</p>
                            <video controls width="320" height="240">
                                <source src="${get_videos_path('martes', 'extensiones_cuadriceps.mp4')}" type="video/mp4" />
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                            <p><strong>Series:</strong> 3 series.</p>
                            <p><strong>Reps:</strong> 8 reps (máximo peso posible), baja 20% el peso y haz 10 reps, baja el peso y haz 15 reps (sin descanso entre cambios).</p>
                            <p><strong>Descripción:</strong> Comienza con el mayor peso posible para 8 repeticiones. Inmediatamente, sin descanso, reduce el peso un 20% y haz 10 repeticiones. Finalmente, reduce el peso nuevamente y haz 15 repeticiones. Esto cuenta como una serie. Descansa y repite.</p>
                        </details>
        
                        <div class="ejercicio">
                            <input type="checkbox" id="martes2-ej3" onchange="tacharEjercicio('martes2-ej3')" />
                            <label for="martes2-ej3"><strong>Desplante en Smith con Step</strong></label>
                        </div>
                        <details>
                            <summary>Detalles</summary>
                            <p>Video:</p>
                            <video controls width="320" height="240">
                                <source src="${get_videos_path('martes', 'desplante_smith_step.mp4')}" type="video/mp4" />
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                            <p><strong>Series:</strong> 3 series.</p>
                            <p><strong>Reps:</strong> 12 repeticiones por serie (9 reps a velocidad normal, últimas 3 reps bajando en 3 segundos y subiendo en 3 segundos).</p>
                            <p><strong>Descripción:</strong> Coloca un step frente a ti y realiza desplantes en la máquina Smith. Haz 9 repeticiones a velocidad normal, y para las últimas 3 repeticiones, baja en 3 segundos y sube en 3 segundos para aumentar el tiempo bajo tensión.</p>
                        </details>
                    </div>
        
                    <!-- Pantorrilla -->
                    <div class="grupo-muscular pantorrilla">
                        <h4>PANTORRILLA</h4>
                        <div class="ejercicio">
                            <input type="checkbox" id="martes2-ej4" onchange="tacharEjercicio('martes2-ej4')" />
                            <label for="martes2-ej4"><strong>Soleo</strong></label>
                        </div>
                        <details>
                            <summary>Detalles</summary>
                            <p>Video:</p>
                            <video controls width="320" height="240">
                                <source src="${get_videos_path('martes', 'soleo.mp4')}" type="video/mp4" />
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                            <p><strong>Series:</strong> 2 series.</p>
                            <p><strong>Reps:</strong> Al fallo.</p>
                            <p><strong>Descripción:</strong> Realiza elevaciones de pantorrilla sentado (soleo) hasta el fallo en cada serie, enfocándote en la contracción máxima.</p>
                        </details>
        
                        <div class="ejercicio">
                            <input type="checkbox" id="martes2-ej5" onchange="tacharEjercicio('martes2-ej5')" />
                            <label for="martes2-ej5"><strong>Pantorrilla de Pie</strong></label>
                        </div>
                        <details>
                            <summary>Detalles</summary>
                            <p>Video:</p>
                            <video controls width="320" height="240">
                                <source src="${get_videos_path('martes', 'pantorrilla_pie.mp4')}" type="video/mp4" />
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                            <p><strong>Series:</strong> 2 series.</p>
                            <p><strong>Reps:</strong> 10 reps con puntas afuera, 10 reps rectos, 10 reps con puntas adentro.</p>
                            <p><strong>Descripción:</strong> Realiza elevaciones de pantorrilla de pie, variando la posición de los pies: 10 repeticiones con las puntas hacia afuera, 10 con los pies rectos, y 10 con las puntas hacia adentro, para trabajar diferentes partes de la pantorrilla.</p>
                        </details>
                    </div>
        
                    <!-- Abs -->
                    <div class="grupo-muscular abs">
                        <h4>ABS</h4>
                        <div class="ejercicio">
                            <input type="checkbox" id="martes2-ej6" onchange="tacharEjercicio('martes2-ej6')" />
                            <label for="martes2-ej6"><strong>Abdominal Remador</strong></label>
                        </div>
                        <details>
                            <summary>Detalles</summary>
                            <p>Foto:</p>
                            <img src="${get_image_path('martes', 'abdominal_remador.png')}" alt="Abdominal Remador" width="320" height="240" />
                            <p><strong>Reps:</strong> 20 repeticiones.</p>
                            <p><strong>Descripción:</strong> Realiza 20 repeticiones de abdominales remador, enfocándote en la contracción del core y manteniendo una buena forma.</p>
                        </details>
        
                        <div class="triserie">
                            <div class="ejercicio">
                                <input type="checkbox" id="martes2-ej7" onchange="tacharEjercicio('martes2-ej7')" />
                                <label for="martes2-ej7"><strong>Elevación de Piernas</strong></label>
                            </div>
                            <div class="ejercicio">
                                <input type="checkbox" id="martes2-ej8" onchange="tacharEjercicio('martes2-ej8')" />
                                <label for="martes2-ej8"><strong>Recto Curtinho</strong></label>
                            </div>
                            <div class="ejercicio">
                                <input type="checkbox" id="martes2-ej9" onchange="tacharEjercicio('martes2-ej9')" />
                                <label for="martes2-ej9"><strong>Obliquo Solo</strong></label>
                            </div>
                            <details>
                                <summary>Detalles de la Triserie</summary>
                                <p><strong>Reps Totales:</strong> Elevación de Piernas: 10 reps; Recto Curtinho: 20 reps; Obliquo Solo: 15 reps (sin descanso entre ejercicios).</p>
                                <h5>Elevación de Piernas</h5>
                                <p><strong>Reps:</strong> 10 repeticiones.</p>
                                <p><strong>Foto:</strong></p>
                                <img src="${get_image_path('martes', 'elevacion_piernas.png')}" alt="Elevación de Piernas" width="320" height="240" />
                                <p><strong>Descripción:</strong> Acuéstate boca arriba con las manos debajo de los glúteos o a los lados para soporte. Eleva las piernas rectas hasta formar un ángulo de 90 grados con el torso, manteniendo el core contraído. Baja lentamente sin dejar que los pies toquen el suelo y repite.</p>
                                <h5>Recto Curtinho</h5>
                                <p><strong>Reps:</strong> 20 repeticiones.</p>
                                <p><strong>Foto:</strong></p>
                                <img src="${get_image_path('martes', 'recto_curtinho.png')}" alt="Recto Curtinho" width="320" height="240" />
                                <p><strong>Descripción:</strong> Acuéstate boca arriba con las rodillas dobladas y los pies apoyados en el suelo. Realiza un crunch corto, levantando solo los hombros del suelo mientras contraes el abdomen. Mantén el movimiento controlado y enfócate en la contracción del recto abdominal.</p>
                                <h5>Obliquo Solo</h5>
                                <p><strong>Reps:</strong> 15 repeticiones.</p>
                                <p><strong>Foto:</strong></p>
                                <img src="${get_image_path('martes', 'obliquo_solo.png')}" alt="Obliquo Solo" width="320" height="240" />
                                <p><strong>Descripción:</strong> Acuéstate de lado con las piernas juntas y el cuerpo apoyado sobre un antebrazo. Eleva las piernas y el torso simultáneamente, contrayendo los oblicuos del lado que está trabajando. Baja lentamente y repite, luego cambia de lado.</p>
                                <p><strong>Instrucciones Generales:</strong> Realiza los tres ejercicios de forma consecutiva sin descanso: 10 repeticiones de elevación de piernas, 20 repeticiones de recto curtinho, y 15 repeticiones de obliquo solo. Esto cuenta como una triserie.</p>
                            </details>
                        </div>
                    </div>
                </div>
            `
        },
        miercoles2: {
            titulo: "MIÉRCOLES - SEMANA 2",
            contenido: `
                <div id="contenido-entrenamiento">
                    <!-- Calentamiento -->
                    <div class="grupo-muscular calentamiento">
                        <h4>CALENTAMIENTO</h4>
                        <div class="ejercicio">
                            <input type="checkbox" id="miercoles2-ej1" onchange="tacharEjercicio('miercoles2-ej1')" />
                            <label for="miercoles2-ej1"><strong>Calentamiento Manguito Rotador</strong></label>
                        </div>
                        <details>
                            <summary>Detalles</summary>
                            <p>Video:</p>
                            <video controls width="320" height="240">
                                <source src="${get_videos_path('miercoles', 'manguito_rotador.mp4')}" type="video/mp4" />
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                            <p><strong>Series:</strong> 1-2 series.</p>
                            <p><strong>Reps:</strong> 10-15 repeticiones (submáximas, sin fatigar).</p>
                            <p><strong>Descripción:</strong> Realiza rotaciones externas con una banda elástica o mancuerna ligera para activar el manguito rotador. Mantén el codo pegado al cuerpo y rota el antebrazo hacia afuera, enfocándote en la activación sin llegar al fallo.</p>
                            <p><strong>Por qué es importante:</strong> El manguito rotador mantiene la cabeza del húmero centrada en la articulación. Si no está activo, puede causar molestias o lesiones al hacer press. Se hacen solo 1 o 2 series submáximas para activarlo sin fatigarlo, porque si se cansa, no podrá estabilizar el hombro durante el press.</p>
                        </details>
        
                        <div class="ejercicio">
                            <input type="checkbox" id="miercoles2-ej2" onchange="tacharEjercicio('miercoles2-ej2')" />
                            <label for="miercoles2-ej2"><strong>Elevación Frontal ISO Alternada con Mancuernas</strong></label>
                        </div>
                        <details>
                            <summary>Detalles</summary>
                            <p>Video:</p>
                            <video controls width="320" height="240">
                                <source src="${get_videos_path('miercoles', 'elevacion_frontal_ISO_alternada.mp4')}" type="video/mp4" />
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                            <p><strong>Series:</strong> 1-2 series.</p>
                            <p><strong>Reps:</strong> 8 repeticiones por brazo.</p>
                            <p><strong>Descripción:</strong> Sostén una mancuerna en cada mano. Eleva una mancuerna frontalmente hasta la altura del hombro mientras la otra permanece abajo, manteniendo la tensión. Alterna los brazos, enfocándote en el deltoide anterior.</p>
                            <p><strong>Beneficios:</strong> Aísla el deltoide anterior desde el inicio del movimiento, evita que el trapecio o la espalda baja roben protagonismo, y mejora la activación y el control.</p>
                        </details>
                    </div>
        
                    <!-- Pecho (Ejercicio Independiente) -->
                    <div class="grupo-muscular pecho">
                        <h4>PECHO</h4>
                        <div class="ejercicio">
                            <input type="checkbox" id="miercoles2-ej3" onchange="tacharEjercicio('miercoles2-ej3')" />
                            <label for="miercoles2-ej3"><strong>Press Inclinado con Mancuernas (banco a 30°)</strong></label>
                        </div>
                        <details>
                            <summary>Detalles</summary>
                            <p><strong>Series:</strong> 3 series.</p>
                            <p><strong>Reps:</strong> 5-8 repeticiones.</p>
                            <p><strong>Video:</strong></p>
                            <video controls width="320" height="240">
                                <source src="${get_videos_path('miercoles', 'press_inclinado.mp4')}" type="video/mp4" />
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                            <p><strong>Descripción:</strong> Ajusta el banco a 30°. Sostén una mancuerna en cada mano con los pulgares hacia arriba para maximizar la aducción. Baja las mancuernas controladamente hasta que los codos estén a la altura del torso, y empuja hacia arriba, juntando las mancuernas al final para mayor contracción del pecho.</p>
                            <p><strong>Enfoque:</strong> Parte superior del pecho (clavicular).</p>
                            <p><strong>Beneficio:</strong> El ángulo de 30° permite trabajar fibras superiores, comúnmente subdesarrolladas. Con mancuernas y pulgares arriba, logras mayor aducción, lo que activa más el pecho y menos los hombros. Carga pesada = tensión mecánica alta, clave para ganar fuerza y masa muscular.</p>
                            <p><strong>Por qué es de los mejores:</strong> Combina el estímulo pesado (clave para fuerza y crecimiento) y la aducción, optimizando la activación del pectoral superior.</p>
                        </details>
                    </div>
        
                    <!-- Biserie: Pecho + Tríceps -->
                    <div class="grupo-muscular pecho">
                        <h4>PECHO + TRÍCEPS (Biserie)</h4>
                        <div class="biserie">
                            <div class="ejercicio">
                                <input type="checkbox" id="miercoles2-ej4" onchange="tacharEjercicio('miercoles2-ej4')" />
                                <label for="miercoles2-ej4"><strong>Peck Deck</strong></label>
                            </div>
                            <div class="ejercicio">
                                <input type="checkbox" id="miercoles2-ej5" onchange="tacharEjercicio('miercoles2-ej5')" />
                                <label for="miercoles2-ej5"><strong>Jalón con Rotación para Tríceps</strong></label>
                            </div>
                            <details>
                                <summary>Detalles de la Biserie</summary>
                                <h5>Peck Deck</h5>
                                <p><strong>Series:</strong> 2 series.</p>
                                <p><strong>Reps:</strong> 8-10 repeticiones.</p>
                                <p><strong>Video:</strong></p>
                                <p>Foto:</p>
                                <img src="${get_image_path('miercoles', 'pec_deck.png')}" alt="Pec Deck" width="320" height="240" />
                                <p><strong>Descripción:</strong> Siéntate en la máquina Peck Deck con los codos a la altura de los hombros y los antebrazos apoyados en las almohadillas. Junta las almohadillas frente a tu pecho, enfocándote en la contracción del pectoral, y regresa lentamente a la posición inicial para maximizar el estiramiento.</p>
                                <p><strong>Enfoque:</strong> Trabajo de aislamiento para el pecho, con énfasis en la contracción y el estiramiento.</p>
                                <p><strong>Beneficio:</strong> La máquina permite un movimiento controlado que aísla el pecho, minimizando la intervención de otros músculos. Es ideal para trabajar la parte media del pectoral con seguridad.</p>
                                <h5>Jalón con Rotación para Tríceps</h5>
                                <p><strong>Series:</strong> 2 series.</p>
                                <p><strong>Reps:</strong> 6 repeticiones.</p>
                                <p><strong>Video:</strong></p>
                                <video controls width="320" height="240">
                                    <source src="${get_videos_path('miercoles', 'jalon_con_rotacion__triceps.mp4')}" type="video/mp4" />
                                    Tu navegador no soporta la reproducción de videos.
                                </video>
                                <p><strong>Descripción:</strong> En una polea alta, usa una barra o cuerda. Baja la barra como en un jalón de tríceps clásico, y al final, rota el brazo hacia atrás del cuerpo para aumentar la contracción de la cabeza larga del tríceps.</p>
                                <p><strong>Por qué es de los mejores:</strong> Ataca directamente la cabeza larga del tríceps. Esa rotación final aumenta la contracción y el rango de movimiento. Rompe con la ejecución típica, aumentando la efectividad del ejercicio.</p>
                                <p><strong>Instrucciones Generales:</strong> Realiza las 2 series del Peck Deck (8-10 reps) inmediatamente seguidas de 2 series del Jalón con Rotación para Tríceps (6 reps) sin descanso entre ejercicios. Descansa después de completar cada biserie.</p>
                            </details>
                        </div>
                    </div>
        
                    <!-- Pecho (Ejercicio Final) -->
                    <div class="grupo-muscular pecho">
                        <h4>PECHO</h4>
                        <div class="ejercicio">
                            <input type="checkbox" id="miercoles2-ej7" onchange="tacharEjercicio('miercoles2-ej7')" />
                            <label for="miercoles2-ej7"><strong>High to Low Crossover</strong></label>
                        </div>
                        <details>
                            <summary>Detalles</summary>
                            <p><strong>Series:</strong> 3 series.</p>
                            <p><strong>Reps:</strong> 10-12 repeticiones + parciales.</p>
                            <p><strong>Video:</strong></p>
                            <video controls width="320" height="240">
                                <source src="${get_videos_path('miercoles', 'high_to_low_crossover.mp4')}" type="video/mp4" />
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                            <p><strong>Descripción:</strong> En una polea alta, ajusta las poleas a la posición más alta. Con un agarre en cada mano, cruza los brazos hacia abajo y hacia afuera, enfocándote en la abducción para trabajar la parte inferior del pecho. Después de 10-12 repeticiones, realiza parciales en la posición de máxima contracción hasta el fallo.</p>
                            <p><strong>Enfoque:</strong> Parte inferior del pecho.</p>
                        </details>
                    </div>
        
                    <!-- Hombros -->
                    <div class="grupo-muscular hombros">
                        <h4>HOMBROS</h4>
                        <div class="ejercicio">
                            <input type="checkbox" id="miercoles2-ej8" onchange="tacharEjercicio('miercoles2-ej8')" />
                            <label for="miercoles2-ej8"><strong>Press Militar</strong></label>
                        </div>
                        <details>
                            <summary>Detalles</summary>
                            <p><strong>Series:</strong> 2 series.</p>
                            <p><strong>Reps:</strong> 7 repeticiones con un brazo, 7 repeticiones con el otro, 7 repeticiones con ambos brazos.</p>
                            <p><strong>Video:</strong></p>
                            <video controls width="320" height="240">
                                <source src="${get_videos_path('miercoles', 'press_militar.mp4')}" type="video/mp4" />
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                            <p><strong>Descripción:</strong> Sostén una mancuerna en cada mano a la altura de los hombros. Realiza 7 repeticiones con un brazo, luego 7 repeticiones con el otro, y finalmente 7 repeticiones con ambos brazos juntos, manteniendo el core contraído y una postura estable.</p>
                        </details>
        
                        <div class="ejercicio">
                            <input type="checkbox" id="miercoles2-ej9" onchange="tacharEjercicio('miercoles2-ej9')" />
                            <label for="miercoles2-ej9"><strong>Elevación Lateral Individual (1 1/2)</strong></label>
                        </div>
                        <details>
                            <summary>Detalles</summary>
                            <p><strong>Series:</strong> 2 series.</p>
                            <p><strong>Reps:</strong> 8 repeticiones (una y media).</p>
                            <p><strong>Video:</strong></p>
                            <video controls width="320" height="240">
                                <source src="${get_videos_path('miercoles', 'elevacion_1_y_medio.mp4')}" type="video/mp4" />
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                            <p><strong>Descripción:</strong> Sostén una mancuerna en una mano. Eleva la mancuerna lateralmente hasta la altura del hombro, baja solo hasta la mitad manteniendo la tensión alta (sin dejar que el impulso baje la mancuerna por completo), y vuelve a subir. Esto cuenta como una repetición y media. Repite con el otro brazo.</p>
                        </details>
                    </div>
                </div>
            `
        },
        jueves2: {
            titulo: "JUEVES - SEMANA 2",
            contenido: `
                        <div id="contenido-entrenamiento">
                        <!-- Pecho -->
                        <div class="grupo-muscular pecho">
                            <h4>PECHO</h4>
                            <div class="ejercicio">
                                <input type="checkbox" id="jueves2-ej1" onchange="tacharEjercicio('jueves2-ej1')" />
                                <label for="jueves2-ej1"><strong>Press de Banca Plano con Mancuernas</strong></label>
                            </div>
                            <details>
                                <summary>Detalles</summary>
                                <p>Video:</p>
                                <video controls width="320" height="240">
                                    <source src="${get_videos_path('jueves', 'press_banca_plano.mp4')}" type="video/mp4" />
                                    Tu navegador no soporta la reproducción de videos.
                                </video>
                                <p><strong>Series:</strong> 3 series</p>
                                <p><strong>Reps:</strong> 5-8 repeticiones</p>
                                <p><strong>Descripción:</strong> Enfócate en el pectoral medio. Carga pesada para fuerza y masa muscular.</p>
                            </details>
                        </div>
                    </div>
                    `
        },
        viernes2: {
            titulo: "VIERNES - SEMANA 2",
            contenido: `
                        <div id="contenido-entrenamiento">
                        <!-- Espalda -->
                        <div class="grupo-muscular espalda">
                            <h4>ESPALDA</h4>
                            <div class="ejercicio">
                                <input type="checkbox" id="viernes2-ej1" onchange="tacharEjercicio('viernes2-ej1')" />
                                <label for="viernes2-ej1"><strong>Remo con Barra</strong></label>
                            </div>
                            <details>
                                <summary>Detalles</summary>
                                <p>Video:</p>
                                <video controls width="320" height="240">
                                    <source src="${get_videos_path('viernes', 'remo_con_barra.mp4')}" type="video/mp4" />
                                    Tu navegador no soporta la reproducción de videos.
                                </video>
                                <p><strong>Series:</strong> 1 serie</p>
                                <p><strong>Reps:</strong> 20 repeticiones efectivas</p>
                                <p><strong>Descripción:</strong> Usa impulso desde abajo. Trabaja dorsales, trapecio medio y romboides.</p>
                            </details>
                        </div>
                    </div>
                    `
        }
    };

    document.getElementById("dias-semana1").style.display = "none";
    document.getElementById("dias-semana2").style.display = "none";
    document.getElementById("entrenamiento").style.display = "block";
    document.getElementById("dia-titulo").innerText = dias[dia].titulo;
    document.getElementById("contenido-entrenamiento").innerHTML = dias[dia].contenido;
}

function volverADias() {
    document.getElementById("entrenamiento").style.display = "none";
    document.getElementById("semanas").style.display = "none";
    document.getElementById("dias-semana1").style.display = semanaActiva === "semana1" ? "block" : "none";
    document.getElementById("dias-semana2").style.display = semanaActiva === "semana2" ? "block" : "none";
}

function volverASemanas() {
    document.getElementById("dias-semana1").style.display = "none";
    document.getElementById("dias-semana2").style.display = "none";
    document.getElementById("entrenamiento").style.display = "none";
    document.getElementById("semanas").style.display = "flex";
}

function tacharEjercicio(id) {
    const checkbox = document.getElementById(id);
    const ejercicioDiv = checkbox.parentElement;
    if (checkbox.checked) {
        ejercicioDiv.classList.add("tachado");
    } else {
        ejercicioDiv.classList.remove("tachado");
    }
}