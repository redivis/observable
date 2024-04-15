import * as redivis from 'redivis';
import {
    userIdentifier,
    projectIdentifier,
    joinedTableIdentifier,
    maxResults,
} from "../components/variables.js";

await redivis.authorize();

const redivisPrecipitationTable = await redivis.user(userIdentifier)
    .project(projectIdentifier)
    .table(joinedTableIdentifier);

const variableObjects = await redivisPrecipitationTable.listVariables();

const rows = await redivisPrecipitationTable.listRows({ maxResults, variables: variableObjects.map(({ name }) => name) });

process.stdout.write(JSON.stringify(rows));