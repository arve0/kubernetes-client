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
exports.V1CertificateSigningRequestToJSON = exports.V1CertificateSigningRequestFromJSONTyped = exports.V1CertificateSigningRequestFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1CertificateSigningRequestFromJSON(json) {
    return V1CertificateSigningRequestFromJSONTyped(json, false);
}
exports.V1CertificateSigningRequestFromJSON = V1CertificateSigningRequestFromJSON;
function V1CertificateSigningRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'apiVersion': !runtime_1.exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !runtime_1.exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !runtime_1.exists(json, 'metadata') ? undefined : _1.V1ObjectMetaFromJSON(json['metadata']),
        'spec': _1.V1CertificateSigningRequestSpecFromJSON(json['spec']),
        'status': !runtime_1.exists(json, 'status') ? undefined : _1.V1CertificateSigningRequestStatusFromJSON(json['status']),
    };
}
exports.V1CertificateSigningRequestFromJSONTyped = V1CertificateSigningRequestFromJSONTyped;
function V1CertificateSigningRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': _1.V1ObjectMetaToJSON(value.metadata),
        'spec': _1.V1CertificateSigningRequestSpecToJSON(value.spec),
        'status': _1.V1CertificateSigningRequestStatusToJSON(value.status),
    };
}
exports.V1CertificateSigningRequestToJSON = V1CertificateSigningRequestToJSON;
