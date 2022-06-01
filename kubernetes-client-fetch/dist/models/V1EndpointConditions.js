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
exports.V1EndpointConditionsToJSON = exports.V1EndpointConditionsFromJSONTyped = exports.V1EndpointConditionsFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1EndpointConditionsFromJSON(json) {
    return V1EndpointConditionsFromJSONTyped(json, false);
}
exports.V1EndpointConditionsFromJSON = V1EndpointConditionsFromJSON;
function V1EndpointConditionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'ready': !runtime_1.exists(json, 'ready') ? undefined : json['ready'],
        'serving': !runtime_1.exists(json, 'serving') ? undefined : json['serving'],
        'terminating': !runtime_1.exists(json, 'terminating') ? undefined : json['terminating'],
    };
}
exports.V1EndpointConditionsFromJSONTyped = V1EndpointConditionsFromJSONTyped;
function V1EndpointConditionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'ready': value.ready,
        'serving': value.serving,
        'terminating': value.terminating,
    };
}
exports.V1EndpointConditionsToJSON = V1EndpointConditionsToJSON;