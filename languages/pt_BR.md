<h1>Suru++ Folders</h1>

- [Descrição](#descri%C3%A7%C3%A3o)
- [Instalação](#instala%C3%A7%C3%A3o)
    - [Distribuição agnóstica](#distribui%C3%A7%C3%A3o-agn%C3%B3stica)
        - [Instalando](#instalando)
        - [Desinstalando](#desinstalando)
    - [Distribuições baseadas em Arch](#distribui%C3%A7%C3%B5es-baseadas-em-arch)
    - [Distribuições baseadas em Debian](#distribui%C3%A7%C3%B5es-baseadas-em-debian)
- [Mudando a cor de directórios](#mudando-a-cor-de-direct%C3%B3rios)
    - [Aviso importante!](#aviso-importante)
    - [Cores disponíveis](#cores-dispon%C3%ADveis)
- [Licença](#licen%C3%A7a)

# Descrição

O arquivo `suru-plus-folders`  é um executável bash que permite que você mude a cor dos pastas no tema de ícone [Suru++ 20](https://github.com/suru-plus/suru-plus), baseado no `fork` de ícones de pastas do tema de ícones Papirus.

Neste momento, `suru-plus-folders` não tem uma GUI, mas é um aplicativo de linha de comando totalmente funcional. Antes de ver os exemplos de uso, por favor, instale primeiramente:

# Instalação

## Distribuição agnóstica

Use o `script` para instalar a versão mais recente diretamente do repósitorio (independentemente da sua distribuição):

### Instalando

```
wget -qO- https://bit.do/suru-plus-folders | sh
```

Para instalar `suru-plus-folders` nos **sistemas BSD**, usando o comando seguinte:

```
wget -qO- https://bit.do/suru-plus-folders | TAG=xBSD PREFIX=/usr/local sh
```

### Desinstalando

```
wget -qO- https://bit.do/suru-plus-folders | uninstall=true sh
```

## Distribuições baseadas em Arch

Em breve

## Distribuições baseadas em Debian

Em breve

# Mudando a cor de pastas

Alguns exemplos de uso:

- Mostrar a cor atual e as cores disponíveis para Suru++:
    ```
    suru-plus-folders -l --theme Suru++
    ```
- Mudando a cor de pastas para `brown` (marrom) para Suru++:
    ```
    suru-plus-folders -C brown --theme Suru++
    ```
- Revertir para a cor padrão de pastas para os ícones de `places` do Suru++:
    ```
    suru-plus-folders -D --theme Suru++
    ```
- Restaurar a última cor usada de um arquivo de configuração:
    ```
    suru-plus-folders -R
    ```

## Aviso importante!

Isto vale a pena restaurar a cor após cada `upgrade` de tema de ícones (instaladores oficias de [Suru++](https://github.com/suru-plus/suru-plus) e alguns pacotes terceirizados fazem isto automaticamente).

**OBSERVAÇÃO:** Para mudar a cor de uma pasta individual, você pode usar [Folder Color](http://foldercolor.tuxfamily.org) ou [Dolphin Folder Color](https://github.com/audoban/dolphin-folder-color).

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


**OBSERVAÇÃO:** Esse projeto não providencia quaisquer ícones de pasta. Se você quiser solicitar um novo ícone de pasta ou uma nova cor de pasta, por favor, crie um `issue` e faça uma solicitação [aqui](https://github.com/suru-plus/suru-plus/issues/new).

# Licença

MIT © 2017 [Papirus Folders](https://github.com/PapirusDevelopmentTeam/papirus-folders) por [Sergei Eremenko](https://github.com/SmartFinn)
