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
exports.AdmissionregistrationV1ServiceReferenceToJSON = exports.AdmissionregistrationV1ServiceReferenceFromJSONTyped = exports.AdmissionregistrationV1ServiceReferenceFromJSON = void 0;
const runtime_1 = require("../runtime");
function AdmissionregistrationV1ServiceReferenceFromJSON(json) {
    return AdmissionregistrationV1ServiceReferenceFromJSONTyped(json, false);
}
exports.AdmissionregistrationV1ServiceReferenceFromJSON = AdmissionregistrationV1ServiceReferenceFromJSON;
function AdmissionregistrationV1ServiceReferenceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'namespace': json['namespace'],
        'path': !runtime_1.exists(json, 'path') ? undefined : json['path'],
        'port': !runtime_1.exists(json, 'port') ? undefined : json['port'],
    };
}
exports.AdmissionregistrationV1ServiceReferenceFromJSONTyped = AdmissionregistrationV1ServiceReferenceFromJSONTyped;
function AdmissionregistrationV1ServiceReferenceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'namespace': value.namespace,
        'path': value.path,
        'port': value.port,
    };
}
exports.AdmissionregistrationV1ServiceReferenceToJSON = AdmissionregistrationV1ServiceReferenceToJSON;
