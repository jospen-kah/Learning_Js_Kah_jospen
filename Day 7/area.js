document.addEventListener("DOMContentLoaded", function () {
    const inputContainer = document.getElementById("input-fields");

    document.getElementById("submit").onclick = function () {
        let shape = document.getElementById("shapes").value;
        // Clear previous inputs
        inputContainer.innerHTML = ""; // Clear all previous input fields

        // Based on the selected shape, create the appropriate input fields
        if (shape === "circle") {
            inputContainer.innerHTML = `
                <label for="radius">Radius:</label>
                <input type="number" id="radius" placeholder="Enter radius"><br>
            `;

            document.getElementById("calculate").onclick = function () {
                let r = document.getElementById("radius").value;
                const p = 22 / 7;
                let area = p * r * r;
                document.getElementById("area").innerHTML = area;
            };
        }
        else if (shape === "rectangle") {
            inputContainer.innerHTML = `
                <label for="length">Length:</label>
                <input type="number" id="length" placeholder="Enter length"><br>
                <label for="width">Width:</label>
                <input type="number" id="width" placeholder="Enter width"><br>
            `;

            document.getElementById("calculate").onclick = function () {
                let l = document.getElementById("length").value;
                let w = document.getElementById("width").value;
                let area = l * w;
                document.getElementById("area").innerHTML = area;
            };
        }
        else if (shape === "square") {
            inputContainer.innerHTML = `
                <label for="length">Side Length:</label>
                <input type="number" id="length" placeholder="Enter side length"><br>
            `;

            document.getElementById("calculate").onclick = function () {
                let l = document.getElementById("length").value;
                let area = l * l;
                document.getElementById("area").innerHTML = area;
            };
        }
        else if (shape === "triangle") {
            inputContainer.innerHTML = `
                <label for="base">Base:</label>
                <input type="number" id="base" placeholder="Enter base"><br>
                <label for="height">Height:</label>
                <input type="number" id="height" placeholder="Enter height"><br>
            `;

            document.getElementById("calculate").onclick = function () {
                let h = document.getElementById("height").value;
                let b = document.getElementById("base").value;
                let area = (1 / 2) * b * h;
                document.getElementById("area").innerHTML = area;
            };
        }
    };
});
