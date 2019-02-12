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
wget -qO- https://git.io/fhQdI | sh
```

Um `suru-plus-folders` auf den **BSD-Systemen** mit dem folgenden Befehl zu installieren:

```
wget -qO- https://git.io/fhQdI | env PREFIX=/usr/local sh
```

### Zum Deinstallieren

```
wget -qO- https://git.io/fhQdI | env uninstall=true sh
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
    suru-plus-folders -Ru
    ```

## Wichtiger Vorschlag!

Dies ist sehr nützlich für der Farbe zu widerherstellen nach jeder Aktualisierung des Icon-Themas (offizielle Installeren von [Suru++](https://github.com/suru-plus/suru-plus) und einige Drittanbieter-Pakete machen dies automatisch).

**VORSCHLAG:** Um die Farbe eines individuellen Ordners zu ändern, können Sie [Folder Color](http://foldercolor.tuxfamily.org) oder [Dolphin Folder Color](https://github.com/audoban/dolphin-folder-color) verwenden.

## Verfügbaren Farben

<table>
    <thead>
      <tr>
          <th style="text-align:left">Name</th>
          <th style="text-align:center">Vorschau</th>
          <th style="text-align:left">Name</th>
          <th style="text-align:center">Vorschau</th>
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

**VORSCHLAG:** Dieses Projekt bietet keine Ordnersiconen. Wenn Sie ein neues Ordnersicon oder eine neue Ordnerfarbe anfordern möchten, öffnen Sie ein *issue* und stellen Sie eine Anforderung [hier](https://github.com/suru-plus/suru-plus/issues/new).

# Lizenz

MIT © 2017 [Papirus Folders](https://github.com/PapirusDevelopmentTeam/papirus-folders) von [Sergei Eremenko](https://github.com/SmartFinn)
