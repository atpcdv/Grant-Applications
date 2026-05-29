///<reference types="@types/xrm"/>
'use strict'
var FGCOS = window.FGCOS || {};
FGCOS.Applications = FGCOS.Applications || {};
//test 10
FGCOS.CommonHelper.Entities = {
    Default: {
        CreatedBy: "CreatedBy",
        CreatedOn: "CreatedOn",
        Status: "statecode",
        StatusReason: "statuscode"
    },
    GrantApplications: {
        Columns: {
            Applicant: "cre12_applicant",
            GAN:"cre12_gan",
            GrantProgram: "cre12_grantprogram",
            ProjectTitle: "cre12_projecttitle",
            TotalRequested: "cre12_totalrequested",
        }
    }
}
FGCOS.CommonHelper.Functions = {
    HideFields: function (formContext, fieldNames) {
        fieldNames.forEach(field => {
            const control = formContext.getControl(field);
            if (control) {
                control.setVisible(false);
                console.log("Hidden field: " + field);
            } else {
                console.warn("Could not find field to hide: " + field);
            }
        })
    }
};
FGCOS.CommonHelper.Options = {
    FormTypes: {
        BulkEdit: 6,
        Create: 1,
        Disabled: 4,
        ReadOnly: 3,
        Update: 2
    }
};   

FGCOS.Applications.onLoad = async function (executionContext) {
    try {
        console.log('Inside OnLoad');
        console.log(FGCOS);
        const formContext = executionContext.getFormContext();
        if (formContext.ui.getFormType() == FGCOS.CommonHelper.Options.FormTypes.Create) {
            FGCOS.CommonHelper.Functions.HideFields(formContext, 
                [FGCOS.CommonHelper.Entities.GrantApplications.Columns.GAN]);
        }
    } catch (e) {
        console.error(`Error in FGCOS.Applications.onload: ${e.message}`);
    }
};


