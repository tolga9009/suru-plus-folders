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
wget -qO- https://bit.do/suru-plus-folders | env PREFIX=/usr/local sh
```

### Uninstalling

```
wget -qO- https://bit.do/suru-plus-folders | env uninstall=true sh
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
    suru-plus-folders -Ru
    ```

## Belangrijk advies!

Dit is uiterst nuttig voor de standaardkleur te herstellen na elke upgrade van het iconenthema (officiële installatieprogramma's van [Suru++](https://github.com/suru-plus/suru-plus) en sommige pakketten van derden doen dit automatisch).

**AANDACHT:** Als u de kleur van een individuele map wilt wijzigen, kunt u [Folder Color](http://foldercolor.tuxfamily.org) of [Dolphin Folder Color](https://github.com/audoban/dolphin-folder-color) gebruiken.

## Available colours

<table>
    <thead>
        <tr>
            <th style="text-align:left">Naam</th>
            <th style="text-align:center">Voorbeld</th>
            <th style="text-align:left">Naam</th>
            <th style="text-align:center">Voorbeld</th>
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

**AANDACHT:** Dit project biedt geen mappiconen. Als u een nieuw mappicoon of een nieuwe mapkleur wilt aanvragen, opent u een *issue* en doet u een aanvraag [hier](https://github.com/suru-plus/suru-plus/issues/new).

# Licentie

MIT © 2017 [Papirus Folders](https://github.com/PapirusDevelopmentTeam/papirus-folders) van [Sergei Eremenko](https://github.com/SmartFinn)
