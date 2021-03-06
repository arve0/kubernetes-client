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
exports.AdmissionregistrationV1WebhookClientConfigToJSON = exports.AdmissionregistrationV1WebhookClientConfigFromJSONTyped = exports.AdmissionregistrationV1WebhookClientConfigFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function AdmissionregistrationV1WebhookClientConfigFromJSON(json) {
    return AdmissionregistrationV1WebhookClientConfigFromJSONTyped(json, false);
}
exports.AdmissionregistrationV1WebhookClientConfigFromJSON = AdmissionregistrationV1WebhookClientConfigFromJSON;
function AdmissionregistrationV1WebhookClientConfigFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'caBundle': !runtime_1.exists(json, 'caBundle') ? undefined : json['caBundle'],
        'service': !runtime_1.exists(json, 'service') ? undefined : _1.AdmissionregistrationV1ServiceReferenceFromJSON(json['service']),
        'url': !runtime_1.exists(json, 'url') ? undefined : json['url'],
    };
}
exports.AdmissionregistrationV1WebhookClientConfigFromJSONTyped = AdmissionregistrationV1WebhookClientConfigFromJSONTyped;
function AdmissionregistrationV1WebhookClientConfigToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'caBundle': value.caBundle,
        'service': _1.AdmissionregistrationV1ServiceReferenceToJSON(value.service),
        'url': value.url,
    };
}
exports.AdmissionregistrationV1WebhookClientConfigToJSON = AdmissionregistrationV1WebhookClientConfigToJSON;
