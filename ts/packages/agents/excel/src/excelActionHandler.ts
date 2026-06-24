import { ActionContext, AppAgent, TypeAgentAction } from "@typeagent/agent-sdk";
import { 
    createActionResultFromTextDisplay, 
    createActionResultFromError 
} from "@typeagent/agent-sdk/helpers/action";
import { ExcelAction } from "./excelActionSchema.js";

export function instantiate(): AppAgent {
    return {
        initializeAgentContext: initializeExcelContext,
        executeAction: executeExcelAction,
    };
}

type ExcelAgentContext = {
    requestCount: number;
};

async function initializeExcelContext(): Promise<ExcelAgentContext> {
    return { requestCount: 0 };
}

async function executeExcelAction(
    action: TypeAgentAction<ExcelAction>,
    context: ActionContext<ExcelAgentContext>
) {
    const excelContext = context.sessionContext.agentContext;
    if (action.actionName == "generateFormula") {
        excelContext.requestCount++;
        return createActionResultFromTextDisplay(action.parameters.formula);
    }

    return createActionResultFromError("Unable to generate formula...");
}