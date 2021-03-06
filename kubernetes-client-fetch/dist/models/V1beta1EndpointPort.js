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
exports.V1beta1EndpointPortToJSON = exports.V1beta1EndpointPortFromJSONTyped = exports.V1beta1EndpointPortFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1beta1EndpointPortFromJSON(json) {
    return V1beta1EndpointPortFromJSONTyped(json, false);
}
exports.V1beta1EndpointPortFromJSON = V1beta1EndpointPortFromJSON;
function V1beta1EndpointPortFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'appProtocol': !runtime_1.exists(json, 'appProtocol') ? undefined : json['appProtocol'],
        'name': !runtime_1.exists(json, 'name') ? undefined : json['name'],
        'port': !runtime_1.exists(json, 'port') ? undefined : json['port'],
        'protocol': !runtime_1.exists(json, 'protocol') ? undefined : json['protocol'],
    };
}
exports.V1beta1EndpointPortFromJSONTyped = V1beta1EndpointPortFromJSONTyped;
function V1beta1EndpointPortToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'appProtocol': value.appProtocol,
        'name': value.name,
        'port': value.port,
        'protocol': value.protocol,
    };
}
exports.V1beta1EndpointPortToJSON = V1beta1EndpointPortToJSON;
