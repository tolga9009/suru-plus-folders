<h1>Suru++ Folders</h1>

- [Descrizione](#descrizione)
- [Installazione](#installazione)
  - [Distribuzione indipendente](#distribuzione-indipendente)
    - [Installando](#installando)
    - [Disinstallando](#disinstallando)
  - [Distribuzioni basate su Arch Linux](#distribuzioni-basate-su-arch-linux)
  - [Distribuzioni basate su Debian](#distribuzioni-basate-su-debian)
- [Cambiare il colore delle cartelle:](#cambiare-il-colore-delle-cartelle)
  - [Informazioni importanti!](#informazioni-importanti)
  - [Colori disponibili nel Suru++ 25](#colori-disponibili-nel-suru-25)
  - [Colori disponibili nel Suru++ Ubuntu](#colori-disponibili-nel-suru-ubuntu)
  - [Colori disponibili nel Adwaita++](#colori-disponibili-nel-adwaita)
- [Licenza](#licenza)

# Descrizione

Il file `suru-plus-folders` è uno _script di bash_ che permette di cambiare il colore delle cartelle sui temi di icone [Suru++ 25](https://github.com/suru-plus/suru-plus) e [Suru++ Ubuntu](https://github.com/Bonandry/suru-plus-ubuntu), basato sui cloni delle icone di cartelle di Papirus.

Al momento, `suru-plus-folders` non ha una GUI, ma è un'applicazione da riga di comando completamente funzionante. Prima di vedere gli esempi di utilizzo, installare innanzitutto:

# Installazione

## Distribuzione indipendente

Utilizza lo _script_ per installare l'ultima versione direttamente da questo _repository_ (indipendentemente dalla tua distribuzione):

### Installando

```
wget -qO- https://git.io/fhQdI | sh
```

Per installare `suru-plus-folders` sui **sistemi BSD**, utilizzando il seguente comando:

```
wget -qO- https://git.io/fhQdI | env PREFIX=/usr/local sh
```

### Disinstallando

```
wget -qO- https://git.io/fhQdI | env uninstall=true sh
```

## Distribuzioni basate su Arch Linux

Nel futuro.

## Distribuzioni basate su Debian

Nel futuro.

# Cambiare il colore delle cartelle:

Alcuni esempi di utilizzo:

- Mostrando il colore attuale ed i colori disponibili per Suru++ 25 o Suru++ Ubuntu:
  ```
  suru-plus-folders -l --theme Suru++
  suru-plus-folders -l --theme Suru++-Ubuntu
  ```
- Cambiare il colore delle cartelle in `brown` (marrone) per Suru++ 25 o Suru++ Ubuntu:
  ```
  suru-plus-folders -C brown --theme Suru++
  suru-plus-folders -C brown --theme Suru++-Ubuntu
  ```
- Ripristina il colore predefinito delle cartelle per Suru++ 25 o Suru++ Ubuntu:
  ```
  suru-plus-folders -D --theme Suru++
  suru-plus-folders -D --theme Suru++-Ubuntu
  ```
- Ripristina l'ultimo colore utilizzato da un file di configurazione:
  ```
  suru-plus-folders -Ru
  ```

## Informazioni importanti!

Questo è estremamente utile per ripristinare il colore dopo ogni aggiornamento del tema delle icone (installer ufficiali di [Suru++](https://github.com/suru-plus/suru-plus) ed alcuni pacchetti di terze parti lo fanno automaticamente).

**ATTENTZIONE:** Per cambiare il colore di una singola cartella, puoi usare [Folder Color](http://foldercolor.tuxfamily.org) o [Dolphin Folder Color](https://github.com/audoban/dolphin-cartella-colore).

## Colori disponibili nel Suru++ 25

<table style="margin-left: auto; margin-right: auto;">
  <thead>
    <tr>
      <th style="text-align:left">Nome</th>
      <th style="text-align:center">Anteprima</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>90ssummer</th>
      <td>
        <img src="../images/suru-plus/folder-90ssummer-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-90ssummer-apps">
        <img src="../images/suru-plus/folder-90ssummer-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-90ssummer-documents">
        <img src="../images/suru-plus/folder-90ssummer-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-90ssummer-downloads">
        <img src="../images/suru-plus/folder-90ssummer-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-90ssummer-dropbox">
        <img src="../images/suru-plus/folder-90ssummer-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-90ssummer-gitlab">
        <img src="../images/suru-plus/folder-90ssummer-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-90ssummer-icons">
        <img src="../images/suru-plus/folder-90ssummer-music.svg?sanitize=true" height="48px" width="48px" alt="folder-90ssummer-music">
        <img src="../images/suru-plus/folder-90ssummer-open.svg?sanitize=true" height="48px" width="48px" alt="folder-90ssummer-open">
        <img src="../images/suru-plus/folder-90ssummer.svg?sanitize=true" height="48px" width="48px" alt="folder-90ssummer">
        <img src="../images/suru-plus/folder-90ssummer-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-90ssummer-pictures"> 
        <img src="../images/suru-plus/folder-90ssummer-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-90ssummer-visiting"> 
        <img src="../images/suru-plus/folder-90ssummer-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-90ssummer-desktop">
      </td>
    </tr>
    <tr>
      <th>aubergine</th>
      <td>
        <img src="../images/suru-plus/folder-aubergine-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-apps">
        <img src="../images/suru-plus/folder-aubergine-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-documents">
        <img src="../images/suru-plus/folder-aubergine-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-downloads">
        <img src="../images/suru-plus/folder-aubergine-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-dropbox">
        <img src="../images/suru-plus/folder-aubergine-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-gitlab">
        <img src="../images/suru-plus/folder-aubergine-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-icons">
        <img src="../images/suru-plus/folder-aubergine-music.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-music">
        <img src="../images/suru-plus/folder-aubergine-open.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-open">
        <img src="../images/suru-plus/folder-aubergine.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine">
        <img src="../images/suru-plus/folder-aubergine-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-pictures"> 
        <img src="../images/suru-plus/folder-aubergine-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-visiting"> 
        <img src="../images/suru-plus/folder-aubergine-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-aubergine-desktop">
      </td>
    </tr>
    <tr>
      <th>aurora</th>
      <td>
        <img src="../images/suru-plus/folder-aurora-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-aurora-apps">
        <img src="../images/suru-plus/folder-aurora-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-aurora-documents">
        <img src="../images/suru-plus/folder-aurora-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-aurora-downloads">
        <img src="../images/suru-plus/folder-aurora-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-aurora-dropbox">
        <img src="../images/suru-plus/folder-aurora-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-aurora-gitlab">
        <img src="../images/suru-plus/folder-aurora-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-aurora-icons">
        <img src="../images/suru-plus/folder-aurora-music.svg?sanitize=true" height="48px" width="48px" alt="folder-aurora-music">
        <img src="../images/suru-plus/folder-aurora-open.svg?sanitize=true" height="48px" width="48px" alt="folder-aurora-open">
        <img src="../images/suru-plus/folder-aurora.svg?sanitize=true" height="48px" width="48px" alt="folder-aurora">
        <img src="../images/suru-plus/folder-aurora-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-aurora-pictures"> 
        <img src="../images/suru-plus/folder-aurora-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-aurora-visiting"> 
        <img src="../images/suru-plus/folder-aurora-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-aurora-desktop">
      </td>
    </tr>
    <tr>
      <th>berriez</th>
      <td>
        <img src="../images/suru-plus/folder-berriez-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-berriez-apps">
        <img src="../images/suru-plus/folder-berriez-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-berriez-documents">
        <img src="../images/suru-plus/folder-berriez-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-berriez-downloads">
        <img src="../images/suru-plus/folder-berriez-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-berriez-dropbox">
        <img src="../images/suru-plus/folder-berriez-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-berriez-gitlab">
        <img src="../images/suru-plus/folder-berriez-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-berriez-icons">
        <img src="../images/suru-plus/folder-berriez-music.svg?sanitize=true" height="48px" width="48px" alt="folder-berriez-music">
        <img src="../images/suru-plus/folder-berriez-open.svg?sanitize=true" height="48px" width="48px" alt="folder-berriez-open">
        <img src="../images/suru-plus/folder-berriez.svg?sanitize=true" height="48px" width="48px" alt="folder-berriez">
        <img src="../images/suru-plus/folder-berriez-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-berriez-pictures"> 
        <img src="../images/suru-plus/folder-berriez-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-berriez-visiting"> 
        <img src="../images/suru-plus/folder-berriez-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-berriez-desktop">
      </td>
    </tr>
    <tr>
      <th>black</th>
      <td>
        <img src="../images/suru-plus/folder-black-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-black-apps">
        <img src="../images/suru-plus/folder-black-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-black-documents">
        <img src="../images/suru-plus/folder-black-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-black-downloads">
        <img src="../images/suru-plus/folder-black-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-black-dropbox">
        <img src="../images/suru-plus/folder-black-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-black-gitlab">
        <img src="../images/suru-plus/folder-black-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-black-icons">
        <img src="../images/suru-plus/folder-black-music.svg?sanitize=true" height="48px" width="48px" alt="folder-black-music">
        <img src="../images/suru-plus/folder-black-open.svg?sanitize=true" height="48px" width="48px" alt="folder-black-open">
        <img src="../images/suru-plus/folder-black.svg?sanitize=true" height="48px" width="48px" alt="folder-black">
        <img src="../images/suru-plus/folder-black-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-black-pictures"> 
        <img src="../images/suru-plus/folder-black-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-black-visiting"> 
        <img src="../images/suru-plus/folder-black-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-black-desktop">
      </td>
    </tr>
    <tr>
      <th>blue</th>
      <td>
        <img src="../images/suru-plus/folder-blue-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-apps">
        <img src="../images/suru-plus/folder-blue-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-documents">
        <img src="../images/suru-plus/folder-blue-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-downloads">
        <img src="../images/suru-plus/folder-blue-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-dropbox">
        <img src="../images/suru-plus/folder-blue-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-gitlab">
        <img src="../images/suru-plus/folder-blue-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-icons">
        <img src="../images/suru-plus/folder-blue-music.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-music">
        <img src="../images/suru-plus/folder-blue-open.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-open">
        <img src="../images/suru-plus/folder-blue.svg?sanitize=true" height="48px" width="48px" alt="folder-blue">
        <img src="../images/suru-plus/folder-blue-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-pictures"> 
        <img src="../images/suru-plus/folder-blue-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-visiting"> 
        <img src="../images/suru-plus/folder-blue-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-blue-desktop">
      </td>
    </tr>
    <tr>
      <th>bluegrey</th>
      <td>
        <img src="../images/suru-plus/folder-bluegrey-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey-apps">
        <img src="../images/suru-plus/folder-bluegrey-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey-documents">
        <img src="../images/suru-plus/folder-bluegrey-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey-downloads">
        <img src="../images/suru-plus/folder-bluegrey-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey-dropbox">
        <img src="../images/suru-plus/folder-bluegrey-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey-gitlab">
        <img src="../images/suru-plus/folder-bluegrey-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey-icons">
        <img src="../images/suru-plus/folder-bluegrey-music.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey-music">
        <img src="../images/suru-plus/folder-bluegrey-open.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey-open">
        <img src="../images/suru-plus/folder-bluegrey.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey">
        <img src="../images/suru-plus/folder-bluegrey-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey-pictures"> 
        <img src="../images/suru-plus/folder-bluegrey-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey-visiting"> 
        <img src="../images/suru-plus/folder-bluegrey-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-bluegrey-desktop">
      </td>
    </tr>
    <tr>
      <th>bordeaux</th>
      <td>
        <img src="../images/suru-plus/folder-bordeaux-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-apps">
        <img src="../images/suru-plus/folder-bordeaux-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-documents">
        <img src="../images/suru-plus/folder-bordeaux-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-downloads">
        <img src="../images/suru-plus/folder-bordeaux-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-dropbox">
        <img src="../images/suru-plus/folder-bordeaux-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-gitlab">
        <img src="../images/suru-plus/folder-bordeaux-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-icons">
        <img src="../images/suru-plus/folder-bordeaux-music.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-music">
        <img src="../images/suru-plus/folder-bordeaux-open.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-open">
        <img src="../images/suru-plus/folder-bordeaux.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux">
        <img src="../images/suru-plus/folder-bordeaux-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-pictures"> 
        <img src="../images/suru-plus/folder-bordeaux-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-visiting"> 
        <img src="../images/suru-plus/folder-bordeaux-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-bordeaux-desktop">
      </td>
    </tr>
    <tr>
      <th>brown</th>
      <td>
        <img src="../images/suru-plus/folder-brown-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-brown-apps">
        <img src="../images/suru-plus/folder-brown-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-brown-documents">
        <img src="../images/suru-plus/folder-brown-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-brown-downloads">
        <img src="../images/suru-plus/folder-brown-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-brown-dropbox">
        <img src="../images/suru-plus/folder-brown-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-brown-gitlab">
        <img src="../images/suru-plus/folder-brown-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-brown-icons">
        <img src="../images/suru-plus/folder-brown-music.svg?sanitize=true" height="48px" width="48px" alt="folder-brown-music">
        <img src="../images/suru-plus/folder-brown-open.svg?sanitize=true" height="48px" width="48px" alt="folder-brown-open">
        <img src="../images/suru-plus/folder-brown.svg?sanitize=true" height="48px" width="48px" alt="folder-brown">
        <img src="../images/suru-plus/folder-brown-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-brown-pictures"> 
        <img src="../images/suru-plus/folder-brown-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-brown-visiting"> 
        <img src="../images/suru-plus/folder-brown-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-brown-desktop">
      </td>
    </tr>
    <tr>
      <th>canonical</th>
      <td>
        <img src="../images/suru-plus/folder-canonical-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-apps">
        <img src="../images/suru-plus/folder-canonical-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-documents">
        <img src="../images/suru-plus/folder-canonical-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-downloads">
        <img src="../images/suru-plus/folder-canonical-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-dropbox">
        <img src="../images/suru-plus/folder-canonical-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-gitlab">
        <img src="../images/suru-plus/folder-canonical-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-icons">
        <img src="../images/suru-plus/folder-canonical-music.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-music">
        <img src="../images/suru-plus/folder-canonical-open.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-open">
        <img src="../images/suru-plus/folder-canonical.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical">
        <img src="../images/suru-plus/folder-canonical-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-pictures"> 
        <img src="../images/suru-plus/folder-canonical-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-visiting"> 
        <img src="../images/suru-plus/folder-canonical-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-canonical-desktop">
      </td>
    </tr>
    <tr>
      <th>cyan</th>
      <td>
        <img src="../images/suru-plus/folder-cyan-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan-apps">
        <img src="../images/suru-plus/folder-cyan-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan-documents">
        <img src="../images/suru-plus/folder-cyan-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan-downloads">
        <img src="../images/suru-plus/folder-cyan-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan-dropbox">
        <img src="../images/suru-plus/folder-cyan-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan-gitlab">
        <img src="../images/suru-plus/folder-cyan-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan-icons">
        <img src="../images/suru-plus/folder-cyan-music.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan-music">
        <img src="../images/suru-plus/folder-cyan-open.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan-open">
        <img src="../images/suru-plus/folder-cyan.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan">
        <img src="../images/suru-plus/folder-cyan-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan-pictures"> 
        <img src="../images/suru-plus/folder-cyan-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-cyan-visiting"> 
        <img src="../images/suru-plus/folder-cyan-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-cyan-desktop">
      </td>
    </tr>
    <tr>
      <th>cyberneon</th>
      <td>
        <img src="../images/suru-plus/folder-cyberneon-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-cyberneon-apps">
        <img src="../images/suru-plus/folder-cyberneon-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-cyberneon-documents">
        <img src="../images/suru-plus/folder-cyberneon-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-cyberneon-downloads">
        <img src="../images/suru-plus/folder-cyberneon-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-cyberneon-dropbox">
        <img src="../images/suru-plus/folder-cyberneon-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-cyberneon-gitlab">
        <img src="../images/suru-plus/folder-cyberneon-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-cyberneon-icons">
        <img src="../images/suru-plus/folder-cyberneon-music.svg?sanitize=true" height="48px" width="48px" alt="folder-cyberneon-music">
        <img src="../images/suru-plus/folder-cyberneon-open.svg?sanitize=true" height="48px" width="48px" alt="folder-cyberneon-open">
        <img src="../images/suru-plus/folder-cyberneon.svg?sanitize=true" height="48px" width="48px" alt="folder-cyberneon">
        <img src="../images/suru-plus/folder-cyberneon-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-cyberneon-pictures"> 
        <img src="../images/suru-plus/folder-cyberneon-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-cyberneon-visiting"> 
        <img src="../images/suru-plus/folder-cyberneon-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-cyberneon-desktop">
      </td>
    </tr>
    <tr>
      <th>discodingo</th>
      <td>
        <img src="../images/suru-plus/folder-discodingo-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-discodingo-apps">
        <img src="../images/suru-plus/folder-discodingo-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-discodingo-documents">
        <img src="../images/suru-plus/folder-discodingo-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-discodingo-downloads">
        <img src="../images/suru-plus/folder-discodingo-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-discodingo-dropbox">
        <img src="../images/suru-plus/folder-discodingo-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-discodingo-gitlab">
        <img src="../images/suru-plus/folder-discodingo-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-discodingo-icons">
        <img src="../images/suru-plus/folder-discodingo-music.svg?sanitize=true" height="48px" width="48px" alt="folder-discodingo-music">
        <img src="../images/suru-plus/folder-discodingo-open.svg?sanitize=true" height="48px" width="48px" alt="folder-discodingo-open">
        <img src="../images/suru-plus/folder-discodingo.svg?sanitize=true" height="48px" width="48px" alt="folder-discodingo">
        <img src="../images/suru-plus/folder-discodingo-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-discodingo-pictures"> 
        <img src="../images/suru-plus/folder-discodingo-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-discodingo-visiting"> 
        <img src="../images/suru-plus/folder-discodingo-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-discodingo-desktop">
      </td>
    </tr>
    <tr>
      <th>fitdance</th>
      <td>
        <img src="../images/suru-plus/folder-fitdance-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-fitdance-apps">
        <img src="../images/suru-plus/folder-fitdance-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-fitdance-documents">
        <img src="../images/suru-plus/folder-fitdance-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-fitdance-downloads">
        <img src="../images/suru-plus/folder-fitdance-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-fitdance-dropbox">
        <img src="../images/suru-plus/folder-fitdance-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-fitdance-gitlab">
        <img src="../images/suru-plus/folder-fitdance-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-fitdance-icons">
        <img src="../images/suru-plus/folder-fitdance-music.svg?sanitize=true" height="48px" width="48px" alt="folder-fitdance-music">
        <img src="../images/suru-plus/folder-fitdance-open.svg?sanitize=true" height="48px" width="48px" alt="folder-fitdance-open">
        <img src="../images/suru-plus/folder-fitdance.svg?sanitize=true" height="48px" width="48px" alt="folder-fitdance">
        <img src="../images/suru-plus/folder-fitdance-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-fitdance-pictures"> 
        <img src="../images/suru-plus/folder-fitdance-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-fitdance-visiting"> 
        <img src="../images/suru-plus/folder-fitdance-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-fitdance-desktop">
      </td>
    </tr>
    <tr>
      <th>green</th>
      <td>
        <img src="../images/suru-plus/folder-green-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-green-apps">
        <img src="../images/suru-plus/folder-green-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-green-documents">
        <img src="../images/suru-plus/folder-green-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-green-downloads">
        <img src="../images/suru-plus/folder-green-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-green-dropbox">
        <img src="../images/suru-plus/folder-green-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-green-gitlab">
        <img src="../images/suru-plus/folder-green-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-green-icons">
        <img src="../images/suru-plus/folder-green-music.svg?sanitize=true" height="48px" width="48px" alt="folder-green-music">
        <img src="../images/suru-plus/folder-green-open.svg?sanitize=true" height="48px" width="48px" alt="folder-green-open">
        <img src="../images/suru-plus/folder-green.svg?sanitize=true" height="48px" width="48px" alt="folder-green">
        <img src="../images/suru-plus/folder-green-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-green-pictures"> 
        <img src="../images/suru-plus/folder-green-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-green-visiting"> 
        <img src="../images/suru-plus/folder-green-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-green-desktop">
      </td>
    </tr>
    <tr>
      <th>grey</th>
      <td>
        <img src="../images/suru-plus/folder-grey-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-grey-apps">
        <img src="../images/suru-plus/folder-grey-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-grey-documents">
        <img src="../images/suru-plus/folder-grey-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-grey-downloads">
        <img src="../images/suru-plus/folder-grey-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-grey-dropbox">
        <img src="../images/suru-plus/folder-grey-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-grey-gitlab">
        <img src="../images/suru-plus/folder-grey-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-grey-icons">
        <img src="../images/suru-plus/folder-grey-music.svg?sanitize=true" height="48px" width="48px" alt="folder-grey-music">
        <img src="../images/suru-plus/folder-grey-open.svg?sanitize=true" height="48px" width="48px" alt="folder-grey-open">
        <img src="../images/suru-plus/folder-grey.svg?sanitize=true" height="48px" width="48px" alt="folder-grey">
        <img src="../images/suru-plus/folder-grey-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-grey-pictures"> 
        <img src="../images/suru-plus/folder-grey-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-grey-visiting"> 
        <img src="../images/suru-plus/folder-grey-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-grey-desktop">
      </td>
    </tr>
    <tr>
      <th>indigo</th>
      <td>
        <img src="../images/suru-plus/folder-indigo-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo-apps">
        <img src="../images/suru-plus/folder-indigo-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo-documents">
        <img src="../images/suru-plus/folder-indigo-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo-downloads">
        <img src="../images/suru-plus/folder-indigo-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo-dropbox">
        <img src="../images/suru-plus/folder-indigo-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo-gitlab">
        <img src="../images/suru-plus/folder-indigo-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo-icons">
        <img src="../images/suru-plus/folder-indigo-music.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo-music">
        <img src="../images/suru-plus/folder-indigo-open.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo-open">
        <img src="../images/suru-plus/folder-indigo.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo">
        <img src="../images/suru-plus/folder-indigo-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo-pictures"> 
        <img src="../images/suru-plus/folder-indigo-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo-visiting"> 
        <img src="../images/suru-plus/folder-indigo-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-indigo-desktop">
      </td>
    </tr>
    <tr>
      <th>magenta</th>
      <td>
        <img src="../images/suru-plus/folder-magenta-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-magenta-apps">
        <img src="../images/suru-plus/folder-magenta-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-magenta-documents">
        <img src="../images/suru-plus/folder-magenta-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-magenta-downloads">
        <img src="../images/suru-plus/folder-magenta-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-magenta-dropbox">
        <img src="../images/suru-plus/folder-magenta-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-magenta-gitlab">
        <img src="../images/suru-plus/folder-magenta-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-magenta-icons">
        <img src="../images/suru-plus/folder-magenta-music.svg?sanitize=true" height="48px" width="48px" alt="folder-magenta-music">
        <img src="../images/suru-plus/folder-magenta-open.svg?sanitize=true" height="48px" width="48px" alt="folder-magenta-open">
        <img src="../images/suru-plus/folder-magenta.svg?sanitize=true" height="48px" width="48px" alt="folder-magenta">
        <img src="../images/suru-plus/folder-magenta-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-magenta-pictures"> 
        <img src="../images/suru-plus/folder-magenta-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-magenta-visiting"> 
        <img src="../images/suru-plus/folder-magenta-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-magenta-desktop">
      </td>
    </tr>
    <tr>
      <th>manjaro</th>
      <td>
        <img src="../images/suru-plus/folder-manjaro-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro-apps">
        <img src="../images/suru-plus/folder-manjaro-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro-documents">
        <img src="../images/suru-plus/folder-manjaro-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro-downloads">
        <img src="../images/suru-plus/folder-manjaro-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro-dropbox">
        <img src="../images/suru-plus/folder-manjaro-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro-gitlab">
        <img src="../images/suru-plus/folder-manjaro-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro-icons">
        <img src="../images/suru-plus/folder-manjaro-music.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro-music">
        <img src="../images/suru-plus/folder-manjaro-open.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro-open">
        <img src="../images/suru-plus/folder-manjaro.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro">
        <img src="../images/suru-plus/folder-manjaro-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro-pictures"> 
        <img src="../images/suru-plus/folder-manjaro-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro-visiting"> 
        <img src="../images/suru-plus/folder-manjaro-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-manjaro-desktop">
      </td>
    </tr>
    <tr>
      <th>mint</th>
      <td>
        <img src="../images/suru-plus/folder-mint-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-mint-apps">
        <img src="../images/suru-plus/folder-mint-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-mint-documents">
        <img src="../images/suru-plus/folder-mint-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-mint-downloads">
        <img src="../images/suru-plus/folder-mint-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-mint-dropbox">
        <img src="../images/suru-plus/folder-mint-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-mint-gitlab">
        <img src="../images/suru-plus/folder-mint-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-mint-icons">
        <img src="../images/suru-plus/folder-mint-music.svg?sanitize=true" height="48px" width="48px" alt="folder-mint-music">
        <img src="../images/suru-plus/folder-mint-open.svg?sanitize=true" height="48px" width="48px" alt="folder-mint-open">
        <img src="../images/suru-plus/folder-mint.svg?sanitize=true" height="48px" width="48px" alt="folder-mint">
        <img src="../images/suru-plus/folder-mint-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-mint-pictures"> 
        <img src="../images/suru-plus/folder-mint-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-mint-visiting"> 
        <img src="../images/suru-plus/folder-mint-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-mint-desktop">
      </td>
    </tr>
    <tr>
      <th>orange</th>
      <td>
        <img src="../images/suru-plus/folder-orange-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-apps">
        <img src="../images/suru-plus/folder-orange-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-documents">
        <img src="../images/suru-plus/folder-orange-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-downloads">
        <img src="../images/suru-plus/folder-orange-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-dropbox">
        <img src="../images/suru-plus/folder-orange-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-gitlab">
        <img src="../images/suru-plus/folder-orange-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-icons">
        <img src="../images/suru-plus/folder-orange-music.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-music">
        <img src="../images/suru-plus/folder-orange-open.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-open">
        <img src="../images/suru-plus/folder-orange.svg?sanitize=true" height="48px" width="48px" alt="folder-orange">
        <img src="../images/suru-plus/folder-orange-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-pictures"> 
        <img src="../images/suru-plus/folder-orange-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-visiting"> 
        <img src="../images/suru-plus/folder-orange-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-orange-desktop">
      </td>
    </tr>
    <tr>
      <th>pink</th>
      <td>
        <img src="../images/suru-plus/folder-pink-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-pink-apps">
        <img src="../images/suru-plus/folder-pink-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-pink-documents">
        <img src="../images/suru-plus/folder-pink-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-pink-downloads">
        <img src="../images/suru-plus/folder-pink-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-pink-dropbox">
        <img src="../images/suru-plus/folder-pink-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-pink-gitlab">
        <img src="../images/suru-plus/folder-pink-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-pink-icons">
        <img src="../images/suru-plus/folder-pink-music.svg?sanitize=true" height="48px" width="48px" alt="folder-pink-music">
        <img src="../images/suru-plus/folder-pink-open.svg?sanitize=true" height="48px" width="48px" alt="folder-pink-open">
        <img src="../images/suru-plus/folder-pink.svg?sanitize=true" height="48px" width="48px" alt="folder-pink">
        <img src="../images/suru-plus/folder-pink-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-pink-pictures"> 
        <img src="../images/suru-plus/folder-pink-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-pink-visiting"> 
        <img src="../images/suru-plus/folder-pink-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-pink-desktop">
      </td>
    </tr>
    <tr>
      <th>red</th>
      <td>
        <img src="../images/suru-plus/folder-red-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-red-apps">
        <img src="../images/suru-plus/folder-red-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-red-documents">
        <img src="../images/suru-plus/folder-red-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-red-downloads">
        <img src="../images/suru-plus/folder-red-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-red-dropbox">
        <img src="../images/suru-plus/folder-red-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-red-gitlab">
        <img src="../images/suru-plus/folder-red-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-red-icons">
        <img src="../images/suru-plus/folder-red-music.svg?sanitize=true" height="48px" width="48px" alt="folder-red-music">
        <img src="../images/suru-plus/folder-red-open.svg?sanitize=true" height="48px" width="48px" alt="folder-red-open">
        <img src="../images/suru-plus/folder-red.svg?sanitize=true" height="48px" width="48px" alt="folder-red">
        <img src="../images/suru-plus/folder-red-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-red-pictures"> 
        <img src="../images/suru-plus/folder-red-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-red-visiting"> 
        <img src="../images/suru-plus/folder-red-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-red-desktop">
      </td>
    </tr>
    <tr>
      <th>teal</th>
      <td>
        <img src="../images/suru-plus/folder-teal-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-teal-apps">
        <img src="../images/suru-plus/folder-teal-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-teal-documents">
        <img src="../images/suru-plus/folder-teal-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-teal-downloads">
        <img src="../images/suru-plus/folder-teal-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-teal-dropbox">
        <img src="../images/suru-plus/folder-teal-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-teal-gitlab">
        <img src="../images/suru-plus/folder-teal-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-teal-icons">
        <img src="../images/suru-plus/folder-teal-music.svg?sanitize=true" height="48px" width="48px" alt="folder-teal-music">
        <img src="../images/suru-plus/folder-teal-open.svg?sanitize=true" height="48px" width="48px" alt="folder-teal-open">
        <img src="../images/suru-plus/folder-teal.svg?sanitize=true" height="48px" width="48px" alt="folder-teal">
        <img src="../images/suru-plus/folder-teal-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-teal-pictures"> 
        <img src="../images/suru-plus/folder-teal-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-teal-visiting"> 
        <img src="../images/suru-plus/folder-teal-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-teal-desktop">
      </td>
    </tr>
    <tr>
      <th>vermillion</th>
      <td>
        <img src="../images/suru-plus/folder-vermillion-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion-apps">
        <img src="../images/suru-plus/folder-vermillion-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion-documents">
        <img src="../images/suru-plus/folder-vermillion-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion-downloads">
        <img src="../images/suru-plus/folder-vermillion-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion-dropbox">
        <img src="../images/suru-plus/folder-vermillion-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion-gitlab">
        <img src="../images/suru-plus/folder-vermillion-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion-icons">
        <img src="../images/suru-plus/folder-vermillion-music.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion-music">
        <img src="../images/suru-plus/folder-vermillion-open.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion-open">
        <img src="../images/suru-plus/folder-vermillion.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion">
        <img src="../images/suru-plus/folder-vermillion-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion-pictures"> 
        <img src="../images/suru-plus/folder-vermillion-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-vermillion-visiting"> 
        <img src="../images/suru-plus/folder-vermillion-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-vermillion-desktop">
      </td>
    </tr>
    <tr>
      <th>violet</th>
      <td>
        <img src="../images/suru-plus/folder-violet-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-violet-apps">
        <img src="../images/suru-plus/folder-violet-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-violet-documents">
        <img src="../images/suru-plus/folder-violet-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-violet-downloads">
        <img src="../images/suru-plus/folder-violet-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-violet-dropbox">
        <img src="../images/suru-plus/folder-violet-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-violet-gitlab">
        <img src="../images/suru-plus/folder-violet-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-violet-icons">
        <img src="../images/suru-plus/folder-violet-music.svg?sanitize=true" height="48px" width="48px" alt="folder-violet-music">
        <img src="../images/suru-plus/folder-violet-open.svg?sanitize=true" height="48px" width="48px" alt="folder-violet-open">
        <img src="../images/suru-plus/folder-violet.svg?sanitize=true" height="48px" width="48px" alt="folder-violet">
        <img src="../images/suru-plus/folder-violet-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-violet-pictures"> 
        <img src="../images/suru-plus/folder-violet-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-violet-visiting"> 
        <img src="../images/suru-plus/folder-violet-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-violet-desktop">
      </td>
    </tr>
    <tr>
      <th>white</th>
      <td>
        <img src="../images/suru-plus/folder-white-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-white-apps">
        <img src="../images/suru-plus/folder-white-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-white-documents">
        <img src="../images/suru-plus/folder-white-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-white-downloads">
        <img src="../images/suru-plus/folder-white-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-white-dropbox">
        <img src="../images/suru-plus/folder-white-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-white-gitlab">
        <img src="../images/suru-plus/folder-white-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-white-icons">
        <img src="../images/suru-plus/folder-white-music.svg?sanitize=true" height="48px" width="48px" alt="folder-white-music">
        <img src="../images/suru-plus/folder-white-open.svg?sanitize=true" height="48px" width="48px" alt="folder-white-open">
        <img src="../images/suru-plus/folder-white.svg?sanitize=true" height="48px" width="48px" alt="folder-white">
        <img src="../images/suru-plus/folder-white-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-white-pictures"> 
        <img src="../images/suru-plus/folder-white-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-white-visiting"> 
        <img src="../images/suru-plus/folder-white-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-white-desktop">
      </td>
    </tr>
    <tr>
      <th>yellow</th>
      <td>
        <img src="../images/suru-plus/folder-yellow-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-apps">
        <img src="../images/suru-plus/folder-yellow-documents.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-documents">
        <img src="../images/suru-plus/folder-yellow-downloads.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-downloads">
        <img src="../images/suru-plus/folder-yellow-dropbox.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-dropbox">
        <img src="../images/suru-plus/folder-yellow-gitlab.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-gitlab">
        <img src="../images/suru-plus/folder-yellow-icons.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-icons">
        <img src="../images/suru-plus/folder-yellow-music.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-music">
        <img src="../images/suru-plus/folder-yellow-open.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-open">
        <img src="../images/suru-plus/folder-yellow.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow">
        <img src="../images/suru-plus/folder-yellow-pictures.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-pictures"> 
        <img src="../images/suru-plus/folder-yellow-visiting.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-visiting"> 
        <img src="../images/suru-plus/folder-yellow-desktop.svg?sanitize=true" height="48px" width="48px" alt="user-yellow-desktop">
      </td>
    </tr>
  </tbody>
</table>

## Colori disponibili nel Suru++ Ubuntu

<table style="margin-left: auto; margin-right: auto;">
  <thead>
    <tr>
      <th style="text-align:left">Nome</th>
      <th style="text-align:center">Anteprima</th>
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

## Colori disponibili nel Adwaita++

<table style="margin-left: auto; margin-right: auto;">
  <thead>
    <tr>
      <th style="text-align:left">Nome</th>
      <th style="text-align:center">Anteprima</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>adwaita</th>
      <td>
        <img src="../images/adwaita-plus/folder-adwaita-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-adwaita-app">
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
        <img src="../images/adwaita-plus/folder-aubergine-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-aubergine-app">
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
        <img src="../images/adwaita-plus/folder-blue-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-blue-app">
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
        <img src="../images/adwaita-plus/folder-bluegrey-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-bluegrey-app">
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
        <img src="../images/adwaita-plus/folder-bordeaux-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-bordeaux-app">
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
        <img src="../images/adwaita-plus/folder-brown-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-brown-app">
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
        <img src="../images/adwaita-plus/folder-canonical-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-canonical-app">
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
        <img src="../images/adwaita-plus/folder-green-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-green-app">
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
        <img src="../images/adwaita-plus/folder-grey-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-grey-app">
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
        <img src="../images/adwaita-plus/folder-indigo-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-indigo-app">
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
        <img src="../images/adwaita-plus/folder-manjaro-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-manjaro-app">
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
        <img src="../images/adwaita-plus/folder-mint-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-mint-app">
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
        <img src="../images/adwaita-plus/folder-orange-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-orange-app">
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
        <img src="../images/adwaita-plus/folder-purple-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-purple-app">
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
        <img src="../images/adwaita-plus/folder-red-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-red-app">
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
        <img src="../images/adwaita-plus/folder-white-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-white-app">
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
        <img src="../images/adwaita-plus/folder-yaru-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-yaru-app">
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
        <img src="../images/adwaita-plus/folder-yellow-apps.svg?sanitize=true" height="48px" width="48px" alt="folder-yellow-app">
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

**ATTENTZIONE:** Questo progetto non fornisce alcuna icona di cartella. Se desideri richiedere una nuova icona di cartella o un nuovo colore di cartella, per favore, aprire un _issue_ e fare una richiesta [qui](https://github.com/suru-plus/suru-plus/issues/new).

# Licenza

MIT © 2017 [Papirus Folders](https://github.com/PapirusDevelopmentTeam/papirus-folders) per [Sergei Eremenko](https://github.com/SmartFinn)
