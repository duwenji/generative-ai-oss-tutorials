param(
  [Parameter(Mandatory = $false)]
  [string]$ApiKey,
  [switch]$SkipInstall,
  [switch]$CleanupNodeModules
)

$ErrorActionPreference = "Stop"

# Security note:
# - Pass API key via OPENAI_API_KEY or -ApiKey.
# - Do not hardcode real keys in this script.

if (-not $ApiKey) {
  $ApiKey = $env:OPENAI_API_KEY
}

if (-not $ApiKey) {
  throw "OPENAI_API_KEY is not set. Pass -ApiKey or set OPENAI_API_KEY in your environment."
}

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$workdir = Join-Path $root "langchain-js"
Set-Location $workdir

if (-not $SkipInstall) {
  npm install
}

$env:OPENAI_API_KEY = $ApiKey

Write-Output "Running 01_basic-chain.js"
node .\\01_basic-chain.js

Write-Output "Running 02_tool-use.js"
node .\\02_tool-use.js

Write-Output "Running 03_memory-persistence.js"
node .\\03_memory-persistence.js

if ($CleanupNodeModules) {
  if (Test-Path "node_modules") {
    Remove-Item -Recurse -Force "node_modules"
  }
  if (Test-Path "package-lock.json") {
    Remove-Item -Force "package-lock.json"
  }
}
