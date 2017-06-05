import * as React from "react";
import {Job} from "../shell/Job";
import {PluginManager} from "../PluginManager";
import {JSONTree} from "../utils/JSONTree";

PluginManager.registerOutputDecorator({
    decorate: (job: Job): React.ReactElement<any> => {
        return <JSONTree data={JSON.parse(job.screenBuffer.toString())}/>;
    },

    isApplicable: (job: Job): boolean => {
        try {
            const parseResult = JSON.parse(job.screenBuffer.toString());
            return parseResult && typeof parseResult === "object";
        } catch (exception) {
            return false;
        }
    },
});
