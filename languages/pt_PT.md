<h1>Suru++ Folders</h1>

- [Descrição](#descri%C3%A7%C3%A3o)
- [Instalação](#instala%C3%A7%C3%A3o)
  - [Distribuição agnóstica](#distribui%C3%A7%C3%A3o-agn%C3%B3stica)
    - [Instalando](#instalando)
    - [Desinstalando](#desinstalando)
  - [Distribuições baseadas em Arch](#distribui%C3%A7%C3%B5es-baseadas-em-arch)
  - [Distribuições baseadas em Debian](#distribui%C3%A7%C3%B5es-baseadas-em-debian)
- [Modificando a cor de directórios](#modificando-a-cor-de-direct%C3%B3rios)
  - [Advertência importante!](#advert%C3%AAncia-importante)
  - [Cores disponíveis](#cores-dispon%C3%ADveis)
- [Licença](#licen%C3%A7a)

# Descrição

O ficheiro `suru-plus-folders`  é um executável bash que permite que você modifique a cor dos directórios no tema de ícone [Suru++ 20](https://github.com/suru-plus/suru-plus), baseado no clone de ícones de directórios do tema de ícones Papirus.

Neste momento, `suru-plus-folders` não possui uma interface gráfica do utilizador, mas é uma aplicação de linha de comando totalmente funcional. Antes de visualizar os exemplos de utilização, por favor, instale primeiramente:

# Instalação

## Distribuição agnóstica

Utilize o `script` para instalar a versão mais recente directamente do repósitorio (independentemente da sua distribuição):

### Instalando

```
wget -qO- https://bit.do/suru-plus-folders | sh
```

Para instalar `suru-plus-folders` nos **sistemas BSD**, utilizando comando seguinte:

```
wget -qO- https://bit.do/suru-plus-folders | env PREFIX=/usr/local sh
```

### Desinstalando

```
wget -qO- https://bit.do/suru-plus-folders | env uninstall=true sh
```

## Distribuições baseadas em Arch

Em breve

## Distribuições baseadas em Debian

Em breve

# Modificando a cor de directórios

Alguns exemplos de utilização:

- Mostrar a cor actual e as cores disponíveis para Suru++:
    ```
    suru-plus-folders -l --theme Suru++
    ```
- Modificar a cor de directórios para `brown` (marrom) para Suru++:
    ```
    suru-plus-folders -C brown --theme Suru++
    ```
- Revertir para a cor padrão de directórios para os ícones de `places` do Suru++:
    ```
    suru-plus-folders -D --theme Suru++
    ```
- Restaurar a última cor utilizada a partir dum ficheiro de configuração:
    ```
    suru-plus-folders -Ru
    ```

## Advertência importante!

Isto é extremamente útil para restaurar a cor após cada actualização de tema de ícones (instaladores oficias de [Suru++](https://github.com/suru-plus/suru-plus) e alguns pacotes terceirizados fazem isto automaticamente).

**OBSERVAÇÃO:** Para modificar a cor de um directório individual, você pode utilizar [Folder Color](http://foldercolor.tuxfamily.org) ou [Dolphin Folder Color](https://github.com/audoban/dolphin-folder-color).

## Cores disponíveis

<table>
    <thead>
        <tr>
            <th style="text-align:left">Nome</th>
            <th style="text-align:center">Previsão</th>
            <th style="text-align:left">Nome</th>
            <th style="text-align:center">Previsão</th>
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


**OBSERVAÇÃO:** Esse projecto não providencia quaisquer ícones de directório. Se você quiser solicitar um novo ícone de directório ou uma nova cor de directório, por favor, crie um `issue` e faça uma solicitação [aqui](https://github.com/suru-plus/suru-plus/issues/new).

# Licença

MIT © 2017 [Papirus Folders](https://github.com/PapirusDevelopmentTeam/papirus-folders) por [Sergei Eremenko](https://github.com/SmartFinn)
