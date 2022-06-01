"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.24
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1DeploymentStrategyToJSON = exports.V1DeploymentStrategyFromJSONTyped = exports.V1DeploymentStrategyFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1DeploymentStrategyFromJSON(json) {
    return V1DeploymentStrategyFromJSONTyped(json, false);
}
exports.V1DeploymentStrategyFromJSON = V1DeploymentStrategyFromJSON;
function V1DeploymentStrategyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'rollingUpdate': !runtime_1.exists(json, 'rollingUpdate') ? undefined : _1.V1RollingUpdateDeploymentFromJSON(json['rollingUpdate']),
        'type': !runtime_1.exists(json, 'type') ? undefined : json['type'],
    };
}
exports.V1DeploymentStrategyFromJSONTyped = V1DeploymentStrategyFromJSONTyped;
function V1DeploymentStrategyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'rollingUpdate': _1.V1RollingUpdateDeploymentToJSON(value.rollingUpdate),
        'type': value.type,
    };
}
exports.V1DeploymentStrategyToJSON = V1DeploymentStrategyToJSON;
