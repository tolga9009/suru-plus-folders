<h1>Suru++ Folders</h1>

- [Description](#description)
- [Installation](#installation)
    - [Distribution indépendante](#distribution-ind%C3%A9pendante)
        - [Installer](#installer)
        - [Désintaller](#d%C3%A9sintaller)
    - [Distributions basées sur Arch Linux](#distributions-bas%C3%A9es-sur-arch-linux)
    - [Distributions basées sur Debian](#distributions-bas%C3%A9es-sur-debian)
- [Changer la couleur des dossiers](#changer-la-couleur-des-dossiers)
    - [Avis important !](#avis-important)
    - [Couleurs disponibles](#couleurs-disponibles)
- [Licence](#licence)

# Description

Le fichier `suru-plus-folders` est un `script bash` qui permet de changer la couleur des dossiers chez le [thème des icônes Suru++ 20](https://github.com/suru-plus/suru-plus), basé sur des clones d'icônes de dossiers de Papirus.

À l'heure actuelle, `suru-plus-folders` n'a pas d'interface graphique, mais c'est une application de ligne de commande entièrement fonctionnelle. Avant de voir les exemples d'utilisation, installez d'abord :

# Installation

## Distribution indépendante

Utilisez le *script* pour installer la dernière version directement à partir de ce répositoire (indépendamment de votre distribution) :

### Installer

```
wget -qO- https://bit.do/suru-plus-folders | sh
```

Pour installer `suru-plus-folders` sur **les systèmes de BSD**, en utilisant la commande suivante :

```
wget -qO- https://bit.do/suru-plus-folders | TAG=xBSD PREFIX=/usr/local sh
```

### Désintaller

```
wget -qO- https://bit.do/suru-plus-folders | uninstall=true sh
```

## Distributions basées sur Arch Linux

Bientôt

## Distributions basées sur Debian

Bientôt

# Changer la couleur des dossiers

Quelques exemples d'utilisation :

- Afficher de la couleur actuelle et des couleurs disponibles pour Suru++ :
    ```
    suru-plus-folders -l --theme Suru++
    ```
- Changer la colour des dossiers en `brown` (brun) pour Suru++ :
    ```
    suru-plus-folders -C brown --theme Suru++
    ```
- Revenir à la couleur originelle des dossiers pour Suru++ :
    ```
    suru-plus-folders -D --theme Suru++
    ```
- Restaurer la dernière couleur utilisée à partir d'un fichier de configuration:
    ```
    suru-plus-folders -R
    ```

## Avis important !

Ceci est extrêmement utile pour restaurer la couleur après chaque mise à niveau du thème des icônes (les installateurs officiels de [Suru++](https://github.com/suru-plus/suru-plus) et certains paquets tiers le font automatiquement).

**REMARQUE :** Pour changer la couleur d'un dossier individuel, vous pouvez utiliser [Folder Color](http://foldercolor.tuxfamily.org) ou [Dolphin Folder Color](https://github.com/audoban/dolphin-folder-color).

## Couleurs disponibles 

<table>
            <thead>
                <tr>
                    <th style="text-align:left">Name</th>
                    <th style="text-align:center">Preview</th>
                    <th style="text-align:left">Name</th>
                    <th style="text-align:center">Preview</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="text-align:left"><strong>black</strong></td>
                    <td style="text-align:center"><img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/folder-black.svg" height="48px" width="48px" 
                            alt="folder-black"> <img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/user-black-home.svg" height="48px" width="48px" 
                            alt="user-black-home"> <img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/folder-black-download.svg" height="48px" width="48px" 
                            alt="folder-black-download"></td>
                    <td style="text-align:left"><strong>blue</strong></td>
                    <td style="text-align:center"><img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/folder-blue.svg" height="48px" width="48px" 
                            alt="folder-blue"> <img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/user-blue-home.svg" height="48px" width="48px" 
                            alt="user-blue-home"> <img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/folder-blue-download.svg" height="48px" width="48px" 
                            alt="folder-blue-download"></td>
                </tr>
                <tr>
                    <td style="text-align:left"><strong>bluegrey</strong></td>
                    <td style="text-align:center"><img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/folder-bluegrey.svg" height="48px" width="48px" 
                            alt="folder-bluegrey"> <img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/user-bluegrey-home.svg" height="48px" width="48px" 
                            alt="user-bluegrey-home"> <img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/folder-bluegrey-download.svg" height="48px" width="48px" 
                            alt="folder-bluegrey-download"></td>
                    <td style="text-align:left"><strong>brown</strong></td>
                    <td style="text-align:center"><img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/folder-brown.svg" height="48px" width="48px" 
                            alt="folder-brown"> <img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/user-brown-home.svg" height="48px" width="48px" 
                            alt="user-brown-home"> <img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/folder-brown-download.svg" height="48px" width="48px" 
                            alt="folder-brown-download"></td>
                </tr>
                <tr>
                    <td style="text-align:left"><strong>cyan</strong></td>
                    <td style="text-align:center"><img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/folder-cyan.svg" height="48px" width="48px" 
                            alt="folder-cyan"> <img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/user-cyan-home.svg" height="48px" width="48px" 
                            alt="user-cyan-home"> <img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/folder-cyan-download.svg" height="48px" width="48px" 
                            alt="folder-cyan-download"></td>
                    <td style="text-align:left"><strong>green</strong></td>
                    <td style="text-align:center"><img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/folder-green.svg" height="48px" width="48px" 
                            alt="folder-green"> <img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/user-green-home.svg" height="48px" width="48px" 
                            alt="user-green-home"> <img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/folder-green-download.svg" height="48px" width="48px" 
                            alt="folder-green-download"></td>
                </tr>
                <tr>
                    <td style="text-align:left"><strong>grey</strong></td>
                    <td style="text-align:center"><img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/folder-grey.svg" height="48px" width="48px" 
                            alt="folder-grey"> <img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/user-grey-home.svg" height="48px" width="48px" 
                            alt="user-grey-home"> <img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/folder-grey-download.svg" height="48px" width="48px" 
                            alt="folder-grey-download"></td>
                    <td style="text-align:left"><strong>magenta</strong></td>
                    <td style="text-align:center"><img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/folder-magenta.svg" height="48px" width="48px" 
                            alt="folder-magenta"> <img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/user-magenta-home.svg" height="48px" width="48px" 
                            alt="user-magenta-home"> <img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/folder-magenta-download.svg" height="48px" width="48px" 
                            alt="folder-magenta-download"></td>
                </tr>
                <tr>
                    <td style="text-align:left"><strong>orange</strong></td>
                    <td style="text-align:center"><img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/folder-orange.svg" height="48px" width="48px" 
                            alt="folder-orange"> <img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/user-orange-home.svg" height="48px" width="48px" 
                            alt="user-orange-home"> <img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/folder-orange-download.svg" height="48px" width="48px" 
                            alt="folder-orange-download"></td>
                    <td style="text-align:left"><strong>red</strong></td>
                    <td style="text-align:center"><img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/folder-red.svg" height="48px" width="48px" 
                            alt="folder-red"> <img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/user-red-home.svg" height="48px" width="48px" 
                            alt="user-red-home"> <img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/folder-red-download.svg" height="48px" width="48px" 
                            alt="folder-red-download"></td>
                </tr>
                <tr>
                    <td style="text-align:left"><strong>teal</strong></td>
                    <td style="text-align:center"><img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/folder-teal.svg" height="48px" width="48px" 
                            alt="folder-teal"> <img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/user-teal-home.svg" height="48px" width="48px" 
                            alt="user-teal-home"> <img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/folder-teal-download.svg" height="48px" width="48px" 
                            alt="folder-teal-download"></td>
                    <td style="text-align:left"><strong>violet</strong></td>
                    <td style="text-align:center"><img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/folder-violet.svg" height="48px" width="48px" 
                            alt="folder-violet"> <img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/user-violet-home.svg" height="48px" width="48px" 
                            alt="user-violet-home"> <img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/folder-violet-download.svg" height="48px" width="48px" 
                            alt="folder-violet-download"></td>
                </tr>
                <tr>
                    <td style="text-align:left"><strong>yellow</strong></td>
                    <td style="text-align:center"><img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/folder-yellow.svg" height="48px" width="48px" 
                            alt="folder-yellow"> <img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/user-yellow-home.svg" height="48px" width="48px" 
                            alt="user-yellow-home"> <img src="https://raw.githubusercontent.com/suru-plus/suru-plus/beta/places/64/folder-yellow-download.svg" height="48px" width="48px" 
                            alt="folder-yellow-download"></td>
                    <td style="text-align:left"></td>
                    <td style="text-align:center"></td>
                </tr>
            </tbody>
        </table>

**REMARQUE :** Ce projet ne fournit aucune icône de dossier. Si vous souhaitez demander une nouvelle icône de dossier ou une nouvelle couleur de dossier, ouvrez un *issue* et faites une demande [ici](https://github.com/suru-plus/suru-plus/issues/new).

# Licence

MIT © 2017 [Papirus Folders](https://github.com/PapirusDevelopmentTeam/papirus-folders) pour [Sergei Eremenko](https://github.com/SmartFinn)
