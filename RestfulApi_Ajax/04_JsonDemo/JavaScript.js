document.querySelector("#getPerson").addEventListener("click", loadEmployee);

function loadEmployee() {

    var loadImage = document.querySelector("#loading");

    loadImage.style.display = "block";

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "people.json", true);

    setTimeout(() => {

        xhr.onload = function () {

            loadImage.style.display = "none";

            if (this.status === 200) {

                const people = JSON.parse(this.responseText);

                let html = "";

                people.forEach(person => {

                    html += `<tr>
                                <td>${person.firstName}</td>
                                <td>${person.lastName}</td>
                                <td>${person.age}</td>
                                <td>${person.retired}</td>
                            </tr>`;
                });

                document.querySelector("#people").innerHTML = html;

            }
        };
        xhr.send();

    }, 1500);
}