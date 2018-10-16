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
wget -qO- https://bit.do/suru-plus-folders | TAG=xBSD PREFIX=/usr/local sh
```

### Uninstalling

```
wget -qO- https://bit.do/suru-plus-folders | uninstall=true sh
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
    suru-plus-folders -R
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

**NOTE:** This project doesn't provide any folder icons. If you want to request a new folder icon or a new color of folder, please open an issue and make a request [here](https://github.com/suru-plus/suru-plus/issues/new).

# Licence

MIT © 2017 [Papirus Folders](https://github.com/PapirusDevelopmentTeam/papirus-folders) by [Sergei Eremenko](https://github.com/SmartFinn)
