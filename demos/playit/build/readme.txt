==============================================================================================
CONFIGURING BUILD ENVIROMENT
1. Download and Install Java:
	http://www.oracle.com/technetwork/java/javase/downloads/jre-6u26-download-400751.html
	
2. Download and Install PowerGui:
	http://powergui.org  (takes awhile to install)
	
3. Enable Powershell scripts
	- In PowerGui Command Prompt (very bottom of interface)
	- Type the following =>  PS: C:\  Set-ExecutionPolicy RemoteSigned
		- A confirmation dialog will open choose 'Yes' this enables you to stript on your computer
		
---------------------
BUILD SCRIPT SETUP
To run a build just click the play button or F5 in PowerGUI.
Be sure to edit the following values to fit your computer.

$BuildMode		= "WEB" OR "PRO" Pro is for the bundled version 
$PlayItVersion  = "1.0.0" set to active version
$PlayItScratch 	= A temporary scratch directory for copying files (e.g. 'C:\temp')
$PlayItRoot		= The root to your PlayIt source
$PrettyPrint 	= Outputs the *.min.js files formatted so you can debug any  minification issues.
				  Be sure this is false when you make a final build
			
The extern.js files will need to be updated according to the closure compiler instructions	
Be sure to test all final releases from the http://localhost/PlayIt/release/path.
Look for the the "compression: on" to validate the files are using the compressed version.

==============================================================================================
RELEASE INSTRUCTIONS

The build script is designed to create the final output that is used for the end customer.
It only contains the files needed for the customer and automatically sets the script calls to *.min.js
Please do not check in the generated release files.  Only the final zip archive will be checked in.

PRO VERSION: 
	- Run build.ps1
	- Test & Zip Directory
	


