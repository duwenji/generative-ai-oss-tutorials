param(
  [Parameter(Mandatory = $false)]
  [string]$ApiKey,
  [switch]$SkipInstall,
  [switch]$RunMemoryInteractive
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
$workdir = Join-Path $root "langchain-python"
Set-Location $workdir

if (-not (Test-Path ".venv\\Scripts\\python.exe")) {
  python -m venv .venv
}

if (-not $SkipInstall) {
  .\\.venv\\Scripts\\python.exe -m pip install --upgrade pip
  .\\.venv\\Scripts\\python.exe -m pip install -r requirements.txt
}

$env:OPENAI_API_KEY = $ApiKey
$env:PYTHONUTF8 = "1"

Write-Output "Running 01_basic-chain.py"
.\\.venv\\Scripts\\python.exe .\\01_basic-chain.py

Write-Output "Running 02_tool-use.py"
.\\.venv\\Scripts\\python.exe .\\02_tool-use.py

if ($RunMemoryInteractive) {
  Write-Output "Running 03_memory-persistence.py (interactive)"
  .\\.venv\\Scripts\\python.exe .\\03_memory-persistence.py
} else {
  Write-Output "Running 03_memory-persistence.py (non-interactive demo)"
  @("My name is Tanaka", "What is my name?", "exit") | .\\.venv\\Scripts\\python.exe .\\03_memory-persistence.py
}
