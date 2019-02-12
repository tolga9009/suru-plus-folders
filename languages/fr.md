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
wget -qO- https://git.io/fhQdI | sh
```

Pour installer `suru-plus-folders` sur **les systèmes de BSD**, en utilisant la commande suivante :

```
wget -qO- https://git.io/fhQdI | env PREFIX=/usr/local sh
```

### Désintaller

```
wget -qO- https://git.io/fhQdI | env uninstall=true sh
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
    suru-plus-folders -Ru
    ```

## Avis important !

Ceci est extrêmement utile pour restaurer la couleur après chaque mise à niveau du thème des icônes (les installateurs officiels de [Suru++](https://github.com/suru-plus/suru-plus) et certains paquets tiers le font automatiquement).

**REMARQUE :** Pour changer la couleur d'un dossier individuel, vous pouvez utiliser [Folder Color](http://foldercolor.tuxfamily.org) ou [Dolphin Folder Color](https://github.com/audoban/dolphin-folder-color).

## Couleurs disponibles 

<table>
    <thead>
        <tr>
            <th style="text-align:left">Prénom</th>
            <th style="text-align:center">Aperçu</th>
            <th style="text-align:left">Prénom</th>
            <th style="text-align:center">Aperçu</th>
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

**REMARQUE :** Ce projet ne fournit aucune icône de dossier. Si vous souhaitez demander une nouvelle icône de dossier ou une nouvelle couleur de dossier, ouvrez un *issue* et faites une demande [ici](https://github.com/suru-plus/suru-plus/issues/new).

# Licence

MIT © 2017 [Papirus Folders](https://github.com/PapirusDevelopmentTeam/papirus-folders) pour [Sergei Eremenko](https://github.com/SmartFinn)
