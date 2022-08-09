const vscode = require("vscode");
const fs = require("fs");
const path = require("path");

function activate(context) {
  console.log('Congratulations, your extension "pyscriptmaker" is now active!');
  console.log("do you need any help!");

  let disposable = vscode.commands.registerCommand(
    "pyscriptmaker.pyscript",
   function () {
		const htmlCode ='<!DOCTYPE html>\n<html lang="en">\n<head>\n <meta charset="UTF-8">\n <meta http-equiv="X-UA-Compatible" content="IE=edge">\n <meta name="viewport" content="width=device-width, initial-scale=1.0">\n <link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" />\n <script defer src="https://pyscript.net/alpha/pyscript.js"></script>\n <py-env>\n\n </py-env>\n <title>Document</title>\n </head>\n <body>\n <py-script src="index.py">\n\n </py-script>\n </body>\n</html>\n';
		const dirpath = vscode.workspace.workspaceFolders[0].uri.path.toString().split(":")[1]; 
		fs.writeFile(path.join(dirpath, "index.html"), htmlCode, err=>{
			if(err){
				console.error(err);
				return vscode.window.showErrorMessage("Error");
			}
		});
		fs.writeFile(path.join(dirpath, "index.py"), "", err=>{
			if(err){
				console.error(err);
				return vscode.window.showErrorMessage("Error");
			}
			vscode.window.showInformationMessage("py-Script")
		});

		
	   }
	   
	   
	   
  );
  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
