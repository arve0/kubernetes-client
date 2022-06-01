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
exports.V1ServerAddressByClientCIDRToJSON = exports.V1ServerAddressByClientCIDRFromJSONTyped = exports.V1ServerAddressByClientCIDRFromJSON = void 0;
function V1ServerAddressByClientCIDRFromJSON(json) {
    return V1ServerAddressByClientCIDRFromJSONTyped(json, false);
}
exports.V1ServerAddressByClientCIDRFromJSON = V1ServerAddressByClientCIDRFromJSON;
function V1ServerAddressByClientCIDRFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'clientCIDR': json['clientCIDR'],
        'serverAddress': json['serverAddress'],
    };
}
exports.V1ServerAddressByClientCIDRFromJSONTyped = V1ServerAddressByClientCIDRFromJSONTyped;
function V1ServerAddressByClientCIDRToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'clientCIDR': value.clientCIDR,
        'serverAddress': value.serverAddress,
    };
}
exports.V1ServerAddressByClientCIDRToJSON = V1ServerAddressByClientCIDRToJSON;