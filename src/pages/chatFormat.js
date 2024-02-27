function formatRecipe(recipeText) {
    // Define patterns for different types of tags
    const tags = {
        '<RECIPE_START>': '<strong>Recipe:</strong> <br>',
        '<TITLE_START>': '<strong>Recipe:</strong> <br> ',
        '<TITLE_END>': '<br><strong>Ingredients:</strong> ',
        '<INPUT_START>': '<br>Let\'s start with: <br>',
        '<INPUT_END>': 'now let\'s move on to: <br>',
        '<INGR_START>': 'The ingredients are: <br>',
        '<NEXT_INGR>': 'and furthermore <br>:',
        '<INGR_END>': '',
        '<INSTR_START>': '<br><strong>Instructions:</strong> ',
        '<NEXT_INSTR>': '<br>',
        '<RECIPE_END>': '<br><strong>Ingredients:</strong> <br>',
        '<INSTR_END>': '<br><strong>Instructions:</strong> <br> ',
        '</INPUT_START>': '<br>&nbsp;&nbsp;&nbsp;&nbsp;',
        '<NEXT_INPUT>': '<br>&nbsp;&nbsp;&nbsp;&nbsp;',
    };

    // Replace the tags
    for (let tag in tags) {
        const tagPattern = new RegExp(tag, 'g');
        recipeText = recipeText.replace(tagPattern, tags[tag]);
    }

    // Split the text into ingredients and instructions
    const [ingredientsPart, instructionsPart] = recipeText.split('</INSTR_START>').map(part => part.trim());

    // Format the ingredients and instructions
    const ingredients = `<strong>Ingredients:</strong> ${ingredientsPart}`;
    const instructions = instructionsPart;

    // Combine the formatted ingredients and instructions
    const formattedRecipe = `${ingredients}<br>${instructions}`;

    return formattedRecipe;
}

export default formatRecipe;
