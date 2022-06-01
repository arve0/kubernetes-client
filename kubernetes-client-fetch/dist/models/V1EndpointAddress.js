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
exports.V1EndpointAddressToJSON = exports.V1EndpointAddressFromJSONTyped = exports.V1EndpointAddressFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1EndpointAddressFromJSON(json) {
    return V1EndpointAddressFromJSONTyped(json, false);
}
exports.V1EndpointAddressFromJSON = V1EndpointAddressFromJSON;
function V1EndpointAddressFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hostname': !runtime_1.exists(json, 'hostname') ? undefined : json['hostname'],
        'ip': json['ip'],
        'nodeName': !runtime_1.exists(json, 'nodeName') ? undefined : json['nodeName'],
        'targetRef': !runtime_1.exists(json, 'targetRef') ? undefined : _1.V1ObjectReferenceFromJSON(json['targetRef']),
    };
}
exports.V1EndpointAddressFromJSONTyped = V1EndpointAddressFromJSONTyped;
function V1EndpointAddressToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hostname': value.hostname,
        'ip': value.ip,
        'nodeName': value.nodeName,
        'targetRef': _1.V1ObjectReferenceToJSON(value.targetRef),
    };
}
exports.V1EndpointAddressToJSON = V1EndpointAddressToJSON;