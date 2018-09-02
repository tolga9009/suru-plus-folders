<h1>Suru++ Folders</h1>

- [Beschrijving](#beschrijving)
- [Installatie](#installatie)
    - [Onafhankelijke distributie](#onafhankelijke-distributie)
        - [Installeren](#installeren)
        - [Uninstalling](#uninstalling)
    - [Arch Linux-gebaseerde distributies](#arch-linux-gebaseerde-distributies)
    - [Debian-gebaseerde distributies](#debian-gebaseerde-distributies)
- [De kleur van mappen wijzigen](#de-kleur-van-mappen-wijzigen)
    - [Belangrijk advies!](#belangrijk-advies)
    - [Available colours](#available-colours)
- [Licentie](#licentie)

# Beschrijving

Het bestand `suru-plus-folders` is een bash-script waarmee de kleur van mappen kan worden gewijzigd in het iconenthema [Suru++ 20](https://github.com/suru-plus/suru-plus), gebaseerd op de konen van iconen van mappen van Papirus.

Op dit moment heeft `suru-plus-folders` geen GUI, maar het is een volledig functionele opdrachtregel-app. Voordat u de voorbeelden van gebruik ziet, installeert u eerst:

# Installatie

## Onafhankelijke distributie

Gebruik het script om de laatste versie rechtstreeks vanuit deze repository te installeren (onafhankelijk op uw distributie):

### Installeren

```
wget -qO- https://bit.do/suru-plus-folders | sh
```

Om te installeren `suru-plus-folders` op **BSD-systemen** met een volgende opdracht:

```
wget -qO- https://bit.do/suru-plus-folders | TAG=xBSD PREFIX=/usr/local sh
```

### Uninstalling

```
wget -qO- https://bit.do/suru-plus-folders | uninstall=true sh
```

## Arch Linux-gebaseerde distributies

Soon

## Debian-gebaseerde distributies

Soon

# De kleur van mappen wijzigen

Sommige voorbeelden van gebruik:

- De actuele kleur en beschikbare kleuren voor Suru++ tonen:
    ```
    suru-plus-folders -l --theme Suru++
    ```
- De kleur van mappen wijzigen in `brown` (bruin) voor Suru++:
    ```
    suru-plus-folders -C brown --theme Suru++
    ```
- Naar de standaardkleur van mappen voor Suru++ terugkeren:
    ```
    suru-plus-folders -D --theme Suru++
    ```
- De laatste gebruikte kleur vanuit een configuratiebestand herstellen:
    ```
    suru-plus-folders -R
    ```

## Belangrijk advies!

Dit is uiterst nuttig voor de standaardkleur te herstellen na elke upgrade van het iconenthema (officiële installatieprogramma's van [Suru++](https://github.com/suru-plus/suru-plus) en sommige pakketten van derden doen dit automatisch).

**AANDACHT:** Als u de kleur van een individuele map wilt wijzigen, kunt u [Folder Color](http://foldercolor.tuxfamily.org) of [Dolphin Folder Color](https://github.com/audoban/dolphin-folder-color) gebruiken.

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

**AANDACHT:** Dit project biedt geen mappiconen. Als u een nieuw mappicoon of een nieuwe mapkleur wilt aanvragen, opent u een *issue* en doet u een aanvraag [hier](https://github.com/suru-plus/suru-plus/issues/new).

# Licentie

MIT © 2017 [Papirus Folders](https://github.com/PapirusDevelopmentTeam/papirus-folders) van [Sergei Eremenko](https://github.com/SmartFinn)
