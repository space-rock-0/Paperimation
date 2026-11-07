$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path $PSScriptRoot -Parent
$env:PATH = "$projectRoot\.venv\Scripts;$env:PATH"
$ffmpeg = Get-ChildItem "$projectRoot\.tools\ffmpeg" -Filter ffmpeg.exe -Recurse -ErrorAction SilentlyContinue | Select-Object -First 1
if ($ffmpeg) { $env:PATH = "$($ffmpeg.DirectoryName);$env:PATH" }
$texBin = Join-Path $env:LOCALAPPDATA 'Programs\MiKTeX\miktex\bin\x64'
if (Test-Path $texBin) { $env:PATH = "$texBin;$env:PATH" }
Set-Location "$projectRoot\paperimation_website"
npm.cmd run dev
