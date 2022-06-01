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
exports.V1NodeSystemInfoToJSON = exports.V1NodeSystemInfoFromJSONTyped = exports.V1NodeSystemInfoFromJSON = void 0;
function V1NodeSystemInfoFromJSON(json) {
    return V1NodeSystemInfoFromJSONTyped(json, false);
}
exports.V1NodeSystemInfoFromJSON = V1NodeSystemInfoFromJSON;
function V1NodeSystemInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'architecture': json['architecture'],
        'bootID': json['bootID'],
        'containerRuntimeVersion': json['containerRuntimeVersion'],
        'kernelVersion': json['kernelVersion'],
        'kubeProxyVersion': json['kubeProxyVersion'],
        'kubeletVersion': json['kubeletVersion'],
        'machineID': json['machineID'],
        'operatingSystem': json['operatingSystem'],
        'osImage': json['osImage'],
        'systemUUID': json['systemUUID'],
    };
}
exports.V1NodeSystemInfoFromJSONTyped = V1NodeSystemInfoFromJSONTyped;
function V1NodeSystemInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'architecture': value.architecture,
        'bootID': value.bootID,
        'containerRuntimeVersion': value.containerRuntimeVersion,
        'kernelVersion': value.kernelVersion,
        'kubeProxyVersion': value.kubeProxyVersion,
        'kubeletVersion': value.kubeletVersion,
        'machineID': value.machineID,
        'operatingSystem': value.operatingSystem,
        'osImage': value.osImage,
        'systemUUID': value.systemUUID,
    };
}
exports.V1NodeSystemInfoToJSON = V1NodeSystemInfoToJSON;