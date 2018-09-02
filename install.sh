#!/bin/sh

set -e

# lang=$(locale | grep LANG | cut -d= -f2 | cut -d_ -f1)

echo "Write your native language"
read lang

if [ $lang = "en" ];
then
    msg1="Getting the latest version from GitHub ..."
    msg2="Unpacking archive ..."
    msg3="Deleting"
    msg4="Installing ..."
    msg5="Clearing cache ..."
    msg6="Done! 1"
elif [ $lang = "de" ];
then
    msg1="Die neueste Version von GitHub erreichen ..."
    msg2="Archiv wird entpackt ..."
    msg3="Löschen"
    msg4="Installieren ..."
    msg5="Cache wird gelöscht ..."
    msg6="Fertig!"
elif [ $lang = "es" ];
then
    msg1="Obteniendo la última versión de GitHub ..."
    msg2="Descomprimiendo el archivo ..."
    msg3="Eliminando"
    msg4="Instalando ..."
    msg5="Borrando caché ..."
    msg6="¡Hecho!"
elif [ $lang = "fr" ];
then
    msg1="Trouver la dernière version de GitHub ..."
    msg2="Décompresser le fichier ..."
    msg3="Supprimer"
    msg4="Installer ..."
    msg5="Effacer le cache ..."
    msg6="Fait!"
elif [ $lang = "it" ];
then
    msg1="Ottenendo l'ultima versione da GitHub ..."
    msg2="Decomprimendo l'archivio ..."
    msg3="Eliminare"
    msg4="Installando ..."
    msg5="Pulendo la cache ..."
    msg6="Fatto!"
elif [ $lang = "nl" ];
then
    msg1="De nieuwste versie van GitHub vinden..."
    msg2="Archief uitpakken ..."
    msg3="Verwijderen"
    msg4="Installeren ..."
    msg5="Cache wissen ..."
    msg6="Klaar!"
elif [ $lang = "pt" ];
then
    msg1="Obtendo a última versão do GitHub ..."
    msg2="Extraindo o arquivo ..."
    msg3="Excluindo"
    msg4="Instalando ..."
    msg5="Limpando o cache ..."
    msg6="Pronto!"
else
    msg1="Getting the latest version from GitHub ..."
    msg2="Unpacking archive ..."
    msg3="Deleting"
    msg4="Installing ..."
    msg5="Clearing cache ..."
    msg6="Done! 2"
fi;

# these variables can be overwritten
PREFIX="${PREFIX:-/usr}"
TAG="${TAG:-master}"
uninstall="${uninstall:-false}"

bin_name="suru-plus-folders"
gh_url="https://github.com/suru-plus"
gh_repo="$bin_name"
gh_desc="Suru++ Folders"

cat <<- EOF

       XXXXXX
   XXXX     XXXX
  XX           X X
 XX
 X
 XX
  XX
   XXX
      XXX
         XXXX
             XXX     X        X   X  XXXXXX   X        X       +--+          +--+
               XX    X        X   XXXX    XX  X        X       |--|          |--|
                X    X        X   XX       X  X        X       |--|          |--|
                XX   X        X   X           X        X   +---------+   +---------+
X                X   X        X   X           X        X   +---------+   +---------+
XX              XX   X       XX   X           X       XX       |--|          |--|
 XX           XXX    XX     XXX   X           XX     XXX       |--|          |--|
  XXXXXXXXXXXX        XXXXXX  X   X            XXXXXX  X       +--+          +--+

  $gh_desc
  $gh_url/$gh_repo


EOF

_msg() {
    echo "=>" "$@" >&2
}

_rm() {
    # removes parent directories if empty
    sudo rm -rf "$1"
    sudo rmdir -p "$(dirname "$1")" 2>/dev/null || true
}

_download() {
    _msg "$msg1"
    wget -O "$temp_file" \
        "$gh_url/$gh_repo/archive/$TAG.tar.gz"
    _msg "$msg2"
    tar -xzf "$temp_file" -C "$temp_dir"
}

_uninstall() {
    _msg "$msg3 $gh_desc ..."
    _rm "$PREFIX/bin/$bin_name"
}

_install() {
    _msg "$msg4"
    sudo mkdir -p "$PREFIX/bin"
    sudo install -m 755 "$temp_dir/$gh_repo-$TAG/$bin_name" \
        "$PREFIX/bin/$bin_name"
}

_cleanup() {
    _msg "$msg5"
    rm -rf "$temp_file" "$temp_dir"
    _msg "$msg6"
}

trap _cleanup EXIT HUP INT TERM

temp_file="$(mktemp -u)"
temp_dir="$(mktemp -d)"

if [ "$uninstall" = "false" ]; then
    _download
    _uninstall
    _install
else
    _uninstall
fi
