<h1>Suru++ Folders</h1>

- [Descripción](#descripci%C3%B3n)
- [Instalación](#instalaci%C3%B3n)
    - [Distribuición independiente](#distribuici%C3%B3n-independiente)
        - [Instalando](#instalando)
        - [Desinstalando](#desinstalando)
    - [Distribuciones basadas en Arch](#distribuciones-basadas-en-arch)
    - [Distribuciones basadas en Debian](#distribuciones-basadas-en-debian)
- [Cambiando el color de las carpetas](#cambiando-el-color-de-las-carpetas)
    - [¡Consejo importante!](#%C2%A1consejo-importante)
    - [Colores disponibles](#colores-disponibles)
- [Licencia](#licencia)

# Descripción

El archivo `suru-plus-folders` es un *script bash* que permite cambiar el color de las carpetas del [tema de iconos de Suru++ 20](https://github.com/suru-plus/suru-plus), basado en los clones de iconos de carpetas de Papirus.

Por el momento `suru-plus-folders` no tiene una GUI, pero es una aplicación de línea de comandos completamente funcional. Antes de ver los ejemplos de uso, instale primero:

# Instalación

## Distribuición independiente 

Utilice el *script* para instalar la última versión directamente de este repositorio (independientemente de su distribución):

### Instalando

```
wget -qO- https://bit.do/suru-plus-folders | sh
```

Para instalar `suru-plus-folders` en los **sistemas de BSD**, utilizando el siguiente comando:

```
wget -qO- https://bit.do/suru-plus-folders | TAG=xBSD PREFIX=/usr/local sh
```

### Desinstalando

```
wget -qO- https://bit.do/suru-plus-folders | uninstall=true sh
```

## Distribuciones basadas en Arch

Lo más pronto posible

## Distribuciones basadas en Debian

Lo más pronto posible

# Cambiando el color de las carpetas

Algunos ejemplos de utilización:

- Mostrando el color actual y colores disponibles para Suru++:
    ```
    suru-plus-folders -l --theme Suru++
    ```
- Cambiar el color de las carpetas a `brown` (marrón) para Suru++:
    ```
    suru-plus-folders -C brown --theme Suru++
    ```
- Revertir al color original de las carpetas de Suru++:
    ```
    suru-plus-folders -D --theme Suru++
    ```
- Restaurar el último color utilizado de un archivo de configuración:
    ```
    suru-plus-folders -R
    ```

## ¡Consejo importante!

Esto es extremadamente útil para restaurar el color después de cada actualización de tema de iconos (los instaladores oficiales de [Suru++](https://github.com/suru-plus/suru-plus) y algunos paquetes de terceros lo hacen automáticamente).


**OBSERVACIÓN:** Para cambiar el color de una carpeta individual, puede utilizar [Folder Color](http://foldercolor.tuxfamily.org) o [Dolphin Folder Color](https://github.com/audoban/dolphin-folder-color).

## Colores disponibles

<table>
            <thead>
                <tr>
                    <th style="text-align:left">Nombre</th>
                    <th style="text-align:center">Previsión</th>
                    <th style="text-align:left">Nombre</th>
                    <th style="text-align:center">Previsión</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="text-align:left"><strong>black</strong></td>
                    <td style="text-align:center"><img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/folder-black.svg" height="48px" width="48px" 
                            alt="folder-black"> <img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/user-black-home.svg" height="48px" width="48px" 
                            alt="user-black-home"> <img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/folder-black-download.svg" height="48px" width="48px" 
                            alt="folder-black-download"></td>
                    <td style="text-align:left"><strong>blue</strong></td>
                    <td style="text-align:center"><img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/folder-blue.svg" height="48px" width="48px" 
                            alt="folder-blue"> <img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/user-blue-home.svg" height="48px" width="48px" 
                            alt="user-blue-home"> <img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/folder-blue-download.svg" height="48px" width="48px" 
                            alt="folder-blue-download"></td>
                </tr>
                <tr>
                    <td style="text-align:left"><strong>bluegrey</strong></td>
                    <td style="text-align:center"><img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/folder-bluegrey.svg" height="48px" width="48px" 
                            alt="folder-bluegrey"> <img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/user-bluegrey-home.svg" height="48px" width="48px" 
                            alt="user-bluegrey-home"> <img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/folder-bluegrey-download.svg" height="48px" width="48px" 
                            alt="folder-bluegrey-download"></td>
                    <td style="text-align:left"><strong>brown</strong></td>
                    <td style="text-align:center"><img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/folder-brown.svg" height="48px" width="48px" 
                            alt="folder-brown"> <img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/user-brown-home.svg" height="48px" width="48px" 
                            alt="user-brown-home"> <img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/folder-brown-download.svg" height="48px" width="48px" 
                            alt="folder-brown-download"></td>
                </tr>
                <tr>
                    <td style="text-align:left"><strong>cyan</strong></td>
                    <td style="text-align:center"><img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/folder-cyan.svg" height="48px" width="48px" 
                            alt="folder-cyan"> <img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/user-cyan-home.svg" height="48px" width="48px" 
                            alt="user-cyan-home"> <img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/folder-cyan-download.svg" height="48px" width="48px" 
                            alt="folder-cyan-download"></td>
                    <td style="text-align:left"><strong>green</strong></td>
                    <td style="text-align:center"><img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/folder-green.svg" height="48px" width="48px" 
                            alt="folder-green"> <img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/user-green-home.svg" height="48px" width="48px" 
                            alt="user-green-home"> <img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/folder-green-download.svg" height="48px" width="48px" 
                            alt="folder-green-download"></td>
                </tr>
                <tr>
                    <td style="text-align:left"><strong>grey</strong></td>
                    <td style="text-align:center"><img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/folder-grey.svg" height="48px" width="48px" 
                            alt="folder-grey"> <img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/user-grey-home.svg" height="48px" width="48px" 
                            alt="user-grey-home"> <img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/folder-grey-download.svg" height="48px" width="48px" 
                            alt="folder-grey-download"></td>
                    <td style="text-align:left"><strong>magenta</strong></td>
                    <td style="text-align:center"><img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/folder-magenta.svg" height="48px" width="48px" 
                            alt="folder-magenta"> <img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/user-magenta-home.svg" height="48px" width="48px" 
                            alt="user-magenta-home"> <img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/folder-magenta-download.svg" height="48px" width="48px" 
                            alt="folder-magenta-download"></td>
                </tr>
                <tr>
                    <td style="text-align:left"><strong>orange</strong></td>
                    <td style="text-align:center"><img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/folder-orange.svg" height="48px" width="48px" 
                            alt="folder-orange"> <img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/user-orange-home.svg" height="48px" width="48px" 
                            alt="user-orange-home"> <img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/folder-orange-download.svg" height="48px" width="48px" 
                            alt="folder-orange-download"></td>
                    <td style="text-align:left"><strong>red</strong></td>
                    <td style="text-align:center"><img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/folder-red.svg" height="48px" width="48px" 
                            alt="folder-red"> <img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/user-red-home.svg" height="48px" width="48px" 
                            alt="user-red-home"> <img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/folder-red-download.svg" height="48px" width="48px" 
                            alt="folder-red-download"></td>
                </tr>
                <tr>
                    <td style="text-align:left"><strong>teal</strong></td>
                    <td style="text-align:center"><img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/folder-teal.svg" height="48px" width="48px" 
                            alt="folder-teal"> <img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/user-teal-home.svg" height="48px" width="48px" 
                            alt="user-teal-home"> <img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/folder-teal-download.svg" height="48px" width="48px" 
                            alt="folder-teal-download"></td>
                    <td style="text-align:left"><strong>violet</strong></td>
                    <td style="text-align:center"><img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/folder-violet.svg" height="48px" width="48px" 
                            alt="folder-violet"> <img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/user-violet-home.svg" height="48px" width="48px" 
                            alt="user-violet-home"> <img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/folder-violet-download.svg" height="48px" width="48px" 
                            alt="folder-violet-download"></td>
                </tr>
                <tr>
                    <td style="text-align:left"><strong>yellow</strong></td>
                    <td style="text-align:center"><img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/folder-yellow.svg" height="48px" width="48px" 
                            alt="folder-yellow"> <img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/user-yellow-home.svg" height="48px" width="48px" 
                            alt="user-yellow-home"> <img src="https://cdn.jsdelivr.net/gh/suru-plus/suru-plus@4d3b22b033d2571ddcedf4736d996ea3b6765a94/places/64/folder-yellow-download.svg" height="48px" width="48px" 
                            alt="folder-yellow-download"></td>
                    <td style="text-align:left"></td>
                    <td style="text-align:center"></td>
                </tr>
            </tbody>
        </table>

**OBSERVACIÓN:** Este proyecto no proporciona ningún ícono de carpeta. Si usted desea solicitar un nuevo icono de carpeta o un nuevo color de carpeta, abra un *issue* y realice una solicitud [aquí](https://github.com/suru-plus/suru-plus/issues/new).

# Licencia

MIT © 2017 [Papirus Folders](https://github.com/PapirusDevelopmentTeam/papirus-folders) por [Sergei Eremenko](https://github.com/SmartFinn)
