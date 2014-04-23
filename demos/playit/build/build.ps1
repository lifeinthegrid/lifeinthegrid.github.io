# *********************************************************************************************
# PLAYIT BUILD SCRIPT
# Required Settings Powershell: Set-ExecutionPolicy RemoteSigned

#Modes: WEB || PRO
$BuildMode		= "WEB"  
$PlayItVersion  = "1.0.0";
$PlayItScratch 	= "C:\Temp\jquery.playit"
$PlayItRoot		= "D:\WEB\projects\jquery.playit"
$PrettyPrint 	= $false

# No need to modify below 
# *********************************************************************************************
$PlayItPro	= "$PlayItRoot\release\playit-complete-pro-$PlayItVersion"
$PlayItWeb	= "$PlayItRoot\release\playit-complete-web-$PlayItVersion"

# Global Search and Replace
function Replace-String($find, $replace, $includes)
{
    Get-ChildItem $includes | Select-String $find -list |% { (Get-Content $_.Path)  |% { $_ -replace $find, $replace } | Set-Content $_.Path }
}
cls
Write-Host "RUNNING PLAYIT BUILD MODE: $BuildMode" 

# CREATE SCRATCH
# ROBOCOPY see: ss64.com/nt/robocopy.html
ROBOCOPY $PlayItRoot $PlayItScratch /s /PURGE /IS /XD *.svn release /XF *.project /NDL /NFL /NJS
Set-Location "$PlayItScratch\build\"

#==============================================================================================
#CLOSURE COMPILER
#==============================================================================================
if ($PrettyPrint) 
{ 
	java -jar compiler.jar --externs externs.playit.js --externs externs.jquery.js --externs externs.jquery.ui.js --compilation_level ADVANCED_OPTIMIZATIONS --js "$PlayItScratch\source\jquery.playit.js" --js_output_file "$PlayItScratch\source\jquery.playit.min.js"  --formatting PRETTY_PRINT
} 
else 
{
	java -jar compiler.jar --externs externs.playit.js --externs externs.jquery.js --externs externs.jquery.ui.js --compilation_level ADVANCED_OPTIMIZATIONS --js "$PlayItScratch\source\jquery.playit.js" --js_output_file "$PlayItScratch\source\jquery.playit.min.js"
}


#==============================================================================================
#STRING REPLACEMENTS
#==============================================================================================
if ($BuildMode -eq "PRO") 
{
	#Config Setup
	Replace-String 'var PLAYIT_MODE;'			'var PLAYIT_MODE = "PRO";'							"$PlayItScratch\config.js"
	Replace-String 'var PLAYIT_VERSION;'		"var PLAYIT_VERSION = '$PlayItVersion';" 			"$PlayItScratch\config.js"
	Replace-String 'demo/data-web/index.html' 	'http://www.lifeinthegrid.com/labs/playit/demo'		"$PlayItScratch\config.js"
	
	#Min Injection
	Replace-String 'src="source/jquery.playit.js' 'src="source/jquery.playit.min.js' "$PlayItScratch\index.html"
	Replace-String 'src="../../source/jquery.playit.js' 'src="../../source/jquery.playit.min.js' "$PlayItScratch\demo\data-pro\*.html"
	Replace-String 'src="../../source/jquery.playit.js' 'src="../../source/jquery.playit.min.js' "$PlayItScratch\demo\data-pro\*.asmx"
	Replace-String '//EOF ALERT-MESSAGE'	'alert("To increase your performance and minimize bandwidth to your site, please use the jquery.playit.min.js file.  Also in order to protect your authorized version of PlayIt from external users we ask that you please remove the full un-minimized version from any server that can be accessed via the internet.")'		"$PlayItScratch\source\jquery.playit.js"
}

if ($BuildMode -eq "WEB") 
{
	#Config Setup
	Replace-String 'var PLAYIT_MODE;' 		'var PLAYIT_MODE = "WEB";'	 				"$PlayItScratch\config.js"
	Replace-String 'var PLAYIT_VERSION;'	"var PLAYIT_VERSION = '$PlayItVersion';" 	"$PlayItScratch\config.js"
	
	#Min Injection
	Replace-String 'src="source/jquery.playit.js' 'src="source/jquery.playit.min.js' 	"$PlayItScratch\index.html"
	Replace-String 'src="../../source/jquery.playit.js' 'src="../../source/jquery.playit.min.js' "$PlayItScratch\demo\data-web\*.html"
	Replace-String 'src="../../source/jquery.playit.js' 'src="../../source/jquery.playit.min.js' "$PlayItScratch\demo\data-web\*.asmx"
	Replace-String 'src="../../source/jquery.playit.js' 'src="../../source/jquery.playit.min.js' "$PlayItScratch\demo\data-pro\*.html"
	Replace-String 'src="../../source/jquery.playit.js' 'src="../../source/jquery.playit.min.js' "$PlayItScratch\demo\data-pro\*.asmx"
	
	#Index Page
	Replace-String "PLAYIT_ONLINE_DEMOS,'playit_online'"	"PLAYIT_ONLINE_DEMOS,'_self'"	"$PlayItScratch\index.html"
	
}


#==============================================================================================
#SCRATCH TO RELEASE
#==============================================================================================
if ($BuildMode -eq "PRO") {
	ROBOCOPY $PlayItScratch $PlayItPro /s /PURGE /IS /XD data-web /NDL /NFL /NJS
	Remove-Item "$PlayItPro\build" -Recurse  
	Rename-Item "$PlayItPro\source\jquery.playit.js" jquery.playit.js.txt
}

if ($BuildMode -eq "WEB") {
	ROBOCOPY $PlayItScratch $PlayItWeb /s /PURGE /IS /NDL /NFL /NJS
	Remove-Item "$PlayItWeb\build" -Recurse  
	Remove-Item "$PlayItWeb\source\jquery.playit.js"
	Remove-Item "$PlayItWeb\readme.txt"
}







