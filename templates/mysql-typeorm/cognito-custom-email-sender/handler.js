'use strict';
let fs = require("fs");
let path = require("path");

module.exports.handleCognitoEvents = async (event, context, callback) => {
    console.log(`event ${JSON.stringify(event)}`)
    switch (event.triggerSource) {
        case "CustomMessage_ForgotPassword":
            var pathTemplate = path.resolve(__dirname + "/templates/verifCodeEmailTemp.html");
            var emailTemplate = fs.readFileSync(pathTemplate, "utf8");
            let send_template = emailTemplate.slice();
            send_template = send_template
                .replace(/DOMAIN_NAME/g, process.env.CLOUDFRONT_DOMAIN_NAME);
            event.response.smsMessage = "Welcome to the service. Your confirmation code is " + event.request.codeParameter;
            event.response.emailSubject = "Wecare | Forgot password code";
            event.response.emailMessage = send_template;
            break;
        case "CustomMessage_AdminCreateUser":
            var pathTemplate_AdminCreateUser;
            console.log(`event?.request?.userAttributes?.profile ${JSON.stringify(event?.request?.userAttributes?.profile)}`);
            console.log(`if event?.request?.userAttributes?.profile` , event?.request?.userAttributes?.profile === 'Employees');
            if(event?.request?.userAttributes?.profile === 'Employees'){
                console.log(`Send new template`)
                pathTemplate_AdminCreateUser = path.resolve(__dirname + "/templates/WelcomeEmailEmployeeTemplate.html");
            }else{
                pathTemplate_AdminCreateUser = path.resolve(__dirname + "/templates/WelcomeEmailTemplate.html")
            }
            var emailTemplate_AdminCreateUser = fs.readFileSync(pathTemplate_AdminCreateUser, "utf8");
            let send_template_AdminCreateUser = emailTemplate_AdminCreateUser.slice();
            send_template_AdminCreateUser = send_template_AdminCreateUser
                .replace(/DOMAIN_NAME/g, process.env.CLOUDFRONT_DOMAIN_NAME);
            event.response.smsMessage = "Welcome to the service. Your confirmation code is " + event.request.codeParameter;
            event.response.emailSubject = "Wecare | Welcome on board";
            event.response.emailMessage = send_template_AdminCreateUser;
            break;
        default:
            break;
    }
    // Return to Amazon Cognito
    callback(null, event);
};