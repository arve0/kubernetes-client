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
exports.V1ResourceRuleToJSON = exports.V1ResourceRuleFromJSONTyped = exports.V1ResourceRuleFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1ResourceRuleFromJSON(json) {
    return V1ResourceRuleFromJSONTyped(json, false);
}
exports.V1ResourceRuleFromJSON = V1ResourceRuleFromJSON;
function V1ResourceRuleFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'apiGroups': !runtime_1.exists(json, 'apiGroups') ? undefined : json['apiGroups'],
        'resourceNames': !runtime_1.exists(json, 'resourceNames') ? undefined : json['resourceNames'],
        'resources': !runtime_1.exists(json, 'resources') ? undefined : json['resources'],
        'verbs': json['verbs'],
    };
}
exports.V1ResourceRuleFromJSONTyped = V1ResourceRuleFromJSONTyped;
function V1ResourceRuleToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'apiGroups': value.apiGroups,
        'resourceNames': value.resourceNames,
        'resources': value.resources,
        'verbs': value.verbs,
    };
}
exports.V1ResourceRuleToJSON = V1ResourceRuleToJSON;
