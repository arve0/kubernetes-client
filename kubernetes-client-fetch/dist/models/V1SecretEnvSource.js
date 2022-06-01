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
exports.V1SecretEnvSourceToJSON = exports.V1SecretEnvSourceFromJSONTyped = exports.V1SecretEnvSourceFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1SecretEnvSourceFromJSON(json) {
    return V1SecretEnvSourceFromJSONTyped(json, false);
}
exports.V1SecretEnvSourceFromJSON = V1SecretEnvSourceFromJSON;
function V1SecretEnvSourceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !runtime_1.exists(json, 'name') ? undefined : json['name'],
        'optional': !runtime_1.exists(json, 'optional') ? undefined : json['optional'],
    };
}
exports.V1SecretEnvSourceFromJSONTyped = V1SecretEnvSourceFromJSONTyped;
function V1SecretEnvSourceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'optional': value.optional,
    };
}
exports.V1SecretEnvSourceToJSON = V1SecretEnvSourceToJSON;