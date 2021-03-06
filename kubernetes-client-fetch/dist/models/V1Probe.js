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
exports.V1ProbeToJSON = exports.V1ProbeFromJSONTyped = exports.V1ProbeFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function V1ProbeFromJSON(json) {
    return V1ProbeFromJSONTyped(json, false);
}
exports.V1ProbeFromJSON = V1ProbeFromJSON;
function V1ProbeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'exec': !runtime_1.exists(json, 'exec') ? undefined : _1.V1ExecActionFromJSON(json['exec']),
        'failureThreshold': !runtime_1.exists(json, 'failureThreshold') ? undefined : json['failureThreshold'],
        'grpc': !runtime_1.exists(json, 'grpc') ? undefined : _1.V1GRPCActionFromJSON(json['grpc']),
        'httpGet': !runtime_1.exists(json, 'httpGet') ? undefined : _1.V1HTTPGetActionFromJSON(json['httpGet']),
        'initialDelaySeconds': !runtime_1.exists(json, 'initialDelaySeconds') ? undefined : json['initialDelaySeconds'],
        'periodSeconds': !runtime_1.exists(json, 'periodSeconds') ? undefined : json['periodSeconds'],
        'successThreshold': !runtime_1.exists(json, 'successThreshold') ? undefined : json['successThreshold'],
        'tcpSocket': !runtime_1.exists(json, 'tcpSocket') ? undefined : _1.V1TCPSocketActionFromJSON(json['tcpSocket']),
        'terminationGracePeriodSeconds': !runtime_1.exists(json, 'terminationGracePeriodSeconds') ? undefined : json['terminationGracePeriodSeconds'],
        'timeoutSeconds': !runtime_1.exists(json, 'timeoutSeconds') ? undefined : json['timeoutSeconds'],
    };
}
exports.V1ProbeFromJSONTyped = V1ProbeFromJSONTyped;
function V1ProbeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'exec': _1.V1ExecActionToJSON(value.exec),
        'failureThreshold': value.failureThreshold,
        'grpc': _1.V1GRPCActionToJSON(value.grpc),
        'httpGet': _1.V1HTTPGetActionToJSON(value.httpGet),
        'initialDelaySeconds': value.initialDelaySeconds,
        'periodSeconds': value.periodSeconds,
        'successThreshold': value.successThreshold,
        'tcpSocket': _1.V1TCPSocketActionToJSON(value.tcpSocket),
        'terminationGracePeriodSeconds': value.terminationGracePeriodSeconds,
        'timeoutSeconds': value.timeoutSeconds,
    };
}
exports.V1ProbeToJSON = V1ProbeToJSON;
