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
exports.V1LocalObjectReferenceToJSON = exports.V1LocalObjectReferenceFromJSONTyped = exports.V1LocalObjectReferenceFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1LocalObjectReferenceFromJSON(json) {
    return V1LocalObjectReferenceFromJSONTyped(json, false);
}
exports.V1LocalObjectReferenceFromJSON = V1LocalObjectReferenceFromJSON;
function V1LocalObjectReferenceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !runtime_1.exists(json, 'name') ? undefined : json['name'],
    };
}
exports.V1LocalObjectReferenceFromJSONTyped = V1LocalObjectReferenceFromJSONTyped;
function V1LocalObjectReferenceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
    };
}
exports.V1LocalObjectReferenceToJSON = V1LocalObjectReferenceToJSON;