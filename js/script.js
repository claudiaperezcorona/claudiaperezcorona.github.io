
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
                                <label for="lunes1-ej1"><strong>Manguito Rotador</strong></label>
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
                            </details>
                        </div>

                        <!-- Pecho -->
                        <div class="grupo-muscular pecho">
                            <h4>PECHO</h4>
                            <div class="ejercicio">
                                <input type="checkbox" id="lunes1-ej2" onchange="tacharEjercicio('lunes1-ej2')" />
                                <label for="lunes1-ej2"><strong>Press Inclinado con Mancuernas</strong> (banco a 30°)</label>
                            </div>
                            <details>
                                <summary>Detalles</summary>
                                <p>Video:</p>
                                <video controls width="320" height="240">
                                    <source src="${get_videos_path('lunes', 'press_inclinado.mp4')}" type="video/mp4" />
                                    Tu navegador no soporta la reproducción de videos.
                                </video>
                                <p><strong>Series:</strong> 3 series.</p>
                                <p><strong>Reps:</strong> 5-8 repeticiones.</p>
                                <p><strong>Clave:</strong> Pulgares arriba para más pecho y menos hombro.</p>
                                <p><strong>Enfoque:</strong> Parte superior del pecho (clavicular).</p>
                                <p><strong>Beneficio:</strong></p>
                                <ul>
                                    <li>El ángulo de 30° permite trabajar fibras superiores, comúnmente subdesarrolladas. 💪</li>
                                    <li>Con mancuernas y pulgares arriba, logras mayor <strong>aducción</strong>, lo que activa más el pecho y menos los hombros. 🏋️</li>
                                    <li>Carga pesada = <strong>tensión mecánica alta</strong>, clave para ganar fuerza y masa muscular. 📈</li>
                                </ul>
                                <p><strong>Por qué es de los mejores:</strong> Se combina el estímulo pesado (clave para fuerza y crecimiento) y la aducción, lo que optimiza la activación del pectoral superior.</p>
                            </details>
                            <div class="ejercicio">
                                <input type="checkbox" id="lunes1-ej3" onchange="tacharEjercicio('lunes1-ej3')" />
                                <label for="lunes1-ej3"><strong>Pec Deck (máquina de aperturas de pecho)</strong></label>
                            </div>
                            <details>
                                <summary>Detalles</summary>
                                <p>Foto:</p>
                                <img src="${get_image_path('lunes', 'pec_deck.png')}" alt="Pec Deck" width="320" height="240" />
                                <p><strong>Series:</strong> 2 series.</p>
                                <p><strong>Reps:</strong> 8-10 repeticiones.</p>
                                <p><strong>Enfoque:</strong></p>
                                <ul>
                                    <li>Zona media e interna del pecho (pectoral mayor) 💪</li>
                                    <li>Porción esternal (central) del pectoral mayor.</li>
                                    <li>Secundariamente involucra los deltoides anteriores.</li>
                                </ul>
                            </details>
                            <div class="ejercicio">
                                <input type="checkbox" id="lunes1-ej4" onchange="tacharEjercicio('lunes1-ej4')" />
                                <label for="lunes1-ej4"><strong>Flexiones Déficit 1 y ½ con Escalera de Isometría</strong></label>
                            </div>
                            <details>
                                <summary>Detalles</summary>
                                <p>Video:</p>
                                <video controls width="320" height="240">
                                    <source src="${get_videos_path('lunes', 'flexiones_deficit.mp4')}" type="video/mp4" />
                                    Tu navegador no soporta la reproducción de videos.
                                </video>
                                <p><strong>Series:</strong> 1</p>
                                <p><strong>Reps:</strong> al fallo.</p>
                            </details>
                            <div class="ejercicio">
                                <input type="checkbox" id="lunes1-ej8" onchange="tacharEjercicio('lunes1-ej8')" />
                                <label for="lunes1-ej8"><strong>Pullover</strong></label>
                            </div>
                            <details>
                                <summary>Detalles</summary>
                                <p>Video:</p>
                                <video controls width="320" height="240">
                                    <source src="${get_videos_path('lunes', 'pullover.mp4')}" type="video/mp4" />
                                    Tu navegador no soporta la reproducción de videos.
                                </video>
                                <p><strong>Series:</strong> 3 series</p>
                                <p><strong>Reps:</strong> 6-8 reps</p>
                                <p><strong>Nota:</strong> Lo pueden hacer en la polea reps</p>
                            </details>
                        </div>

                        <!-- Hombros -->
                        <div class="grupo-muscular hombros">
                            <h4>HOMBROS</h4>
                            <div class="biserie">
                                <div class="ejercicio">
                                    <input type="checkbox" id="lunes1-ej5" onchange="tacharEjercicio('lunes1-ej5')" />
                                    <label for="lunes1-ej5"><strong>Press Unilateral de Pie con Mancuerna</strong></label>
                                </div>
                                <div class="ejercicio">
                                    <input type="checkbox" id="lunes1-ej6" onchange="tacharEjercicio('lunes1-ej6')" />
                                    <label for="lunes1-ej6"><strong>Push Press con Mancuernas</strong></label>
                                </div>
                                <details>
                                    <summary>Detalles de la Biserie</summary>
                                    <p><strong>Series:</strong> 3 series (ambos ejercicios seguidos sin descanso)</p>
                                    <p><strong>Reps:</strong> 6-8 repeticiones por ejercicio</p>
                                    <p><strong>Video Press Unilateral de Pie con Mancuerna:</strong></p>
                                    <video controls width="320" height="240">
                                        <source src="${get_videos_path('lunes', 'press_unilateral_d_pie_c_mancuerna.mp4')}" type="video/mp4" />
                                        Tu navegador no soporta la reproducción de videos.
                                    </video>
                                    <p><strong>Video Push Press con Mancuernas:</strong></p>
                                    <video controls width="320" height="240">
                                        <source src="${get_videos_path('lunes', 'push_press_con_mancuernas.mp4')}" type="video/mp4" />
                                        Tu navegador no soporta la reproducción de videos.
                                    </video>
                                    <p><strong>Descripción:</strong> Realiza el Press Unilateral de Pie con Mancuerna seguido inmediatamente por el Push Press con Mancuernas. Descansa después de completar ambos ejercicios.</p>
                                </details>
                            </div>
                            <div class="ejercicio">
                                <input type="checkbox" id="lunes1-ej7" onchange="tacharEjercicio('lunes1-ej7')" />
                                <label for="lunes1-ej7"><strong>Elevación Lateral con Trampa + Descendente</strong></label>
                            </div>
                            <details>
                                <summary>Detalles</summary>
                                <p>Video:</p>
                                <video controls width="320" height="240">
                                    <source src="${get_videos_path('lunes', 'elevacion_lateral_con_trampa.mp4')}" type="video/mp4" />
                                    Tu navegador no soporta la reproducción de videos.
                                </video>
                                <p><strong>Series:</strong> 2 series</p>
                                <p><strong>Reps:</strong> al fallo</p>
                            </details>
                        </div>

                        <!-- Tríceps -->
                        <div class="grupo-muscular triceps">
                            <h4>TRÍCEPS</h4>
                            <div class="ejercicio">
                                <input type="checkbox" id="lunes1-ej9" onchange="tacharEjercicio('lunes1-ej9')" />
                                <label for="lunes1-ej9"><strong>Jalón con Rotación para Tríceps</strong></label>
                            </div>
                            <details>
                                <summary>Detalles</summary>
                                <p>Video:</p>
                                <video controls width="320" height="240">
                                    <source src="${get_videos_path('lunes', 'jalon_con_rotacion__triceps.mp4')}" type="video/mp4" />
                                    Tu navegador no soporta la reproducción de videos.
                                </video>
                                <p><strong>Series:</strong> 2 series</p>
                                <p><strong>Reps:</strong> 8 reps</p>
                                <p><strong>Descripción:</strong></p>
                                <ul>
                                    <li>- Es una variante del jalón de tríceps clásico en polea.</li>
                                    <li>- En vez de solo bajar la barra, al final haces una <strong>rotación</strong> para llevar el brazo <strong>detrás del cuerpo</strong></li>
                                </ul>
                                <p><strong>¿Por qué es de los mejores?:</strong></p>
                                <ul>
                                    <li>- Ataca directamente la <strong>cabeza larga del tríceps</strong></li>
                                    <li>- Esa rotación final aumenta la contracción y el rango de movimiento.</li>
                                    <li>- Rompe con la ejecución típica, aumentando la efectividad del ejercicio.</li>
                                </ul>
                            </details>
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
                        <!-- Cuádriceps -->
                        <div class="grupo-muscular cuadriceps">
                            <h4>CUÁDRICEPS</h4>
                            <div class="ejercicio">
                                <input type="checkbox" id="martes2-ej1" onchange="tacharEjercicio('martes2-ej1')" />
                                <label for="martes2-ej1"><strong>Sentadilla Búlgara con Mancuerna</strong></label>
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
                        </div>
                    </div>
                    `
        },
        miercoles2: {
            titulo: "MIÉRCOLES - SEMANA 2",
            contenido: `
                        <div id="contenido-entrenamiento">
                        <!-- Espalda -->
                        <div class="grupo-muscular espalda">
                            <h4>ESPALDA</h4>
                            <div class="ejercicio">
                                <input type="checkbox" id="miercoles2-ej1" onchange="tacharEjercicio('miercoles2-ej1')" />
                                <label for="miercoles2-ej1"><strong>Remo Muerto Explosivo con Barra</strong></label>
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