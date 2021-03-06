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
exports.V1CapabilitiesToJSON = exports.V1CapabilitiesFromJSONTyped = exports.V1CapabilitiesFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1CapabilitiesFromJSON(json) {
    return V1CapabilitiesFromJSONTyped(json, false);
}
exports.V1CapabilitiesFromJSON = V1CapabilitiesFromJSON;
function V1CapabilitiesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'add': !runtime_1.exists(json, 'add') ? undefined : json['add'],
        'drop': !runtime_1.exists(json, 'drop') ? undefined : json['drop'],
    };
}
exports.V1CapabilitiesFromJSONTyped = V1CapabilitiesFromJSONTyped;
function V1CapabilitiesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'add': value.add,
        'drop': value.drop,
    };
}
exports.V1CapabilitiesToJSON = V1CapabilitiesToJSON;
