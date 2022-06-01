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
exports.V1ConfigMapKeySelectorToJSON = exports.V1ConfigMapKeySelectorFromJSONTyped = exports.V1ConfigMapKeySelectorFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1ConfigMapKeySelectorFromJSON(json) {
    return V1ConfigMapKeySelectorFromJSONTyped(json, false);
}
exports.V1ConfigMapKeySelectorFromJSON = V1ConfigMapKeySelectorFromJSON;
function V1ConfigMapKeySelectorFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'key': json['key'],
        'name': !runtime_1.exists(json, 'name') ? undefined : json['name'],
        'optional': !runtime_1.exists(json, 'optional') ? undefined : json['optional'],
    };
}
exports.V1ConfigMapKeySelectorFromJSONTyped = V1ConfigMapKeySelectorFromJSONTyped;
function V1ConfigMapKeySelectorToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'key': value.key,
        'name': value.name,
        'optional': value.optional,
    };
}
exports.V1ConfigMapKeySelectorToJSON = V1ConfigMapKeySelectorToJSON;