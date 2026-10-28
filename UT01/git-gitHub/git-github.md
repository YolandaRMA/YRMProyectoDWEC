
# Chuleta de control de versiones con git


## Conceptos

* **Repositorio**: sitio donde se ubican los archivos del proyecto con su respectivo control de versiones.
  * **Repositorio local**: El proyecto se ubica y se controla en una maquina local.
  * **Repositorio remoto**: El proyecto se ubica en un servidor centralizado.
* **Conflicto**: Problema que surge cuando los usuarios realizan cambios sobre un archivo del proyecto incompatibles entre si (al intentar hacer un merge).
* **Control de versiones**: El control de versiones consiste básicamente en mantener el control de los cambios que se realizan en el tiempo sobre un conjunto de archivos integrados en un repositorio.
* **HEAD**: una referencia el cual apunta al último commit realizado de tu rama.
* **origin**: Es un alias para referirse a un repositorio remoto.
* **Fork**: Clone que se realiza dentro del mismo servidor. Al repositorio original se le llama **UPSTREAM**.
* **Branch**: cuando quieres trabajar en paralelo sobre un mismo proyecto y no quieres interferir o llenar de commits (cambios) la rama master (principal), te haces tu propia rama para trabajar sobre ella y cuando hayas terminado la unes (haces merge).
* **Pull Request**:
  - Entre Ramas: Petición que se hace al desarrollador de una rama para que sus cambios se unan con la rama principal
  - Entre repositorios: Petición que se hace al desarrollador de que los cambios hechos por el fork sean incorporados al repositorio original.

## Comandos:

**En control de versiones local**

* **git init**: Crear un repositorio local en nuestra máquina o reinizializa uno existente.
* **git add** _[NombreFichero]_: Preparar ficheros para ser confirmados en el repositorio local. Es decir, realiza la copia de un fichero modificado, poniéndola en la zona de preparación para ser confirmada _(**stage** changes)_.
* **git status**: Identificar el estado de un fichero o ficheros en un repositorio local.
* **git commit -m** _"Comentario con los cambios realizados"_: Confirmar cambios en un repositorio local. Es decir, acción que se realiza cuando queremos que los cambios que hemos realizado en el fichero se queden registrados en el repositorio. (Tras el commit es necesario el **Push**).
  * **-m**: Para añadir el mensaje.
  * **-a**: Hace el _stage_ directamente (te saltas el _git add_ de todos los archivos trackeados y puedes usarlo junto con el otro comando (git commit -a -m "message")).
