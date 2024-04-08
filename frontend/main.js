window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionAPI = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    fetch(functionAPI)
        .then(response => {
            return response.json();
        })
        .then(response => {
            console.log("Website called function API.");
            const count = response.count;
            document.getElementById("counter").innerText = count;
        })
        .catch(error => {
            console.log(error);
        });
}