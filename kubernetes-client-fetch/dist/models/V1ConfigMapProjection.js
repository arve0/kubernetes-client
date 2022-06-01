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
exports.V1ConfigMapProjectionToJSON = exports.V1ConfigMapProjectionFromJSONTyped = exports.V1ConfigMapProjectionFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1ConfigMapProjectionFromJSON(json) {
    return V1ConfigMapProjectionFromJSONTyped(json, false);
}
exports.V1ConfigMapProjectionFromJSON = V1ConfigMapProjectionFromJSON;
function V1ConfigMapProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'items': !runtime_1.exists(json, 'items') ? undefined : (json['items'].map(_1.V1KeyToPathFromJSON)),
        'name': !runtime_1.exists(json, 'name') ? undefined : json['name'],
        'optional': !runtime_1.exists(json, 'optional') ? undefined : json['optional'],
    };
}
exports.V1ConfigMapProjectionFromJSONTyped = V1ConfigMapProjectionFromJSONTyped;
function V1ConfigMapProjectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'items': value.items === undefined ? undefined : (value.items.map(_1.V1KeyToPathToJSON)),
        'name': value.name,
        'optional': value.optional,
    };
}
exports.V1ConfigMapProjectionToJSON = V1ConfigMapProjectionToJSON;