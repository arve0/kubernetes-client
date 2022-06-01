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
exports.V1EndpointSubsetToJSON = exports.V1EndpointSubsetFromJSONTyped = exports.V1EndpointSubsetFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1EndpointSubsetFromJSON(json) {
    return V1EndpointSubsetFromJSONTyped(json, false);
}
exports.V1EndpointSubsetFromJSON = V1EndpointSubsetFromJSON;
function V1EndpointSubsetFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'addresses': !runtime_1.exists(json, 'addresses') ? undefined : (json['addresses'].map(_1.V1EndpointAddressFromJSON)),
        'notReadyAddresses': !runtime_1.exists(json, 'notReadyAddresses') ? undefined : (json['notReadyAddresses'].map(_1.V1EndpointAddressFromJSON)),
        'ports': !runtime_1.exists(json, 'ports') ? undefined : (json['ports'].map(_1.CoreV1EndpointPortFromJSON)),
    };
}
exports.V1EndpointSubsetFromJSONTyped = V1EndpointSubsetFromJSONTyped;
function V1EndpointSubsetToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'addresses': value.addresses === undefined ? undefined : (value.addresses.map(_1.V1EndpointAddressToJSON)),
        'notReadyAddresses': value.notReadyAddresses === undefined ? undefined : (value.notReadyAddresses.map(_1.V1EndpointAddressToJSON)),
        'ports': value.ports === undefined ? undefined : (value.ports.map(_1.CoreV1EndpointPortToJSON)),
    };
}
exports.V1EndpointSubsetToJSON = V1EndpointSubsetToJSON;
