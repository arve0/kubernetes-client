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
exports.V1ValidatingWebhookConfigurationToJSON = exports.V1ValidatingWebhookConfigurationFromJSONTyped = exports.V1ValidatingWebhookConfigurationFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1ValidatingWebhookConfigurationFromJSON(json) {
    return V1ValidatingWebhookConfigurationFromJSONTyped(json, false);
}
exports.V1ValidatingWebhookConfigurationFromJSON = V1ValidatingWebhookConfigurationFromJSON;
function V1ValidatingWebhookConfigurationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'apiVersion': !runtime_1.exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !runtime_1.exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !runtime_1.exists(json, 'metadata') ? undefined : _1.V1ObjectMetaFromJSON(json['metadata']),
        'webhooks': !runtime_1.exists(json, 'webhooks') ? undefined : (json['webhooks'].map(_1.V1ValidatingWebhookFromJSON)),
    };
}
exports.V1ValidatingWebhookConfigurationFromJSONTyped = V1ValidatingWebhookConfigurationFromJSONTyped;
function V1ValidatingWebhookConfigurationToJSON(value) {
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
        'webhooks': value.webhooks === undefined ? undefined : (value.webhooks.map(_1.V1ValidatingWebhookToJSON)),
    };
}
exports.V1ValidatingWebhookConfigurationToJSON = V1ValidatingWebhookConfigurationToJSON;
