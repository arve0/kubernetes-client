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
exports.V1CSINodeSpecToJSON = exports.V1CSINodeSpecFromJSONTyped = exports.V1CSINodeSpecFromJSON = void 0;
const _1 = require("./");
function V1CSINodeSpecFromJSON(json) {
    return V1CSINodeSpecFromJSONTyped(json, false);
}
exports.V1CSINodeSpecFromJSON = V1CSINodeSpecFromJSON;
function V1CSINodeSpecFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'drivers': (json['drivers'].map(_1.V1CSINodeDriverFromJSON)),
    };
}
exports.V1CSINodeSpecFromJSONTyped = V1CSINodeSpecFromJSONTyped;
function V1CSINodeSpecToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'drivers': (value.drivers.map(_1.V1CSINodeDriverToJSON)),
    };
}
exports.V1CSINodeSpecToJSON = V1CSINodeSpecToJSON;
