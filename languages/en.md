<h1>Suru++ Folders</h1>

- [Description](#description)
- [Installation](#installation)
  - [Independent distribution](#independent-distribution)
    - [Installing](#installing)
    - [Uninstalling](#uninstalling)
  - [Arch-based distributions](#arch-based-distributions)
  - [Debian-based distributions](#debian-based-distributions)
- [Changing the colour of folders](#changing-the-colour-of-folders)
  - [Important advice!](#important-advice)
  - [Available colours](#available-colours)
- [Licence](#licence)

# Description

The file `suru-plus-folders` is a bash script that allows changing the color of folders in [Suru++ 20 icons theme](https://github.com/suru-plus/suru-plus), based on the forks of icons of folders of Papirus.

At the moment `suru-plus-folders` doesn't have a GUI, but it is a fully functional command-line application. Before seeing the examples of use, please install firstly:

# Installation

## Independent distribution

Use the script to install the latest version directly from this repository (independently on your distro):

### Installing

```
wget -qO- https://bit.do/suru-plus-folders | sh
```

To install `suru-plus-folders` on **BSD systems** using the following command:

```
wget -qO- https://bit.do/suru-plus-folders | env PREFIX=/usr/local sh
```

### Uninstalling

```
wget -qO- https://bit.do/suru-plus-folders | env uninstall=true sh
```

## Arch-based distributions

Soon

## Debian-based distributions

Soon

# Changing the colour of folders

Some examples of use:

- Showing the current color and available colors for Suru++:
    ```
    suru-plus-folders -l --theme Suru++
    ```
- Changing colour of folders to brown for Suru++:
    ```
    suru-plus-folders -C brown --theme Suru++
    ```
- Revert to default color of folders for places of Suru++:
    ```
    suru-plus-folders -D --theme Suru++
    ```
- Restore the last used color from a config file:
    ```
    suru-plus-folders -Ru
    ```

## Important advice!

This is extremely useful for restoring colour after each icons theme upgrade (official installers of [Suru++](https://github.com/suru-plus/suru-plus) and some third-party packages do this automatically).

**NOTE:** To change the colour of an individual folder you can use [Folder Color](http://foldercolor.tuxfamily.org) or [Dolphin Folder Color](https://github.com/audoban/dolphin-folder-color).

## Available colours

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
              <img src="/images/user-bluegrey-desktop.svg" height="48px" width="48px" alt="user-brown-desktop">
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
              <img src="/images/user-bluegreygrey-desktop.svg" height="48px" width="48px" alt="user-grey-desktop">
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
            <td style="text-align:left"><strong>orange</strong></td>
            <td style="text-align:center">
              <img src="/images/folder-orange.svg" height="48px" width="48px" alt="folder-orange"> 
              <img src="/images/folder-orange-pictures.svg" height="48px" width="48px" alt="folder-orange-pictures"> 
              <img src="/images/folder-orange-download.svg" height="48px" width="48px" alt="folder-orange-download">
              <img src="/images/user-orange-desktop.svg" height="48px" width="48px" alt="user-orange-desktop">
            </td>
            <td style="text-align:left"><strong>red</strong></td>
            <td style="text-align:center">
            <img src="/images/folder-red.svg" height="48px" width="48px" alt="folder-red"> 
              <img src="/images/folder-red-pictures.svg" height="48px" width="48px" alt="folder-red-pictures"> 
              <img src="/images/folder-red-download.svg" height="48px" width="48px" alt="folder-red-download">
              <img src="/images/user-red-desktop.svg" height="48px" width="48px" alt="user-red-desktop">
            </td>
        </tr>
        <tr>
            <td style="text-align:left"><strong>teal</strong></td>
            <td style="text-align:center">
              <img src="/images/folder-teal.svg" height="48px" width="48px" alt="folder-teal"> 
              <img src="/images/folder-teal-pictures.svg" height="48px" width="48px" alt="folder-teal-pictures"> 
              <img src="/images/folder-teal-download.svg" height="48px" width="48px" alt="folder-teal-download">
              <img src="/images/user-teal-desktop.svg" height="48px" width="48px" alt="user-teal-desktop">
            </td>
            <td style="text-align:left"><strong>violet</strong></td>
            <td style="text-align:center">
              <img src="/images/folder-violet.svg" height="48px" width="48px" alt="folder-violet"> 
              <img src="/images/folder-violet-pictures.svg" height="48px" width="48px" alt="folder-violet-pictures"> 
              <img src="/images/folder-violet-download.svg" height="48px" width="48px" alt="folder-violet-download">
              <img src="/images/user-violet-desktop.svg" height="48px" width="48px" alt="user-violet-desktop">
            </td>
        </tr>
        <tr>
            <td style="text-align:left"><strong>yellow</strong></td>
            <td style="text-align:center">
              <img src="/images/folder-yellow.svg" height="48px" width="48px" alt="folder-yellow"> 
              <img src="/images/folder-yellow-pictures.svg" height="48px" width="48px" alt="folder-yellow-pictures"> 
              <img src="/images/folder-yellow-download.svg" height="48px" width="48px" alt="folder-yellow-download">
              <img src="/images/user-yellow-desktop.svg" height="48px" width="48px" alt="user-yellow-desktop">
            </td>
            <td style="text-align:left"></td>
            <td style="text-align:center"></td>
        </tr>
    </tbody>
</table>

**NOTE:** This project doesn't provide any folder icons. If you want to request a new folder icon or a new color of folder, please open an issue and make a request [here](https://github.com/suru-plus/suru-plus/issues/new).

# Licence

MIT © 2017 [Papirus Folders](https://github.com/PapirusDevelopmentTeam/papirus-folders) by [Sergei Eremenko](https://github.com/SmartFinn)
