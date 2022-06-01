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
exports.V1ServiceSpecToJSON = exports.V1ServiceSpecFromJSONTyped = exports.V1ServiceSpecFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1ServiceSpecFromJSON(json) {
    return V1ServiceSpecFromJSONTyped(json, false);
}
exports.V1ServiceSpecFromJSON = V1ServiceSpecFromJSON;
function V1ServiceSpecFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'allocateLoadBalancerNodePorts': !runtime_1.exists(json, 'allocateLoadBalancerNodePorts') ? undefined : json['allocateLoadBalancerNodePorts'],
        'clusterIP': !runtime_1.exists(json, 'clusterIP') ? undefined : json['clusterIP'],
        'clusterIPs': !runtime_1.exists(json, 'clusterIPs') ? undefined : json['clusterIPs'],
        'externalIPs': !runtime_1.exists(json, 'externalIPs') ? undefined : json['externalIPs'],
        'externalName': !runtime_1.exists(json, 'externalName') ? undefined : json['externalName'],
        'externalTrafficPolicy': !runtime_1.exists(json, 'externalTrafficPolicy') ? undefined : json['externalTrafficPolicy'],
        'healthCheckNodePort': !runtime_1.exists(json, 'healthCheckNodePort') ? undefined : json['healthCheckNodePort'],
        'internalTrafficPolicy': !runtime_1.exists(json, 'internalTrafficPolicy') ? undefined : json['internalTrafficPolicy'],
        'ipFamilies': !runtime_1.exists(json, 'ipFamilies') ? undefined : json['ipFamilies'],
        'ipFamilyPolicy': !runtime_1.exists(json, 'ipFamilyPolicy') ? undefined : json['ipFamilyPolicy'],
        'loadBalancerClass': !runtime_1.exists(json, 'loadBalancerClass') ? undefined : json['loadBalancerClass'],
        'loadBalancerIP': !runtime_1.exists(json, 'loadBalancerIP') ? undefined : json['loadBalancerIP'],
        'loadBalancerSourceRanges': !runtime_1.exists(json, 'loadBalancerSourceRanges') ? undefined : json['loadBalancerSourceRanges'],
        'ports': !runtime_1.exists(json, 'ports') ? undefined : (json['ports'].map(_1.V1ServicePortFromJSON)),
        'publishNotReadyAddresses': !runtime_1.exists(json, 'publishNotReadyAddresses') ? undefined : json['publishNotReadyAddresses'],
        'selector': !runtime_1.exists(json, 'selector') ? undefined : json['selector'],
        'sessionAffinity': !runtime_1.exists(json, 'sessionAffinity') ? undefined : json['sessionAffinity'],
        'sessionAffinityConfig': !runtime_1.exists(json, 'sessionAffinityConfig') ? undefined : _1.V1SessionAffinityConfigFromJSON(json['sessionAffinityConfig']),
        'type': !runtime_1.exists(json, 'type') ? undefined : json['type'],
    };
}
exports.V1ServiceSpecFromJSONTyped = V1ServiceSpecFromJSONTyped;
function V1ServiceSpecToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'allocateLoadBalancerNodePorts': value.allocateLoadBalancerNodePorts,
        'clusterIP': value.clusterIP,
        'clusterIPs': value.clusterIPs,
        'externalIPs': value.externalIPs,
        'externalName': value.externalName,
        'externalTrafficPolicy': value.externalTrafficPolicy,
        'healthCheckNodePort': value.healthCheckNodePort,
        'internalTrafficPolicy': value.internalTrafficPolicy,
        'ipFamilies': value.ipFamilies,
        'ipFamilyPolicy': value.ipFamilyPolicy,
        'loadBalancerClass': value.loadBalancerClass,
        'loadBalancerIP': value.loadBalancerIP,
        'loadBalancerSourceRanges': value.loadBalancerSourceRanges,
        'ports': value.ports === undefined ? undefined : (value.ports.map(_1.V1ServicePortToJSON)),
        'publishNotReadyAddresses': value.publishNotReadyAddresses,
        'selector': value.selector,
        'sessionAffinity': value.sessionAffinity,
        'sessionAffinityConfig': _1.V1SessionAffinityConfigToJSON(value.sessionAffinityConfig),
        'type': value.type,
    };
}
exports.V1ServiceSpecToJSON = V1ServiceSpecToJSON;
