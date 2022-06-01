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
exports.V1TypedLocalObjectReferenceToJSON = exports.V1TypedLocalObjectReferenceFromJSONTyped = exports.V1TypedLocalObjectReferenceFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1TypedLocalObjectReferenceFromJSON(json) {
    return V1TypedLocalObjectReferenceFromJSONTyped(json, false);
}
exports.V1TypedLocalObjectReferenceFromJSON = V1TypedLocalObjectReferenceFromJSON;
function V1TypedLocalObjectReferenceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'apiGroup': !runtime_1.exists(json, 'apiGroup') ? undefined : json['apiGroup'],
        'kind': json['kind'],
        'name': json['name'],
    };
}
exports.V1TypedLocalObjectReferenceFromJSONTyped = V1TypedLocalObjectReferenceFromJSONTyped;
function V1TypedLocalObjectReferenceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'apiGroup': value.apiGroup,
        'kind': value.kind,
        'name': value.name,
    };
}
exports.V1TypedLocalObjectReferenceToJSON = V1TypedLocalObjectReferenceToJSON;