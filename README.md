Utilizar ramas diferentes para partes del proyecto:

Lista de ramas:
- api : Rama dedicada a la api del proyecto
- web : Rama para la interfaz web
- mobile : Rama para interfaz mobile
- modelos : Rama para cargar codigo de referencia o de ejemplo
- juego3d : Rama dedicada unicamente al la trivia en 3D

Directorio maestro:
PP3

Estructura de las ramas:
- api: /PP3/api/
- web: /PP3/web/
- mobile: /PP3/mobile/
- modelos: /PP3/modelos/
- juego3d: /PP3/juego3d/

Es importante mantener la estructura de las ramas para evitar conflictos cuando realicemos el merge
(la unión de las ramas)

Estas ramas se pueden subvidir para una mejor organización del código sin afectar a otra sección
(lo evaluaremos mas adelante)

Comandos para clonar repositorios por ramas:

Clonar rama api:
git clone https://github.com/Nacho2001/PP3.git -b "api"

Clonar rama web:
git clone https://github.com/Nacho2001/PP3.git -b "web"

Clonar rama mobile:
git clone https://github.com/Nacho2001/PP3.git -b "mobile"

Clonar rama modelos:
git clone https://github.com/Nacho2001/PP3.git -b "modelos"

Clonar para juego3d:
git clone https://github.com/Nacho2001/PP3.git -b "juego3d"
