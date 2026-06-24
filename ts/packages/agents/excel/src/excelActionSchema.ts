export type ExcelAction = GenerateFormula;

// Use this action to reply to the users excel formula generation request.
// The user likely queried with a format like `Table: ... Question: ...`. Place the
// question inside the query parameter field.
// The goal is to generate the most correct formula to satisfy their request drawing
// on the context provided in their question and associated table.
export type GenerateFormula = {
    actionName: "generateFormula";
    parameters: {
		// the original users formula generation request
        query: string;
		// the correct genereate formula
        formula: string;
    };
};
