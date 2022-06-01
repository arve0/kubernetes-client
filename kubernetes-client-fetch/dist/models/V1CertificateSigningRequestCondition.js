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
exports.V1CertificateSigningRequestConditionToJSON = exports.V1CertificateSigningRequestConditionFromJSONTyped = exports.V1CertificateSigningRequestConditionFromJSON = void 0;
const runtime_1 = require("../runtime");
function V1CertificateSigningRequestConditionFromJSON(json) {
    return V1CertificateSigningRequestConditionFromJSONTyped(json, false);
}
exports.V1CertificateSigningRequestConditionFromJSON = V1CertificateSigningRequestConditionFromJSON;
function V1CertificateSigningRequestConditionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'lastTransitionTime': !runtime_1.exists(json, 'lastTransitionTime') ? undefined : (new Date(json['lastTransitionTime'])),
        'lastUpdateTime': !runtime_1.exists(json, 'lastUpdateTime') ? undefined : (new Date(json['lastUpdateTime'])),
        'message': !runtime_1.exists(json, 'message') ? undefined : json['message'],
        'reason': !runtime_1.exists(json, 'reason') ? undefined : json['reason'],
        'status': json['status'],
        'type': json['type'],
    };
}
exports.V1CertificateSigningRequestConditionFromJSONTyped = V1CertificateSigningRequestConditionFromJSONTyped;
function V1CertificateSigningRequestConditionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'lastTransitionTime': value.lastTransitionTime === undefined ? undefined : (value.lastTransitionTime.toISOString()),
        'lastUpdateTime': value.lastUpdateTime === undefined ? undefined : (value.lastUpdateTime.toISOString()),
        'message': value.message,
        'reason': value.reason,
        'status': value.status,
        'type': value.type,
    };
}
exports.V1CertificateSigningRequestConditionToJSON = V1CertificateSigningRequestConditionToJSON;