* **git diff** : Te muestra los cambios de tu _workshop_ (espacio de trabajo) respecto el commit que le indiques ej: _git diff HEAD^_.
* **git revert** _[commit]_: Con esto conseguimos revertir un cambio/commit en remoto creando otro nuevo commit que anulan el commit anterior.
* **git reset (SHA del commit)** : con este comando conseguimos que el _HEAD_ vaya X commits atras. Dependiendo del reset que hagas afecta a los archivos de una manera u otra. [Imagen y explicación](https://stackoverflow.com/questions/3528245/whats-the-difference-between-git-reset-mixed-soft-and-hard)
  * **git reset --soft**: Los archivos se ponen en zona de _stage_.
  * **git reset --mixed**: (por defecto) Los archivos se mantienen en el espacio de trabajo a la espera del _add_.
  * **git reset --hard**: Los cambios de los archivos se eliminan y se vuelve al estado original refente a ese commit.


**En control de versiones remoto**

* **git clone** _[repositorio]_: Replica un repositorio entero con todo su historial de cambios a el directorio indicado.
* **git pull**: Traer los cambios de un repositorio remoto a un repositorio local.
* **git push** _[NombreRemoto NombreRama]_: Envia los cambios/commits de un repositorio local a uno remoto (ej: git push origin master) si ya se está en la rama master, basta con hacer _git push_.
  * **git push origin** _[NombreRama]_: Enviar la rama al repositorio remoto.
* **git clone** _[URLrepositorio]_: Replicar un repositorio remoto localmente en nuestra máquina (pej: git clone http://github.com/arduino/Arduino Arduino_Code).
* **git add ./***: Para añadir todos los archivos del directorio.
* **git log**: Para ver los cambios (todos los commits) y su HEAD.
* **git fetch** _[NombreRemoto]_: A diferencia de *git pull* solo actualiza los datos del remoto sin hacer efecto en los archivos en los que estes trabajando.
* **git remote**: Muestra los alias de los repositorios remotos que tienes.
  * **git remote add** *[Alias RepRemoto]*: Para añadir repositorios remotos y asignarle un alias **origin**.
  * **git remote rename**: Para renombrar una referencia a un repositorio remoto.
  * **git remote show** *[RepRemoto]*: Para mostrar más información del repositorio remoto.
  * **git remote rm** *[RepRemoto]*: Para eliminar un repositorio remoto.
  * **git remote add origin** _[URLservidorRemoto]_: Añade un repositorio remoto para poder trabajar con el (pej: git remote add origin https://github.com/uma-dte-docencia/chuleta-git-2017-18-internautas-1).
  * **git remote -v**: Muestra los repositorios remotos que tienes con su respectivo enlace.
* **git config** _--global http.proxy 'proxy.satd.uma.es:3120'_: Configurar git para que trabaje con un proxy.
* **git stash**: Cuando trabajas en un archivo (y lo modificas) en un repositorio y quieres cambiar de rama se hace un preguardado que tienes que anular con este comando.

**En control de versiones distribuido**

* **git branch** _[NombreNuevaRama]_: Crear una rama en un repositorio local.
  * **git branch -f master HEAD~3**: Fuerza a que la rama master vaya 3 commit atras.
  * **git branch -d** _[BranchName]_: Para eliminar un branch (la instruccion branch también permite crear y listar ramas mediante otros atributos).
* **git checkout** _[NombreRama]_: Cambiar de rama en la copia local.
  * **git checkout -b** _[NombreNuevaRama]_: Cambia de rama y crea una nueva.
  * **git checkout** _[Commit]_: El cambio puede ser a un commit específico.
* **git cherry pick** _Commit1_ _Commit2_ ... : este comando te permite  copiar diferentes commits de otras ramas en tu rama.
* **git merge** _[repositorio]_: La operación donde se une una branch (una rama) a otra branch master (o superior) y se combinan.
* **git rm** _[Archivos]_: Para eliminar algún archivo del repositorio. ej: git rm *'*.txt'.
* **git rebase** : cuando nos queremos llevar todos los cambios de una rama, hacemos un rebase.
  * **git rebase -i**: se abre un texto donde puedes elegir que commits incluir e incluso si los marcas como **_fixup_** se unira con el anterior haciendo el historial más legible.
  * **The Golden Rule of Rebasing**: nunca uses un rebase en una rama pública.

La diferencia entre un **rebase** y un **merge** reside en que el merge hace la unión de la rama en forma de commit (forma no destructiva) y el rebase (forma destructiva) se trae todo el historial de commits y deja el proyecto de una forma más lineal [explicación detallada](https://www.atlassian.com/git/tutorials/merging-vs-rebasing).

Para realizar un pull request entre dos ramas de un repositorio remoto y entre dos repositorios que resultaron de un Fork el proceso hay que hacerlo a través de la interfaz de la pagina de git (en este caso Github) o por un cliente de escritorio (por ejemplo SourceTree) donde se le explicará a los encargados del repositorio original o la rama master (o superior) de los cambios realizados y la justificación para que sea añadido en dicha rama a traves de un **merge**.

**Otros comandos de interes**

* **rm -rf .git**: para eliminar un git init
* **gitk --all --date-order**: muestra de forma gráfica los commits del repositorio.

##### Caracteres
* **^** : Te mueves un commit arriba. Cada vez que aparece le estas diciendo que mire al padre de ese. Por ejemplo:
  * _master^_ : buscas al padre.
  * _master^^_ : buscas al abuelo.
* **~<num>** : Te mueves <num> commits.

## Operaciones específicas:

##### Añadir las modificaciones al repositorio
1. *cd* _nombreDirectorio_
2. *git add* _nombreArchivoModificado_
3. *git commit -m "comenario sobre las modificaciones"*
4. *git push*

##### Clonar un repositorio y crear uno nuevo identico (mirroring)[Fuente](https://help.github.com/articles/duplicating-a-repository/):

1. Clonar el repositorio:
*git clone --bare https://github.com/exampleuser/old-repository.git*
2. Nos movemos a la ubicación donde se ubica el repositorio clonado con el comando *cd*
3. Push con el atributo mirror:
*git push --mirror https://github.com/exampleuser/new-repository.git*
4. Movemos el directorio uno arriba *cd ..*
5. Eliminamos el repositorio temporal creado en el paso 1:
*rm -rf old-repository.git*

## Tips:

* Se recomienda ante dudas lo primero es hacer **git status**.
* Si tienes una duda o quieres saber más siempre es de buena ayuda **git (comando correspondiente) --help**.
* Si quieres volver a quitar el proxy de github tienes que abrir con permiso (sudo) un editor de texto el config de github Ej: sudo **open ~/.gitconfig** y comenta (con #) las lineas donde esté configurado el proxy **#proxy = proxy.wifi.uma.es:3128** y **#[http]**.
* Cuando hagas un **git branch** recordar hacer el **checkout** [nombre de la nueva rama] para empezar a trabajar en dicha rama.
* Para saber como escribir el **Readme.md** -> [Página muy útil](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).
* Para empezar se recomienda hacer este turial de git: https://try.github.io/ -> https://learngitbranching.js.org

## Comandos del terminal útiles para git:

**Para el manejo de ficheros en el terminal (Linux)**

* **pwd**: Mostrar en que directorio estamos.
* **mkdir** _[nombreDirectorio]_: Crear un directorio.
* **cd** _[RutaDelNuevoDirectorio]_: Cambiar de directorio.
* **ls**: Mostrar la lista de ficheros de un directorio.
* **rm** _[nombreArchivo]_: Borrar un fichero.
* **move** _[nombreDirectorio]_: Cambiar (mover) un fichero de directorio.
* **ls -all** : lista todos los archivos incluidos los que empiezan con punto.
* **cd ..**  : para volver atrás en el directorio.
* **touch** : crea un archivo vacío.
* **mkdir -p** : crea ramas de directorios que no existen.
* **man** _[comando]_ : para consultar en el manual dicho comando.
* **cat** : concatena archivos y/o los muestra como salida.
* **/*.extension** : para referirnos a todos las extensiones de un directorio.

## Software

### Clientes De Git:

* **SourceTree**: Disponible para Windows y MAC.
* **GitKraken**: Disponible para Windows, Linux y MAC.
* **GitHub Desktop**: Disponible para Windows y MAC.
* **TortoiseGit**: Disponible en Windows.

### Servicios de repositorios remotos con control de errores:

* **GitHub**
* **GitLab**
* **Bitbucket**

## Referencias:

* https://gist.github.com/jelcaf/1404619
* http://rogerdudler.github.io/git-guide/index.es.html
* https://git-scm.com/book/es/v1/Fundamentos-de-Git-Trabajando-con-repositorios-remotos
* https://aprendiendoausarlinux.wordpress.com/2011/11/18/el-comando-cat-en-unix/
* https://gist.github.com/evantoli/f8c23a37eb3558ab8765
* https://sethrobertson.github.io/GitFixUm/fixup.html#nonaffil
* https://githowto.com/undoing_staged_changes
* https://stackoverflow.com/questions/3528245/whats-the-difference-between-git-reset-mixed-soft-and-hard