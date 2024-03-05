function formatRecipe(recipe) {
    let recipeText = "";

    if((/^\n<RECIPE_START>/.test(recipe))){
        console.log("from title");
         recipeText= recipe.split("<INSTR_END>", 1)[0]

    }else{
        console.log("from ingredients");
        recipeText= recipe.split("<RECIPE_END>", 1)[0]

    }
    
    console.log(recipeText,"ddd")
    // Define patterns for different types of tags
    const tags = {
        // '<RECIPE_START>': '<strong>Recipe:</strong> <br>',
        '<RECIPE_START>': '\n',
        '<TITLE_START>': '<strong>Title:</strong> <br> ',
        // '<TITLE_END>': '<br><strong>Ingredients:</strong> ',
        '<TITLE_END>': '<br><br>',

        '<INPUT_START>': '<br><strong>Ingredients:</strong> ',
        // '<INPUT_START>': '<br>Ingredients:<br>',
        '<NEXT_INPUT>': ',',
        
        '<INPUT_END>': '<br>',
        '<INGR_START>': '<strong>The Quantity of ingredients</strong><br>',
        '<NEXT_INGR>': '<br>',
        '<INGR_END>': '<br>',
        '<INSTR_START>': '<br><strong>Instructions:</strong> <br> <ul style=""> <li >',
        '<NEXT_INSTR>': '</li><li>',
        // '<RECIPE_END>': '<br><strong>Ingredients:</strong> <br>',
        '<INSTR_END>': '</li></ul><br> ',
        // '</INPUT_START>': '<br>&nbsp;&nbsp;&nbsp;&nbsp;',
        // '<NEXT_INPUT>': '<br>&nbsp;&nbsp;&nbsp;&nbsp;',
        // '<RECIPE_END>': '',

    };

    // Replace the tags
    for (let tag in tags) {
        const tagPattern = new RegExp(tag, 'g');
        recipeText = recipeText.replace(tagPattern, tags[tag]);
    }

    // Split the text into ingredients and instructions
    const [ingredientsPart, instructionsPart] = recipeText.split('</INSTR_START>').map(part => part.trim());

    // Format the ingredients and instructions
    const ingredients = `<strong></strong> ${ingredientsPart}`;
    const instructions = instructionsPart;

    // Combine the formatted ingredients and instructions
    const formattedRecipe = `${ingredients}<br>`;
    console.log(formattedRecipe,"formattedRecipe")

    return formattedRecipe;
}

export default formatRecipe;
