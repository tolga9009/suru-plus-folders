<h1>Suru++ Folders</h1>

- [Beschreibung](#beschreibung)
- [Installation](#installation)
    - [Selbsttätige Distribution](#selbstt%C3%A4tige-distribution)
        - [Zum Installieren](#zum-installieren)
        - [Zum Deinstallieren](#zum-deinstallieren)
    - [Arch Linux-basierte Distributionen](#arch-linux-basierte-distributionen)
    - [Debian-basierte Distributionen](#debian-basierte-distributionen)
- [Der Farbe von Ordnern ändern](#der-farbe-von-ordnern-%C3%A4ndern)
    - [Wichtiger Vorschlag!](#wichtiger-vorschlag)
    - [Verfügbaren Farben](#verf%C3%BCgbaren-farben)
- [Lizenz](#lizenz)

# Beschreibung

Die Datei `suru-plus-folders` ist ein Bash-Skript, das es erlaubt, die Farbe von Ordnern zu ändern, im Icon-Thema [Suru++ 20](https://github.com/suru-plus/suru-plus), basierend auf den Klonen von Icons von Ordnern von Papirus.

Im Moment hat `suru-plus-folders` keine GUI, aber es ist eine voll funktionsfähige Befehlszeile-App. Bevor Sie die 	
Verwendungsbeispiele sehen, installieren Sie bitte zuerst:

# Installation

## Selbsttätige Distribution

Verwenden Sie das Skript, um die neueste Version direkt aus diesem Repository zu installieren (selbsttätig von Ihrer Distribution):

### Zum Installieren

```
wget -qO- https://bit.do/suru-plus-folders | sh
```

Um `suru-plus-folders` auf den **BSD-Systemen** mit dem folgenden Befehl zu installieren:

```
wget -qO- https://bit.do/suru-plus-folders | TAG=xBSD PREFIX=/usr/local sh
```

### Zum Deinstallieren

```
wget -qO- https://bit.do/suru-plus-folders | uninstall=true sh
```

## Arch Linux-basierte Distributionen

Soon

## Debian-basierte Distributionen

Soon

# Der Farbe von Ordnern ändern

Einige Verwendungsbeispiele:

- Die aktuelle Farbe und die verfügbaren Farben für Suru ++ anzeigen:
    ```
    suru-plus-folders -l --theme Suru++
    ```
- Der Farbe von Ordnern auf `brown` (Braun) für Suru++ ändern:
    ```
    suru-plus-folders -C brown --theme Suru++
    ```
- Der Standardfarbe von Ordnern für Suru++ wiederherstellen:
    ```
    suru-plus-folders -D --theme Suru++
    ```
- Der vorige verwendeten Farbe aus einer Konfigurationsdatei wiederherstellen:
    ```
    suru-plus-folders -R
    ```

## Wichtiger Vorschlag!

Dies ist sehr nützlich für der Farbe zu widerherstellen nach jeder Aktualisierung des Icon-Themas (offizielle Installeren von [Suru++](https://github.com/suru-plus/suru-plus) und einige Drittanbieter-Pakete machen dies automatisch).

**VORSCHLAG:** Um die Farbe eines individuellen Ordners zu ändern, können Sie [Folder Color](http://foldercolor.tuxfamily.org) oder [Dolphin Folder Color](https://github.com/audoban/dolphin-folder-color) verwenden.

## Verfügbaren Farben

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
                    <td style="text-align:center"><img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/folder-black.svg" height="48px" width="48px" 
                            alt="folder-black"> <img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/user-black-home.svg" height="48px" width="48px" 
                            alt="user-black-home"> <img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/folder-black-download.svg" height="48px" width="48px" 
                            alt="folder-black-download"></td>
                    <td style="text-align:left"><strong>blue</strong></td>
                    <td style="text-align:center"><img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/folder-blue.svg" height="48px" width="48px" 
                            alt="folder-blue"> <img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/user-blue-home.svg" height="48px" width="48px" 
                            alt="user-blue-home"> <img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/folder-blue-download.svg" height="48px" width="48px" 
                            alt="folder-blue-download"></td>
                </tr>
                <tr>
                    <td style="text-align:left"><strong>bluegrey</strong></td>
                    <td style="text-align:center"><img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/folder-bluegrey.svg" height="48px" width="48px" 
                            alt="folder-bluegrey"> <img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/user-bluegrey-home.svg" height="48px" width="48px" 
                            alt="user-bluegrey-home"> <img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/folder-bluegrey-download.svg" height="48px" width="48px" 
                            alt="folder-bluegrey-download"></td>
                    <td style="text-align:left"><strong>brown</strong></td>
                    <td style="text-align:center"><img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/folder-brown.svg" height="48px" width="48px" 
                            alt="folder-brown"> <img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/user-brown-home.svg" height="48px" width="48px" 
                            alt="user-brown-home"> <img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/folder-brown-download.svg" height="48px" width="48px" 
                            alt="folder-brown-download"></td>
                </tr>
                <tr>
                    <td style="text-align:left"><strong>cyan</strong></td>
                    <td style="text-align:center"><img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/folder-cyan.svg" height="48px" width="48px" 
                            alt="folder-cyan"> <img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/user-cyan-home.svg" height="48px" width="48px" 
                            alt="user-cyan-home"> <img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/folder-cyan-download.svg" height="48px" width="48px" 
                            alt="folder-cyan-download"></td>
                    <td style="text-align:left"><strong>green</strong></td>
                    <td style="text-align:center"><img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/folder-green.svg" height="48px" width="48px" 
                            alt="folder-green"> <img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/user-green-home.svg" height="48px" width="48px" 
                            alt="user-green-home"> <img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/folder-green-download.svg" height="48px" width="48px" 
                            alt="folder-green-download"></td>
                </tr>
                <tr>
                    <td style="text-align:left"><strong>grey</strong></td>
                    <td style="text-align:center"><img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/folder-grey.svg" height="48px" width="48px" 
                            alt="folder-grey"> <img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/user-grey-home.svg" height="48px" width="48px" 
                            alt="user-grey-home"> <img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/folder-grey-download.svg" height="48px" width="48px" 
                            alt="folder-grey-download"></td>
                    <td style="text-align:left"><strong>magenta</strong></td>
                    <td style="text-align:center"><img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/folder-magenta.svg" height="48px" width="48px" 
                            alt="folder-magenta"> <img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/user-magenta-home.svg" height="48px" width="48px" 
                            alt="user-magenta-home"> <img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/folder-magenta-download.svg" height="48px" width="48px" 
                            alt="folder-magenta-download"></td>
                </tr>
                <tr>
                    <td style="text-align:left"><strong>orange</strong></td>
                    <td style="text-align:center"><img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/folder-orange.svg" height="48px" width="48px" 
                            alt="folder-orange"> <img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/user-orange-home.svg" height="48px" width="48px" 
                            alt="user-orange-home"> <img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/folder-orange-download.svg" height="48px" width="48px" 
                            alt="folder-orange-download"></td>
                    <td style="text-align:left"><strong>red</strong></td>
                    <td style="text-align:center"><img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/folder-red.svg" height="48px" width="48px" 
                            alt="folder-red"> <img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/user-red-home.svg" height="48px" width="48px" 
                            alt="user-red-home"> <img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/folder-red-download.svg" height="48px" width="48px" 
                            alt="folder-red-download"></td>
                </tr>
                <tr>
                    <td style="text-align:left"><strong>teal</strong></td>
                    <td style="text-align:center"><img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/folder-teal.svg" height="48px" width="48px" 
                            alt="folder-teal"> <img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/user-teal-home.svg" height="48px" width="48px" 
                            alt="user-teal-home"> <img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/folder-teal-download.svg" height="48px" width="48px" 
                            alt="folder-teal-download"></td>
                    <td style="text-align:left"><strong>violet</strong></td>
                    <td style="text-align:center"><img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/folder-violet.svg" height="48px" width="48px" 
                            alt="folder-violet"> <img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/user-violet-home.svg" height="48px" width="48px" 
                            alt="user-violet-home"> <img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/folder-violet-download.svg" height="48px" width="48px" 
                            alt="folder-violet-download"></td>
                </tr>
                <tr>
                    <td style="text-align:left"><strong>yellow</strong></td>
                    <td style="text-align:center"><img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/folder-yellow.svg" height="48px" width="48px" 
                            alt="folder-yellow"> <img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/user-yellow-home.svg" height="48px" width="48px" 
                            alt="user-yellow-home"> <img src="https://cdn.rawgit.com/suru-plus/suru-plus/suru-plus/beta/places/scalable/folder-yellow-download.svg" height="48px" width="48px" 
                            alt="folder-yellow-download"></td>
                    <td style="text-align:left"></td>
                    <td style="text-align:center"></td>
                </tr>
            </tbody>
        </table>

**VORSCHLAG:** Dieses Projekt bietet keine Ordnersiconen. Wenn Sie ein neues Ordnersicon oder eine neue Ordnerfarbe anfordern möchten, öffnen Sie ein *issue* und stellen Sie eine Anforderung [hier](https://github.com/suru-plus/suru-plus/issues/new).

# Lizenz

MIT © 2017 [Papirus Folders](https://github.com/PapirusDevelopmentTeam/papirus-folders) von [Sergei Eremenko](https://github.com/SmartFinn)
