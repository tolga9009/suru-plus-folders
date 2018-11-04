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
    - [Colori disponibili](#colori-disponibili)
- [Licenza](#licenza)

# Descrizione

Il file `suru-plus-folders` è uno *script di bash* che permette di cambiare il colore delle cartelle sul tema di icone [Suru++ 20](https://github.com/suru-plus/suru-plus), basato sui cloni delle icone di cartelle di Papirus.

Al momento, `suru-plus-folders` non ha una GUI, ma è un'applicazione da riga di comando completamente funzionante. Prima di vedere gli esempi di utilizzo, installare innanzitutto:

# Installazione

## Distribuzione indipendente

Utilizza lo *script* per installare l'ultima versione direttamente da questo *repository* (indipendentemente dalla tua distribuzione):

### Installando

```
wget -qO- https://bit.do/suru-plus-folders | sh
```

Per installare `suru-plus-folders` sui **sistemi BSD**, utilizzando il seguente comando:

```
wget -qO- https://bit.do/suru-plus-folders | env PREFIX=/usr/local sh
```

### Disinstallando

```
wget -qO- https://bit.do/suru-plus-folders | env uninstall=true sh
```

## Distribuzioni basate su Arch Linux

Nel futuro.

## Distribuzioni basate su Debian

Nel futuro.

# Cambiare il colore delle cartelle:

Alcuni esempi di utilizzo:

- Mostrando il colore attuale ed i colori disponibili per Suru++:
    ```
    suru-plus-folders -l --theme Suru++
    ```
- Cambiare il colore delle cartelle in `brown` (marrone) per Suru++:
    ```
    suru-plus-folders -C brown --theme Suru++
    ```
- Ripristina il colore predefinito delle cartelle per Suru++:
    ```
    suru-plus-folders -D --theme Suru++
    ```
- Ripristina l'ultimo colore utilizzato da un file di configurazione:
    ```
    suru-plus-folders -Ru
    ```

## Informazioni importanti!

Questo è estremamente utile per ripristinare il colore dopo ogni aggiornamento del tema delle icone (installer ufficiali di [Suru++](https://github.com/suru-plus/suru-plus) ed alcuni pacchetti di terze parti lo fanno automaticamente).

**ATTENTZIONE:** Per cambiare il colore di una singola cartella, puoi usare [Folder Color](http://foldercolor.tuxfamily.org) o [Dolphin Folder Color](https://github.com/audoban/dolphin-cartella-colore).

## Colori disponibili

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

**ATTENTZIONE:** Questo progetto non fornisce alcuna icona di cartella. Se desideri richiedere una nuova icona di cartella o un nuovo colore di cartella, per favore, aprire un *issue* e fare una richiesta [qui](https://github.com/suru-plus/suru-plus/issues/new).

# Licenza

MIT © 2017 [Papirus Folders](https://github.com/PapirusDevelopmentTeam/papirus-folders) per [Sergei Eremenko](https://github.com/SmartFinn)
