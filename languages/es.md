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
wget -qO- https://git.io/fhQdI | sh
```

Para instalar `suru-plus-folders` en los **sistemas de BSD**, utilizando el siguiente comando:

```
wget -qO- https://git.io/fhQdI | env PREFIX=/usr/local sh
```

### Desinstalando

```
wget -qO- https://git.io/fhQdI | env uninstall=true sh
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
    suru-plus-folders -Ru
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
            <td style="text-align:center">
              <img src="/images/folder-black.svg" height="48px" width="48px" alt="folder-black">
              <img src="/images/folder-black-pictures.svg" height="48px" width="48px" alt="folder-black-pictures"> 
              <img src="/images/folder-black-download.svg" height="48px" width="48px" alt="folder-black-download">
              <img src="/images/user-black-desktop.svg" height="48px" width="48px" alt="user-black-desktop">
            </td>
            <td style="text-align:left"><strong>blue</strong></td>
            <td style="text-align:center">
              <img src="/images/folder-blue.svg" height="48px" width="48px" alt="folder-blue"> 
              <img src="/images/folder-blue-pictures.svg" height="48px" width="48px" alt="folder-blue-pictures"> 
              <img src="/images/folder-blue-download.svg" height="48px" width="48px" alt="folder-blue-download">
              <img src="/images/user-blue-desktop.svg" height="48px" width="48px" alt="user-blue-desktop">
            </td>
        </tr>
        <tr>
            <td style="text-align:left"><strong>bluegrey</strong></td>
            <td style="text-align:center">
              <img src="/images/folder-bluegrey.svg" height="48px" width="48px" alt="folder-bluegrey"> 
              <img src="/images/folder-bluegrey-pictures.svg" height="48px" width="48px" alt="folder-bluegrey-piuserctures"> 
              <img src="/images/folder-bluegrey-download.svg" height="48px" width="48px" alt="folder-bluegrey-download">
              <img src="/images/user-bluegrey-desktop.svg" height="48px" width="48px" alt="user-bluegrey-desktop">
            </td>
            <td style="text-align:left"><strong>brown</strong></td>
            <td style="text-align:center">
              <img src="/images/folder-brown.svg" height="48px" width="48px" alt="folder-brown"> 
              <img src="/images/folder-brown-pictures.svg" height="48px" width="48px" alt="folder-brown-pictures"> 
              <img src="/images/folder-brown-download.svg" height="48px" width="48px" alt="folder-brown-download">
              <img src="/images/user-brown-desktop.svg" height="48px" width="48px" alt="user-brown-desktop">
            </td>
        </tr>
        <tr>
            <td style="text-align:left"><strong>cyan</strong></td>
            <td style="text-align:center">
              <img src="/images/folder-cyan.svg" height="48px" width="48px" alt="folder-cyan"> 
              <img src="/images/folder-cyan-pictures.svg" height="48px" width="48px" alt="folder-cyan-pictures"> 
              <img src="/images/folder-cyan-download.svg" height="48px" width="48px" alt="folder-cyan-download">
              <img src="/images/user-cyan-desktop.svg" height="48px" width="48px" alt="user-cyan-desktop">
            </td>
            <td style="text-align:left"><strong>green</strong></td>
            <td style="text-align:center">
              <img src="/images/folder-green.svg" height="48px" width="48px" alt="folder-green"> 
              <img src="/images/folder-green-pictures.svg" height="48px" width="48px" alt="folder-green-pictures"> 
              <img src="/images/folder-green-download.svg" height="48px" width="48px" alt="folder-green-download">
              <img src="/images/user-green-desktop.svg" height="48px" width="48px" alt="user-green-desktop">
            </td>
        </tr>
        <tr>
            <td style="text-align:left"><strong>grey</strong></td>
            <td style="text-align:center">
              <img src="/images/folder-grey.svg" height="48px" width="48px" alt="folder-grey"> 
              <img src="/images/folder-grey-pictures.svg" height="48px" width="48px" alt="folder-grey-pictures"> 
              <img src="/images/folder-grey-download.svg" height="48px" width="48px" alt="folder-grey-download">
              <img src="/images/user-grey-desktop.svg" height="48px" width="48px" alt="user-grey-desktop">
            </td>
            <td style="text-align:left"><strong>magenta</strong></td>
            <td style="text-align:center">
              <img src="/images/folder-magenta.svg" height="48px" width="48px" alt="folder-magenta"> 
              <img src="/images/folder-magenta-pictures.svg" height="48px" width="48px" alt="folder-magenta-pictures"> 
              <img src="/images/folder-magenta-download.svg" height="48px" width="48px" alt="folder-magenta-download">
              <img src="/images/user-magenta-desktop.svg" height="48px" width="48px" alt="user-magenta-desktop">
            </td>
        </tr>
        <tr>
            <td style="text-align:left"><strong>mint</strong></td>
            <td style="text-align:center">
              <img src="/images/folder-mint.svg" height="48px" width="48px" alt="folder-mint"> 
              <img src="/images/folder-mint-pictures.svg" height="48px" width="48px" alt="folder-mint-pictures"> 
              <img src="/images/folder-mint-download.svg" height="48px" width="48px" alt="folder-mint-download">
              <img src="/images/user-mint-desktop.svg" height="48px" width="48px" alt="user-mint-desktop">
            </td>
            <td style="text-align:left"><strong>orange</strong></td>
            <td style="text-align:center">
              <img src="/images/folder-orange.svg" height="48px" width="48px" alt="folder-orange"> 
              <img src="/images/folder-orange-pictures.svg" height="48px" width="48px" alt="folder-orange-pictures"> 
              <img src="/images/folder-orange-download.svg" height="48px" width="48px" alt="folder-orange-download">
              <img src="/images/user-orange-desktop.svg" height="48px" width="48px" alt="user-orange-desktop">
            </td>
        </tr>
        <tr>
            <td style="text-align:left"><strong>red</strong></td>
            <td style="text-align:center">
            <img src="/images/folder-red.svg" height="48px" width="48px" alt="folder-red"> 
              <img src="/images/folder-red-pictures.svg" height="48px" width="48px" alt="folder-red-pictures"> 
              <img src="/images/folder-red-download.svg" height="48px" width="48px" alt="folder-red-download">
              <img src="/images/user-red-desktop.svg" height="48px" width="48px" alt="user-red-desktop">
            </td>
            <td style="text-align:left"><strong>teal</strong></td>
            <td style="text-align:center">
              <img src="/images/folder-teal.svg" height="48px" width="48px" alt="folder-teal"> 
              <img src="/images/folder-teal-pictures.svg" height="48px" width="48px" alt="folder-teal-pictures"> 
              <img src="/images/folder-teal-download.svg" height="48px" width="48px" alt="folder-teal-download">
              <img src="/images/user-teal-desktop.svg" height="48px" width="48px" alt="user-teal-desktop">
            </td>
        </tr>
        <tr>
            <td style="text-align:left"><strong>violet</strong></td>
            <td style="text-align:center">
              <img src="/images/folder-violet.svg" height="48px" width="48px" alt="folder-violet"> 
              <img src="/images/folder-violet-pictures.svg" height="48px" width="48px" alt="folder-violet-pictures"> 
              <img src="/images/folder-violet-download.svg" height="48px" width="48px" alt="folder-violet-download">
              <img src="/images/user-violet-desktop.svg" height="48px" width="48px" alt="user-violet-desktop">
            </td>
            <td style="text-align:left"><strong>yellow</strong></td>
            <td style="text-align:center">
              <img src="/images/folder-yellow.svg" height="48px" width="48px" alt="folder-yellow"> 
              <img src="/images/folder-yellow-pictures.svg" height="48px" width="48px" alt="folder-yellow-pictures"> 
              <img src="/images/folder-yellow-download.svg" height="48px" width="48px" alt="folder-yellow-download">
              <img src="/images/user-yellow-desktop.svg" height="48px" width="48px" alt="user-yellow-desktop">
            </td>
        </tr>
    </tbody>
</table>

**OBSERVACIÓN:** Este proyecto no proporciona ningún ícono de carpeta. Si usted desea solicitar un nuevo icono de carpeta o un nuevo color de carpeta, abra un *issue* y realice una solicitud [aquí](https://github.com/suru-plus/suru-plus/issues/new).

# Licencia

MIT © 2017 [Papirus Folders](https://github.com/PapirusDevelopmentTeam/papirus-folders) por [Sergei Eremenko](https://github.com/SmartFinn)
