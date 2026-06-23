Get-ChildItem -Path dist -Recurse -File |
  Where-Object { $_.Name -match '\.(js|css|html)$' } |
  Select-Object @{N='KB'; E={[math]::Round($_.Length/1KB,1)}}, Name |
  Sort-Object KB -Descending |
  Format-Table -AutoSize
$total = (Get-ChildItem -Path dist -Recurse -File | Measure-Object Length -Sum).Sum
Write-Output ("TOTAL: {0} KB ({1:N2} MB)" -f [math]::Round($total/1KB), ($total/1MB))
