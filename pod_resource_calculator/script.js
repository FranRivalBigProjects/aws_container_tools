function calc(){
let units=parseFloat(document.getElementById('a').value)||0;
let cpu=parseFloat(document.getElementById('b').value)||0;
let memory=parseFloat(document.getElementById('c').value)||0;

let totalCPU = units * cpu;
let totalMemory = units * memory;

let score = totalCPU + (totalMemory / 1024);

let level = score < 10 ? "Light workload ✅" :
            score < 50 ? "Moderate workload ⚖️" :
            "Heavy workload ⚠️";

let insights = "";
if(totalCPU > 20) insights += "High CPU usage. Consider autoscaling.<br>";
if(totalMemory > 16000) insights += "High memory usage. Optimize containers.<br>";
if(units > 50) insights += "Large cluster. Use orchestration strategies.<br>";

document.getElementById('result').innerHTML =
"Total CPU: " + totalCPU.toFixed(2) + " vCPU<br><br>" +
"Total Memory: " + totalMemory.toFixed(0) + " MB<br><br>" +
level + "<br><br>" + insights;
}
