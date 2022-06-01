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
exports.V1beta1EndpointHintsToJSON = exports.V1beta1EndpointHintsFromJSONTyped = exports.V1beta1EndpointHintsFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1beta1EndpointHintsFromJSON(json) {
    return V1beta1EndpointHintsFromJSONTyped(json, false);
}
exports.V1beta1EndpointHintsFromJSON = V1beta1EndpointHintsFromJSON;
function V1beta1EndpointHintsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'forZones': !runtime_1.exists(json, 'forZones') ? undefined : (json['forZones'].map(_1.V1beta1ForZoneFromJSON)),
    };
}
exports.V1beta1EndpointHintsFromJSONTyped = V1beta1EndpointHintsFromJSONTyped;
function V1beta1EndpointHintsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'forZones': value.forZones === undefined ? undefined : (value.forZones.map(_1.V1beta1ForZoneToJSON)),
    };
}
exports.V1beta1EndpointHintsToJSON = V1beta1EndpointHintsToJSON;
