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
exports.V1beta1FlowDistinguisherMethodToJSON = exports.V1beta1FlowDistinguisherMethodFromJSONTyped = exports.V1beta1FlowDistinguisherMethodFromJSON = void 0;
function V1beta1FlowDistinguisherMethodFromJSON(json) {
    return V1beta1FlowDistinguisherMethodFromJSONTyped(json, false);
}
exports.V1beta1FlowDistinguisherMethodFromJSON = V1beta1FlowDistinguisherMethodFromJSON;
function V1beta1FlowDistinguisherMethodFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
    };
}
exports.V1beta1FlowDistinguisherMethodFromJSONTyped = V1beta1FlowDistinguisherMethodFromJSONTyped;
function V1beta1FlowDistinguisherMethodToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
    };
}
exports.V1beta1FlowDistinguisherMethodToJSON = V1beta1FlowDistinguisherMethodToJSON;
