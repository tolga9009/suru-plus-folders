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
  - [Beschikbare kleuren in Suru++ 25](#beschikbare-kleuren-in-suru-25)
  - [Beschikbare kleuren in Suru++ Ubuntu](#beschikbare-kleuren-in-suru-ubuntu)
  - [Beschikbare kleuren in Adwaita++](#beschikbare-kleuren-in-adwaita)
- [Licentie](#licentie)

# Beschrijving

Het bestand `suru-plus-folders` is een bash-script waarmee de kleur van mappen kan worden gewijzigd in het iconenthema's [Suru++ 25](https://github.com/suru-plus/suru-plus) en [Suru++ Ubuntu](https://github.com/Bonandry/suru-plus-ubuntu), gebaseerd op de konen van iconen van mappen van Papirus.

Op dit moment heeft `suru-plus-folders` geen GUI, maar het is een volledig functionele opdrachtregel-app. Voordat u de voorbeelden van gebruik ziet, installeert u eerst:

# Installatie

## Onafhankelijke distributie

Gebruik het script om de laatste versie rechtstreeks vanuit deze repository te installeren (onafhankelijk op uw distributie):

### Installeren

```
wget -qO- https://git.io/fhQdI | sh
```

Om te installeren `suru-plus-folders` op **BSD-systemen** met een volgende opdracht:

```
wget -qO- https://git.io/fhQdI | env PREFIX=/usr/local sh
```

### Uninstalling

```
wget -qO- https://git.io/fhQdI | env uninstall=true sh
```

## Arch Linux-gebaseerde distributies

Soon

## Debian-gebaseerde distributies

Soon

# De kleur van mappen wijzigen

Sommige voorbeelden van gebruik:

- De actuele kleur en beschikbare kleuren voor Suru++ 25 of Suru++ Ubuntu tonen:
    ```
    suru-plus-folders -l --theme Suru++
    suru-plus-folders -l --theme Suru++-Ubuntu
    ```
- De kleur van mappen wijzigen in `brown` (bruin) voor Suru++ 25 of Suru++ Ubuntu:
    ```
    suru-plus-folders -C brown --theme Suru++
    suru-plus-folders -C brown --theme Suru++-Ubuntu
    ```
- Naar de standaardkleur van mappen voor Suru++ 25 of Suru++ Ubuntu terugkeren:
    ```
    suru-plus-folders -D --theme Suru++
    suru-plus-folders -D --theme Suru++-Ubuntu
    ```
- De laatste gebruikte kleur vanuit een configuratiebestand herstellen:
    ```
    suru-plus-folders -Ru
    ```

## Belangrijk advies!

Dit is uiterst nuttig voor de standaardkleur te herstellen na elke upgrade van het iconenthema (officiële installatieprogramma's van [Suru++](https://github.com/suru-plus/suru-plus) en sommige pakketten van derden doen dit automatisch).

**AANDACHT:** Als u de kleur van een individuele map wilt wijzigen, kunt u [Folder Color](http://foldercolor.tuxfamily.org) of [Dolphin Folder Color](https://github.com/audoban/dolphin-folder-color) gebruiken.

## Beschikbare kleuren in Suru++ 25

<table style="margin-left: auto; margin-right: auto;">
  <thead>
    <tr>
      <th style="text-align:left">Naam</th>
      <th style="text-align:center">Voorbeld</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>90ssummer</th>
      <td>
        <img src="../images/folder-90ssummer-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-90ssummer-apps">
        <img src="../images/folder-90ssummer-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-90ssummer-documents">
        <img src="../images/folder-90ssummer-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-90ssummer-downloads">
        <img src="../images/folder-90ssummer-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-90ssummer-dropbox">
        <img src="../images/folder-90ssummer-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-90ssummer-gitlab">
        <img src="../images/folder-90ssummer-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-90ssummer-icons">
        <img src="../images/folder-90ssummer-music.svg?sanitize=true" height="48px" width="48px" alt="folder-90ssummer-music">
        <img src="../images/folder-90ssummer-open.svg?sanitize=true" height="48px" width="48px" alt="folder-90ssummer-open">
        <img src="../images/folder-90ssummer.svg?sanitize=true" height="48px" width="48px" alt="folder-90ssummer">
        <img src="../images/folder-90ssummer-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-90ssummer-pictures"> 
        <img src="../images/folder-90ssummer-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-90ssummer-visiting"> 
        <img src="../images/user-90ssummer-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-90ssummer-desktop">
      </td>
    </tr>
    <tr>
      <th>aubergine</th>
      <td>
        <img src="../images/folder-aubergine-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-apps">
        <img src="../images/folder-aubergine-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-documents">
        <img src="../images/folder-aubergine-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-downloads">
        <img src="../images/folder-aubergine-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-dropbox">
        <img src="../images/folder-aubergine-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-gitlab">
        <img src="../images/folder-aubergine-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-icons">
        <img src="../images/folder-aubergine-music.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-music">
        <img src="../images/folder-aubergine-open.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-open">
        <img src="../images/folder-aubergine.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine">
        <img src="../images/folder-aubergine-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-pictures"> 
        <img src="../images/folder-aubergine-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-visiting"> 
        <img src="../images/user-aubergine-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-aubergine-desktop">
      </td>
    </tr>
    <tr>
      <th>aurora</th>
      <td>
        <img src="../images/folder-aurora-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-aurora-apps">
        <img src="../images/folder-aurora-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-aurora-documents">
        <img src="../images/folder-aurora-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-aurora-downloads">
        <img src="../images/folder-aurora-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-aurora-dropbox">
        <img src="../images/folder-aurora-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-aurora-gitlab">
        <img src="../images/folder-aurora-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-aurora-icons">
        <img src="../images/folder-aurora-music.svg?sanitize=true" height="48px" width="48px" alt="folder-aurora-music">
        <img src="../images/folder-aurora-open.svg?sanitize=true" height="48px" width="48px" alt="folder-aurora-open">
        <img src="../images/folder-aurora.svg?sanitize=true" height="48px" width="48px" alt="folder-aurora">
        <img src="../images/folder-aurora-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-aurora-pictures"> 
        <img src="../images/folder-aurora-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-aurora-visiting"> 
        <img src="../images/user-aurora-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-aurora-desktop">
      </td>
    </tr>
    <tr>
      <th>berriez</th>
      <td>
        <img src="../images/folder-berriez-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-berriez-apps">
        <img src="../images/folder-berriez-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-berriez-documents">
        <img src="../images/folder-berriez-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-berriez-downloads">
        <img src="../images/folder-berriez-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-berriez-dropbox">
        <img src="../images/folder-berriez-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-berriez-gitlab">
        <img src="../images/folder-berriez-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-berriez-icons">
        <img src="../images/folder-berriez-music.svg?sanitize=true" height="48px" width="48px" alt="folder-berriez-music">
        <img src="../images/folder-berriez-open.svg?sanitize=true" height="48px" width="48px" alt="folder-berriez-open">
        <img src="../images/folder-berriez.svg?sanitize=true" height="48px" width="48px" alt="folder-berriez">
        <img src="../images/folder-berriez-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-berriez-pictures"> 
        <img src="../images/folder-berriez-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-berriez-visiting"> 
        <img src="../images/user-berriez-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-berriez-desktop">
      </td>
    </tr>
    <tr>
      <th>black</th>
      <td>
        <img src="../images/folder-black-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-black-apps">
        <img src="../images/folder-black-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-black-documents">
        <img src="../images/folder-black-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-black-downloads">
        <img src="../images/folder-black-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-black-dropbox">
        <img src="../images/folder-black-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-black-gitlab">
        <img src="../images/folder-black-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-black-icons">
        <img src="../images/folder-black-music.svg?sanitize=true" height="48px" width="48px" alt="folder-black-music">
        <img src="../images/folder-black-open.svg?sanitize=true" height="48px" width="48px" alt="folder-black-open">
        <img src="../images/folder-black.svg?sanitize=true" height="48px" width="48px" alt="folder-black">
        <img src="../images/folder-black-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-black-pictures"> 
        <img src="../images/folder-black-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-black-visiting"> 
        <img src="../images/user-black-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-black-desktop">
      </td>
    </tr>
    <tr>
      <th>blue</th>
      <td>
        <img src="../images/folder-blue-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-apps">
        <img src="../images/folder-blue-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-documents">
        <img src="../images/folder-blue-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-downloads">
        <img src="../images/folder-blue-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-dropbox">
        <img src="../images/folder-blue-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-gitlab">
        <img src="../images/folder-blue-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-icons">
        <img src="../images/folder-blue-music.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-music">
        <img src="../images/folder-blue-open.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-open">
        <img src="../images/folder-blue.svg?sanitize=true" height="48px" width="48px" alt="folder-blue">
        <img src="../images/folder-blue-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-pictures"> 
        <img src="../images/folder-blue-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-visiting"> 
        <img src="../images/user-blue-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-blue-desktop">
      </td>
    </tr>
    <tr>
      <th>bluegrey</th>
      <td>
        <img src="../images/folder-bluegrey-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey-apps">
        <img src="../images/folder-bluegrey-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey-documents">
        <img src="../images/folder-bluegrey-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey-downloads">
        <img src="../images/folder-bluegrey-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey-dropbox">
        <img src="../images/folder-bluegrey-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey-gitlab">
        <img src="../images/folder-bluegrey-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey-icons">
        <img src="../images/folder-bluegrey-music.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey-music">
        <img src="../images/folder-bluegrey-open.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey-open">
        <img src="../images/folder-bluegrey.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey">
        <img src="../images/folder-bluegrey-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey-pictures"> 
        <img src="../images/folder-bluegrey-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey-visiting"> 
        <img src="../images/user-bluegrey-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-bluegrey-desktop">
      </td>
    </tr>
    <tr>
      <th>bordeaux</th>
      <td>
        <img src="../images/folder-bordeaux-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-apps">
        <img src="../images/folder-bordeaux-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-documents">
        <img src="../images/folder-bordeaux-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-downloads">
        <img src="../images/folder-bordeaux-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-dropbox">
        <img src="../images/folder-bordeaux-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-gitlab">
        <img src="../images/folder-bordeaux-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-icons">
        <img src="../images/folder-bordeaux-music.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-music">
        <img src="../images/folder-bordeaux-open.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-open">
        <img src="../images/folder-bordeaux.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux">
        <img src="../images/folder-bordeaux-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-pictures"> 
        <img src="../images/folder-bordeaux-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-visiting"> 
        <img src="../images/user-bordeaux-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-bordeaux-desktop">
      </td>
    </tr>
    <tr>
      <th>brown</th>
      <td>
        <img src="../images/folder-brown-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-brown-apps">
        <img src="../images/folder-brown-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-brown-documents">
        <img src="../images/folder-brown-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-brown-downloads">
        <img src="../images/folder-brown-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-brown-dropbox">
        <img src="../images/folder-brown-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-brown-gitlab">
        <img src="../images/folder-brown-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-brown-icons">
        <img src="../images/folder-brown-music.svg?sanitize=true" height="48px" width="48px" alt="folder-brown-music">
        <img src="../images/folder-brown-open.svg?sanitize=true" height="48px" width="48px" alt="folder-brown-open">
        <img src="../images/folder-brown.svg?sanitize=true" height="48px" width="48px" alt="folder-brown">
        <img src="../images/folder-brown-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-brown-pictures"> 
        <img src="../images/folder-brown-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-brown-visiting"> 
        <img src="../images/user-brown-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-brown-desktop">
      </td>
    </tr>
    <tr>
      <th>canonical</th>
      <td>
        <img src="../images/folder-canonical-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-apps">
        <img src="../images/folder-canonical-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-documents">
        <img src="../images/folder-canonical-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-downloads">
        <img src="../images/folder-canonical-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-dropbox">
        <img src="../images/folder-canonical-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-gitlab">
        <img src="../images/folder-canonical-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-icons">
        <img src="../images/folder-canonical-music.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-music">
        <img src="../images/folder-canonical-open.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-open">
        <img src="../images/folder-canonical.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical">
        <img src="../images/folder-canonical-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-pictures"> 
        <img src="../images/folder-canonical-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-visiting"> 
        <img src="../images/user-canonical-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-canonical-desktop">
      </td>
    </tr>
    <tr>
      <th>cyan</th>
      <td>
        <img src="../images/folder-cyan-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan-apps">
        <img src="../images/folder-cyan-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan-documents">
        <img src="../images/folder-cyan-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan-downloads">
        <img src="../images/folder-cyan-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan-dropbox">
        <img src="../images/folder-cyan-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan-gitlab">
        <img src="../images/folder-cyan-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan-icons">
        <img src="../images/folder-cyan-music.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan-music">
        <img src="../images/folder-cyan-open.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan-open">
        <img src="../images/folder-cyan.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan">
        <img src="../images/folder-cyan-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan-pictures"> 
        <img src="../images/folder-cyan-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan-visiting"> 
        <img src="../images/user-cyan-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-cyan-desktop">
      </td>
    </tr>
    <tr>
      <th>cyberneon</th>
      <td>
        <img src="../images/folder-cyberneon-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-cyberneon-apps">
        <img src="../images/folder-cyberneon-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-cyberneon-documents">
        <img src="../images/folder-cyberneon-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-cyberneon-downloads">
        <img src="../images/folder-cyberneon-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-cyberneon-dropbox">
        <img src="../images/folder-cyberneon-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-cyberneon-gitlab">
        <img src="../images/folder-cyberneon-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-cyberneon-icons">
        <img src="../images/folder-cyberneon-music.svg?sanitize=true" height="48px" width="48px" alt="folder-cyberneon-music">
        <img src="../images/folder-cyberneon-open.svg?sanitize=true" height="48px" width="48px" alt="folder-cyberneon-open">
        <img src="../images/folder-cyberneon.svg?sanitize=true" height="48px" width="48px" alt="folder-cyberneon">
        <img src="../images/folder-cyberneon-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-cyberneon-pictures"> 
        <img src="../images/folder-cyberneon-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-cyberneon-visiting"> 
        <img src="../images/user-cyberneon-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-cyberneon-desktop">
      </td>
    </tr>
    <tr>
      <th>discodingo</th>
      <td>
        <img src="../images/folder-discodingo-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-discodingo-apps">
        <img src="../images/folder-discodingo-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-discodingo-documents">
        <img src="../images/folder-discodingo-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-discodingo-downloads">
        <img src="../images/folder-discodingo-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-discodingo-dropbox">
        <img src="../images/folder-discodingo-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-discodingo-gitlab">
        <img src="../images/folder-discodingo-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-discodingo-icons">
        <img src="../images/folder-discodingo-music.svg?sanitize=true" height="48px" width="48px" alt="folder-discodingo-music">
        <img src="../images/folder-discodingo-open.svg?sanitize=true" height="48px" width="48px" alt="folder-discodingo-open">
        <img src="../images/folder-discodingo.svg?sanitize=true" height="48px" width="48px" alt="folder-discodingo">
        <img src="../images/folder-discodingo-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-discodingo-pictures"> 
        <img src="../images/folder-discodingo-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-discodingo-visiting"> 
        <img src="../images/user-discodingo-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-discodingo-desktop">
      </td>
    </tr>
    <tr>
      <th>fitdance</th>
      <td>
        <img src="../images/folder-fitdance-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-fitdance-apps">
        <img src="../images/folder-fitdance-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-fitdance-documents">
        <img src="../images/folder-fitdance-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-fitdance-downloads">
        <img src="../images/folder-fitdance-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-fitdance-dropbox">
        <img src="../images/folder-fitdance-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-fitdance-gitlab">
        <img src="../images/folder-fitdance-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-fitdance-icons">
        <img src="../images/folder-fitdance-music.svg?sanitize=true" height="48px" width="48px" alt="folder-fitdance-music">
        <img src="../images/folder-fitdance-open.svg?sanitize=true" height="48px" width="48px" alt="folder-fitdance-open">
        <img src="../images/folder-fitdance.svg?sanitize=true" height="48px" width="48px" alt="folder-fitdance">
        <img src="../images/folder-fitdance-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-fitdance-pictures"> 
        <img src="../images/folder-fitdance-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-fitdance-visiting"> 
        <img src="../images/user-fitdance-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-fitdance-desktop">
      </td>
    </tr>
    <tr>
      <th>green</th>
      <td>
        <img src="../images/folder-green-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-green-apps">
        <img src="../images/folder-green-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-green-documents">
        <img src="../images/folder-green-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-green-downloads">
        <img src="../images/folder-green-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-green-dropbox">
        <img src="../images/folder-green-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-green-gitlab">
        <img src="../images/folder-green-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-green-icons">
        <img src="../images/folder-green-music.svg?sanitize=true" height="48px" width="48px" alt="folder-green-music">
        <img src="../images/folder-green-open.svg?sanitize=true" height="48px" width="48px" alt="folder-green-open">
        <img src="../images/folder-green.svg?sanitize=true" height="48px" width="48px" alt="folder-green">
        <img src="../images/folder-green-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-green-pictures"> 
        <img src="../images/folder-green-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-green-visiting"> 
        <img src="../images/user-green-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-green-desktop">
      </td>
    </tr>
    <tr>
      <th>grey</th>
      <td>
        <img src="../images/folder-grey-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-grey-apps">
        <img src="../images/folder-grey-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-grey-documents">
        <img src="../images/folder-grey-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-grey-downloads">
        <img src="../images/folder-grey-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-grey-dropbox">
        <img src="../images/folder-grey-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-grey-gitlab">
        <img src="../images/folder-grey-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-grey-icons">
        <img src="../images/folder-grey-music.svg?sanitize=true" height="48px" width="48px" alt="folder-grey-music">
        <img src="../images/folder-grey-open.svg?sanitize=true" height="48px" width="48px" alt="folder-grey-open">
        <img src="../images/folder-grey.svg?sanitize=true" height="48px" width="48px" alt="folder-grey">
        <img src="../images/folder-grey-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-grey-pictures"> 
        <img src="../images/folder-grey-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-grey-visiting"> 
        <img src="../images/user-grey-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-grey-desktop">
      </td>
    </tr>
    <tr>
      <th>indigo</th>
      <td>
        <img src="../images/folder-indigo-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo-apps">
        <img src="../images/folder-indigo-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo-documents">
        <img src="../images/folder-indigo-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo-downloads">
        <img src="../images/folder-indigo-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo-dropbox">
        <img src="../images/folder-indigo-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo-gitlab">
        <img src="../images/folder-indigo-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo-icons">
        <img src="../images/folder-indigo-music.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo-music">
        <img src="../images/folder-indigo-open.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo-open">
        <img src="../images/folder-indigo.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo">
        <img src="../images/folder-indigo-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo-pictures"> 
        <img src="../images/folder-indigo-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo-visiting"> 
        <img src="../images/user-indigo-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-indigo-desktop">
      </td>
    </tr>
    <tr>
      <th>magenta</th>
      <td>
        <img src="../images/folder-magenta-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-magenta-apps">
        <img src="../images/folder-magenta-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-magenta-documents">
        <img src="../images/folder-magenta-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-magenta-downloads">
        <img src="../images/folder-magenta-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-magenta-dropbox">
        <img src="../images/folder-magenta-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-magenta-gitlab">
        <img src="../images/folder-magenta-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-magenta-icons">
        <img src="../images/folder-magenta-music.svg?sanitize=true" height="48px" width="48px" alt="folder-magenta-music">
        <img src="../images/folder-magenta-open.svg?sanitize=true" height="48px" width="48px" alt="folder-magenta-open">
        <img src="../images/folder-magenta.svg?sanitize=true" height="48px" width="48px" alt="folder-magenta">
        <img src="../images/folder-magenta-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-magenta-pictures"> 
        <img src="../images/folder-magenta-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-magenta-visiting"> 
        <img src="../images/user-magenta-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-magenta-desktop">
      </td>
    </tr>
    <tr>
      <th>manjaro</th>
      <td>
        <img src="../images/folder-manjaro-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro-apps">
        <img src="../images/folder-manjaro-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro-documents">
        <img src="../images/folder-manjaro-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro-downloads">
        <img src="../images/folder-manjaro-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro-dropbox">
        <img src="../images/folder-manjaro-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro-gitlab">
        <img src="../images/folder-manjaro-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro-icons">
        <img src="../images/folder-manjaro-music.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro-music">
        <img src="../images/folder-manjaro-open.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro-open">
        <img src="../images/folder-manjaro.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro">
        <img src="../images/folder-manjaro-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro-pictures"> 
        <img src="../images/folder-manjaro-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro-visiting"> 
        <img src="../images/user-manjaro-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-manjaro-desktop">
      </td>
    </tr>
    <tr>
      <th>mint</th>
      <td>
        <img src="../images/folder-mint-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-mint-apps">
        <img src="../images/folder-mint-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-mint-documents">
        <img src="../images/folder-mint-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-mint-downloads">
        <img src="../images/folder-mint-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-mint-dropbox">
        <img src="../images/folder-mint-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-mint-gitlab">
        <img src="../images/folder-mint-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-mint-icons">
        <img src="../images/folder-mint-music.svg?sanitize=true" height="48px" width="48px" alt="folder-mint-music">
        <img src="../images/folder-mint-open.svg?sanitize=true" height="48px" width="48px" alt="folder-mint-open">
        <img src="../images/folder-mint.svg?sanitize=true" height="48px" width="48px" alt="folder-mint">
        <img src="../images/folder-mint-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-mint-pictures"> 
        <img src="../images/folder-mint-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-mint-visiting"> 
        <img src="../images/user-mint-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-mint-desktop">
      </td>
    </tr>
    <tr>
      <th>orange</th>
      <td>
        <img src="../images/folder-orange-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-apps">
        <img src="../images/folder-orange-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-documents">
        <img src="../images/folder-orange-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-downloads">
        <img src="../images/folder-orange-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-dropbox">
        <img src="../images/folder-orange-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-gitlab">
        <img src="../images/folder-orange-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-icons">
        <img src="../images/folder-orange-music.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-music">
        <img src="../images/folder-orange-open.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-open">
        <img src="../images/folder-orange.svg?sanitize=true" height="48px" width="48px" alt="folder-orange">
        <img src="../images/folder-orange-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-pictures"> 
        <img src="../images/folder-orange-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-visiting"> 
        <img src="../images/user-orange-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-orange-desktop">
      </td>
    </tr>
    <tr>
      <th>pink</th>
      <td>
        <img src="../images/folder-pink-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-pink-apps">
        <img src="../images/folder-pink-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-pink-documents">
        <img src="../images/folder-pink-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-pink-downloads">
        <img src="../images/folder-pink-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-pink-dropbox">
        <img src="../images/folder-pink-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-pink-gitlab">
        <img src="../images/folder-pink-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-pink-icons">
        <img src="../images/folder-pink-music.svg?sanitize=true" height="48px" width="48px" alt="folder-pink-music">
        <img src="../images/folder-pink-open.svg?sanitize=true" height="48px" width="48px" alt="folder-pink-open">
        <img src="../images/folder-pink.svg?sanitize=true" height="48px" width="48px" alt="folder-pink">
        <img src="../images/folder-pink-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-pink-pictures"> 
        <img src="../images/folder-pink-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-pink-visiting"> 
        <img src="../images/user-pink-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-pink-desktop">
      </td>
    </tr>
    <tr>
      <th>red</th>
      <td>
        <img src="../images/folder-red-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-red-apps">
        <img src="../images/folder-red-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-red-documents">
        <img src="../images/folder-red-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-red-downloads">
        <img src="../images/folder-red-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-red-dropbox">
        <img src="../images/folder-red-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-red-gitlab">
        <img src="../images/folder-red-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-red-icons">
        <img src="../images/folder-red-music.svg?sanitize=true" height="48px" width="48px" alt="folder-red-music">
        <img src="../images/folder-red-open.svg?sanitize=true" height="48px" width="48px" alt="folder-red-open">
        <img src="../images/folder-red.svg?sanitize=true" height="48px" width="48px" alt="folder-red">
        <img src="../images/folder-red-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-red-pictures"> 
        <img src="../images/folder-red-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-red-visiting"> 
        <img src="../images/user-red-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-red-desktop">
      </td>
    </tr>
    <tr>
      <th>teal</th>
      <td>
        <img src="../images/folder-teal-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-teal-apps">
        <img src="../images/folder-teal-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-teal-documents">
        <img src="../images/folder-teal-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-teal-downloads">
        <img src="../images/folder-teal-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-teal-dropbox">
        <img src="../images/folder-teal-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-teal-gitlab">
        <img src="../images/folder-teal-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-teal-icons">
        <img src="../images/folder-teal-music.svg?sanitize=true" height="48px" width="48px" alt="folder-teal-music">
        <img src="../images/folder-teal-open.svg?sanitize=true" height="48px" width="48px" alt="folder-teal-open">
        <img src="../images/folder-teal.svg?sanitize=true" height="48px" width="48px" alt="folder-teal">
        <img src="../images/folder-teal-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-teal-pictures"> 
        <img src="../images/folder-teal-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-teal-visiting"> 
        <img src="../images/user-teal-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-teal-desktop">
      </td>
    </tr>
    <tr>
      <th>vermillion</th>
      <td>
        <img src="../images/folder-vermillion-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion-apps">
        <img src="../images/folder-vermillion-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion-documents">
        <img src="../images/folder-vermillion-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion-downloads">
        <img src="../images/folder-vermillion-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion-dropbox">
        <img src="../images/folder-vermillion-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion-gitlab">
        <img src="../images/folder-vermillion-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion-icons">
        <img src="../images/folder-vermillion-music.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion-music">
        <img src="../images/folder-vermillion-open.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion-open">
        <img src="../images/folder-vermillion.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion">
        <img src="../images/folder-vermillion-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion-pictures"> 
        <img src="../images/folder-vermillion-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion-visiting"> 
        <img src="../images/user-vermillion-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-vermillion-desktop">
      </td>
    </tr>
    <tr>
      <th>violet</th>
      <td>
        <img src="../images/folder-violet-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-violet-apps">
        <img src="../images/folder-violet-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-violet-documents">
        <img src="../images/folder-violet-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-violet-downloads">
        <img src="../images/folder-violet-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-violet-dropbox">
        <img src="../images/folder-violet-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-violet-gitlab">
        <img src="../images/folder-violet-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-violet-icons">
        <img src="../images/folder-violet-music.svg?sanitize=true" height="48px" width="48px" alt="folder-violet-music">
        <img src="../images/folder-violet-open.svg?sanitize=true" height="48px" width="48px" alt="folder-violet-open">
        <img src="../images/folder-violet.svg?sanitize=true" height="48px" width="48px" alt="folder-violet">
        <img src="../images/folder-violet-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-violet-pictures"> 
        <img src="../images/folder-violet-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-violet-visiting"> 
        <img src="../images/user-violet-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-violet-desktop">
      </td>
    </tr>
    <tr>
      <th>white</th>
      <td>
        <img src="../images/folder-white-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-white-apps">
        <img src="../images/folder-white-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-white-documents">
        <img src="../images/folder-white-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-white-downloads">
        <img src="../images/folder-white-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-white-dropbox">
        <img src="../images/folder-white-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-white-gitlab">
        <img src="../images/folder-white-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-white-icons">
        <img src="../images/folder-white-music.svg?sanitize=true" height="48px" width="48px" alt="folder-white-music">
        <img src="../images/folder-white-open.svg?sanitize=true" height="48px" width="48px" alt="folder-white-open">
        <img src="../images/folder-white.svg?sanitize=true" height="48px" width="48px" alt="folder-white">
        <img src="../images/folder-white-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-white-pictures"> 
        <img src="../images/folder-white-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-white-visiting"> 
        <img src="../images/user-white-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-white-desktop">
      </td>
    </tr>
    <tr>
      <th>yellow</th>
      <td>
        <img src="../images/folder-yellow-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-apps">
        <img src="../images/folder-yellow-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-documents">
        <img src="../images/folder-yellow-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-downloads">
        <img src="../images/folder-yellow-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-dropbox">
        <img src="../images/folder-yellow-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-gitlab">
        <img src="../images/folder-yellow-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-icons">
        <img src="../images/folder-yellow-music.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-music">
        <img src="../images/folder-yellow-open.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-open">
        <img src="../images/folder-yellow.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow">
        <img src="../images/folder-yellow-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-pictures"> 
        <img src="../images/folder-yellow-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-visiting"> 
        <img src="../images/user-yellow-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-yellow-desktop">
      </td>
    </tr>
  </tbody>
</table>

## Beschikbare kleuren in Suru++ Ubuntu

<table style="margin-left: auto; margin-right: auto;">
  <thead>
    <tr>
      <th style="text-align:left">Naam</th>
      <th style="text-align:center">Voorbeld</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>aubergine</th>
      <td>
        <img src="../images/suru-plus-ubuntu/folder-aubergine-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-apps">
        <img src="../images/suru-plus-ubuntu/folder-aubergine-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-documents">
        <img src="../images/suru-plus-ubuntu/folder-aubergine-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-downloads">
        <img src="../images/suru-plus-ubuntu/folder-aubergine-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-dropbox">
        <img src="../images/suru-plus-ubuntu/folder-aubergine-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-gitlab">
        <img src="../images/suru-plus-ubuntu/folder-aubergine-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-icons">
        <img src="../images/suru-plus-ubuntu/folder-aubergine-music.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-music">
        <img src="../images/suru-plus-ubuntu/folder-aubergine-open.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-open">
        <img src="../images/suru-plus-ubuntu/folder-aubergine.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine">
        <img src="../images/suru-plus-ubuntu/folder-aubergine-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-pictures"> 
      </td>
   </tr>
   <tr>
      <th>blue</th>
      <td>
        <img src="../images/suru-plus-ubuntu/folder-blue-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-apps">
        <img src="../images/suru-plus-ubuntu/folder-blue-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-documents">
        <img src="../images/suru-plus-ubuntu/folder-blue-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-downloads">
        <img src="../images/suru-plus-ubuntu/folder-blue-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-dropbox">
        <img src="../images/suru-plus-ubuntu/folder-blue-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-gitlab">
        <img src="../images/suru-plus-ubuntu/folder-blue-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-icons">
        <img src="../images/suru-plus-ubuntu/folder-blue-music.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-music">
        <img src="../images/suru-plus-ubuntu/folder-blue-open.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-open">
        <img src="../images/suru-plus-ubuntu/folder-blue.svg?sanitize=true" height="48px" width="48px" alt="folder-blue">
        <img src="../images/suru-plus-ubuntu/folder-blue-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-pictures"> 
      </td>
    </tr>
    <tr>
      <th>bordeaux</th>
      <td>
        <img src="../images/suru-plus-ubuntu/folder-bordeaux-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-apps">
        <img src="../images/suru-plus-ubuntu/folder-bordeaux-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-documents">
        <img src="../images/suru-plus-ubuntu/folder-bordeaux-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-downloads">
        <img src="../images/suru-plus-ubuntu/folder-bordeaux-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-dropbox">
        <img src="../images/suru-plus-ubuntu/folder-bordeaux-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-gitlab">
        <img src="../images/suru-plus-ubuntu/folder-bordeaux-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-icons">
        <img src="../images/suru-plus-ubuntu/folder-bordeaux-music.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-music">
        <img src="../images/suru-plus-ubuntu/folder-bordeaux-open.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-open">
        <img src="../images/suru-plus-ubuntu/folder-bordeaux.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux">
        <img src="../images/suru-plus-ubuntu/folder-bordeaux-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-pictures"> 
      </td>
    </tr>
    <tr>
      <th>canonical</th>
      <td>
        <img src="../images/suru-plus-ubuntu/folder-canonical-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-apps">
        <img src="../images/suru-plus-ubuntu/folder-canonical-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-documents">
        <img src="../images/suru-plus-ubuntu/folder-canonical-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-downloads">
        <img src="../images/suru-plus-ubuntu/folder-canonical-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-dropbox">
        <img src="../images/suru-plus-ubuntu/folder-canonical-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-gitlab">
        <img src="../images/suru-plus-ubuntu/folder-canonical-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-icons">
        <img src="../images/suru-plus-ubuntu/folder-canonical-music.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-music">
        <img src="../images/suru-plus-ubuntu/folder-canonical-open.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-open">
        <img src="../images/suru-plus-ubuntu/folder-canonical.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical">
        <img src="../images/suru-plus-ubuntu/folder-canonical-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-pictures"> 
      </td>
    </tr>
    <tr>
      <th>cyan</th>
      <td>
        <img src="../images/suru-plus-ubuntu/folder-cyan-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan-apps">
        <img src="../images/suru-plus-ubuntu/folder-cyan-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan-documents">
        <img src="../images/suru-plus-ubuntu/folder-cyan-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan-downloads">
        <img src="../images/suru-plus-ubuntu/folder-cyan-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan-dropbox">
        <img src="../images/suru-plus-ubuntu/folder-cyan-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan-gitlab">
        <img src="../images/suru-plus-ubuntu/folder-cyan-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan-icons">
        <img src="../images/suru-plus-ubuntu/folder-cyan-music.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan-music">
        <img src="../images/suru-plus-ubuntu/folder-cyan-open.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan-open">
        <img src="../images/suru-plus-ubuntu/folder-cyan.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan">
        <img src="../images/suru-plus-ubuntu/folder-cyan-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan-pictures"> 
      </td>
    </tr>
    <tr>
      <th>darkblue</th>
      <td>
        <img src="../images/suru-plus-ubuntu/folder-darkblue-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-darkblue-apps">
        <img src="../images/suru-plus-ubuntu/folder-darkblue-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-darkblue-documents">
        <img src="../images/suru-plus-ubuntu/folder-darkblue-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-darkblue-downloads">
        <img src="../images/suru-plus-ubuntu/folder-darkblue-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-darkblue-dropbox">
        <img src="../images/suru-plus-ubuntu/folder-darkblue-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-darkblue-gitlab">
        <img src="../images/suru-plus-ubuntu/folder-darkblue-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-darkblue-icons">
        <img src="../images/suru-plus-ubuntu/folder-darkblue-music.svg?sanitize=true" height="48px" width="48px" alt="folder-darkblue-music">
        <img src="../images/suru-plus-ubuntu/folder-darkblue-open.svg?sanitize=true" height="48px" width="48px" alt="folder-darkblue-open">
        <img src="../images/suru-plus-ubuntu/folder-darkblue.svg?sanitize=true" height="48px" width="48px" alt="folder-darkblue">
        <img src="../images/suru-plus-ubuntu/folder-darkblue-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-darkblue-pictures"> 
      </td>
    </tr>
    <tr>
      <th>green</th>
      <td>
        <img src="../images/suru-plus-ubuntu/folder-green-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-green-apps">
        <img src="../images/suru-plus-ubuntu/folder-green-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-green-documents">
        <img src="../images/suru-plus-ubuntu/folder-green-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-green-downloads">
        <img src="../images/suru-plus-ubuntu/folder-green-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-green-dropbox">
        <img src="../images/suru-plus-ubuntu/folder-green-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-green-gitlab">
        <img src="../images/suru-plus-ubuntu/folder-green-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-green-icons">
        <img src="../images/suru-plus-ubuntu/folder-green-music.svg?sanitize=true" height="48px" width="48px" alt="folder-green-music">
        <img src="../images/suru-plus-ubuntu/folder-green-open.svg?sanitize=true" height="48px" width="48px" alt="folder-green-open">
        <img src="../images/suru-plus-ubuntu/folder-green.svg?sanitize=true" height="48px" width="48px" alt="folder-green">
        <img src="../images/suru-plus-ubuntu/folder-green-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-green-pictures"> 
      </td>
    </tr>
    <tr>
      <th>orange</th>
      <td>
        <img src="../images/suru-plus-ubuntu/folder-orange-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-apps">
        <img src="../images/suru-plus-ubuntu/folder-orange-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-documents">
        <img src="../images/suru-plus-ubuntu/folder-orange-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-downloads">
        <img src="../images/suru-plus-ubuntu/folder-orange-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-dropbox">
        <img src="../images/suru-plus-ubuntu/folder-orange-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-gitlab">
        <img src="../images/suru-plus-ubuntu/folder-orange-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-icons">
        <img src="../images/suru-plus-ubuntu/folder-orange-music.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-music">
        <img src="../images/suru-plus-ubuntu/folder-orange-open.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-open">
        <img src="../images/suru-plus-ubuntu/folder-orange.svg?sanitize=true" height="48px" width="48px" alt="folder-orange">
        <img src="../images/suru-plus-ubuntu/folder-orange-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-pictures"> 
      </td>
    </tr>
    <tr>
      <th>purple</th>
      <td>
        <img src="../images/suru-plus-ubuntu/folder-purple-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-purple-apps">
        <img src="../images/suru-plus-ubuntu/folder-purple-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-purple-documents">
        <img src="../images/suru-plus-ubuntu/folder-purple-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-purple-downloads">
        <img src="../images/suru-plus-ubuntu/folder-purple-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-purple-dropbox">
        <img src="../images/suru-plus-ubuntu/folder-purple-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-purple-gitlab">
        <img src="../images/suru-plus-ubuntu/folder-purple-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-purple-icons">
        <img src="../images/suru-plus-ubuntu/folder-purple-music.svg?sanitize=true" height="48px" width="48px" alt="folder-purple-music">
        <img src="../images/suru-plus-ubuntu/folder-purple-open.svg?sanitize=true" height="48px" width="48px" alt="folder-purple-open">
        <img src="../images/suru-plus-ubuntu/folder-purple.svg?sanitize=true" height="48px" width="48px" alt="folder-purple">
        <img src="../images/suru-plus-ubuntu/folder-purple-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-purple-pictures"> 
      </td>
    </tr>
    <tr>
      <th>red</th>
      <td>
        <img src="../images/suru-plus-ubuntu/folder-red-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-red-apps">
        <img src="../images/suru-plus-ubuntu/folder-red-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-red-documents">
        <img src="../images/suru-plus-ubuntu/folder-red-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-red-downloads">
        <img src="../images/suru-plus-ubuntu/folder-red-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-red-dropbox">
        <img src="../images/suru-plus-ubuntu/folder-red-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-red-gitlab">
        <img src="../images/suru-plus-ubuntu/folder-red-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-red-icons">
        <img src="../images/suru-plus-ubuntu/folder-red-music.svg?sanitize=true" height="48px" width="48px" alt="folder-red-music">
        <img src="../images/suru-plus-ubuntu/folder-red-open.svg?sanitize=true" height="48px" width="48px" alt="folder-red-open">
        <img src="../images/suru-plus-ubuntu/folder-red.svg?sanitize=true" height="48px" width="48px" alt="folder-red">
        <img src="../images/suru-plus-ubuntu/folder-red-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-red-pictures"> 
      </td>
    </tr>
    <tr>
      <th>vermillion</th>
      <td>
        <img src="../images/suru-plus-ubuntu/folder-vermillion-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion-apps">
        <img src="../images/suru-plus-ubuntu/folder-vermillion-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion-documents">
        <img src="../images/suru-plus-ubuntu/folder-vermillion-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion-downloads">
        <img src="../images/suru-plus-ubuntu/folder-vermillion-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion-dropbox">
        <img src="../images/suru-plus-ubuntu/folder-vermillion-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion-gitlab">
        <img src="../images/suru-plus-ubuntu/folder-vermillion-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion-icons">
        <img src="../images/suru-plus-ubuntu/folder-vermillion-music.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion-music">
        <img src="../images/suru-plus-ubuntu/folder-vermillion-open.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion-open">
        <img src="../images/suru-plus-ubuntu/folder-vermillion.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion">
        <img src="../images/suru-plus-ubuntu/folder-vermillion-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion-pictures"> 
      </td>
    </tr>
    <tr>
      <th>yellow</th>
      <td>
        <img src="../images/suru-plus-ubuntu/folder-yellow-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-apps">
        <img src="../images/suru-plus-ubuntu/folder-yellow-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-documents">
        <img src="../images/suru-plus-ubuntu/folder-yellow-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-downloads">
        <img src="../images/suru-plus-ubuntu/folder-yellow-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-dropbox">
        <img src="../images/suru-plus-ubuntu/folder-yellow-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-gitlab">
        <img src="../images/suru-plus-ubuntu/folder-yellow-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-icons">
        <img src="../images/suru-plus-ubuntu/folder-yellow-music.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-music">
        <img src="../images/suru-plus-ubuntu/folder-yellow-open.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-open">
        <img src="../images/suru-plus-ubuntu/folder-yellow.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow">
        <img src="../images/suru-plus-ubuntu/folder-yellow-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-pictures"> 
      </td>
    </tr>
  </tbody>
</table>

## Beschikbare kleuren in Adwaita++

<table style="margin-left: auto; margin-right: auto;">
  <thead>
    <tr>
      <th style="text-align:left">Naam</th>
      <th style="text-align:center">Voorbeld</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>adwaita</th>
      <td>
        <img src="../images/adwaita-plus/folder-adwaita-app.svg?sanitize=true" height="48px" width="48px" alt="folder-adwaita-app">
        <img src="../images/adwaita-plus/folder-adwaita-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-adwaita-documents">
        <img src="../images/adwaita-plus/folder-adwaita-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-adwaita-downloads">
        <img src="../images/adwaita-plus/folder-adwaita-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-adwaita-dropbox">
        <img src="../images/adwaita-plus/folder-adwaita-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-adwaita-gitlab">
        <img src="../images/adwaita-plus/folder-adwaita-music.svg?sanitize=true" height="48px" width="48px" alt="folder-adwaita-music">
        <img src="../images/adwaita-plus/folder-adwaita-open.svg?sanitize=true" height="48px" width="48px" alt="folder-adwaita-open">
        <img src="../images/adwaita-plus/folder-adwaita.svg?sanitize=true" height="48px" width="48px" alt="folder-adwaita">
        <img src="../images/adwaita-plus/folder-adwaita-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-adwaita-pictures"> 
      </td>
   </tr>
    <tr>
      <th>aubergine</th>
      <td>
        <img src="../images/adwaita-plus/folder-aubergine-app.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-app">
        <img src="../images/adwaita-plus/folder-aubergine-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-documents">
        <img src="../images/adwaita-plus/folder-aubergine-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-downloads">
        <img src="../images/adwaita-plus/folder-aubergine-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-dropbox">
        <img src="../images/adwaita-plus/folder-aubergine-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-gitlab">
        <img src="../images/adwaita-plus/folder-aubergine-music.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-music">
        <img src="../images/adwaita-plus/folder-aubergine-open.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-open">
        <img src="../images/adwaita-plus/folder-aubergine.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine">
        <img src="../images/adwaita-plus/folder-aubergine-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-pictures"> 
      </td>
   </tr>
   <tr>
      <th>blue</th>
      <td>
        <img src="../images/adwaita-plus/folder-blue-app.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-app">
        <img src="../images/adwaita-plus/folder-blue-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-documents">
        <img src="../images/adwaita-plus/folder-blue-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-downloads">
        <img src="../images/adwaita-plus/folder-blue-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-dropbox">
        <img src="../images/adwaita-plus/folder-blue-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-gitlab">
        <img src="../images/adwaita-plus/folder-blue-music.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-music">
        <img src="../images/adwaita-plus/folder-blue-open.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-open">
        <img src="../images/adwaita-plus/folder-blue.svg?sanitize=true" height="48px" width="48px" alt="folder-blue">
        <img src="../images/adwaita-plus/folder-blue-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-pictures"> 
      </td>
    </tr>
   <tr>
      <th>bluegrey</th>
      <td>
        <img src="../images/adwaita-plus/folder-bluegrey-app.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey-app">
        <img src="../images/adwaita-plus/folder-bluegrey-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey-documents">
        <img src="../images/adwaita-plus/folder-bluegrey-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey-downloads">
        <img src="../images/adwaita-plus/folder-bluegrey-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey-dropbox">
        <img src="../images/adwaita-plus/folder-bluegrey-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey-gitlab">
        <img src="../images/adwaita-plus/folder-bluegrey-music.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey-music">
        <img src="../images/adwaita-plus/folder-bluegrey-open.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey-open">
        <img src="../images/adwaita-plus/folder-bluegrey.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey">
        <img src="../images/adwaita-plus/folder-bluegrey-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey-pictures"> 
      </td>
    </tr>
    <tr>
      <th>bordeaux</th>
      <td>
        <img src="../images/adwaita-plus/folder-bordeaux-app.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-app">
        <img src="../images/adwaita-plus/folder-bordeaux-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-documents">
        <img src="../images/adwaita-plus/folder-bordeaux-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-downloads">
        <img src="../images/adwaita-plus/folder-bordeaux-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-dropbox">
        <img src="../images/adwaita-plus/folder-bordeaux-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-gitlab">
        <img src="../images/adwaita-plus/folder-bordeaux-music.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-music">
        <img src="../images/adwaita-plus/folder-bordeaux-open.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-open">
        <img src="../images/adwaita-plus/folder-bordeaux.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux">
        <img src="../images/adwaita-plus/folder-bordeaux-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-pictures"> 
      </td>
    </tr>
   <tr>
      <th>brown</th>
      <td>
        <img src="../images/adwaita-plus/folder-brown-app.svg?sanitize=true" height="48px" width="48px" alt="folder-brown-app">
        <img src="../images/adwaita-plus/folder-brown-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-brown-documents">
        <img src="../images/adwaita-plus/folder-brown-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-brown-downloads">
        <img src="../images/adwaita-plus/folder-brown-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-brown-dropbox">
        <img src="../images/adwaita-plus/folder-brown-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-brown-gitlab">
        <img src="../images/adwaita-plus/folder-brown-music.svg?sanitize=true" height="48px" width="48px" alt="folder-brown-music">
        <img src="../images/adwaita-plus/folder-brown-open.svg?sanitize=true" height="48px" width="48px" alt="folder-brown-open">
        <img src="../images/adwaita-plus/folder-brown.svg?sanitize=true" height="48px" width="48px" alt="folder-brown">
        <img src="../images/adwaita-plus/folder-brown-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-brown-pictures"> 
      </td>
    </tr>
    <tr>
      <th>canonical</th>
      <td>
        <img src="../images/adwaita-plus/folder-canonical-app.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-app">
        <img src="../images/adwaita-plus/folder-canonical-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-documents">
        <img src="../images/adwaita-plus/folder-canonical-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-downloads">
        <img src="../images/adwaita-plus/folder-canonical-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-dropbox">
        <img src="../images/adwaita-plus/folder-canonical-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-gitlab">
        <img src="../images/adwaita-plus/folder-canonical-music.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-music">
        <img src="../images/adwaita-plus/folder-canonical-open.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-open">
        <img src="../images/adwaita-plus/folder-canonical.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical">
        <img src="../images/adwaita-plus/folder-canonical-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-pictures"> 
      </td>
    </tr>
    <tr>
      <th>green</th>
      <td>
        <img src="../images/adwaita-plus/folder-green-app.svg?sanitize=true" height="48px" width="48px" alt="folder-green-app">
        <img src="../images/adwaita-plus/folder-green-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-green-documents">
        <img src="../images/adwaita-plus/folder-green-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-green-downloads">
        <img src="../images/adwaita-plus/folder-green-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-green-dropbox">
        <img src="../images/adwaita-plus/folder-green-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-green-gitlab">
        <img src="../images/adwaita-plus/folder-green-music.svg?sanitize=true" height="48px" width="48px" alt="folder-green-music">
        <img src="../images/adwaita-plus/folder-green-open.svg?sanitize=true" height="48px" width="48px" alt="folder-green-open">
        <img src="../images/adwaita-plus/folder-green.svg?sanitize=true" height="48px" width="48px" alt="folder-green">
        <img src="../images/adwaita-plus/folder-green-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-green-pictures"> 
      </td>
    </tr>
   <tr>
      <th>grey</th>
      <td>
        <img src="../images/adwaita-plus/folder-grey-app.svg?sanitize=true" height="48px" width="48px" alt="folder-grey-app">
        <img src="../images/adwaita-plus/folder-grey-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-grey-documents">
        <img src="../images/adwaita-plus/folder-grey-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-grey-downloads">
        <img src="../images/adwaita-plus/folder-grey-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-grey-dropbox">
        <img src="../images/adwaita-plus/folder-grey-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-grey-gitlab">
        <img src="../images/adwaita-plus/folder-grey-music.svg?sanitize=true" height="48px" width="48px" alt="folder-grey-music">
        <img src="../images/adwaita-plus/folder-grey-open.svg?sanitize=true" height="48px" width="48px" alt="folder-grey-open">
        <img src="../images/adwaita-plus/folder-grey.svg?sanitize=true" height="48px" width="48px" alt="folder-grey">
        <img src="../images/adwaita-plus/folder-grey-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-grey-pictures"> 
      </td>
    </tr>
   <tr>
      <th>indigo</th>
      <td>
        <img src="../images/adwaita-plus/folder-indigo-app.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo-app">
        <img src="../images/adwaita-plus/folder-indigo-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo-documents">
        <img src="../images/adwaita-plus/folder-indigo-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo-downloads">
        <img src="../images/adwaita-plus/folder-indigo-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo-dropbox">
        <img src="../images/adwaita-plus/folder-indigo-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo-gitlab">
        <img src="../images/adwaita-plus/folder-indigo-music.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo-music">
        <img src="../images/adwaita-plus/folder-indigo-open.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo-open">
        <img src="../images/adwaita-plus/folder-indigo.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo">
        <img src="../images/adwaita-plus/folder-indigo-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo-pictures"> 
      </td>
    </tr>
   <tr>
      <th>manjaro</th>
      <td>
        <img src="../images/adwaita-plus/folder-manjaro-app.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro-app">
        <img src="../images/adwaita-plus/folder-manjaro-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro-documents">
        <img src="../images/adwaita-plus/folder-manjaro-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro-downloads">
        <img src="../images/adwaita-plus/folder-manjaro-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro-dropbox">
        <img src="../images/adwaita-plus/folder-manjaro-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro-gitlab">
        <img src="../images/adwaita-plus/folder-manjaro-music.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro-music">
        <img src="../images/adwaita-plus/folder-manjaro-open.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro-open">
        <img src="../images/adwaita-plus/folder-manjaro.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro">
        <img src="../images/adwaita-plus/folder-manjaro-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro-pictures"> 
      </td>
    </tr>
   <tr>
      <th>mint</th>
      <td>
        <img src="../images/adwaita-plus/folder-mint-app.svg?sanitize=true" height="48px" width="48px" alt="folder-mint-app">
        <img src="../images/adwaita-plus/folder-mint-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-mint-documents">
        <img src="../images/adwaita-plus/folder-mint-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-mint-downloads">
        <img src="../images/adwaita-plus/folder-mint-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-mint-dropbox">
        <img src="../images/adwaita-plus/folder-mint-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-mint-gitlab">
        <img src="../images/adwaita-plus/folder-mint-music.svg?sanitize=true" height="48px" width="48px" alt="folder-mint-music">
        <img src="../images/adwaita-plus/folder-mint-open.svg?sanitize=true" height="48px" width="48px" alt="folder-mint-open">
        <img src="../images/adwaita-plus/folder-mint.svg?sanitize=true" height="48px" width="48px" alt="folder-mint">
        <img src="../images/adwaita-plus/folder-mint-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-mint-pictures"> 
      </td>
    </tr>
    <tr>
      <th>orange</th>
      <td>
        <img src="../images/adwaita-plus/folder-orange-app.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-app">
        <img src="../images/adwaita-plus/folder-orange-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-documents">
        <img src="../images/adwaita-plus/folder-orange-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-downloads">
        <img src="../images/adwaita-plus/folder-orange-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-dropbox">
        <img src="../images/adwaita-plus/folder-orange-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-gitlab">
        <img src="../images/adwaita-plus/folder-orange-music.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-music">
        <img src="../images/adwaita-plus/folder-orange-open.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-open">
        <img src="../images/adwaita-plus/folder-orange.svg?sanitize=true" height="48px" width="48px" alt="folder-orange">
        <img src="../images/adwaita-plus/folder-orange-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-pictures"> 
      </td>
    </tr>
    <tr>
      <th>purple</th>
      <td>
        <img src="../images/adwaita-plus/folder-purple-app.svg?sanitize=true" height="48px" width="48px" alt="folder-purple-app">
        <img src="../images/adwaita-plus/folder-purple-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-purple-documents">
        <img src="../images/adwaita-plus/folder-purple-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-purple-downloads">
        <img src="../images/adwaita-plus/folder-purple-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-purple-dropbox">
        <img src="../images/adwaita-plus/folder-purple-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-purple-gitlab">
        <img src="../images/adwaita-plus/folder-purple-music.svg?sanitize=true" height="48px" width="48px" alt="folder-purple-music">
        <img src="../images/adwaita-plus/folder-purple-open.svg?sanitize=true" height="48px" width="48px" alt="folder-purple-open">
        <img src="../images/adwaita-plus/folder-purple.svg?sanitize=true" height="48px" width="48px" alt="folder-purple">
        <img src="../images/adwaita-plus/folder-purple-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-purple-pictures"> 
      </td>
    </tr>
    <tr>
      <th>red</th>
      <td>
        <img src="../images/adwaita-plus/folder-red-app.svg?sanitize=true" height="48px" width="48px" alt="folder-red-app">
        <img src="../images/adwaita-plus/folder-red-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-red-documents">
        <img src="../images/adwaita-plus/folder-red-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-red-downloads">
        <img src="../images/adwaita-plus/folder-red-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-red-dropbox">
        <img src="../images/adwaita-plus/folder-red-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-red-gitlab">
        <img src="../images/adwaita-plus/folder-red-music.svg?sanitize=true" height="48px" width="48px" alt="folder-red-music">
        <img src="../images/adwaita-plus/folder-red-open.svg?sanitize=true" height="48px" width="48px" alt="folder-red-open">
        <img src="../images/adwaita-plus/folder-red.svg?sanitize=true" height="48px" width="48px" alt="folder-red">
        <img src="../images/adwaita-plus/folder-red-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-red-pictures"> 
      </td>
    </tr>
   <tr>
      <th>white</th>
      <td>
        <img src="../images/adwaita-plus/folder-white-app.svg?sanitize=true" height="48px" width="48px" alt="folder-white-app">
        <img src="../images/adwaita-plus/folder-white-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-white-documents">
        <img src="../images/adwaita-plus/folder-white-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-white-downloads">
        <img src="../images/adwaita-plus/folder-white-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-white-dropbox">
        <img src="../images/adwaita-plus/folder-white-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-white-gitlab">
        <img src="../images/adwaita-plus/folder-white-music.svg?sanitize=true" height="48px" width="48px" alt="folder-white-music">
        <img src="../images/adwaita-plus/folder-white-open.svg?sanitize=true" height="48px" width="48px" alt="folder-white-open">
        <img src="../images/adwaita-plus/folder-white.svg?sanitize=true" height="48px" width="48px" alt="folder-white">
        <img src="../images/adwaita-plus/folder-white-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-white-pictures"> 
      </td>
    </tr>
   <tr>
      <th>yaru</th>
      <td>
        <img src="../images/adwaita-plus/folder-yaru-app.svg?sanitize=true" height="48px" width="48px" alt="folder-yaru-app">
        <img src="../images/adwaita-plus/folder-yaru-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-yaru-documents">
        <img src="../images/adwaita-plus/folder-yaru-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-yaru-downloads">
        <img src="../images/adwaita-plus/folder-yaru-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-yaru-dropbox">
        <img src="../images/adwaita-plus/folder-yaru-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-yaru-gitlab">
        <img src="../images/adwaita-plus/folder-yaru-music.svg?sanitize=true" height="48px" width="48px" alt="folder-yaru-music">
        <img src="../images/adwaita-plus/folder-yaru-open.svg?sanitize=true" height="48px" width="48px" alt="folder-yaru-open">
        <img src="../images/adwaita-plus/folder-yaru.svg?sanitize=true" height="48px" width="48px" alt="folder-yaru">
        <img src="../images/adwaita-plus/folder-yaru-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-yaru-pictures"> 
      </td>
    </tr>
    <tr>
      <th>yellow</th>
      <td>
        <img src="../images/adwaita-plus/folder-yellow-app.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-app">
        <img src="../images/adwaita-plus/folder-yellow-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-documents">
        <img src="../images/adwaita-plus/folder-yellow-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-downloads">
        <img src="../images/adwaita-plus/folder-yellow-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-dropbox">
        <img src="../images/adwaita-plus/folder-yellow-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-gitlab">
        <img src="../images/adwaita-plus/folder-yellow-music.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-music">
        <img src="../images/adwaita-plus/folder-yellow-open.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-open">
        <img src="../images/adwaita-plus/folder-yellow.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow">
        <img src="../images/adwaita-plus/folder-yellow-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-pictures"> 
      </td>
    </tr>
  </tbody>
</table>

**AANDACHT:** Dit project biedt geen mappiconen. Als u een nieuw mappicoon of een nieuwe mapkleur wilt aanvragen, opent u een *issue* en doet u een aanvraag [hier](https://github.com/suru-plus/suru-plus/issues/new).

# Licentie

MIT © 2017 [Papirus Folders](https://github.com/PapirusDevelopmentTeam/papirus-folders) van [Sergei Eremenko](https://github.com/SmartFinn)
