function formatRecipe(recipeText) {
    // Define patterns for different types of tags
    const tags = {
        '<RECIPE_START>': 'Recipe:',
        '<TITLE_START>': 'Recipe: ',
        '<TITLE_END>': '\nIngredients: ',
        '<INPUT_START>': '\n lets start with:',
        '<INPUT_END>': '',
        '<INGR_START>': '',
        '<NEXT_INGR>': ', ',
        '<INGR_END>': '',
        '<INSTR_START>': '\nInstructions: ',
        '<NEXT_INSTR>': '\n',
        '<RECIPE_END>': '\nIngredients: ',
        '<INSTR_END>': '\nInstructions: ',
        '</INPUT_START>':'',
        '<NEXT_INPUT>':'\n  : ',
    };

    // Replace the tags
    for (let tag in tags) {
        const tagPattern = new RegExp(tag, 'g');
        recipeText = recipeText.replace(tagPattern, tags[tag]);
    }

    // Split the text into ingredients and instructions
    const [ingredientsPart, instructionsPart] = recipeText.split('</INSTR_START>').map(part => part.trim());

    // Format the ingredients and instructions
    const ingredients = `Ingredients: ${ingredientsPart}`;
    const instructions = instructionsPart;

    // Combine the formatted ingredients and instructions
    const formattedRecipe = `${ingredients}\n${instructions}`;

    return formattedRecipe;
}

export default formatRecipe;
