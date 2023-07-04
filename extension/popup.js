const btn = document.getElementById("summarise");
btn.addEventListener("click", function() {
    btn.disabled = true;
    btn.innerHTML = `Summarising..`;
    chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
        var url = tabs[0].url;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://127.0.0.1:5000/summary?url=" + url, true);
        xhr.onload = function() {
            var response = JSON.parse(xhr.responseText);
            if (response.error) {
                const p = document.getElementById("output");
                p.innerHTML = `<span class="error-message">${response.error}</span>`;
            } else {
                var title = response.title;
                var summary = response.summary;
                var timestamp = response.timestamp;
                
                const pTitle = document.getElementById("title");
                const pSummary = document.getElementById("summary");
                const pTimestamp = document.getElementById("timestamp");
                
                pTitle.innerHTML = "Video Title: " + title;
                pSummary.innerHTML = "Summary: " + summary;
                pTimestamp.innerHTML = "Response Timestamp: " + timestamp;
            }
            btn.disabled = false;
            btn.innerHTML = `Done`;
        }
        xhr.send();
    });
});

// const btn = document.getElementById("summarise");
// btn.addEventListener("click", function() {
//     btn.disabled = true;
//     btn.innerHTML = "Summarising...";
//     chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
//         var url = tabs[0].url;
//         var xhr = new XMLHttpRequest();
//         xhr.open("GET", "http://127.0.0.1:5000/summary?url=" + url, true);
//         xhr.onload = function() {
//             var response = JSON.parse(xhr.responseText);
//             var title = response.title;
//             var summary = response.summary;
//             var timestamp = response.timestamp;
            
//             const pTitle = document.getElementById("title");
//             const pSummary = document.getElementById("summary");
//             const pTimestamp = document.getElementById("timestamp");
            
//             pTitle.innerHTML = "Video Title: " + title;
//             pSummary.innerHTML = "Summary: " + summary;
//             pTimestamp.innerHTML = "Response Timestamp: " + timestamp;
            
//             btn.disabled = false;
//             btn.innerHTML = "Summarise";
//         }
//         xhr.send();
//     });
// });




// const btn = document.getElementById("summarise");
// btn.addEventListener("click", function() {
//     btn.disabled = true;
//     btn.innerHTML = "Summarising...";
//     chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
//         var url = tabs[0].url;
//         var xhr = new XMLHttpRequest();
//         xhr.open("GET", "http://127.0.0.1:5000/summary?url=" + url, true);
//         xhr.onload = function() {
//             var text = xhr.responseText;
//             const p = document.getElementById("output");
//             p.innerHTML = text;
//             btn.disabled = false;
//             btn.innerHTML = "Summarise";
//         }
//         xhr.send();
//     });
// });