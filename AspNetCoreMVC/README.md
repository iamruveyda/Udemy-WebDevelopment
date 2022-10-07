## Requirements to be installed to run this project


* npm install
  1. Download [Node.js][nodejs] Installer
  2. After completing the installation, click the next button. A custom page layout will appear on the screen. The npm package manager needs to be selected. Node and NPM are installed.

* Downloads for .NET
  1. Download .NET SDK x64
  2. Download.NET Runtime
   
SDK version .Net 6.0 in the project.

* Download [dotnet-ef][dotnet-ef]
  
  ```
  dotnet tool install --global dotnet-ef
  ```

## Setup

1. Open in Visual Studio Code
2. View > Terminal or Terminal > New Terminal 


	To change the current working directory;
	```
	cd shopapp\shopapp.webui
	```
	
	To install dependencies to local node_modules folder;

	```
	npm install
	```
	To build all the dependencies in the project;
	```
	dotnet build
	```
	To run the source code without any explicit compilation or launch commands;
	```
	dotnet run
	```

## [Nuget Packages][nuget]

- bootstrap
- datatables.net
- Microsoft.AspNetCore.Identity.EntityFrameworkCore
- Microsoft.EntityFrameworkCore.Sqlite
- Newtonsoft.Json

## Notes

* You can learn how to update an existing ASP.NET Core 3.1 project to ASP.NET Core 6.0 by clicking the [link][31-to-60] address.
* VSCode C# Extension was not working. I solved the problem with this [link][problem_01].
  	- Ctrl + Shift + p
	- Write "OmniSharp: Select Project" and press Enter.
  
* npm outdated and npm update [link][info_01]
* Click [link][info_02] for identity model customization in ASP.NET Core.


[nodejs]: https://nodejs.org/en/download/
[dotnet-ef]: https://learn.microsoft.com/en-us/ef/core/cli/dotnet
[31-to-60]: https://learn.microsoft.com/en-us/aspnet/core/migration/31-to-60?view=aspnetcore-6.0&tabs=visual-studio
[problem_01]: https://stackoverflow.com/questions/70876161/why-is-intellisense-not-working-in-my-vs-code
[info_01]:https://www.belter.io/npm-outdated-update/
[nuget]: https://www.nuget.org/packages
[info_02]: https://learn.microsoft.com/en-us/aspnet/core/security/authentication/customize-identity-model?view=aspnetcore-6.0