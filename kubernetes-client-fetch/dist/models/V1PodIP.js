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
exports.V1PodIPToJSON = exports.V1PodIPFromJSONTyped = exports.V1PodIPFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1PodIPFromJSON(json) {
    return V1PodIPFromJSONTyped(json, false);
}
exports.V1PodIPFromJSON = V1PodIPFromJSON;
function V1PodIPFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'ip': !runtime_1.exists(json, 'ip') ? undefined : json['ip'],
    };
}
exports.V1PodIPFromJSONTyped = V1PodIPFromJSONTyped;
function V1PodIPToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'ip': value.ip,
    };
}
exports.V1PodIPToJSON = V1PodIPToJSON;
