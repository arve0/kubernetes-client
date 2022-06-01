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
exports.V1KeyToPathToJSON = exports.V1KeyToPathFromJSONTyped = exports.V1KeyToPathFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1KeyToPathFromJSON(json) {
    return V1KeyToPathFromJSONTyped(json, false);
}
exports.V1KeyToPathFromJSON = V1KeyToPathFromJSON;
function V1KeyToPathFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'key': json['key'],
        'mode': !runtime_1.exists(json, 'mode') ? undefined : json['mode'],
        'path': json['path'],
    };
}
exports.V1KeyToPathFromJSONTyped = V1KeyToPathFromJSONTyped;
function V1KeyToPathToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'key': value.key,
        'mode': value.mode,
        'path': value.path,
    };
}
exports.V1KeyToPathToJSON = V1KeyToPathToJSON;