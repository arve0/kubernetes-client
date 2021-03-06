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
exports.V1EnvVarSourceToJSON = exports.V1EnvVarSourceFromJSONTyped = exports.V1EnvVarSourceFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1EnvVarSourceFromJSON(json) {
    return V1EnvVarSourceFromJSONTyped(json, false);
}
exports.V1EnvVarSourceFromJSON = V1EnvVarSourceFromJSON;
function V1EnvVarSourceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'configMapKeyRef': !runtime_1.exists(json, 'configMapKeyRef') ? undefined : _1.V1ConfigMapKeySelectorFromJSON(json['configMapKeyRef']),
        'fieldRef': !runtime_1.exists(json, 'fieldRef') ? undefined : _1.V1ObjectFieldSelectorFromJSON(json['fieldRef']),
        'resourceFieldRef': !runtime_1.exists(json, 'resourceFieldRef') ? undefined : _1.V1ResourceFieldSelectorFromJSON(json['resourceFieldRef']),
        'secretKeyRef': !runtime_1.exists(json, 'secretKeyRef') ? undefined : _1.V1SecretKeySelectorFromJSON(json['secretKeyRef']),
    };
}
exports.V1EnvVarSourceFromJSONTyped = V1EnvVarSourceFromJSONTyped;
function V1EnvVarSourceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'configMapKeyRef': _1.V1ConfigMapKeySelectorToJSON(value.configMapKeyRef),
        'fieldRef': _1.V1ObjectFieldSelectorToJSON(value.fieldRef),
        'resourceFieldRef': _1.V1ResourceFieldSelectorToJSON(value.resourceFieldRef),
        'secretKeyRef': _1.V1SecretKeySelectorToJSON(value.secretKeyRef),
    };
}
exports.V1EnvVarSourceToJSON = V1EnvVarSourceToJSON;
