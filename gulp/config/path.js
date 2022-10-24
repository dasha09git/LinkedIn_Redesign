import { src } from "gulp";
import * as nodePath from `path`;
const rootFolder = nodeRath.basename(nodePath.resolve());

const buildFolder = ` ./dist`;
const srcFolder = ` ./src`;

const path = {
   build: {};
   src: {};
   watch: {};
   clean: buildFolder,
   srcFolder: srcFolder,
   rootFolder: rootFolder,
   ftp: ``
}