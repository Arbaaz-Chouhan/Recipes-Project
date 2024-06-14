
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myform");
    const recipes = document.querySelectorAll(".recipes");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const keyword = form.querySelector("input[type='text']").value.toLowerCase();

        recipes.forEach(function(recipe) {
            const recipeTitle = recipe.querySelector("h5").textContent.toLowerCase();
            if (recipeTitle.includes(keyword)) {
                recipe.style.display = "block"; // Show recipe
            } else {
                recipe.style.display = "none"; // Hide recipe
            }
        });
    });
}); 