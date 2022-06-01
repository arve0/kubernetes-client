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
exports.V1OverheadToJSON = exports.V1OverheadFromJSONTyped = exports.V1OverheadFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1OverheadFromJSON(json) {
    return V1OverheadFromJSONTyped(json, false);
}
exports.V1OverheadFromJSON = V1OverheadFromJSON;
function V1OverheadFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'podFixed': !runtime_1.exists(json, 'podFixed') ? undefined : json['podFixed'],
    };
}
exports.V1OverheadFromJSONTyped = V1OverheadFromJSONTyped;
function V1OverheadToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'podFixed': value.podFixed,
    };
}
exports.V1OverheadToJSON = V1OverheadToJSON;